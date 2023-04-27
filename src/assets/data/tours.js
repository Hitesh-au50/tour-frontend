import tourImg06 from "../images/tour-img06.jpg";
import jaipur from "../images/jaipur.jpg";
import france from "../images/france.jpg";
import kerla from "../images/kerla.jpg";
import toranto from "../images/toranto.jpg";
import london from "../images/london.jpg";
// my own
import Kas1 from "../images/Kas1.jpg";
import Bangkok from "../images/Bangkok.jpg";

const tours = [
  {
    id: "01",
    title: "India",
    city: "Jammu Kashmir",
    distance: 300,
    address: 'Somewhere in India',
    price: 99,
    maxGroupSize: 100,
    desc: "This place is known as heaven on earth.Such a beautiful mountain area",
    reviews: [
      {
        name: "jhon doe",
        rating: 5,
      }, {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: Kas1,
    featured: true,
  },
  {
    id: "02",
    title: "Thailand",
    city: "Bangkok",
    distance: 400,
    address: 'Somewhere in Thailand',
    price: 99,
    maxGroupSize: 100,
    desc: "Glittering with lights,a lot of hustle bustle and a little bit of chaos.Beautiful place",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: Bangkok,
    featured: true,
  },
  {
    id: "03",
    title: "England",
    city: "London",
    distance: 500,
    address: 'Somewhere in England',
    price: 99,
    maxGroupSize: 100,
    desc: "Such a endlessly fun city to explore on foot.Very beautiful city",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: london,
    featured: true,
  },
  {
    id: "04",
    title: "Canada",
    city: "Toranto",
    distance: 500,
    address: 'Somewhere in canada',
    price: 99,
    maxGroupSize: 100,
    desc: "Toranto is a bustling metropolis with skyscrapers dotting the skylines.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: toranto,
    featured: true,
  },
  {
    id: "05",
    title: "kerala",
    city: "thiruvanthpuram",
    distance: 500,
    address: 'Somewhere in India',
    price: 99,
    maxGroupSize: 100,
    desc: "Such a greenery place with oceans on other side.South part of india",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo:kerla,
    featured: false,
  },
  {
    id: "06",
    title: "Japan",
    city: "Tokyo",
    distance: 500,
    address: 'Somewhere in Japan',
    price: 99,
    maxGroupSize: 100,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "France",
    city: "Paris",
    distance: 500,
    address: 'Somewhere in France',
    price: 99,
    maxGroupSize: 100,
    desc: "Fantasy castles,glorious castles and beautiful towns are major tourist attractions.",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: france,
    featured: false,
  },
  {
    id: "08",
    title: "Rajasthan",
    city: "Jaipur",
    distance: 500,
    address: 'Somewhere in Rajathan',
    price: 99,
    maxGroupSize: 100,
    desc: "It combines the allure of its ancient history with all the advantages of metropolis.",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: jaipur,
    featured: false,
  },
];

export default tours;
