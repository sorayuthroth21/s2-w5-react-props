import Pizza from "./assets/pizza.png";
import Sushi from "./assets/sushi.png";
import Tacos from "./assets/taco.png";
import burger from "./assets/burger.png";



export const foods = [
  {
    name: "Pizza",
    price: 8.99,
    description: "A baked flatbread topped with tomato sauce, cheese, and various toppings.",
    origin: "Italy",
    img: {
      src: Pizza,
      alt: "A slice of cheese pizza",
    },
  },
  {
    name: "Sushi",
    price: 12.5,
    description: "Vinegared rice served with fresh raw fish and seafood.",
    origin: "Japan",
    img: {
      src: Sushi,
      alt: "Assorted sushi on a plate",
    },
  },
  {
    name: "Tacos",
    price: 3.99,
    description: "Corn tortillas filled with seasoned meat and fresh toppings.",
    origin: "Mexico",
    img: {
      src: Tacos,
      alt: "Mexican street tacos",
    },
  },
  {
    name: "Burger",
    price: 6.99,
    description: "A grilled beef patty in a bun with lettuce, tomato, and sauce.",
    origin: "United States",
    img: {
      src: burger,
      alt: "Classic beef burger",
    },
  },
];
