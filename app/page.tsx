"use client"
import CodeEditor from "@/components/Editor/codeEditor";
import Output from "@/components/Output/output";
import Question from "@/components/Question/question";
import Image from "next/image";
import { cn } from "@/app/utils/cn";


export default function Home() {
  
  return (
    <main className="min-h-screen flex w-screen bg-gray-950 ">

      <div className=" w-1/2">
        <Question />
      </div>
      
      <div className=" flex flex-col w-1/2 h-full ">
        <CodeEditor />
        <Output />
      </div>
    </main>
  );
}
