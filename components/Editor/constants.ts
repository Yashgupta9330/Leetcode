
export type Language = "javascript" | "c" | "python" | "java" | "cpp";
export const languages= ["javascript", "c", "python", "java", "cpp"];

export const CODE_SNIPPETS= {
    "javascript": `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
    "c": `#include <stdio.h>\n\nvoid greet(const char* name) {\n\tprintf("Hello, %s!\\n", name);\n}\n\nint main() {\n\tgreet("Alex");\n\treturn 0;\n}\n`,
    "python": `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
    "java": `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    "cpp":`#include <iostream>\n#include <string>\n\nvoid greet(const std::string& name) {\n\tstd::cout << "Hello, " << name << "!" << std::endl;\n}\n\nint main() {\n\tgreet("Alex");\n\treturn 0;\n}\n`,
  };
 