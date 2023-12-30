"use client";
import { useMemo } from 'react';
import styled from 'styled-components';
import { useCallback, useState } from "react";

// import { useThemeContext } from '../hooks/useTheme';
import Character from './Character';

type UserTypedProps = {
  charTyped: string;
  check: (index: number) => boolean;
  word: string;
};

const StyledDiv = styled.div`
  &:last-child {
    &::after {
      background-color: #fff;
    }
  }
  `;
// background-color: ${({ theme }) => theme.text.secondary};

const UserTyped = ({ check, charTyped, word }: UserTypedProps) => {
  const characters = useMemo(() => {
    return charTyped.split('');
  }, [charTyped]);

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



  // const { systemTheme } = useThemeContext();
  console.log(characters)
  return (
    <StyledDiv
      className='md:character absolute left-0 top-0 z-10 break-all font-mono text-xl lg:text-2xl'
    // theme={systemTheme}
    >
      {characters.map((_, index) => {
        return (
          <Character character={word.charAt(index)} key={index} state={checkCharacter(index)} />
        );
      })}
    </StyledDiv>
  );
};

export default UserTyped;
