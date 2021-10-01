export interface MovieCredit {
  id: number;
  name: string;
  character: string;
  photo: string;
}

export default interface MovieCredits {
  cast: MovieCredit[];
  crew: MovieCredit[];
}
