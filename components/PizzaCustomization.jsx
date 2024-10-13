"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Button, Checkbox, CheckboxGroup, Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
// import { useCart } from "./Cart";
import { bases, sauces, cheeses, veggies } from "./pizzaData";

const PizzaCustomization = () => {
  const [selectedBaseId, setSelectedBaseId] = useState(null);
  const [selectedSauceId, setSelectedSauceId] = useState(null);
  const [selectedCheeseId, setSelectedCheeseId] = useState(null);
  const [selectedVeggiesIds, setSelectedVeggiesIds] = useState([]);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  // const { addItemToCart } = useCart();

  useEffect(() => {
    calculateTotalPrice();
  }, [
    selectedBaseId,
    selectedSauceId,
    selectedCheeseId,
    selectedVeggiesIds,
    pizzaQuantity,
  ]);

  const handleBaseChange = (keys) => {
    const selectedId = Array.from(keys)[0];
    setSelectedBaseId(selectedId);
  };

  const handleSauceChange = (keys) => {
    const selectedId = Array.from(keys)[0];
    setSelectedSauceId(selectedId);
  };

  const handleCheeseChange = (keys) => {
    const selectedId = Array.from(keys)[0];
    setSelectedCheeseId(selectedId);
  };

  const handleVeggiesChange = (selectedValues) => {
    setSelectedVeggiesIds(selectedValues);
  };

  const getItemPriceById = (items, id) => {
    const item = items.find((item) => item.id === id);
    return item ? item.price : 0;
  };

  const calculateTotalPrice = () => {
    const basePrice = getItemPriceById(bases, selectedBaseId);
    const saucePrice = getItemPriceById(sauces, selectedSauceId);
    const cheesePrice = getItemPriceById(cheeses, selectedCheeseId);
    const veggiesPrice = selectedVeggiesIds.reduce(
      (total, veggieId) => total + getItemPriceById(veggies, veggieId),
      0,
    );

    const singlePizzaPrice =
      basePrice + saucePrice + cheesePrice + veggiesPrice;
          // Debugging logs to check values
    console.log("Base Price: ", basePrice);
    console.log("Sauce Price: ", saucePrice);
    console.log("Cheese Price: ", cheesePrice);
    console.log("Veggies Price: ", veggiesPrice);
    console.log("Single Pizza Price: ", singlePizzaPrice);

    setTotalPrice(singlePizzaPrice * pizzaQuantity);
  };

  const handleSubmit = () => {
    const pizza = {
      base: selectedBaseId,
      sauce: selectedSauceId,
      cheese: selectedCheeseId,
      veggies: selectedVeggiesIds,
      quantity: pizzaQuantity,
      totalPrice,
    };
    console.log("Pizza Customization:", pizza);
    // addItemToCart(pizza); // Uncomment to add item to cart
  };
  return (
    <div className="flex flex-col items-center h-full p-10 pt-4">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-wrap justify-center items-center gap-10">
          <h1 className="scroll-m-20 sm:mb-4 text-4xl text-center font-poppins font-extrabold tracking-tight lg:text-5xl">
            Create Your Own Pizza
          </h1>
          <Image
            width={230}
            isBlurred
            src="/Images/customPizza.png"
            alt="pizza"
          />
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-8 w-full">
          <Select
            variant="faded"
            label="Choose Pizza Base"
            selectedKeys={
              selectedBaseId ? new Set([selectedBaseId]) : new Set()
            }
            onSelectionChange={handleBaseChange}
          >
            {bases.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
          </Select>

          <Select
            variant="faded"
            label="Choose Sauce"
            selectedKeys={
              selectedSauceId ? new Set([selectedSauceId]) : new Set()
            }
            onSelectionChange={handleSauceChange}
          >
            {sauces.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-8 w-full">
          <Select
            variant="faded"
            label="Choose Cheese"
            selectedKeys={
              selectedCheeseId ? new Set([selectedCheeseId]) : new Set()
            }
            onSelectionChange={handleCheeseChange}
          >
            {cheeses.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
          </Select>

          <Input
            label="Quantity"
            variant="faded"
            type="number"
            min={1}
            value={pizzaQuantity}
            onChange={(e) => setPizzaQuantity(Number(e.target.value))}
          />
        </div>

        <CheckboxGroup
          classNames={{ label: "text-center" }}
          color="warning"
          label="Choose Veggies"
          orientation="horizontal"
          value={selectedVeggiesIds}
          onChange={handleVeggiesChange}
        >
          {veggies.map((item) => (
            <Checkbox key={item.id} value={item.id}>
              {item.name}
            </Checkbox>
          ))}
        </CheckboxGroup>

        <div className="text-2xl mt-6 font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </div>

        <Button
          className="w-44 h-14 reddanger"
          color="danger"
          size="lg"
          radius="sm"
          onClick={handleSubmit}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default PizzaCustomization;
