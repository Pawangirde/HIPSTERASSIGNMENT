import { useTheme, type ThemeType } from "../theme/ThemeContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  // Dynamic classes for background and text based on theme
  const headerClass =
    theme === "theme2"
      ? "bg-gray-900 text-white border-white-600"
      : theme === "theme3"
      ? "bg-yellow-200 text-pink-700"
      : "bg-white text-black";

  const selectClass =
    theme === "theme2"
      ? "bg-gray-800 text-white border-white-600"
      : theme === "theme3"
      ? "bg-pink-100 text-pink-800 border-pink-300"
      : "bg-white text-black border-gray-300";

  return (
    <header
      className={`fixed top-0 w-full flex justify-between items-center p-4 shadow z-50 transition-colors border-b duration-300 ${headerClass}`}
    >
      <div
        onClick={() => navigate("/")}
        className="text-xl font-bold cursor-pointer"
      >
        MultiThemeApp
      </div>
      <nav className="space-x-4">
        <button
          onClick={() => navigate("/")}
          className="px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/about")}
          className="px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
        >
          About
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
        >
          Contact
        </button>
      </nav>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeType)}
        className={`border p-2 rounded transition-colors duration-300 ${selectClass}`}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
}

export default Header;
