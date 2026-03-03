import { Link, useLocation } from "react-router-dom";

export default function SidebarComponent({ isOpen }) {
  const location = useLocation();

  const navItems = [
    {
      to: "/",
      label: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 border-r border-gray-700">
        {/* Logo */}
        <a href="/" className="flex items-center ps-2.5 mb-6">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 me-3"
            alt="Logo"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
            Manjo QR
          </span>
        </a>

        {/* Nav */}
        <ul className="space-y-1 font-medium">
          {navItems.map(({ to, label, icon }) => {
            const isActive = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`flex items-center px-3 py-2.5 rounded-lg transition-colors group ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <span
                    className={`${isActive ? "text-white" : "text-gray-400 group-hover:text-white"} transition-colors`}
                  >
                    {icon}
                  </span>
                  <span className="ms-3 text-sm">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
