import axios from 'axios';
import { AUTH_KEY } from '../Home/Login';

export const BASE_URL = '/api';

// 비회원 api (로그인, 회원가입)
export const beforeLoginInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

// 회원 api
export const afterLoginInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

// 요청 인터셉터
afterLoginInstance.interceptors.request.use(
    function (config) {
            // 요청이 전달되기 전에 헤더에 토큰 넣기
            const jwt = sessionStorage.getItem(AUTH_KEY);
            const token = JSON.parse(jwt).token;
            config.headers.authentication = `Token ${token}`;
        return config;
    },
    function (error) {
        // 요청 오류가 있는 작업 수행
        return Promise.reject(error);
    }
);
