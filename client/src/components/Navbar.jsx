import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-16 border-b border-slate-700 bg-slate-900 flex items-center justify-between px-6 text-white">
      
      <h1 className="text-2xl font-bold tracking-wide">
        Browser Sandbox
      </h1>

      <div className="flex items-center gap-4">
        
        <Link to="/login">
          <button className="min-w-[90px] bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition duration-200">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="min-w-[90px] bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-200">
            Register
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Navbar;