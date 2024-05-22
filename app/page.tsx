"use client"
import CodeEditor from "@/components/Editor/codeEditor";
import Output from "@/components/Output/output";
import Question from "@/components/Question/question";
import Image from "next/image"; import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"


export default function Home() {

  return (
    <main className="min-h-screen flex w-screen bg-gray-950 ">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-screen"
      >
        <ResizablePanel defaultSize={50} >
        <Question />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} >
        <div className=" flex flex-col max-w-[50vw] h-full ">
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-screen max-w-full border"
        >
          <ResizablePanel defaultSize={50} >
            <CodeEditor />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} >
            <Output />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
        </ResizablePanel>
      </ResizablePanelGroup>



    </main>
  );
}
