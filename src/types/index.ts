export type Character = {
  created: string,
  episode: string[],
  gender: Gender,
  id: number,
  image: string,
  location: Place,
  name: string,
  origin: Place,
  species: string,
  status: Status,
  type: string,
  url: string
}

export type Place = {
  name: string;
  url: string;
};

export enum Gender { "Female", "Male", "Genderless", "unknown" }

export enum Status { "Alive", "Dead", "unknown" }