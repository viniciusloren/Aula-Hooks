'use client'
import Image from "next/image";
import Button from "@/app/components/Button";
import FormInput from "./components/FormInput";

export default function Home() {
  const handleClick = () => {};

  const handleChange = () => {};

  return (
    <main>
      <FormInput label={"Nome"} value={"Maria"} onChange={handleChange} />
      <Button text="Ok" onClick={handleClick}/>
    </main>
  );
}
