"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Button, Checkbox, CheckboxGroup, Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
// import { useCart } from "./Cart";
import { bases, sauces, cheeses, veggies } from "./pizzaData";
import { createCartItem } from "./PizzaInterfaces";

const PizzaCustomization = () => {
  const [selectedBaseId, setSelectedBaseId] = useState(null);
  const [selectedSauceId, setSelectedSauceId] = useState(null);
  const [selectedCheeseId, setSelectedCheeseId] = useState(null);
  const [selectedVeggiesIds, setSelectedVeggiesIds] = useState([]);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { addItemToCart } = useCart();

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

    setTotalPrice(singlePizzaPrice * pizzaQuantity);
  };

  const handleSubmit = () => {
    const cartItem = createCartItem({
      itemId: Date.now(),
      itemName: "Custom pizza",
      size: "medium", // Size is hardcoded, change if needed
      baseId: selectedBaseId,
      quantity: pizzaQuantity,
      ...(selectedSauceId && { sauceId: selectedSauceId }), // Conditionally add sauceId
      ...(selectedCheeseId && { cheeseId: selectedCheeseId }), // Conditionally add cheeseId
      ...(selectedVeggiesIds.length > 0 && { veggiesIds: selectedVeggiesIds }), // Conditionally add veggiesIds
      totalPrice,
    });

    console.log("Pizza Customization: ", cartItem);
    addItemToCart(cartItem);
  };

    // const handleAddToCart = () => {
    //   const selectedPizza = {
    //     pizzaId: pizza.pizzaId,
    //     size: "medium",
    //     baseId: "0", // Assume base is selected
    //     cheeseId: "1", // Assume cheese is selected
    //     sauceId: "2", // Assume sauce is selected
    //     veggiesIds: ["1", "3"], // Assume veggies are selected
    //     totalPrice: 599, // Assume total price is calculated
    //     quantity: 1,
    //   };

    //   addItemToCart(selectedPizza);
    // };

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

        <div className="flex flex-wrap w-full items-center gap-5 justify-end">
          {totalPrice!==0 && (
            <div className="text-2xl  font-poppins font-bold">
              Price: ₹{totalPrice.toFixed(2)}
            </div>
          )}

          <Button
            className="w-44 h-14 reddanger"
            color="danger"
            size="lg"
            radius="sm"
            onClick={handleSubmit}
            isDisabled={selectedBaseId===null}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomization;
