// import Pepperoni from "/Images/Pepperoni.png";
// import Margherita from "/Images/Margherita.png";
// import VeggieDelight from "/Images/VeggieDelight.png";
// import BBQChicken from "/Images/BBQChicken.png";
// import fourCheese from "/Images/FourCheese.png";
// import hawaiian from "/Images/Hawaiian.png";
// import buffaloChicken from "/Images/BuffaloChicken.png";
// import meatLovers from "/Images/MeatLovers.png";
// import pestoVeggie from "/Images/PestoVeggie.png";
'use client'

interface Pizza {
  name: string;
  description: string;
  category: 'Vegetarian' | 'Non-Vegetarian';
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
  base: 'Thin Crust' | 'Thick Crust' | 'Cheese Burst' | 'Gluten Free';
  cheese: 'Mozzarella' | 'Cheddar' | 'Parmesan' | 'Vegan Cheese';
  sauce: 'Tomato' | 'Barbeque' | 'Pesto' | 'White Garlic';
  veggies?: ('Bell Peppers' | 'Onions' | 'Olives' | 'Mushrooms' | 'Jalapenos' | 'Spinach' | 'Tomatoes' | 'Corn')[];
  stock: number;
  imageSource: string;
}

const createPizza = (pizza: Pizza): Pizza => {
  return pizza;
};



const pizzas = [
  {
    id: 0,
    name: "Tomato Basil Classic",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: { small: 199, medium: 299, large: 399 },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Bell Peppers",
    category: "Vegetarian",
    image: "/Images/Margherita.png",
    availableQuantity: 10,
  },
  {
    id: 1,
    name: "Olive Delight",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: { small: 199, medium: 299, large: 399 },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Olives",
    category: "Vegetarian",
    image: "/Images/Margherita.png",
    availableQuantity: 10,
  },
  {
    id: 2,
    name: "Cheese Burst Bliss",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: { small: 249, medium: 349, large: 449 },
    base: "Cheese Burst",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Bell Peppers",
    category: "Vegetarian",
    image: "/Images/Margherita.png",
    availableQuantity: 10,
  },
  {
    id: 3,
    name: "Olive Dream",
    description:
      "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
    prices: { small: 249, medium: 349, large: 449 },
    base: "Cheese Burst",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Olives",
    category: "Vegetarian",
    image: "/Images/Margherita.png",
    availableQuantity: 10,
  },
  {
    id: 4,
    name: "Pepperoni Heat",
    description:
      "A favorite with spicy pepperoni, mozzarella, and signature tomato sauce.",
    prices: { small: 249, medium: 399, large: 499 },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: "/Images/Pepperoni.png",
    availableQuantity: 10,
  },
  {
    id: 5,
    name: "Mushroom Pepperoni",
    description:
      "A favorite with spicy pepperoni, mozzarella, and signature tomato sauce.",
    prices: { small: 249, medium: 399, large: 499 },
    base: "Thin Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Mushrooms",
    category: "Non-Vegetarian",
    image: "/Images/Pepperoni.png",
    availableQuantity: 10,
  },
  {
    id: 6,
    name: "BBQ Pepperoni",
    description:
      "A favorite with spicy pepperoni, cheddar cheese, and BBQ sauce.",
    prices: { small: 269, medium: 419, large: 519 },
    base: "Thin Crust",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: "/Images/Pepperoni.png",
    availableQuantity: 10,
  },
  {
    id: 7,
    name: "BBQ Mushroom Pepperoni",
    description:
      "A favorite with spicy pepperoni, cheddar cheese, and BBQ sauce.",
    prices: { small: 269, medium: 419, large: 519 },
    base: "Thin Crust",
    sauce: "Barbeque",
    cheese: "Cheddar",
    veggies: "Mushrooms",
    category: "Non-Vegetarian",
    image: "/Images/Pepperoni.png",
    availableQuantity: 10,
  },
  {
    id: 8,
    name: "Thick Crust Pepperoni",
    description:
      "A favorite with spicy pepperoni, mozzarella, and signature tomato sauce.",
    prices: { small: 259, medium: 409, large: 509 },
    base: "Thick Crust",
    sauce: "Tomato Basil",
    cheese: "Mozzarella",
    veggies: "Onions",
    category: "Non-Vegetarian",
    image: "/Images/Pepperoni.png",
    availableQuantity: 10,
  },
];

// Separate arrays for bases, sauces, cheeses, and veggies
const bases = [
  { name: "Thin Crust", availableQuantity: 50 },
  { name: "Thick Crust", availableQuantity: 50 },
  { name: "Cheese Burst", availableQuantity: 50 },
  { name: "Gluten Free", availableQuantity: 50 },
  { name: "Whole Wheat", availableQuantity: 50 },
];

const sauces = [
  { name: "Tomato Basil", availableQuantity: 50 },
  { name: "Barbeque", availableQuantity: 50 },
  { name: "White Garlic", availableQuantity: 50 },
  { name: "Pesto", availableQuantity: 50 },
  { name: "Spicy Buffalo", availableQuantity: 50 },
];

const cheeses = [
  { name: "Mozzarella", availableQuantity: 50 },
  { name: "Cheddar", availableQuantity: 50 },
  { name: "Parmesan", availableQuantity: 50 },
  { name: "Gouda", availableQuantity: 50 },
  { name: "Feta", availableQuantity: 50 },
];

const veggies = [
  { name: "Bell Peppers", availableQuantity: 50 },
  { name: "Olives", availableQuantity: 50 },
  { name: "Onions", availableQuantity: 50 },
  { name: "Spinach", availableQuantity: 50 },
  { name: "Mushrooms", availableQuantity: 50 },
  { name: "Cherry Tomatoes", availableQuantity: 50 },
];

const vegetarianPizzas = pizzas.filter(
  (pizza) => pizza.category === "Vegetarian"
);

const nonVegetarianPizzas = pizzas.filter(
  (pizza) => pizza.category === "Non-Vegetarian"
);

export default pizzas;

export {createPizza};

export {
  vegetarianPizzas,
  nonVegetarianPizzas,
  bases,
  sauces,
  cheeses,
  veggies,
};
