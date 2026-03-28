// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  image: string;
  description: string;
}

// IMPORT IMAGES
import sparxImg from "./images/sparx.webp";
import campusImg from "./images/campus.webp";
import redfordImg from "./images/redford.webp";
import medifeeImg from "./images/medifee.webp";
import wingerImg from "./images//winger.jpg";
import walkarooImg from "./images/walkaro.webp";
import paragonImg from "./images/paragon.jpg";
import hoovesImg from "./images/hooves.jpg";
import columbusImg from "./images/columbus.jpg";
import orthocareImg from "./images/orthocare.webp";
import edgeImg from "./images/edge.jpg";

// PRODUCT DATA
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "SPARX",
    category: "Lifestyle Footwear",
    price: 1599,
    color: "from-red-500 to-orange-600",
    image: sparxImg,
    description: "Durable and stylish sports shoes for everyday performance.",
  },
  {
    id: 2,
    name: "CAMPUS",
    category: "Lifestyle Footwear",
    price: 1899,
    color: "from-blue-500 to-indigo-600",
    image: campusImg,
    description: "Lightweight running shoes built for comfort and speed.",
  },
  {
    id: 3,
    name: "REDFORD",
    category: "Lifestyle Footwear",
    price: 2499,
    color: "from-zinc-700 to-zinc-900",
    image: redfordImg,
    description: "Classic casual footwear for everyday use.",
  },
  {
    id: 4,
    name: "MEDIFEE",
    category: "Lifestyle Footwear",
    price: 1299,
    color: "from-blue-400 to-blue-600",
    image: medifeeImg,
    description: "Medical comfort footwear with ergonomic design.",
  },
  {
    id: 5,
    name: "WINGER",
    category: "Lifestyle Footwear",
    price: 1499,
    color: "from-purple-500 to-pink-600",
    image: wingerImg,
    description: "Trendy and flexible shoes for active lifestyle.",
  },
  {
    id: 6,
    name: "WALKAROO",
    category: "Lifestyle Footwear",
    price: 799,
    color: "from-emerald-400 to-cyan-500",
    image: walkarooImg,
    description: "Affordable and reliable daily wear footwear.",
  },
  {
    id: 7,
    name: "PARAGON",
    category: "Lifestyle Footwear",
    price: 499,
    color: "from-orange-500 to-red-600",
    image: paragonImg,
    description: "Comfortable sandals for everyday use.",
  },
  {
    id: 8,
    name: "HOOVES",
    category: "Premium Wear",
    price: 3499,
    color: "from-amber-500 to-orange-600",
    image: hoovesImg,
    description: "Premium quality footwear with elegant design.",
  },
  {
    id: 9,
    name: "COLUMBUS",
    category: "Outdoor",
    price: 1799,
    color: "from-green-500 to-teal-600",
    image: columbusImg,
    description: "Rugged shoes for trekking and outdoor adventures.",
  },
  {
    id: 10,
    name: "ORTHOCARE",
    category: "Orthopedic",
    price: 1399,
    color: "from-slate-400 to-slate-600",
    image: orthocareImg,
    description: "Footwear designed for orthopedic comfort.",
  },
  {
    id: 11,
    name: "EDGE",
    category: "Lifestyle Footwear",
    price: 2199,
    color: "from-slate-600 to-slate-800",
    image: edgeImg,
    description: "Modern and edgy footwear designs.",
  },
];