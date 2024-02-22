import { afterLoginInstance } from './AxiosInstance';

// 위시리스트 받아오기 (미완)
export const fetchWishes = async (id) => {
  try {
    const response = await afterLoginInstance.get('/wish');
    return response.data; // 서버에서 받은 데이터 반환
  } catch (error) {
    console.error('Error fetching wishes:', error);
    throw error; // 에러를 다시 던져서 상위 컴포넌트에서 처리할 수 있도록 함
  }
};