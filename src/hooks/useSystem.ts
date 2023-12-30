"use client";
import { useCallback, useState } from "react";
// import { useCountdown } from "./useCountdown";
import { useKeyDown } from "./useKeyDown";
// import { useLocalStorage } from "./useLocalStorage";
// import { useModal } from "./useModal";
// import { useWord } from "./useWord";
import { useWord } from "./useWord";

import {
  calculateAccuracy,
  calculateErrorPercentage,
  calculateWPM,
} from "../utils";

export interface Results {
  accuracy: number;
  cpm: number;
  wpm: number;
  error: number;
}
export interface HistoryType {
  wordHistory: string;
  typedHistory: string;
}

export const useSystem = () => {
  const [results, setResults] = useState<Results>({
    accuracy: 0,
    wpm: 0,
    cpm: 0,
    error: 0,
  });

  const [history, setHistory] = useState<HistoryType>({
    wordHistory: "",
    typedHistory: "",
  });

  // const { setLocalStorageValue, getLocalStorageValue } = useLocalStorage();
  const [wordContainerFocused, setWordContainerFocused] = useState(false);
  // const [time, setTime] = useState(() => getLocalStorageValue("time") || 15000);
  // const { countdown, resetCountdown, startCountdown } = useCountdown(time);
  const { word, updateWord, totalWord } = useWord(30);

  const {
    charTyped,
    typingState,
    cursorPosition,
    totalCharacterTyped,
    resetCharTyped,
    resetCursorPointer,
    setTotalCharacterTyped,
    setTypingState,
  } = useKeyDown(true);
  // const { modalIsOpen, aboutModal, openModal, closeModal } = useModal();

  const restartTest = useCallback(() => {
    // resetCountdown();
    updateWord(true);
    resetCursorPointer();
    resetCharTyped();
    setTypingState("idle");
    setTotalCharacterTyped("");
  }, [
    // resetCountdown,
    updateWord,
    resetCursorPointer,
    resetCharTyped,
    setTypingState,
    setTotalCharacterTyped,
  ]);
  console.log(charTyped);
  const checkCharacter = useCallback(
    (index: number) => {
      if (charTyped[index] === word[index]) {
        return true;
      } else {
        return false;
      }
    },
    [charTyped, word]
  );

  if (word.length === charTyped.length) {
    updateWord();
    resetCharTyped();
    resetCursorPointer();
    console.log("word typed completely");
    const { accuracy } = calculateAccuracy(totalWord, totalCharacterTyped);
    const { wpm, cpm } = calculateWPM(totalCharacterTyped, accuracy, 60000);
    const error = calculateErrorPercentage(accuracy);

    setResults({
      accuracy,
      wpm,
      cpm,
      error,
    });
  }

  if (typingState === "start") {
    // startCountdown();
    setTypingState("typing");
  }

  //   setHistory({
  //     wordHistory: totalWord,
  //     typedHistory: totalCharacterTyped,
  //   });

  //   openModal("result");
  //   restartTest();
  // }

  return {
    charTyped,
    // countdown,
    cursorPosition,
    // modalIsOpen,
    // aboutModal,
    results,
    // time,
    history,
    word,
    wordContainerFocused,
    setWordContainerFocused,
    // setTime,
    // resetCountdown,
    // setLocalStorageValue,
    updateWord,
    restartTest,
    checkCharacter,
    // closeModal,
    // openModal,
  };
};
