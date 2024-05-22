"use client"
import { useState } from "react"
import { languages, CODE_SNIPPETS } from "./constants"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


type onSelectFunctionType = ((newValue: string) => void)

interface LanguageSelectorProps {
    onSelectChange: onSelectFunctionType;
  }

  interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    // Other props...
  }
const LanguageSelector: React.FC<LanguageSelectorProps> = ({onSelectChange}) => {
    const [language, setLanguage] = useState("javascript");

    const onSelectClick =(lang:string)=>{
        setLanguage(lang);
        console.log(lang);
        console.log(language);
        
    }

    return (<>
        <Select onValueChange={() => onSelectChange(language)} >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Default Language" />
        </SelectTrigger>
        <SelectContent onChange={() => onSelectChange(language)} >
          <SelectGroup>
            <SelectLabel>Code Language</SelectLabel>
            {
                languages.map((lang)=>(
                    <SelectItem onClick={() => onSelectClick(lang)} key={lang} value={lang}>{lang}</SelectItem>
                ))
            }
            
          </SelectGroup>
        </SelectContent>
      </Select>
    
    </>
    )
}
export default LanguageSelector;