import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const baseUrl = "http://localhost:3001/api/users/signup";
  const nickNameUrl = "http://localhost:3001/api/users/nickName";
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [state, setState] = useState({
    userEmail: "",
    userPassword: "",
    passwordCheck: "",
    nickName: "",
    phoneNumber: "",
    birthDay: Date.now(),
  });
  const onClickSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(baseUrl, state);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("회원가입이 실패했습니다.");
    }
  };

  // const onClickDuplicateId = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.get(dupliUrl, state);
  //     const idArray = response.data;
  //     console.log(idArray);
  //     let isDuplicate = false;

  //     for (const id of idArray) {
  //       if (id.userEmail === state.userEmail) {
  //         isDuplicate = true;
  //         break;
  //       }
  //     }
  //     if (isDuplicate) {
  //       alert("중복된 이메일 입니다.");
  //     } else {
  //       alert("사용가능한 이메일 입니다.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("중복 검사가 실패했습니다.");
  //   }
  // };
  const onClickNickNameCheck = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(nickNameUrl, {
        nickName: state.nickName,
      });
      console.log(response.data);
      if (response.data.result === true) {
        alert("중복된 닉네임 입니다.");
      } else {
        alert("사용가능한 닉네임 입니다.");
      }
    } catch (error) {
      console.error(error);
      alert("중복검사가 실패했습니다.");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-100 to-green-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <img
          className="mx-auto h-20 w-auto rounded-full"
          src="https://www.nizform.com/ByStoreFile/105073/preview/view_105073.jpg"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">
          회원가입
        </h2>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="userEmail"
                name="userEmail"
                type="email"
                value={state.userEmail}
                autoComplete="userEmail"
                required
                onChange={handleChangeState}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="userPassword"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="userPassword"
                name="userPassword"
                type="password"
                onChange={handleChangeState}
                value={state.userPassword}
                autoComplete="new-userPassword"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="passwordCheck"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Confirm Password
            </label>
            <div className="m-1 mb-3">
              <input
                id="passwordCheck"
                name="passwordCheck"
                type="password"
                onChange={handleChangeState}
                autoComplete="new-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
            <label
              htmlFor="nickname"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Nickname
            </label>
            <div className="mt-1 mb-2 relative">
              <input
                id="nickName"
                name="nickName"
                type="text"
                value={state.nickName}
                autoComplete="nickName"
                required
                onChange={handleChangeState}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your nickName"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-xs font-semibold text-white border-l border-gray-300 rounded-r-md bg-yellow-300 border border-transparent rounded-md shadow-sm hover:bg-lime-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                onClick={onClickNickNameCheck}
              >
                중복 검사
              </button>
            </div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium leading-5 text-gray-700"
              placeholder="010-0000-0000"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                autoComplete="phoneNumber"
                required
                value={state.phoneNumber}
                onChange={handleChangeState}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your Phone Number: ex) 010-0000-0000"
              />
            </div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium leading-5 text-gray-700 mt-2"
            >
              Date of Birth
            </label>
            <div className="mt-1">
              <input
                id="birthDay"
                name="birthDay"
                value={state.birthDay}
                type="date"
                required
                onChange={handleChangeState}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="yyyy-mm-dd"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                취소
              </Link>
            </div>
            <div>
              <button
                onClick={onClickSignUp}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-yellow-300 border border-transparent rounded-md shadow-sm hover:bg-lime-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                완료
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
