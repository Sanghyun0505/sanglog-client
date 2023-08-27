import dynamic from "next/dynamic";

const Regist = dynamic(() => import("@/components/Write"), {
  ssr: false,
});
export default function RegistPage() {
  return <Regist />;
}
