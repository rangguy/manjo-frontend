export default function NavbarComponent({ onToggleSidebar }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={onToggleSidebar}
              className="sm:hidden p-2 text-gray-600 rounded hover:bg-gray-100">
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h10"
                />
              </svg>
            </button>
            <a href="/" className="flex ms-2 md:me-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 me-3"
                alt="Logo"
              />
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
