import { CircleHelp } from "lucide-react";
import { useForm } from "react-hook-form";
import { MyContext } from "../Context/MyContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import QuestionForm from "../components/QuestionForm";


const CreateQuestion = () => {

  const {
    handleSubmit,
    register ,
    reset,
    formState:{errors} ,

  } = useForm({
    mode:"onChange"
  })


  const {setQuestions} = useContext(MyContext)

  

   function formData(data){

setQuestions((prev) => [
  ...prev,
  {
    ...data,
    id: Date.now(),
  },
]);

toast.success("Question created successfully")

reset()
  }

  return (
    <div className="w-full px-8 py-7">
      {/* Page Header */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          Interview Preparation
        </p>

        <h1 className="mt-1 text-2xl font-bold text-slate-900">
          Create Question
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Add a new question .
        </p>
      </div>

      {/* Form Card */}
      <div className="mt-8 max-w-6xl w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        {/* Card Header */}
        <div className="mb-7 flex items-center gap-4 border-b border-slate-100 pb-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
            <CircleHelp size={22} className="text-blue-600" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Question Details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter the details of the question below.
            </p>
          </div>
        </div>

        {/* Form */}
      <QuestionForm handleSubmit={handleSubmit} register={register} reset={reset} errors={errors} formData={formData} />
      </div>
    </div>
  );
};

export default CreateQuestion;
