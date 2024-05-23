"use client"
import { useState, MouseEvent, ChangeEvent } from "react"
import { languages, CODE_SNIPPETS, Language } from "./constants"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


type onSelectFunctionType = ((newValue: Language) => void)

interface LanguageSelectorProps {
    onSelectChange: onSelectFunctionType;
  }

  interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    // Other props...
  }
const LanguageSelector: React.FC<LanguageSelectorProps> = ({onSelectChange}) => {
    const [language, setLanguage] = useState<Language>("javascript");
    const handleChange=(event: ChangeEvent<HTMLSelectElement>)=>{
      const val = event.target.value;
      setLanguage(val as Language);
      console.log(val, "--> selector component");
      onSelectChange(language)

    }
    // const onSelectClick =(e:MouseEvent<HTMLOptionElement, MouseEvent>)=>{
    //     // setLanguage(e);
    //     console.log(e.toString);
    //     // console.log(language);
    // }

    return (<>
        {/* <Select onValueChange={() => onSelectChange(language)} >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Default Language" />
        </SelectTrigger>
        <SelectContent onChange={() => onSelectChange(language)} >
          <SelectGroup>
            {
                languages.map((lang)=>(
                    <SelectItem onClick={() => onSelectClick(lang)} key={lang} value={lang}>{lang}</SelectItem>
                ))
            }
            
          </SelectGroup>
        </SelectContent>
      </Select> */}
{/* () => onSelectChange(language) */}

      <select value={language} onChange={handleChange} className="appearance-none bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline dark:text-white" >
      {
                languages.map((lang)=>(
                   <option key={lang} value={lang}>{lang}</option>
                ))
            }
      </select>
    
    </>
    )
}
export default LanguageSelector;