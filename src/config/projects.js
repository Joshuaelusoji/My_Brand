import Hotel from "../assets/images/Hotel.png";
import Music from "../assets/images/Music.png";
import Restaurant from "../assets/images/Restaurant.png";
import flashio from "../assets/images/flashio.png";

export const projects = [
  {
    name: "Logistics",
    description:
      "Flashio is a food and errand delivery platform connecting users with restaurants, shops, pharmacies, malls, and laundry services. Built with React, Node.js, Express, PostgreSQL, JWT authentication, and PostGIS for location-based delivery tracking.",
    image: flashio,
    link: "https://flashio-frontend.onrender.com/",
  },

  {
    name: "Hotel Website",
    description:
      "A concept website for a mini luxury hotel and chalet, built to give guests the impression of a new abode from the moment they arrive — clean visuals, clear calls to action, and an editorial presentation of rooms, amenities, and pricing. Fully responsive, keeping the same polish from mobile to desktop.",    image: Music,
    link: "https://example.com/music",
  },

  {
    name: "Portfolio",
    description:
      "A personal portfolio site built to let the work speak for itself — clean typography, generous whitespace, and no clutter. Each project comes with context (what it does, what it's built with) and a direct link to explore it. Structured to grow easily, so new projects slot in without reworking the layout.",
    image: Hotel,
    link: "https://example.com/restaurant",
  }
];