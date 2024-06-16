// pages/[pid].tsx

import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import { DBProblem } from "@/utils/types/problem";
import { fetchProblems } from "@/utils/problems";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";

type ProblemPageProps = {
    problem: DBProblem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    return (
        <div>
            <Topbar problemPage />
            <Workspace problem={problem} />
        </div>
    );
};

export default ProblemPage;

export const getStaticPaths: GetStaticPaths = async () => {
    // Fetch the problem IDs from Firestore instead of a local data structure
    const problems = await fetchProblems();
    const paths = Object.keys(problems).map((pid) => ({
        params: { pid },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { pid } = params as { pid: string };

    try {
        // Fetch the specific problem data from Firestore
        const problems = await fetchProblems();
        const problem = problems[pid];

        if (!problem) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                problem,
            },
        };
    } catch (error) {
        console.error("Error fetching problem:", error);
        return {
            notFound: true,
        };
    }
};
