import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { doc, setDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { firestore, auth } from '@/firebase/firebase'; // Import auth from firebase

type Example = {
  id: string;
  inputText: string;
  outputText: string;
  explanation: string;
  img: string; // Assuming img is a URL or path
};

const ProblemForm: React.FC = () => {
  const router = useRouter();

  // State for problem inputs
  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    problemStatement: '',
    category: '',
    difficulty: 'easy',
    videoId: '',
    link: '',
    constraints: '',
    isPrivate: true, // Default to private
    order: 0,
    examples: Array<Example>(3).fill({
      id: '',
      inputText: '',
      outputText: '',
      explanation: '',
      img: '',
    }),
    handlerFunction: '',
    likes: 0,
    dislikes: 0,
    creatorId: '',
  });

  // State to track the highest order
  const [highestOrder, setHighestOrder] = useState(0);

  // Fetch the highest current order value from Firestore on mount
  useEffect(() => {
    const fetchHighestOrder = async () => {
      try {
        const q = query(collection(firestore, 'problems'), orderBy('order', 'desc'), limit(1));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const latestProblem = querySnapshot.docs[0].data();
          setHighestOrder(latestProblem.order);
        }
      } catch (error) {
        console.error('Error fetching highest order:', error);
      }
    };

    fetchHighestOrder();
  }, []);

  // Set creator ID when the component loads
  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        creatorId: userId,
      }));
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'radio') {
      setInputs({
        ...inputs,
        [name]: value === 'true', // Convert 'true'/'false' string values to boolean
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  // Handle example input changes
  const handleExampleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target;
    const updatedExamples = [...inputs.examples];
    updatedExamples[index] = {
      ...updatedExamples[index],
      [name]: value,
    };
    setInputs({
      ...inputs,
      examples: updatedExamples,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputs.title || !inputs.problemStatement || !inputs.id) {
      toast.error('ID, Title, and Description are required', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      });
      return;
    }

    try {
      const newProblem = {
        ...inputs,
        order: highestOrder + 1, // Assign the next highest order
      };

      await setDoc(doc(firestore, 'problems', inputs.title), newProblem);
      
      // Update the local highest order state
      setHighestOrder((prevOrder) => prevOrder + 1);

      toast.success('Problem added successfully!', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      });

      // Redirect to the home page or problem list
      router.push('/');
    } catch (error) {
      toast.error('Failed to add problem. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      });
      console.error('Error adding document:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-orange-500 p-6 rounded shadow-md grid gap-4"
        style={{ width: '600px', minHeight: '600px' }} // minimum height of 600px
      >
        <h2 className="text-2xl mb-4 text-white col-span-full">Add New Problem</h2>
        <div className="mb-4 col-span-full">
          <label className="block text-white">ID</label>
          <input
            type="text"
            name="id"
            value={inputs.id}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4 col-span-full">
          <label className="block text-white">Title</label>
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4 col-span-full">
          <label className="block text-white">Description</label>
          <textarea
            name="problemStatement"
            value={inputs.problemStatement}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            rows={5}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Category</label>
          <input
            type="text"
            name="category"
            value={inputs.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Difficulty</label>
          <select
            name="difficulty"
            value={inputs.difficulty}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white">Video ID</label>
          <input
            type="text"
            name="videoId"
            value={inputs.videoId}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Link</label>
          <input
            type="text"
            name="link"
            value={inputs.link}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Constraints</label>
          <textarea
            name="constraints"
            value={inputs.constraints}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            rows={3}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Handler Function</label>
          <textarea
            name="handlerFunction"
            value={inputs.handlerFunction}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            rows={3}
          />
        </div>
        {/* Privacy Setting */}
        <div className="mb-4 col-span-full">
          <label className="block text-white">Privacy Setting</label>
          <div className="flex gap-4">
            <label className="text-white">
              <input
                type="radio"
                name="isPrivate"
                value="true"
                checked={inputs.isPrivate === true}
                onChange={handleInputChange}
              />
              Private
            </label>
            <label className="text-white">
              <input
                type="radio"
                name="isPrivate"
                value="false"
                checked={inputs.isPrivate === false}
                onChange={handleInputChange}
              />
              Public
            </label>
          </div>
        </div>
        {/* Creator ID - Readonly */}
        <div className="mb-4 col-span-full">
          <label className="block text-white">Creator ID</label>
          <input
            type="text"
            name="creatorId"
            value={inputs.creatorId}
            readOnly
            className="w-full px-3 py-2 border rounded bg-gray-200"
          />
        </div>
        {/* Examples */}
        {inputs.examples.map((example, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg text-white mb-2">Example {index + 1}</h3>
            <div className="mb-4">
              <label className="block text-white">ID</label>
              <input
                type="text"
                name="id"
                value={example.id}
                onChange={(e) => handleExampleChange(e, index)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Input Text</label>
              <textarea
                name="inputText"
                value={example.inputText}
                onChange={(e) => handleExampleChange(e, index)}
                className="w-full px-3 py-2 border rounded"
                rows={3}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Output Text</label>
              <textarea
                name="outputText"
                value={example.outputText}
                onChange={(e) => handleExampleChange(e, index)}
                className="w-full px-3 py-2 border rounded"
                rows={3}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Explanation</label>
              <textarea
                name="explanation"
                value={example.explanation}
                onChange={(e) => handleExampleChange(e, index)}
                className="w-full px-3 py-2 border rounded"
                rows={3}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Image URL</label>
              <input
                type="text"
                name="img"
                value={example.img}
                onChange={(e) => handleExampleChange(e, index)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProblemForm;
