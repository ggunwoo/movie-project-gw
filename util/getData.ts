import { API_URL } from "./contants";

// 영화 정보 가져오기
export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

// 비디오 가져오기
export async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}