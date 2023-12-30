// import { useThemeContext } from '../hooks/useTheme';

type CharactersProps = {
  state?: boolean;
  character: string;
  className?: string;
};

const Character = ({ state, character, className }: CharactersProps) => {
  // const { systemTheme } = useThemeContext();
  // console.log(character, state)
  return (
    <span
      style={{
        color:
          state === undefined
            ? ''
            : state === true
              ? '#00BD01'
              : '#BD0101',
        backgroundColor: state === false && character === ' ' ? '#BD0101' : '',
      }}
      className={`${className}`}
    >
      {character}
    </span>
  );
};

export default Character;
