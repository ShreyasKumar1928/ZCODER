import { GetServerSideProps } from "next";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";

const ProblemPage = ({ problem }: { problem: any }) => {
  return (
    <div>
      <Topbar />
      <Workspace problem={problem} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { pid } = params as { pid: string };

  // Initialize Firestore
  const firestore = getFirestore();

  // Fetch the current problem
  const currentRef = doc(firestore, "problems", pid);
  const currentSnap = await getDoc(currentRef);

  if (!currentSnap.exists()) {
    return { notFound: true };
  }

  const currentProblem = currentSnap.data();

  return {
    props: {
      problem: currentProblem,
    },
  };
};

export default ProblemPage;
