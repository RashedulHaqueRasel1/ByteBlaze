import Hero from "../Components/Hero/Hero";
import wavg from "../../public/wave.svg"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative   min-h-[calc(100vh-116px)]">

        <Hero></Hero>
 
      <img className="absolute bottom-0 w-full" src={wavg} alt="" />
    </div>
  )
}
