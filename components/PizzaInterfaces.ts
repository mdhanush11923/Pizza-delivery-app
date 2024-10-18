// Pizza interface
export interface Pizza {
  pizzaId: number;
  name: string;
  description: string;
  category: 'Vegetarian' | 'Non-Vegetarian' | 'Custom';
  prices: {
    small: number;
    medium: number;
    large: number;
  };
  base: {
    id: string;
    name: string;
    price: number;
    availableQuantity: number;
  };
  cheese: {
    id: string;
    name: string;
    price: number;
    availableQuantity: number;
  };
  sauce: {
    id: string;
    name: string;
    price: number;
    availableQuantity: number;
  };
  veggies?: {
    id: string;
    name: string;
    price: number;
    availableQuantity: number;
  }[];
  stock: number;
  imageSource: string;
}

// CartItem interface
export interface CartItem {
  pizzaId: number;
  pizzaName: string;
  quantity: number;
  size: 'small' | 'medium' | 'large';
  baseId: string;
  cheeseId?: string;
  sauceId?: string;
  veggiesIds?: string[];
  totalPrice: number;
}

export interface Order {
  orderId: number;
  items: CartItem[];
  totalAmount: number;
  orderDate: Date;
  customerName: string;
  status: 'Pending' | 'Delivered' | 'Cancelled';
}


// Function to create a Pizza with stock based on ingredient availability
export const createPizza = (pizza: Omit<Pizza, 'stock'>): Pizza => {
  const stock = pizza.veggies && pizza.veggies.length > 0 
  ? Math.min(
      pizza.base.availableQuantity,
      pizza.cheese.availableQuantity,
      pizza.sauce.availableQuantity,
      ...(pizza.veggies.map((v) => v.availableQuantity))
    ) 
  : Math.min(
      pizza.base.availableQuantity,
      pizza.cheese.availableQuantity,
      pizza.sauce.availableQuantity
    );

  return {
    ...pizza,
    stock,
  };
};

export const createCartItem = (cartItem: CartItem): CartItem => {
  return {
    ...cartItem,
    ...(cartItem.sauceId && { sauceId: cartItem.sauceId }), // Conditionally include sauceId
    ...(cartItem.cheeseId && { cheeseId: cartItem.cheeseId }), // Conditionally include cheeseId
    ...(cartItem.veggiesIds && cartItem.veggiesIds.length > 0 && { veggiesIds: cartItem.veggiesIds }), // Conditionally include veggiesIds
  };
};

export const createOrder = (
  orderId: number,
  customerName: string,
  cartItems: CartItem[],
  orderDate: Date,
  totalAmount: number
): Order => {
  // Create the order object
  const newOrder: Order = {
    orderId,
    items: cartItems,
    totalAmount,
    orderDate,
    customerName,
    status: 'Pending',
  };

  return newOrder;
};
