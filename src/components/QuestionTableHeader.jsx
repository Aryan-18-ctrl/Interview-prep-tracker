const QuestionTableHeader = () => {
  return (
    <thead>
      <tr className="border-b border-slate-200 bg-slate-50">
        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
          Question
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
          Category
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
          Difficulty
        </th>

        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
          Status
        </th>

        <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default QuestionTableHeader;