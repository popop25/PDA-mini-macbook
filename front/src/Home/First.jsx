import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-green-100 p-6">
      <div className="flex flex-col items-center justify-center gap-10 text-center w-full max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">
          티끌 모아 태산!
        </h1>
        <img
          src="https://www.nizform.com/ByStoreFile/105073/preview/view_105073.jpg"
          className="w-48 sm:w-64 md:w-128 h-auto rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
          alt="main"
        />
        <div className="flex flex-r sm:flex-row gap-6">
          <Link
            to="/login"
            className="w-full sm:w-56 lg:w-64 bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-3 px-6 rounded shadow-lg transition-colors duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="w-full sm:w-56 lg:w-64 bg-green-400 hover:bg-green-300 text-white font-bold py-3 px-6 rounded shadow-lg transition-colors duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
