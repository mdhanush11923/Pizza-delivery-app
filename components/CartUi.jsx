'use client'

import {
  Button,
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useCart } from "./CartData";

export default function CartUi() {
  const {theme} = useTheme();
  const darkMode = theme == "dark";
  const { cartItems, removeItemFromCart, cartTotal } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePayment = () => {
    const options = {
      key: "rzp_test_erkUjbE4TD28ds",
      amount: cartTotal * 100, // Amount in paise
      currency: "INR",
      name: "PIZzA Delivery",
      description: "Test Transaction",
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
        alert("Order ID: " + response.razorpay_order_id);
        alert("Signature: " + response.razorpay_signature);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "note value",
      },
      theme: {
        color: "bg-myhouseblue",
      },
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      {cartItems.length > 0 && (
        <Card
          isBlurred
          isPressable
          radius="sm"
          shadow="lg"
          onPress={onOpen}
          className="fixed bottom-5 left-10 border items-center right-10 p-4 text-center z-50"
        >
          <h1 className="text-center font-semibold m-0">
            {cartItems.reduce((total, item) => total + item.quantity, 0)} items
            in cart
          </h1>
        </Card>
      )}

      <Modal
        scrollBehavior="inside"
        backdrop="opaque"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          body: "py-6",
          backdrop: "bg-myhouseblue/50 backdrop-opacity-40",
          base: `border-[#292f46] ${darkMode && "bg-myhouseblue text-white"}`,
          header: `border-b-[1px] border-[#292f46] rounded-t-lg text-white bg-myhouseblue ${
            darkMode && "border-white bg-white text-myhouseblue"
          }`,
          footer: `border-t-[1px] border-[#292f46] ${darkMode && "border-white"}`,
          closeButton: `hover:bg-white/5 text-white ${darkMode && "text-myhouseblue"} active:bg-white/10`,
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cart Items
              </ModalHeader>
              <ModalBody>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={`${item.pizzaId}-${item.size}`}
                      className="flex justify-between"
                    >
                      <div>
                        <h4 className="font-semibold font-poppins">
                          {item.pizzaId} {/* Replace with actual pizza name */}
                        </h4>
                        <div className="text-sm font-medium">
                          <p>
                            Size:{" "}
                            <span className="font-normal">{item.size}</span>
                          </p>
                          <p>
                            Price:{" "}
                            <span className="font-bold">
                              ₹{item.totalPrice}
                            </span>{" "}
                            <span className="text-lg font-semibold font-poppins">
                              ×{item.quantity}
                            </span>
                          </p>
                        </div>
                      </div>
                      <Button
                        className="bg-reddanger"
                        size="sm"
                        variant="solid"
                        color="danger"
                        onPress={() =>
                          removeItemFromCart(item.pizzaId, item.size)
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                )}
              </ModalBody>
              <ModalFooter>
                {cartItems.length > 0 && (
                  <div className="flex justify-between w-full font-extrabold">
                    <p>₹{cartTotal.toFixed(2)}</p>
                  </div>
                )}
                <Button
                  className={darkMode && "text-white"}
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  fullWidth
                  className="bg-[#41B06E]"
                  color="primary"
                  onPress={handlePayment}
                  isDisabled={cartItems.length === 0}
                >
                  Checkout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
