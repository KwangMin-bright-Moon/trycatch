import styled from 'styled-components';
import { FaMoon } from 'react-icons/fa';
import { MdOutlineWbSunny } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

import { DefaultTheme } from 'styled-components/dist/types';
import { TCDarkPalette, TCLightPalette } from '../styles/colors';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useEffect } from 'react';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

export default function Header({ setTheme }: Props) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    setTheme((prev) => ({
      ...prev,
      colors: darkMode ? TCDarkPalette : TCLightPalette,
    }));
  }, [darkMode, setTheme]);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <Wrapper>
      <Title>TryCatch</Title>
      <div>
        <Button onClick={handleClick}>
          {darkMode ? <MdOutlineWbSunny /> : <FaMoon />}
        </Button>
        <Button $isLast>
          <GiHamburgerMenu />
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  max-width: 500px;
  z-index: 1000;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px;
  color: ${(props) => props.theme.colors.content};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fonts.medium};
  font-weight: ${(props) => props.theme.fonts.bold};
`;

const Button = styled.button<{ $isLast?: boolean }>`
  margin-right: ${(props) => (props.$isLast ? '0' : '1.5rem')};
  font-size: ${(props) => props.theme.fonts.medium};
`;
