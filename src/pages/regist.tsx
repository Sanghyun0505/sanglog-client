import dynamic from "next/dynamic";

const Regist = dynamic(() => import("@/components/Regist"), {
  ssr: false,
});
export default function RegistPage() {
  return <Regist />;
}
