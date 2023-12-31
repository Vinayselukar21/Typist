import { useState } from 'react';
import styled from 'styled-components';

// import { useClipboard } from '../hooks/useClipboard';
// import { useScreenShot } from '../hooks/useScreenShot';
// import { useThemeContext } from '../hooks/useTheme';


import Character from './Character';
import ResultCard from './ResultCard';

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

type ModalContentProps = {
  totalTime: number;
  history: HistoryType;
  results: Results;
};

const StyledCopyButton = styled.button`
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const ModalContent = ({ totalTime, history, results }: ModalContentProps) => {
  // const [copied, setCopied] = useState(false);
  // const [imageCopied, setImageCopied] = useState(false);

  // const { copyTextToClipboard } = useClipboard();
  // const { ref, image, getImage } = useScreenShot();
  // const { systemTheme } = useThemeContext();

  return (
    <div
      className='mx-auto flex h-full w-[95%] flex-col gap-10 pb-10 pt-8 font-mono'
    // style={{
    //   color: systemTheme.text.primary,
    // }}
    >
      <div
        // ref={ref}
        className='flex-[3] px-5 py-7'
      // style={{
      //   backgroundColor: systemTheme.background.primary,
      // }}
      >
        <div className=' grid grid-flow-col grid-rows-6 justify-center gap-4 sm:grid-rows-4 sm:justify-normal lg:grid-rows-2 lg:justify-normal lg:gap-10 '>
          <ResultCard
            title='wpm/cpm'
            tooltipId='wpm'
            tooltipContent='words per minute / characters per minute'
            tooltipPlace='top'
            results={`${results.wpm} / ${results.cpm}`}
          />
          <ResultCard
            title='acc.'
            tooltipId='accuracy'
            tooltipContent='accuracy percentage'
            tooltipPlace='bottom'
            results={`${Math.round(results.accuracy)}%`}
          />
          <ResultCard
            title='character'
            tooltipId='character'
            tooltipContent='correct/incorrect'
            tooltipPlace='top'
            results={`${Math.round(
              history.typedHistory.length * (results.accuracy / 100)
            )} / ${Math.round(
              history.typedHistory.length * (results.error / 100)
            )}`}
          />
          <ResultCard
            title='err.'
            tooltipId='error'
            tooltipContent='error percentage'
            tooltipPlace='bottom'
            results={`${Math.round(results.error)}%`}
          />
          <ResultCard
            title='time'
            tooltipId='time'
            tooltipContent='time taken to complete the test'
            tooltipPlace='top'
            results={`${totalTime / 1000}s`}
          />
          <ResultCard
            title='total'
            tooltipId='total'
            tooltipContent='total character typed'
            tooltipPlace='bottom'
            results={`${history.typedHistory.length}`}
          />
        </div>
      </div>


    </div>
  );
};

export default ModalContent;
