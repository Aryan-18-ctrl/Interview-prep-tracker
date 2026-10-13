
import { Link } from "react-router";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import {
  MdCode,
  MdDashboard,
  MdChecklist,
  MdAddCircleOutline,
} from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Dashboard", path: "/", icon: MdDashboard },
    { name: "See Questions", path: "/questions", icon: MdChecklist },
    { name: "Add Questions", path: "/create", icon: MdAddCircleOutline },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                <MdCode size={24} />
              </div>

              <div>
                <h2 className="text-base font-bold tracking-tight text-slate-900">
                  Interview
                </h2>
                <p className="text-xs font-medium text-slate-400">
                  Practice Tracker
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Track your progress, practice consistently, and prepare
              confidently for your next interview.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Quick Links
            </h3>

            <div className="flex flex-col items-start gap-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600"
                  >
                    <Icon
                      size={17}
                      className="transition group-hover:scale-110"
                    />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Connect With Me
            </h3>

            <p className="mb-4 text-sm leading-6 text-slate-500">
              Explore my projects and connect with me professionally.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Aryan-18-ctrl/Interview-prep-tracker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <FaGithub size={17} />
                GitHub
                <FaArrowUpRightFromSquare size={12} />
              </a>

              <a
                href="www.linkedin.com/in/aryanggupta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <FaLinkedin size={17} />
                LinkedIn
                <FaArrowUpRightFromSquare size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-slate-400">
            © {currentYear} Interview Practice Tracker. All rights reserved.
          </p>

          <p className="text-xs font-medium text-slate-500">
            Built with <span className="text-blue-600">React</span> &{" "}
            <span className="text-blue-600">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
