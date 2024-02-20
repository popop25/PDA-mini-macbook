import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full md:flex-row">
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <div className="m-20 font-mono text-4xl font-extrabold text-green-300 ">
          티끌 모아 태산!
          <div className="text-myColor-yellow text-mySize">#FFF67E</div>
          <div className="text-myColor-green1 text-mySize">#BFEA7C</div>
          <div className="text-myColor-green2 text-mySize">#9BCF53</div>
          <div className="text-myColor-green3 text-mySize">#416D19</div>
        </div>
        <img
          src="https://www.nizform.com/ByStoreFile/105073/preview/view_105073.jpg"
          className="mx-auto rounded-full w-52 sm:w-96"
          alt="main"
        />
        <div className="flex flex-col w-full gap-3 m-20 md:flex-row">
          <Link
            to="/login"
            className="px-2 py-2 mx-auto font-semibold text-white bg-yellow-300 rounded shadow-sm w-52 sm:w-96 md:mr-2 text-md hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="px-2 py-2 mx-auto font-semibold text-white bg-yellow-300 rounded shadow-sm w-52 sm:w-96 md:ml-2 text-md hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
