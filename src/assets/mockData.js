import {
  PulpFiction,
  BohemianRhapsody,
  KillBill2,
  InfinityWar,
  Inception,
  ReservoirDogs,
} from "./images";

export const cardsList = [
  {
    id: "1",
    title: "Pulp fiction",
    description: "description-1",
    year: "1994",
    photo: { link: PulpFiction, title: "Pulp fiction" },
  },
  {
    id: "2",
    title: "Bohemian rhapsody",
    description: "description-2",
    year: "2018",
    photo: { link: BohemianRhapsody, title: "Bohemian rhapsody" },
  },
  {
    id: "3",
    title: "Kill Bill: Vol 2",
    description: "description-3",
    year: "2004",
    photo: { link: KillBill2, title: "Kill Bill: Vol 2" },
  },
  {
    id: "4",
    title: "Avengers: InfinityWar",
    description: "description-4",
    year: "2018",
    photo: { link: InfinityWar, title: "Avengers: InfinityWar" },
  },
  {
    id: "5",
    title: "Inception",
    description: "description-5",
    year: "2010",
    photo: { link: Inception, title: "Inception" },
  },
  {
    id: "6",
    title: "Reservoir dogs",
    description: "description-6",
    year: "1992",
    photo: { link: ReservoirDogs, title: "Reservoir dogs" },
  },
];

export const genres = [
  { code: null, title: "All" },
  { code: "0", title: "documentary" },
  { code: "1", title: "comedy" },
  { code: "2", title: "horror" },
  { code: "3", title: "crime" },
];
export const sortBy = [
  { code: "1", title: "release date" },
  { code: "2", title: "name" },
];
