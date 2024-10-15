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
  base: { id: string, name: string; price: number; availableQuantity: number };
  cheese: { id: string, name: string; price: number; availableQuantity: number };
  sauce: { id: string, name: string; price: number; availableQuantity: number };
  veggies?: { id: string, name: string; price: number; availableQuantity: number }[]; 
  stock: number;
  imageSource: string;
} 

export interface CartItem {
  pizzaId: number;
  pizzaName: string;
  quantity: number;
  size: 'small' | 'medium' | 'large'; 
  baseId: string;
  cheeseId: string;
  sauceId: string;
  veggiesIds?: string[];
  totalPrice: number;
}


export const createPizza = (pizza: Omit<Pizza, 'stock'>): Pizza => {
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