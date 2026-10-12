
import { Search, Filter } from "lucide-react";
import { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { Gauge } from "lucide-react";

const FilterSearch = () => {

  const [category , setCategory] = useState("All Categories");

  const[difficulty , setDifficulty] = useState("All Questions")

  const {
  questions,
  searched,
  setSearched,
  input,
  setInput,
  setIsFiltered,
} = useContext(MyContext);

function searchFunctionality(e) {
  const value = e.target.value;
  setInput(value);

  if (!value.trim() && category === "All Categories") {
    setIsFiltered(false);
    setSearched([]);
    return;
  }


  setIsFiltered(true);

  const result = questions.filter((elem) =>
    elem.question.toLowerCase().trim().includes(value.toLowerCase().trim()) &&
    (category === "All Categories" ||
      elem.category?.trim().toLowerCase() === category.trim().toLowerCase())
  );

  setSearched(result);
}

function filterCategory(e) {
  const value = e.target.value;
  setCategory(value);
  setIsFiltered(true);

  const categoryResult = questions.filter((elem) =>
    elem.question.toLowerCase().trim().includes(input.toLowerCase().trim()) &&
    (value === "All Categories" ||
      elem.category?.trim().toLowerCase() === value.trim().toLowerCase())
  );

  setSearched(categoryResult);
}


function handleDifficulty(e) {
  const value = e.target.value;
  setDifficulty(value);

    setIsFiltered(true);

    
  const difficultyResult = questions.filter((elem) =>
    elem.question.toLowerCase().trim().includes(input.toLowerCase().trim()) &&
    (category === "All Categories" ||
      elem.category?.trim().toLowerCase() === category.trim().toLowerCase()) &&
    (value === "All Questions" ||
      elem.difficulty?.toLowerCase().trim() === value.toLowerCase().trim())
  );

  setSearched(difficultyResult);
}

console.log(searched)

 
return (
  <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">

      {/* Search Bar */}
      <div className="relative min-w-0">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={input}
          onChange={searchFunctionality}
          type="text"
          placeholder="Search questions..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Difficulty Filter */}
      <div className="flex min-w-0 items-center gap-3">
        <Gauge size={18} className="shrink-0 text-slate-500" />

        <select
          value={difficulty}
          onChange={handleDifficulty}
          className="w-full min-w-0 cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        >
          <option value="All Questions">All Questions</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="flex min-w-0 items-center gap-3">
        <Filter size={18} className="shrink-0 text-slate-500" />

        <select
          onChange={filterCategory}
          value={category}
          className="w-full min-w-0 cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        >
          <option value="All Categories">All Categories</option>
          <option value="DSA">DSA</option>
          <option value="Machine Coding">Machine Coding</option>
          <option value="Technical">Technical</option>
          <option value="Git & GitHub">Git &amp; GitHub</option>
        </select>
      </div>

    </div>
  </div>
);

};


export default FilterSearch;
