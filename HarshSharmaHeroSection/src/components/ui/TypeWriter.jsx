import { words } from "../../../data";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export default function Typewriter() {
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] mt-20">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-8">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
