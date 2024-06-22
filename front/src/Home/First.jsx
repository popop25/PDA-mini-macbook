import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 ">
      <div className="flex flex-col items-center justify-center gap-10 text-center w-full max-w-4xl bg-white rounded-3xl">
        <h1 className="mt-12 mb-12 text-2xl md:text-6xl font-extrabold text-transparent bg-clip-text text-black">
          티끌모아 맥북!
        </h1>
        <img
          src="https://www.nizform.com/ByStoreFile/105073/preview/view_105073.jpg"
          className="w-48 sm:w-64 md:w-128 h-auto rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
          alt="main"
        />
        <div className="flex flex-r sm:flex-row gap-6 mb-12 mt-12">
          <Link
            to="/login"
            className="w-full sm:w-56 lg:w-64 bg-blue-500 hover:bg-blue-300 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-colors duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
          >
            로그인
          </Link>
          <Link
            to="/signup"
            className="w-full sm:w-56 lg:w-64 bg-green-400 hover:bg-green-300 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-colors duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
