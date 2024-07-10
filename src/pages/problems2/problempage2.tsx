// problempage2.tsx
import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { DBProblem } from "@/utils/types/problem";
import { fetchPublicProblems, fetchPrivateProblems } from "@/utils/problems";
import { GetStaticProps, GetStaticPaths } from "next";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
type ProblemPageProps = {
    problem: DBProblem;
};


const ProblemPage: React.FC<ProblemPageProps> = () => {
    const router = useRouter();
  const { problem } = router.query;
  const parsedProblem = problem ? JSON.parse(problem as string) : null;
    return (
        <div>
            <Topbar problemPage />
            <Workspace problem={parsedProblem}/>
        </div>
    );
};

export default ProblemPage;




