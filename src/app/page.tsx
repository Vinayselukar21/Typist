"use client";
import { useSystem } from "../hooks/useSystem";
import UserTyped from "./_components/UserTyped";
import WordWrapper from "./_components/WordWrapper";
import Footer from "./_components/footer";
import Header from "./_components/header";
import TypingPractice from "./_components/main";
import { Stats } from "./_components/stats";
export default function Home() {
  const { charTyped, word, wordContainerFocused, setWordContainerFocused, checkCharacter } = useSystem()

  return (
    <div className="min-h-full flex flex-col px-0 sm:px-10">
      <div
        className="flex flex-col  justify-center md:justify-start text-center gap-y-8 flex-1 px-4 pb-10"
      >
        <Header />
        <div className="block md:hidden">
          <h3 className="text-white">
            This is a typing practice app. You can only use it on a desktop!
          </h3>
        </div>
        <div className="hidden md:block">
          <Stats />
          <WordWrapper focused={wordContainerFocused} setFocused={setWordContainerFocused}>
            <TypingPractice text={word} />
            <UserTyped
              word={word}
              check={checkCharacter}
              charTyped={charTyped}
            />
          </WordWrapper>
        </div>
      </div>
      <Footer />
    </div>
  );
}
