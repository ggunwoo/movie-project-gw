import { API_URL } from "./contents";

// 영화 정보
export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json(); 
}

// 크레딧
export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

// 비디오
export async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}


// 추쳔영화
export async function getSimilar(id: string){
  const response = await fetch(`${API_URL}/${id}/similar`)
  return response.json()
}