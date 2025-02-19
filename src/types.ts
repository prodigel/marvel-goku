export type Character = {
  id: string;
  name: string;
  image: string;
};

export type Transformation = {
  id: number;
  name: string;
  image: string;
  ki: string;
};

export type CharacterDetail = {
  id: string;
  name: string;
  image: string;
  description: string;
  race: string;
  ki: string;
  maxKi: string;
  transformations: Transformation[];
};
