import { afterLoginInstance } from './AxiosInstance';

// 유저의 친구 목록을 가져오는 API 함수
export const fetchUserFriends = async () => {
    try {
        const response = await afterLoginInstance.get('/users/friends');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 친구 추가
export const addFriend = async (phoneNumber) => {
    try {
        const response = await afterLoginInstance.post(`/users/friends/${phoneNumber}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};