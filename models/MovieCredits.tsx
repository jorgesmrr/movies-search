export interface MovieCredit {
  id: number;
  name: string;
  profile_path: string;
}

export default interface MovieCredits {
  cast: MovieCredit[];
  crew: MovieCredit[];
}
