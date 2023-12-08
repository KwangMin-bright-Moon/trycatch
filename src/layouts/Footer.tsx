import styled from 'styled-components';
import HomeIcon from '../components/ui/icons/HomeIcon';
import SearchIcon from '../components/ui/icons/SearchIcon';
import ChartIcon from '../components/ui/icons/ChartIcon';
import SettingsIcon from '../components/ui/icons/SettingsIcon';
import { useState } from 'react';
import PlusIcon from '../components/ui/icons/PlusIcon';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Wrapper>
      <Link to={`/`}>
        <NavItem>
          <HomeIcon />
          <Text>Home</Text>
        </NavItem>
      </Link>
      <Link to={`/search`}>
        <NavItem>
          <SearchIcon />
          <Text>Search</Text>
        </NavItem>
      </Link>
      <EmptyDib>
        <Button
          onClick={() => setIsClicked((prev) => !prev)}
          $isClicked={isClicked}
        >
          <PlusIcon />
        </Button>
      </EmptyDib>

      <Link to={`/insights`}>
        <NavItem>
          <ChartIcon />
          <Text>Insights</Text>
        </NavItem>
      </Link>
      <Link to={`/settings`}>
        <NavItem>
          <SettingsIcon />
          <Text>Settings</Text>
        </NavItem>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  transition: background-color 0.5s, color 0.5s;
  width: 100%;
  height: 6rem;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 20px;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  -webkit-box-shadow: ${(props) => props.theme.colors.webkitBoxShadow};
  -moz-box-shadow: ${(props) => props.theme.colors.mozBoxShadow};
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const EmptyDib = styled.div`
  position: relative;
`;

const Text = styled.span`
  font-size: ${(props) => props.theme.fonts.small};
`;

const Button = styled.button<{ $isClicked?: boolean }>`
  background-color: ${(props) => props.theme.colors.primary200};
  color: ${(props) => props.theme.colors.white};
  font-size: 40px;
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -55px;
  left: 0px;
  transform: ${(props) => (props.$isClicked ? 'rotate(45deg)' : 'rotate(0)')};
  transition: all 0.3s ease-in-out;
`;
