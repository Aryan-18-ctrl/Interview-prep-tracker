import  { useContext } from "react";
import { Code2 } from "lucide-react";
import ProgressCard from "../components/ProgressCard";
import { MyContext } from "../Context/MyContext";
import WelcomeBanner from "../components/WelcomeBanner";

const Dashboard = () => {

 const {questions} = useContext(MyContext)



    function totalQues(category){
    return   questions.filter((elem)=>{
        return elem.category===category 
      }).length
    }


        function completedQues(category){
    return   questions.filter((elem)=>{
        return elem.category===category &&  elem.status=="Completed"
      }).length
    }

function MachineCodingStatus() {
  const machineRounds = questions.filter(
    (elem) => elem.category?.trim().toLowerCase() === "machine coding"
  );

  return machineRounds.at(-1)?.status || "Not Started";
}

  const progressData = [
    {
      title: "DSA",
      total: totalQues("DSA"),
      completed: completedQues("DSA"),
    },
    {
      title: "Git & GitHub",
      total: totalQues("Git & GitHub"),
      completed:completedQues("Git & GitHub"),
    },
    {
      title: "Technical",
      total: totalQues("Technical"),
      completed:completedQues("Technical"),
    },
  ];

  return (
    <div className="w-full px-8 py-7">   

    <WelcomeBanner/>

      {/* Section Heading */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">
          Preparation Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your progress across different interview areas.
        </p>
      </div>

      {/* Progress Cards */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {progressData.map((elem) => {
          return (
            <ProgressCard
              title={elem.title}
              total={elem.total}

              completed={elem.completed}
              key={elem.title}
            />
          );
        })}
      </div>


      {/* Machine Coding */}
<div className="mt-6">
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
          <Code2
            size={23}
            className="text-blue-600"
          />
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            Interview Round
          </p>

          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Machine Coding
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Build and complete your machine coding tasks.
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="hidden sm:block">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
            {MachineCodingStatus()}

        </span>
      </div>
    </div>

    {/* Mobile Status */}
    <div className="mt-5 sm:hidden">
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
  <span className="h-2 w-2 rounded-full bg-blue-600" />
  {MachineCodingStatus()}
</span>
    </div>

  </div>
</div>

      

    </div>
  );
};

export default Dashboard;