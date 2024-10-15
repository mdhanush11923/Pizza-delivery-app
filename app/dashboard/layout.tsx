import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import {CartProvider} from "@/components/CartData"

const Topbar = dynamic(() => import("@/components/Topbar"), {
  loading: () => <Loading />,
});
// const Footer = dynamic(() => import("@/components/Footer"), {
//   loading: () => <Footer />,
// })

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
        <CartProvider>
      <Topbar />
      <div className="">
        {children}
      </div>
      <Footer />
        </CartProvider>
    </section>
  );
}
