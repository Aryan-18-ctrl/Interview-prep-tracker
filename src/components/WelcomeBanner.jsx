import { Target } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";


const WelcomeBanner = () => {

const {questions} = useContext(MyContext)

function overAllProgress() {
  const normalQuestions = questions.filter(
    (elem) => elem.category !== "Machine Coding"
  );

  const completedData = normalQuestions.filter(
    (elem) => elem.status === "Completed"
  );

  const progressTotal = normalQuestions.length
    ? Math.round((completedData.length / normalQuestions.length) * 100)
    : 0;

  return progressTotal;
}


  return (
      <div
        className="
          mt-8 flex items-center justify-between
          overflow-hidden rounded-2xl
          bg-blue-800/80
          border
          border-blue-700
          px-7 py-6
          shadow-sm
        "
      >
        <div>
          <div className="flex items-center gap-2">
            <Target
              size={18}
              className="text-blue-100"
            />

            <p className="text-sm font-medium text-blue-100">
              Keep going
            </p>
          </div>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Stay consistent with your interview preparation.
          </h2>

          <p className="mt-1 text-sm text-blue-100">
            Complete your questions and improve your weekly progress.
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-xs font-medium uppercase tracking-wider text-blue-100">
            Overall Progress
          </p>

          <p className="mt-1 text-3xl font-bold text-white">
            {overAllProgress()}%
          </p>
        </div>
      </div>
  )
}

export default WelcomeBanner