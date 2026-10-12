import { NavLink } from "react-router";
import {
  LayoutDashboard,
  ListChecks,
  PlusCircle,
  Code2,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  
  const navItems = [
    {
      name: "Progress Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "See Questions",
      path: "/questions",
      icon: ListChecks,
    },
    {
      name: "Add Questions",
      path: "/create",
      icon: PlusCircle,
    },
  ];

  return (
    <aside className="relative left-0 top-0 h-screen w-16 shrink-0 border-r border-slate-200 bg-white px-2 py-6 sm:w-64 sm:px-4">

      {/* Logo */}
      <div className="mb-10 flex items-center justify-center gap-3 px-1 sm:justify-start sm:px-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Code2 size={21} />
        </div>

        <div className="hidden sm:block">
          <h1 className="text-lg font-bold tracking-tight text-slate-900">
            Interview
          </h1>

          <p className="text-xs font-medium text-slate-400">
            Practice Tracker
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <p className="mb-3 hidden px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:block">
          Workspace
        </p>

        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={item.name}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        size={19}
                        strokeWidth={isActive ? 2.3 : 2}
                      />

                      <span className="hidden sm:block">
                        {item.name}
                      </span>
                    </div>

                    {isActive && (
                      <ChevronRight
                        size={16}
                        className="hidden text-blue-500 sm:block"
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-6 left-4 right-4 hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:block">
        <p className="text-xs font-semibold text-slate-700">
          Weekly Preparation
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          Keep your interview preparation on track.
        </p>
      </div>
    </aside>
  );
};

export default Navbar;