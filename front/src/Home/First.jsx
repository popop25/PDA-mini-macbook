import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full">
      <div className="flex flex-col justify-center gap-5 items-center text-center">
        <div className="text-2xl font-extrabold m-20">티끌모아태산!</div>
        <img
          src="https://www.nizform.com/ByStoreFile/105073/preview/view_105073.jpg"
          className="mx-auto w-52 sm:w-96 rounded-full"
          alt="main"
        />
        <div className="w-full flex flex-col md:flex-row gap-2">
          <Link
            to="/login"
            className="mx-auto w-52 sm:w-96 md:mr-2 rounded bg-yellow-300 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="mx-auto w-52 sm:w-96 md:ml-2 rounded bg-yellow-300 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
