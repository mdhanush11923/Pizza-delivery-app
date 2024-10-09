import dynamic from "next/dynamic";
import Loading from "@/components/Loading"
const Entry = dynamic(() => import("@/components/Entry"), {
  loading: () => <Loading />,
});

export default function LoginPage() {
  return <Entry defaultTab="login" />;
}
