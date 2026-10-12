import { CheckCircle2, Circle } from "lucide-react";

const ProgressCard = ({ title, total, completed }) => {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  const isCompleted = percentage === 100;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute left-0 top-0 h-1 w-full bg-blue-600" />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            Preparation
          </p>

          <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-900">
            {title}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
          {isCompleted ? (
            <CheckCircle2
              size={21}
              strokeWidth={2.2}
              className="text-blue-600"
            />
          ) : (
            <Circle
              size={21}
              strokeWidth={2}
              className="text-blue-600"
            />
          )}
        </div>
      </div>

      <div className="mt-7 flex items-end justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold tracking-tight text-slate-900">
            {completed}
          </span>

          <span className="text-sm font-medium text-slate-400">
            / {total}
          </span>
        </div>

        <span className="text-sm font-bold text-blue-600">
          {percentage}%
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          {total === 0
            ? "No questions added"
            : isCompleted
            ? "All questions completed"
            : `${total - completed} remaining`}
        </span>

        <span className="text-xs font-semibold text-slate-500">
          {isCompleted ? (
            "Completed ✓"
          ) : total === 0 ? (
            <span className="flex h-[0.3px] w-8 rounded-full bg-blue-500" />
          ) : (
            "In progress"
          )}
        </span>
      </div>
    </div>
  );
};

export default ProgressCard;