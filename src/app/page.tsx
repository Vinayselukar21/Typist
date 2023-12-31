"use client";
import { useSystem } from "../hooks/useSystem";
import Countdown from "./_components/Countdown";
import ModalComponent from "./_components/Modal";
import ModalContent from "./_components/ModalContent";
import TimeCategory from "./_components/TimeCategory";
import UserTyped from "./_components/UserTyped";
import WordWrapper from "./_components/WordWrapper";
import Footer from "./_components/Foot";
import Header from "./_components/Head";
import WordContainer from "./_components/WordContainer";
import { Code2 } from "lucide-react";
import Link from "next/link";
import Tooltip from "./_components/Tooltip";
export default function Home() {
  const {
    charTyped,
    word,
    wordContainerFocused,
    countdown,
    time,
    results,
    history,
    modalIsOpen,
    aboutModal,
    closeModal,
    setLocalStorageValue,
    setTime,
    setWordContainerFocused,
    checkCharacter,
    resetCountdown,
    restartTest
  } = useSystem();
  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col gap-4 px-4 xl:px-0">
      <div className="flex flex-col  justify-center md:justify-start text-center gap-y-8 flex-1 px-4 pb-10">
        <Header />
        <div className="block md:hidden">
          <h3 className="text-white">
            This is a typing practice app. You can only use it on a desktop!
          </h3>
          <div className="flex  items-center justify-center gap-2 my-5">
            <Code2 className="text-xl font-bold" />
            <Tooltip tooltipId="source-code">
              <Link
                href="https://github.com/Vinayselukar21/Typist"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xl hover:underline"
                data-tooltip-content="Give me a star 😊"
                data-tooltip-id="source-code"
              >
                Source Code ⭐
              </Link>
            </Tooltip>
          </div>
        </div>
        <div className="hidden md:block">
          <TimeCategory
            time={time}
            setLocalStorage={setLocalStorageValue}
            setTime={setTime}
            restart={restartTest}
          />
          <Countdown countdown={countdown} reset={resetCountdown} />
          <WordWrapper
            focused={wordContainerFocused}
            setFocused={setWordContainerFocused}
          >
            <WordContainer text={word} />
            <UserTyped
              word={word}
              check={checkCharacter}
              charTyped={charTyped}
            />
          </WordWrapper>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>

      <ModalComponent
        type='result'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ModalContent
          totalTime={time}
          results={results}
          history={history}
        />
      </ModalComponent>

      <ModalComponent
        type='about'
        isOpen={aboutModal}
        onRequestClose={closeModal}
      >
        {/* <AboutPage /> */}hi
      </ModalComponent>
    </div>
  );
}
