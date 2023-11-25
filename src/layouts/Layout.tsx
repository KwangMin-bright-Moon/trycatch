import { DefaultTheme } from 'styled-components/dist/types';
import Header from './Header';
import styled from 'styled-components';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

export default function Layout({ setTheme }: Props) {
  return (
    <Wrapper>
      <Header setTheme={setTheme} />
      <main></main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;
