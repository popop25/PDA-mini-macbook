import { Link } from "react-router-dom";
import WishList from "../Components/WishList"

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
          <WishList
            imageUrl="https://img1.kakaocdn.net/thumb/C414x414@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240119113721_c2ec0eeb5cfe4f4fb72a7b4b4b99f538.jpg" 
            brandImageUrl="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800"
            brandName="하겐다즈"
            title="[단독]하겐다즈 프리미엄 수제 아이스크림 케이크 리얼블랑 (바닐라+벨지안초코)"
            price="32,900"
          />
        </div>
        <img
          src="https://www.nizform.com/ByStoreFile/105073/preview/view_105073.jpg"
          className="mx-auto rounded-full w-52 sm:w-96"
          alt="main"
        />
        <div className="flex flex-col w-full gap-3 m-20 md:flex-row">
          <Link
            to="/login"

            className="mx-auto w-52 sm:w-96 md:mr-2 rounded bg-yellow-300 px-2 py-2 text-md font-semibold text-gray-600 shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="mx-auto w-52 sm:w-96 md:ml-2 rounded bg-yellow-300 px-2 py-2 text-md font-semibold text-gray-600 shadow-sm hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
