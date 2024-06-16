import { DBProblem } from "../types/problem";
import { firestore } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function fetchProblems(): Promise<{ [key: string]: DBProblem }> {
    const problemsCollection = collection(firestore, "problems");
    const snapshot = await getDocs(problemsCollection);

    const problemMap: { [key: string]: DBProblem } = {};

    snapshot.forEach((doc) => {
        problemMap[doc.id] = doc.data() as DBProblem;
    });

    return problemMap;
}
