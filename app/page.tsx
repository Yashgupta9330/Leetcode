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
    <main className="min-h-screen flex w-screen bg-[#0d0d0d] ">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-screen"
      >
        <ResizablePanel defaultSize={50} >
          <Question />
        </ResizablePanel> {/*left */}

          <ResizableHandle withHandle className="mx-2 dark:border-cyan-50 dark:bg-cyan-50  " />

        <ResizablePanel defaultSize={50} > {/*right */}
          <ResizablePanelGroup
            direction="vertical"
            className=" max-w-[70vw] h-[100vh] flex flex-col justify-between"
          >
            <ResizablePanel defaultSize={50} >
              <CodeEditor />
            </ResizablePanel>

              <ResizableHandle withHandle className="my-2 dark:border-cyan-50 dark:bg-cyan-50 " />

            <ResizablePanel defaultSize={50} >
              <Output />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
