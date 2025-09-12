// src/assets/assets.ts

// ✅ Import general assets
import logo from './q.png';
import marvelLogo from './marvelLogo.svg';
import googlePlay from './googlePlay.svg';
import appStore from './appStore.svg';
import screenImage from './screenImage.svg';
import profile from './profile.png';

// ✅ Import local show images
import image1 from './food_1.png';
import image2 from './food_2.png';
import image3 from './food_3.png';
import image4 from './food_4.png';
import image5 from './food_5.png';
import image6 from './food_6.png';

// Export general assets
export const assets = {
  logo,
  marvelLogo,
  googlePlay,
  appStore,
  screenImage,
  profile,
};

// Dummy trailers (online URLs)
export const dummyTrailers = [
  { image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg", videoUrl: "https://www.youtube.com/watch?v=WpW36ldAqnM" },
  { image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg", videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8" },
];

// Dummy cast data
const dummyCastsData = [
  { name: "Milla Jovovich", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
  { name: "Dave Bautista", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
  { name: "Arly Jover", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
  { name: "Amara Okereke", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" },
];

// ✅ Dummy shows with imported images
export const dummyShowsData = [
  {
    _id: "324544",
    id: 324544,
    title: "Marriott Hotel Kigali",
    price: 2.5,
    location: "Pizza",
    overview: "A queen sends the powerful and feared sorceress Gray Alys...",
    poster_path: image1,
    backdrop_path: image1,
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
    poster_path: image2,
    backdrop_path: image2,
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
    poster_path: image3,
    backdrop_path: image3,
    genres: [{ id: 10751, name: "Family" }, { id: 35, name: "Comedy" }, { id: 878, name: "Science Fiction" }],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Hold on to your coconuts.",
    vote_average: 7.1,
    vote_count: 27500,
    runtime: 108,
  },
  {
    _id: "552525",
    id: 552525,
    title: "Kigali Convention Center",
    price: 20,
    location: "Salad",
    overview: "Fresh and healthy meals prepared with love...",
    poster_path: image4,
    backdrop_path: image4,
    genres: [{ id: 10751, name: "Family" }, { id: 35, name: "Comedy" }],
    casts: dummyCastsData,
    release_date: "2025-06-01",
    original_language: "en",
    tagline: "Healthy eating for everyone.",
    vote_average: 7.0,
    vote_count: 12000,
    runtime: 90,
  },
  {
    _id: "552526",
    id: 552526,
    title: "Hotel des Mille Collines",
    price: 15,
    location: "Sandwich",
    overview: "Delicious sandwiches for lunch or dinner...",
    poster_path: image5,
    backdrop_path: image5,
    genres: [{ id: 10751, name: "Family" }, { id: 35, name: "Comedy" }],
    casts: dummyCastsData,
    release_date: "2025-06-15",
    original_language: "en",
    tagline: "Tasty sandwiches, made fresh.",
    vote_average: 6.8,
    vote_count: 9500,
    runtime: 85,
  },
  {
    _id: "552527",
    id: 552527,
    title: "Kigali City Tower",
    price: 30,
    location: "Wraps",
    overview: "Wraps with fresh vegetables and sauces...",
    poster_path: image6,
    backdrop_path: image6,
    genres: [{ id: 10751, name: "Family" }, { id: 35, name: "Comedy" }],
    casts: dummyCastsData,
    release_date: "2025-07-01",
    original_language: "en",
    tagline: "Fresh and tasty wraps.",
    vote_average: 7.2,
    vote_count: 10500,
    runtime: 95,
  },
];
