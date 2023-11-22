import styled from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { TCtheme } from '../styles/theme';
import { TCDarkPalette, TCLightPalette } from '../styles/colors';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useEffect } from 'react';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

export default function Header({ setTheme }: Props) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const themeCopy = { ...TCtheme };
    themeCopy.colors = darkMode ? TCDarkPalette : TCLightPalette;
    setTheme(themeCopy);
  }, [darkMode, setTheme]);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <Wrapper>
      <Title>TryCatch</Title>
      <div>
        <button onClick={handleClick}>다크모드</button>
        <button>옵션</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.5s, color 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fonts.medium};
  font-weight: ${(props) => props.theme.fonts.bold};
`;
