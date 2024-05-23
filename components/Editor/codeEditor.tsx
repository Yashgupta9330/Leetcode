"use client"
import React, { useRef, useState } from 'react'
import LanguageSelector from './languageSelector'
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
  const onSelectChange = (sl:Language) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
    setValue(CODE_SNIPPETS[sl])
  };

  return (
    <div className='w-full h-[50vh] max-h-[90vh] resize-y border-b-2 font-bold text-center rounded-lg text-white flex-col items-start justify-normal '>

      <div className='w-full text-left flex items-center gap-5 px-4 my-2'>
        <LanguageSelector onSelectChange={onSelectChange} />
      </div>

      <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            className=' h-[100%] resize-y rounded-lg max-h-[90vh] '
            theme="vs-dark"
            language={language}
            defaultValue={value}
            onMount={onMount}
            value={value}
            onChange={handleChange}
          />

          {/* <div className='w-full h-[44vh] '></div> */}
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
