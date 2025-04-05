import { Hero, WhatsappButton, Services } from "@/components";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhatsappButton phone={+543512095525} message={"Hola, esto es un test"} />
    </div>
  );
}
