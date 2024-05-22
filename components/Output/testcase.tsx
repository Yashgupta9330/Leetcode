import React, { FC } from "react";
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
                <Textarea rows={8} className=" my-2 " onChange={(e) => setCustomInput(e.target.value)}
                    placeholder={`Custom input`} id="testcase" />
            </div>
        </>
    );
};

export default Testcase;