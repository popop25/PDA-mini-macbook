import axios from "axios";
import https from "https";
import crypto from "crypto";
import { MongoClient } from "mongodb";
import fs from "fs";

async function fetchPage() {
  console.log("hi");
  const uri =
    "mongodb+srv://admin:admin@cluster0.jtdvjdz.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  const database = client.db("test");
  const products = database.collection("products");

  const url =
    "https://gift.kakao.com/a/v2/best/delivery/all?page=3&size=30&_=1708060654865";
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

    const itemResponse = itemList.map((el) => ({
      title: el.itemDetails.item.displayName,
      imageUrl: el.itemDetails.item.imageUrl,
      productId: el.itemDetails.item.id,
      productType: el.itemDetails.item.itemTypeDetail.description,
      detailName: el.itemDetails.item.name,
      detailImageUrl: el.itemDetails.item.imageUrl,
      price: el.itemDetails.item.basicPrice,
      brandName: el.itemDetails.brand.name,
      brandImageUrl: el.itemDetails.brand.thumbnailUrl,
      productDetailDescription: el.itemDetails.item.productDetailDescription,
    }));

    const insert = await products.insertMany(itemResponse);

    console.log(insert); // 전체화면에 나오는 item 배열
    console.log(itemList); // item마다 상세정보 배열
    // fs.writeFileSync("./test.txt", JSON.stringify(itemList, null, 2));
  } catch (error) {
    console.log(error);
  }
}

fetchPage();
