export default interface MovieImages {
  backdrops: MovieImage[];
  posters: MovieImage[];
  logos: MovieImage[];
}

export interface MovieImage {
  path: string;
  width: number;
  height: number;
}
