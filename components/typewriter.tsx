import Typewriter from "typewriter-effect";

export default function TypedWord() {
  return (
    <Typewriter
      options={{
        strings: ["best influencers"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
