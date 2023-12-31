"use client";
import { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useCallback, useState } from "react";

// import { useThemeContext } from '../hooks/useTheme';
import Character from './Character';

type UserTypedProps = {
  charTyped: string;
  check: (index: number) => boolean;
  word: string;
};


// Define the cursorBlink animation
const cursorBlink = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;


const StyledDiv = styled.div`
  &:last-child {
    &::after {
    content: '';
    width: 2px;
    height: 24px;
    margin-bottom: -2px;
    display: inline-block;
    background-color:     #999e9b;
;
    animation: ${cursorBlink} 0.65s  infinite;
    }
  }
  `;
// background-color: ${({ theme }) => theme.text.secondary};

const UserTyped = ({ check, charTyped, word }: UserTypedProps) => {
  const characters = useMemo(() => {
    return charTyped.split('');
  }, [charTyped]);





  // const { systemTheme } = useThemeContext();
  console.log(characters)
  return (
    <StyledDiv
      className='md:character absolute left-0 top-0 z-10 break-all font-mono text-xl lg:text-2xl'
    // theme={systemTheme}
    >
      {characters.map((_, index) => {
        return (
          <Character character={word.charAt(index)} key={index} state={check(index)} />
        );
      })}
    </StyledDiv>
  );
};

export default UserTyped;
