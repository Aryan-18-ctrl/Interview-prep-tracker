
import { useContext, useState } from "react";
import { ListChecks, MoreHorizontal } from "lucide-react";
import { MyContext } from "../Context/MyContext";
import QuestionTableHeader from "../components/QuestionTableHeader";
import Model from "../components/Model";
import EditQuestion from "./EditQuestion";
import toast from "react-hot-toast";
import FilterSearch from "../components/FilterSearch";

const Questions = () => {
  const [openModelId, setOpenModelId] = useState(null);
  const [update, setUpdate] = useState(null);

const { questions , setQuestions, searched, isFiltered } =
  useContext(MyContext);

const displayQuestions = isFiltered ? searched : questions;

  function handleEdit(elem) {
    setUpdate(elem);
  }

  function handleDelete(id) {
    const result = questions.filter((elem) => elem.id !== id);

    setQuestions(result); 
    toast.success("Deleted");
  }  


  return (
    <div
      className="px-7 py-5"
      onClick={() => setOpenModelId(null)}
    >
      <FilterSearch />

      <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <QuestionTableHeader />

            <tbody>
              {displayQuestions.length > 0 ? (
                displayQuestions.map((q) => (
                  <tr
                    key={q.id}
                    className="border-b border-slate-100 transition-colors last:border-b-0 hover:bg-slate-50/70"
                  >
                    <td className="max-w-[420px] px-6 py-5">
                      <p
                        title={q.question}
                        className="truncate text-sm font-semibold text-slate-800"
                      >
                        {q.question}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-sm font-medium text-slate-600">
                        {q.category}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-lg px-3 py-1.5 text-xs font-semibold ${
                          q.difficulty === "Easy"
                            ? "bg-emerald-50 text-emerald-700"
                            : q.difficulty === "Medium"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {q.difficulty}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                          q.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700"
                            : q.status === "In Progress"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {q.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-right">
                      <div className="relative inline-block">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenModelId(
                              openModelId === q.id ? null : q.id
                            );
                          }}
                          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        >
                          <MoreHorizontal size={18} />
                        </button>

                        {openModelId === q.id && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <Model
                              handleEdit={handleEdit}
                              elem={q}
                              handleDelete={handleDelete}
                            />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                        <ListChecks
                          size={26}
                          className="text-slate-400"
                        />
                      </div>

                      <h3 className="mt-4 text-base font-semibold text-slate-800">
                        No questions found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        No questions match your search.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {update && (
        <EditQuestion update={update} setUpdate={setUpdate} />
      )}
    </div>
  );
};

export default Questions;
