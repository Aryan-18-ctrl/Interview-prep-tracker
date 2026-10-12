import toast from 'react-hot-toast';
import QuestionForm from '../components/QuestionForm'
    import { useForm } from "react-hook-form";
import { useContext, useEffect } from 'react';
import { MyContext } from '../Context/MyContext';
const EditQuestion = ({ update  , setUpdate}) => {

const {questions , setQuestions} = useContext(MyContext) 


  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange", 
     defaultValues: {
      question: "",  
      category: "",
      difficulty: "",
      status: "",
    }
  });
useEffect(() => {
    if (update) {
      reset({
        question: update.question || "",
        category: update.category || "",
        difficulty: update.difficulty || "",
        status: update.status || "",
      });
    }   
  }, [update, reset]);


   useEffect(() => {
  localStorage.setItem("questionData", JSON.stringify(questions));
}, [questions]);

function formData(data) {
  if (update) {
    const result = questions.map((elem) =>
      elem.id === update.id
        ? { ...elem, ...data, id: update.id }
        : elem
    );

    setQuestions(result);


           toast.success("Question updated")


        setUpdate(null)


    reset({
      question: "",
      category: "",
      difficulty: "",
      status: "",
    });

  }
}


  return (
<div
  onClick={() => setUpdate(null)}
  className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 px-4"
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="w-full max-w-3xl rounded-2xl bg-gray-200 px-6 py-4"
  >
    <QuestionForm
      update={update}
      handleSubmit={handleSubmit}
      register={register}
      reset={reset}
      errors={errors}
      formData={formData}
    />
  </div>
</div>
  )
}

export default EditQuestion