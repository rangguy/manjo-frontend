import { Link } from "react-router-dom";

export default function SidebarComponent({ isOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}>
      <div className="h-full px-3 py-4 overflow-y-auto bg-white border-gray-200 dark:bg-gray-800">
        <a href="/" className="flex items-center ps-2.5 mb-5">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 me-3"
            alt="Logo"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center px-2 py-1.5 text-gray-700 rounded hover:bg-gray-100 group">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
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
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
