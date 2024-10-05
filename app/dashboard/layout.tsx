import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
// Dynamically import the Entry component with a loading fallback
const Topbar = dynamic(() => import("@/components/Topbar"), {
  loading: () => <Loading />,
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Topbar />
      <div className="inline-block text-center justify-center">
        {children}
      </div>
    </section>
  );
}
