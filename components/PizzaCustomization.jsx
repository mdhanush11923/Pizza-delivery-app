'use client'

import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Button, Checkbox, CheckboxGroup, Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
// import { useCart } from "./Cart";
import { bases, sauces, cheeses, veggies } from "./pizzaData";

const PizzaCustomization = () => {
const [selectedBase, setSelectedBase] = useState(null);
const [selectedSauce, setSelectedSauce] = useState(null);
const [selectedCheese, setSelectedCheese] = useState(null);
const [selectedVeggies, setSelectedVeggies] = useState([]);
const [pizzaQuantity, setPizzaQuantity] = useState(1);

  // const { addItemToCart } = useCart();

  const handleVeggiesChange = (selectedValues) => {
    setSelectedVeggies(selectedValues); // Update veggies with selected values from CheckboxGroup
  };

  // const handleSubmit = () => {
  //   const itemId = `${Date.now()}`; // Unique ID based on timestamp
  //   const itemName = `Custom Pizza with ${[...base].join(", ")}, ${[
  //     ...sauce,
  //   ].join(", ")}, ${[...cheese].join(", ")}, and ${veggies.join(", ")}`;
  //   const itemPrice = 500*quantity; // Implement your own logic to calculate price

  //   const orderData = {
  //     itemId,
  //     itemName,
  //     itemPrice,
  //     quantity: quantity,
  //   };

  //   console.log(orderData);
  //   addItemToCart(orderData);
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
            selectedKeys={selectedBase}
            onSelectionChange={setSelectedBase}
          >
            {bases.map((item) => (
              <SelectItem key={item.name}>{item.name}</SelectItem>
            ))}
          </Select>

          <Select
            variant="faded"
            label="Choose Sauce"
            selectedKeys={selectedSauce}
            onSelectionChange={setSelectedSauce}
          >
            {sauces.map((item) => (
              <SelectItem key={item.name}>{item.name}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-8 w-full">
          <Select
            variant="faded"
            label="Choose Cheese"
            selectedKeys={selectedCheese}
            onSelectionChange={setSelectedCheese}
          >
            {cheeses.map((item) => (
              <SelectItem key={item.name}>{item.name}</SelectItem>
            ))}
          </Select>

          <Input variant="faded" value={0} />
        </div>

        <CheckboxGroup
          classNames={{ label: "text-center" }}
          color="warning"
          label="Choose Veggies"
          orientation="horizontal"
        >
          {veggies.map((item) => (
            <Checkbox
              key={item}
              value={item.name}
              onChange={handleVeggiesChange} // Handle change
            >
              {item.name}
            </Checkbox>
          ))}
        </CheckboxGroup>

        <Button
          className="w-44 h-14 reddanger"
          color="danger"
          size="lg"
          radius="sm"
          // onClick={handleSubmit}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default PizzaCustomization;
