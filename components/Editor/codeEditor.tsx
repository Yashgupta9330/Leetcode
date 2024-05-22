"use client"
import React, { useRef, useState } from 'react'
import LanguageSelector from './languageSelector'
import { Separator } from "@/components/ui/separator"
import { CODE_SNIPPETS, Language } from './constants';
import { Editor } from "@monaco-editor/react";
import { editor as monacoEditor } from 'monaco-editor';
const CodeEditor = () => { 
  const editorRef = useRef<monacoEditor.IStandaloneCodeEditor | null>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");
  const onMount = (editor: monacoEditor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const handleChange = (value: string | undefined) => {
    if (value !== undefined) {
      setValue(value);
    }
  };
  const onSelectChange = (sl:string) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  return (
    <div className='w-full h-full font-bold text-center text-white flex-col items-start justify-normal '>

      <div className='w-full text-left flex items-center gap-5 px-4 my-2'>
        <span>Code Language:</span>
        <LanguageSelector onSelectChange={onSelectChange} />
      </div>
      <Separator className=' h-[4px] ' />
      <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="47vh"
            theme="vs-dark"
            language={language}
            defaultValue={"javascript"}
            onMount={onMount}
            value={value}
            onChange={handleChange}
          />
      {/* <h1>
        {language}
      </h1>
      <p>
        {code.split('\n')}
      </p> */}
    </div>
  )
}

export default CodeEditor
