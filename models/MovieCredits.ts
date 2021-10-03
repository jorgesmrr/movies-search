export interface CastMember {
  id: number;
  name: string;
  character?: string;
  photo: string;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
}

export default interface MovieCredits {
  cast: CastMember[];
  crew: CrewMember[];
}
