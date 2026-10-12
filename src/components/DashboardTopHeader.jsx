import { Bell } from 'lucide-react'


const DashboardTopHeader = () => {


  return (
      <div className="flex items-center justify-between px-7 py-4 border-b border-slate-200 bg-white sticky top-0 left-0 right-0 z-10">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Weekly Preparation
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Interview Practice Dashboard
          </h1>

        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

      

          <button
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-slate-200
              bg-white text-slate-500
              transition
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <Bell size={18} />
          </button>

          {/* Profile */}
          <div
            className="
              ml-1 flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-blue-600
              text-sm font-semibold text-white
            "
          >
            A
          </div>
        </div>
      </div>
  )
}

export default DashboardTopHeader