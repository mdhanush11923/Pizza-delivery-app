import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
// Dynamically import the Entry component with a loading fallback
const Topbar = dynamic(() => import("@/components/Topbar"), {
  loading: () => <Loading />,
});
// const Footer = dynamic(() => import("@/components/Footer"), {
//   loading: () => <Footer />,
// })

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Topbar />
      <div className="w-screen">
        {children}
      </div>
      <Footer />
    </section>
  );
}
