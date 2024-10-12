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
  Divider,
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
import { ScrollShadow } from "@nextui-org/react";
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
    <Card className="w-[275px] flex flex-col justify-evenly bg-charcoalgray  dark:bg-[#f5f5f5] pb-4 gap-2 rounded-b-[10px] shadow-md">
      <Card
        style={{ backgroundColor: color }}
        className={`w-[275px] justify-center self-start text-center rounded-b-[30px] ${color} p-5 shadow-md`}
      >
        <div className="flex gap-4 flex-col items-center p-5">
          <Image
            alt="pizza"
            className="w-full object-cover"
            width="100%"
            radius="full"
            src={pizza.image}
            isBlurred
          />
          <div>
            <h1 className="flex items-center scroll-m-20 text-charcoalgray min-h-16 font-poppins text-2xl font-extrabold tracking-tight">
              {pizza.name}
            </h1>
          </div>
          <div className="flex flex-col w-full gap-4 px-5">
            <h2 className="scroll-m-20 text-[black] text-2xl font-poppins font-extrabold tracking-tight first:mt-0">
              ₹ {pizza.prices[selectedSize]}
            </h2>
          </div>
        </div>
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
          <Divider className="my-2" />
          <p className="text-sm">
            Base: {pizza.base}, Sauce:{pizza.sauce}, Cheese: {pizza.cheese},
            Veggies: {pizza.veggies}, Category: {pizza.category}
          </p>
          <Divider className="my-2" />
          <h2 className="scroll-m-20 text-background text-sm opacity-85 tracking-tight first:mt-0">
            In Stock: {pizza.availableQuantity}
          </h2>
        </AccordionItem>
      </Accordion>
      <div className="flex px-5 items-center justify-between">
        <DemoDropDown />
        <Button
          className="rounded-[20px] bg-[#41B3A2]"
          color="primary"
        >
          <AddIcon />
        </Button>
      </div>
    </Card>
  );
}
