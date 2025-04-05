import { Hero, WhatsappButton, Services, Divider, Contact } from "@/components";

export default function Home() {
  return (
    <div>
      <Hero />
      <Divider />
      <Services />
      <Contact />
      <WhatsappButton phone={+543512095525} message={"Hola, esto es un test"} />
    </div>
  );
}
