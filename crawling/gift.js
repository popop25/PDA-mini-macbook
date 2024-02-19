import axios from "axios";
import https from "https";
import crypto from "crypto";

async function fetchPage() {
  console.log("hi");
  const url =
    "https://gift.kakao.com/a/v2/best/delivery/all?page=4&size=30&_=1708060654865";
  try {
    const makeRequest = (url) => {
      return axios({
        url,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
        httpsAgent: new https.Agent({
          secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
        }),
      });
    };

    const response = await makeRequest(url);
    const itemData = response.data;

    const itemList = [];

    for (const item of itemData) {
      const item_url = `https://gift.kakao.com/a/v2/products/${item.product.id}`;
      const itemResponse = await makeRequest(item_url);
      itemList.push(itemResponse.data);
    }

    console.log(itemData); // 전체화면에 나오는 item 배열
    console.log(itemList); // item마다 상세정보 배열
  } catch (error) {
    console.log(error);
  }
}

fetchPage();
