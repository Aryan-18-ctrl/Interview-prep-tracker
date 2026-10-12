import { createContext, useState , useEffect } from "react";

export const MyContext = createContext();




export function ContextProvider({children}){


const [questions, setQuestions] = useState(
  () => JSON.parse(localStorage.getItem("questionData")) || []
);

const [searched, setSearched] = useState([]);
  const [input, setInput] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

useEffect(() => {
localStorage.setItem("questionData", JSON.stringify(questions));
}, [questions]);


    return (
<MyContext.Provider
  value={{
    setQuestions,
    questions,
    setSearched,
    searched,
    input,
    setInput,
    isFiltered,
    setIsFiltered,
  }}
>
  {children}
</MyContext.Provider>


    )




}