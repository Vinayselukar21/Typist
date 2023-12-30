'use client';
import Character from './Character';

interface TypingPracticeProps {
    text: string;
}

const TypingPractice = ({ text }: TypingPracticeProps) => {
    return (
        <div className='relative left-0 top-0 break-all font-mono text-xl opacity-80 lg:text-2xl'>
            {text.split('').map((_, index) => { // Use the split() method to convert the string into an array of characters
                return (
                    <Character character={text.charAt(index)} key={index} />
                );
            })}
        </div>
    );
};

export default TypingPractice;
