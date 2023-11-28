import { DefaultTheme } from 'styled-components/dist/types';
import Header from './Header';
import styled from 'styled-components';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

export default function Layout({ setTheme }: Props) {
  return (
    <Wrapper className='main'>
      <Header setTheme={setTheme} />
      <Main></Main>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Main = styled.main`
  height: 100vh;
`;
