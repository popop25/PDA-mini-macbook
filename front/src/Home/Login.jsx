import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../stores/auth";
import axios from "axios";

export const AUTH_KEY = "AUTH_USER";

const Login = () => {
  const navigate = useNavigate();
  const baseUrl = "localhost:8000/api/user/login";
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onClickLogin = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl, state)
      .then((response) => {
        const user = response.data;
        console.log(user.token);
        navigate.push("/");
        if (user.token) {
          setUserInfo(user);
          sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
          navigate.push("/");
        } else {
          alert("Error logging in");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("로그인이 실패했습니다.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <img
          className="mx-auto h-20 w-auto rounded-full"
          src="https://www.nizform.com/ByStoreFile/105073/preview/view_105073.jpg"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          로그인
        </h2>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700"
              placeholder="email"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={state.email}
                onChange={handleChangeState}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                value={state.password}
                onChange={handleChangeState}
                autoComplete="current-password"
                required
                placeholder="비밀번호를 입력하세요."
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="text-sm font-medium text-gray-600 hover:text-gray-600"
              >
                취소
              </Link>
            </div>
            <div>
              <button
                type="button"
                onClick={onClickLogin}
                className="inline-flex justify-center w-full px-4 py-2 leading-5 text-gray-600 font-bold transition duration-150 ease-in-out bg-yellow-300 border border-transparent rounded-md shadow-sm hover:hover:bg-lime-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                로그인
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
