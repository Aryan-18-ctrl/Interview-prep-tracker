import { Plus } from "lucide-react";

const QuestionForm = ({ handleSubmit, register, errors, formData, update }) => {
  return (
    <form onSubmit={handleSubmit(formData)} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Question
        </label>

        <textarea
          {...register("question", {
            required: "Question is required",
          })}
          rows={5}
          placeholder="Enter your interview question..."
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />

        {errors.question && (
          <p className="mt-1 text-sm text-red-600">
            {errors.question.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Category
          </label>

          <select
            {...register("category", {
              required: "category is required",
            })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            defaultValue=""
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="DSA">DSA</option>
            <option value="Git & GitHub">Git & GitHub</option>
            <option value="Technical">Technical</option>
            <option value="Machine Coding">Machine Coding</option>
          </select>

          {errors.category && (
            <p className="mt-1 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Difficulty
          </label>

          <select
            {...register("difficulty", {
              required: "difficulty is required",
            })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            defaultValue=""
          >
            <option value="" disabled>
              Select difficulty
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {errors.difficulty && (
            <p className="mt-1 text-sm text-red-600">
              {errors.difficulty.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Status
        </label>

        <select
          {...register("status", {
            required: "status is required",
          })}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          defaultValue="Pending"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {errors.status && (
          <p className="mt-1 text-sm text-red-600">
            {errors.status.message}
          </p>
        )}
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-6">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        >
          {!update && <Plus size={18} />}
          {update ? "Update" : "Create Question"}
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;