// src/assets/assets.ts

export const assets = {
  logo: "/assets/q.png",
  marvelLogo: "/assets/marvelLogo.svg",
  googlePlay: "/assets/googlePlay.svg",
  appStore: "/assets/appStore.svg",
  screenImage: "/assets/screenImage.svg",
  profile: "/assets/profile.png",
};

export const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WpW36ldAqnM",
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8",
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g",
  },
];

const dummyCastsData = [
  { name: "Milla Jovovich", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
  { name: "Dave Bautista", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
  { name: "Arly Jover", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
  { name: "Amara Okereke", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" },
  { name: "Fraser James", profile_path: "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg" },
  { name: "Deirdre Mullins", profile_path: "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg" },
  { name: "Sebastian Stankiewicz", profile_path: "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg" },
  { name: "Tue Lunding", profile_path: "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg" },
  { name: "Jacek Dzisiewicz", profile_path: "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg" },
  { name: "Ian Hanmore", profile_path: "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg" },
];

export const dummyShowsData = [
  {
    _id: "324544",
    id: 324544,
    title: "Marriott Hotel Kigali",
    price: 2.5,
    location: "Pizza",
    overview: "A queen sends the powerful and feared sorceress Gray Alys...",
    poster_path: "/assets/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    backdrop_path: "/assets/classic-cheese-pizza.jpg",
    genres: [{ id: 28, name: "Action" }, { id: 14, name: "Fantasy" }, { id: 12, name: "Adventure" }],
    casts: dummyCastsData,
    release_date: "2025-02-27",
    original_language: "en",
    tagline: "She seeks the power to free her people.",
    vote_average: 6.4,
    vote_count: 15000,
    runtime: 102,
  },
  {
    _id: "1232546",
    id: 1232546,
    title: "Serena Hotel Kigali",
    price: 8,
    location: "Burger",
    overview: "One year after her sister Melanie mysteriously disappeared...",
    poster_path: "/assets/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    backdrop_path: "/assets/ClassicCheeseBurger.jpg",
    genres: [{ id: 27, name: "Horror" }, { id: 9648, name: "Mystery" }],
    casts: dummyCastsData,
    release_date: "2025-04-23",
    original_language: "en",
    tagline: "Every night a different nightmare.",
    vote_average: 6.4,
    vote_count: 18000,
    runtime: 103,
  },
  {
    _id: "552524",
    id: 552524,
    title: "Intare Conference Arena",
    price: 50,
    location: "Wraps",
    overview: "The wildly funny and touching story of a lonely Hawaiian girl...",
    poster_path: "/assets/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path: "/assets/EW-Veggie-Wrap.jpg",
    genres: [{ id: 10751, name: "Family" }, { id: 35, name: "Comedy" }, { id: 878, name: "Science Fiction" }],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Hold on to your coconuts.",
    vote_average: 7.1,
    vote_count: 27500,
    runtime: 108,
  },
  // … repeat for the rest, changing all local images to /assets/…
];
