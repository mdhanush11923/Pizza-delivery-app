'use client'
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Tooltip,
  AccordionItem,
  Accordion,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownCircleSharpIcon from "@mui/icons-material/ArrowDropDownCircleSharp";
import pizzas from "./pizzaData";
import { AddCircleOutline, AddRounded, AddSharp } from "@mui/icons-material";
// import { useCart } from "./Cart";

export default function PizzaItem({ id, color }) {
  const [selectedSize, setSelectedSize] = React.useState("medium"); // Default size
  const pizza = pizzas[id];
  
  // const { addItemToCart } = useCart();  // Access the function to add items to the cart from the CartContext

  // const addToCart = () => {
  //   addItemToCart({
  //     itemId: id,
  //     itemName: pizza.name,
  //     itemPrice: pizza.prices[selectedSize],
  //     itemSize: selectedSize,
  //   });

  // };

  function DemoDropDown() {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            className="capitalize font-poppins text-white dark:text-charcoalgray"
            radius="sm"
            color=""
            size="sm"
            variant="solid"
          >
            {selectedSize}
            <ArrowDropDownCircleSharpIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={new Set([selectedSize])}
          onSelectionChange={(keys) =>
            setSelectedSize(keys.values().next().value)
          }
        >
          <DropdownItem key="small">Small (8 Inches)</DropdownItem>
          <DropdownItem key="medium">Medium (10 Inches)</DropdownItem>
          <DropdownItem key="large">Large (12 Inches)</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Card className=" flex flex-col justify-evenly bg-charcoalgray dark:bg-[#f5f5f5] pb-4 gap-2 rounded-b-[10px] shadow-none">
      <Card
        fullWidth
        style={{ backgroundColor: color }}
        className={`flex justify-center items-center text-center rounded-b-[80px] shadow-none ${color}`}
      >
        <div className="flex gap-4 flex-col items-center p-10">
          <Image
            className="w-full object-cover"
            width="100%"
            radius="full"
            src={pizza.image}
            isBlurred
            alt="pizza image"
          /> 
          <div className="flex flex-col">
            <h1 className="flex text-center justify-center text-charcoalgray font-poppins text-2xl font-extrabold tracking-tight">
              {pizza.name}
            </h1>
          </div>
        </div>
        <Button
          className="flex font-bold items-center justify-center rounded-t-[60px] h-20 w-full"
          color="warning"
          variant="solid"
          // bg-[#41B3A2]
          // onClick={addToCart}
        >
          <AddRounded fontSize="large" />
        </Button>
      </Card>
      <Accordion isCompact variant="splitted">
        <AccordionItem
          classNames={{
            title:
              "font-normal font-semibold text-[#F5F5F5] dark:text-charcoalgray",
            content: "text-background text-left  opacity-85",
            base: "bg-charcoalgray dark:bg-[#f5f5f5] shadow-none",
          }}
          key="1"
          aria-label="Accordion 1"
          title="Description"
        >
          <p>{pizza.description}</p>
          <p>-</p>
          <p className="text-sm">
            Base: {pizza.base}, Sauce:{pizza.sauce}, Cheese: {pizza.cheese},
            Veggies: {pizza.veggies}, Category: {pizza.category}
          </p>
        </AccordionItem>
      </Accordion>
      <div className="flex pl-5 justify-between">
        <h2 className="scroll-m-20 text-background text-xl font-extrabold tracking-tight first:mt-0">
          ₹ {pizza.prices[selectedSize]}
        </h2>
        <DemoDropDown />
      </div>
    </Card>
  );
}
