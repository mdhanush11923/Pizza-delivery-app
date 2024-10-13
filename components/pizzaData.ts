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


// Separate arrays for bases, sauces, cheeses, and veggies
const bases = [
  { name: "Thin Crust", availableQuantity: 50 },
  { name: "Thick Crust", availableQuantity: 50 },
  { name: "Cheese Burst", availableQuantity: 50 },
  { name: "Gluten Free", availableQuantity: 50 },
  { name: "Whole Wheat", availableQuantity: 50 }
];

const sauces = [
  { name: "Tomato Basil", availableQuantity: 50 },
  { name: "Barbeque", availableQuantity: 50 },
  { name: "White Garlic", availableQuantity: 50 },
  { name: "Pesto", availableQuantity: 50 },
  { name: "Spicy Buffalo", availableQuantity: 50 }
];


const cheeses = [
  { name: "Mozzarella", availableQuantity: 50 },
  { name: "Cheddar", availableQuantity: 50 },
  { name: "Parmesan", availableQuantity: 50 },
  { name: "Gouda", availableQuantity: 50 },
  { name: "Feta", availableQuantity: 50 }
];


const veggies = [
  { name: "Bell Peppers", availableQuantity: 50 },
  { name: "Olives", availableQuantity: 50 },
  { name: "Onions", availableQuantity: 50 },
  { name: "Spinach", availableQuantity: 50 },
  { name: "Mushrooms", availableQuantity: 50 },
  { name: "Cherry Tomatoes", availableQuantity: 50 },
  { name: "Jalapenos", availableQuantity: 50 },
  { name: "Sweet Corn", availableQuantity: 50 }
];

// Updated Pizza interface
interface Pizza {
      pizzaId: number;
  name: string;
  description: string;
  category: 'Vegetarian' | 'Non-Vegetarian';
  prices: {
    small: number;
    medium: number;
    large: number;
  };
  base: { name: string; availableQuantity: number };
  cheese: { name: string; availableQuantity: number };
  sauce: { name: string; availableQuantity: number };
  veggies?: { name: string; availableQuantity: number }[]; 
  stock: number;
  imageSource: string;
}

// Updated createPizza function
const createPizza = (pizza: Omit<Pizza, 'stock'>): Pizza => {
  const stock = Math.min(
    pizza.base.availableQuantity,
    pizza.cheese.availableQuantity,
    pizza.sauce.availableQuantity,
    ...(pizza.veggies?.map(v => v.availableQuantity) || [])
  );

  return {
    ...pizza,
    stock
  };
};

// Image sources
const Pepperoni = "/Images/Pepperoni.png";
const Margherita = "/Images/Margherita.png";
const VeggieDelight = "/Images/VeggieDelight.png";
const BBQChicken = "/Images/BBQChicken.png";
const FourCheese = "/Images/FourCheese.png";
const Hawaiian = "/Images/Hawaiian.png";
const BuffaloChicken = "/Images/BuffaloChicken.png";
const MeatLovers = "/Images/MeatLovers.png";
const PestoVeggie = "/Images/PestoVeggie.png";

// Create pizzas with Indian Rupee prices
const pizzas: Pizza[] = [
  createPizza({
    pizzaId: 0,
    name: "Pepperoni",
    description: "Classic pepperoni pizza with gooey mozzarella cheese.",
    category: "Non-Vegetarian",
    prices: { small: 399, medium: 599, large: 799 },
    base: bases[0], // Thin Crust
    cheese: cheeses[0], // Mozzarella
    sauce: sauces[0], // Tomato Basil
    veggies: [], // No veggies
    imageSource: Pepperoni,
  }),
  
  createPizza({
    pizzaId: 1,
    name: "Margherita",
    description: "A simple and delicious pizza topped with tomatoes and fresh mozzarella.",
    category: "Vegetarian",
    prices: { small: 299, medium: 449, large: 599 },
    base: bases[1], // Thick Crust
    cheese: cheeses[2], // Parmesan
    sauce: sauces[0], // Tomato Basil
    veggies: [veggies[2], veggies[5]], // Onions, Cherry Tomatoes
    imageSource: Margherita,
  }),

  createPizza({
    pizzaId: 2,
    name: "Veggie Delight",
    description: "A medley of fresh vegetables on a crispy base.",
    category: "Vegetarian",
    prices: { small: 449, medium: 649, large: 849 },
    base: bases[3], // Gluten Free
    cheese: cheeses[1], // Cheddar
    sauce: sauces[2], // White Garlic
    veggies: [veggies[0], veggies[2], veggies[4]], // Bell Peppers, Onions, Mushrooms
    imageSource: VeggieDelight,
  }),

  createPizza({
    pizzaId: 3,
    name: "BBQ Chicken",
    description: "Savory BBQ chicken topped with onions and mozzarella.",
    category: "Non-Vegetarian",
    prices: { small: 499, medium: 699, large: 899 },
    base: bases[2], // Cheese Burst
    cheese: cheeses[0], // Mozzarella
    sauce: sauces[1], // Barbeque
    veggies: [veggies[2]], // Onions
    imageSource: BBQChicken,
  }),

  createPizza({
    pizzaId: 4,
    name: "Four Cheese",
    description: "A cheese lover's dream with four types of cheese.",
    category: "Vegetarian",
    prices: { small: 549, medium: 749, large: 999 },
    base: bases[4], // Whole Wheat
    cheese: cheeses[3], // Gouda
    sauce: sauces[3], // Pesto
    veggies: [veggies[3]], // Spinach
    imageSource: FourCheese,
  }),

  createPizza({
    pizzaId: 5,
    name: "Hawaiian",
    description: "A tropical twist with ham and pineapple.",
    category: "Non-Vegetarian",
    prices: { small: 449, medium: 649, large: 849 },
    base: bases[0], // Thin Crust
    cheese: cheeses[2], // Parmesan
    sauce: sauces[0], // Tomato Basil
    veggies: [veggies[5]], // Cherry Tomatoes
    imageSource: Hawaiian,
  }),

  createPizza({
    pizzaId: 6,
    name: "Buffalo Chicken",
    description: "Spicy buffalo chicken with a creamy sauce.",
    category: "Non-Vegetarian",
    prices: { small: 499, medium: 699, large: 899 },
    base: bases[1], // Thick Crust
    cheese: cheeses[1], // Cheddar
    sauce: sauces[4], // Spicy Buffalo
    veggies: [veggies[2]], // Onions
    imageSource: BuffaloChicken,
  }),

  createPizza({
    pizzaId: 7,
    name: "Meat Lovers",
    description: "A meat-heavy pizza loaded with pepperoni, sausage, and bacon.",
    category: "Non-Vegetarian",
    prices: { small: 599, medium: 799, large: 1099 },
    base: bases[2], // Cheese Burst
    cheese: cheeses[0], // Mozzarella
    sauce: sauces[1], // Barbeque
    veggies: [], // No veggies
    imageSource: MeatLovers,
  }),

  createPizza({
    pizzaId: 8,
    name: "Pesto Veggie",
    description: "A fresh mix of veggies with pesto sauce and mozzarella cheese.",
    category: "Vegetarian",
    prices: { small: 449, medium: 649, large: 849 },
    base: bases[3], // Gluten Free
    cheese: cheeses[0], // Mozzarella
    sauce: sauces[3], // Pesto
    veggies: [veggies[0], veggies[2], veggies[6]], // Bell Peppers, Onions, Jalapenos
    imageSource: PestoVeggie,
  })
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
