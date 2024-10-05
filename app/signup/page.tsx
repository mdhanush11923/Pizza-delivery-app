import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
// Dynamically import the Entry component with a loading fallback
const Entry = dynamic(() => import("@/components/Entry"), {
  loading: () => <Loading />,
});

export default function DocsPage() {
  return <Entry defaultTab="signup" />;
}
