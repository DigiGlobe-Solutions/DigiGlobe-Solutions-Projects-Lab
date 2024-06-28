import Button from "./ui/Button";
import Cards from "./ui/Cards";
import Sparkles from "./Sparkles";
import Typewriter from "./ui/TypeWriter";
import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:-left-30 md:-top-60"
        fill="white"
      />
      <Typewriter />
      <Button />
      <Sparkles />
      <Cards />
    </>
  );
}
