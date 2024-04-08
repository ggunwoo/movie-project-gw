import { getPlaiceholder } from "plaiceholder";

export default async function getbase64(imgUrl: string) {
  try {
    const res = await fetch(imgUrl);

    if (!res.ok) {
      throw new Error(`Fetch 실패 이미지 : ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer), { size: 10 });
    console.log(`base64: ${base64}`);

    return base64;
  } catch (err) {
    err;
  }
}
