import { Edit2, Trash2 } from "lucide-react";

const Model = ({handleEdit , elem, handleDelete}) => {
  return (
    <div
      className="
        absolute right-0 top-8 z-50
        w-40 rounded-xl 
        border border-slate-200/80
        bg-white p-1.5
        shadow-xl shadow-slate-200/60
        ring-1 ring-black/[0.02]
      "
    >
      <button
      onClick={()=>{
        handleEdit(elem)
      }}
        className="
          flex w-full items-center gap-2.5
          rounded-lg px-3 py-2
          text-[13px] font-medium text-slate-600
          transition-colors duration-150
          hover:bg-blue-50 hover:text-blue-700
        "
      >
        <Edit2 size={14} strokeWidth={1.8} />
        Edit question
      </button>

      <div className="mx-2 my-1 border-t border-slate-100" />

      <button

         onClick={() => handleDelete(elem.id)}

        className="
          flex w-full items-center gap-2.5
          rounded-lg px-3 py-2
          text-[13px] font-medium text-slate-600
          transition-colors duration-150
          hover:bg-red-50 hover:text-red-600
        "
      >
        <Trash2 size={14} strokeWidth={1.8} />
        Delete question
      </button>
    </div>
  );
};

export default Model;
