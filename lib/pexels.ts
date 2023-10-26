import { notFound } from "next/navigation";
import "server-only";

const headers = {
  Authorization: process.env.PEXEL_KEY || "",
};

interface getUrlParams {
  query: string;
  page: number;
}

const getPhotosUrl = (params: getUrlParams) => {
  const { query, page } = params;
  return `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=6&orientation=landscape`;
};

export const getRamdomPhotos = async (params: getUrlParams) => {
  const url = getPhotosUrl(params);
  const response = await fetch(url, { headers });
  const result = response.json();
  return result as unknown as PhotosResponse;
};

const DEFAULT__PHOTO_ID = "147411";
const getPhotoUrl = "https://api.pexels.com/v1/photos/";

export const getPhoto = async (photoId?: string) => {
  const url = `${getPhotoUrl}${photoId ? photoId : DEFAULT__PHOTO_ID}`;
  try {
    const photo = await fetch(url, { headers });

    if (photo.status === 404) {
      throw new Error();
    }

    return photo.json() as unknown as CustomPhoto;
  } catch {
    return notFound();
  }
};

export interface PhotosResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: CustomPhoto[];
  next_page: string;
}

export interface CustomPhoto {
  id: string;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  liked: boolean;
  alt: string;
  src: {
    original: string;
    large: string;
    medium: string;
    small: string;
  };
}
