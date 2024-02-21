import axios from 'axios'

export const BASE_URL = 'http://127.0.0.1/' // 배포 시 EC2 서버 URL로 변경


// 비회원 api (로그인, 회원가입)
const beforeLoginInstance = () =>
    axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

// 회원 api
const afterLoginInstance = token =>
    axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
        },
    });