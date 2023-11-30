import styled from 'styled-components';
import HomeIcon from '../components/ui/icons/HomeIcon';
import SearchIcon from '../components/ui/icons/SearchIcon';
import ChartIcon from '../components/ui/icons/ChartIcon';
import SettingsIcon from '../components/ui/icons/SettingsIcon';
import { useState } from 'react';
import MinusIcon from '../components/ui/icons/MinusIcon';
import PlusIcon from '../components/ui/icons/PlusIcon';

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Wrapper>
      <NavItem>
        <HomeIcon />
        <Text>Home</Text>
      </NavItem>
      <NavItem>
        <SearchIcon />
        <Text>Search</Text>
      </NavItem>
      <Button onClick={() => setIsClicked((prev) => !prev)}>
        {isClicked ? <MinusIcon /> : <PlusIcon />}
      </Button>
      <NavItem>
        <ChartIcon />
        <Text>Insights</Text>
      </NavItem>
      <NavItem>
        <SettingsIcon />
        <Text>Settings</Text>
      </NavItem>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 6rem;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Text = styled.span`
  font-size: ${(props) => props.theme.fonts.small};
`;

const Button = styled.button`
  background-color: #8e87eb;
  color: ${(props) => props.theme.colors.content};
  font-size: 50px;
  padding: 10px;
  border-radius: 100%;
  position: relative;
  top: -30px;
`;
