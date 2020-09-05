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
    subTitle: "Action & Adventure",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas numquam nisi eligendi id repellendus tempore neque explicabo rerum, similique ex maxime quae quod ipsam quibusdam. Officiis eligendi sint odio reprehenderit?",
    time: "178",
    rate: 8.9,
    year: "1994",
    photo: { link: PulpFiction, title: "Pulp fiction" },
  },
  {
    id: "2",
    title: "Bohemian rhapsody",
    subTitle: "Drama, Biography, Music",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas numquam nisi eligendi id repellendus tempore neque explicabo rerum, similique ex maxime quae quod ipsam quibusdam. Officiis eligendi sint odio reprehenderit?",
    time: "133",
    rate: 8,
    year: "2018",
    photo: { link: BohemianRhapsody, title: "Bohemian rhapsody" },
  },
  {
    id: "3",
    title: "Kill Bill: Vol 2",
    subTitle: "Oscar Winning Movie",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas numquam nisi eligendi id repellendus tempore neque explicabo rerum, similique ex maxime quae quod ipsam quibusdam. Officiis eligendi sint odio reprehenderit?",
    time: "138",
    rate: 8,
    year: "2004",
    photo: { link: KillBill2, title: "Kill Bill: Vol 2" },
  },
  {
    id: "4",
    title: "Avengers: InfinityWar",
    subTitle: "Action & Adventure",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas numquam nisi eligendi id repellendus tempore neque explicabo rerum, similique ex maxime quae quod ipsam quibusdam. Officiis eligendi sint odio reprehenderit?",
    time: "160",
    rate: 8.4,
    year: "2018",
    photo: { link: InfinityWar, title: "Avengers: InfinityWar" },
  },
  {
    id: "5",
    title: "Inception",
    subTitle: "Action & Adventure",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas numquam nisi eligendi id repellendus tempore neque explicabo rerum, similique ex maxime quae quod ipsam quibusdam. Officiis eligendi sint odio reprehenderit?",
    time: "162",
    rate: 8.8,
    year: "2010",
    photo: { link: Inception, title: "Inception" },
  },
  {
    id: "6",
    title: "Reservoir dogs",
    subTitle: "Oscar Winning Movie",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas numquam nisi eligendi id repellendus tempore neque explicabo rerum, similique ex maxime quae quod ipsam quibusdam. Officiis eligendi sint odio reprehenderit?",
    time: "100",
    rate: 8.3,
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
