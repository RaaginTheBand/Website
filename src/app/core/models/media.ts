export interface Photo {
  photos: PhotoInfo[];
  title: string;
}

export interface Video {
  videos: VideoInfo[];
  title: string;
}

interface PhotoInfo {
  alt: string;
  caption: string;
  url: string;
}

interface VideoInfo {
  caption: string;
  type: string;
  url: string;
}
