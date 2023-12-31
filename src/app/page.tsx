"use client";
import { useSystem } from "../hooks/useSystem";
import Countdown from "./_components/Countdown";
import ModalComponent from "./_components/Modal";
import ModalContent from "./_components/ModalContent";
import TimeCategory from "./_components/TimeCategory";
import UserTyped from "./_components/UserTyped";
import WordWrapper from "./_components/WordWrapper";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import WordContainer from "./_components/WordContainer";
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
    <div className="min-h-full flex flex-col px-0 sm:px-10">
      <div className="flex flex-col  justify-center md:justify-start text-center gap-y-8 flex-1 px-4 pb-10">
        <Header />
        <div className="block md:hidden">
          <h3 className="text-white">
            This is a typing practice app. You can only use it on a desktop!
          </h3>
        </div>
        <TimeCategory
          time={time}
          setLocalStorage={setLocalStorageValue}
          setTime={setTime}
          restart={restartTest}
        />
        <div className="hidden md:block">
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
      <Footer />
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
