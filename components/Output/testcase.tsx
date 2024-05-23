import React, { FC, useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type customInputStateType = React.Dispatch<React.SetStateAction<string>>;
interface TestcasePropTypes{
    customInput: string,
    setCustomInput: customInputStateType
}

const Testcase:FC<TestcasePropTypes> = ({ customInput, setCustomInput }) => {
    return (
        <>
            {" "}
            <div className="w-full text-white text-left ">
                <Label className=" mx-2 text-xl font-bold " htmlFor="message">Enter custom Testcase</Label>
                <Textarea rows={8} className=" my-2 dark:bg-[#010712] border-0 focus:border-0 outline-0 ring-0 focus:outline-0 focus:ring-0 " onChange={(e) => setCustomInput(e.target.value)}
                    placeholder={`Custom Input`} id="testcase" value={customInput} />
            </div>
        </>
    );
};

export default Testcase;