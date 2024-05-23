"use client"
import React, { useState } from 'react'
import Testcase from './testcase'
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"


const Output = () => {

  const [customInput, setCustomInput] = useState("[2,7,11,15]\n9\n[3,2,4]\n6\n[3,3]\n6");
  const [processing, setProcessing] = useState(false);
  const [output, setOutput] = useState("");
  
  
  const handleCompile=()=>{
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
    }, 1000);


  }

  return (
    <div className='  w-full h-full text-white font-bold text-center flex-col items-center justify-between '>
      <Tabs defaultValue="TESTCASES" className="w-full  ">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger className='' value="TESTCASES">TESTCASES</TabsTrigger>
          <TabsTrigger className='' value="OUTPUT">OUTPUT</TabsTrigger>
        </TabsList>
        <TabsContent value="TESTCASES">
          <Testcase customInput={customInput} setCustomInput={setCustomInput} />
        </TabsContent>
      <TabsContent value="OUTPUT">
      <div className="w-full text-white text-left ">
                <Label className=" mx-2 text-xl font-bold " htmlFor="message">Output</Label>
                <Textarea rows={8} className=" my-2 w-full h-full overflow-auto dark:bg-[#010712]  " readOnly
                    placeholder={output} id="testcase" />
            </div>
      </TabsContent>
    </Tabs>
     
      <Button className='w-full shadow-lg align-bottom '
         onClick={handleCompile}
      >
        {processing ? "Processing..." : "Compile and Execute"}
      </Button>
    </div>
  )
}

export default Output
