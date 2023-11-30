import { DefaultTheme } from 'styled-components/dist/types';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

export default function Layout({ setTheme }: Props) {
  return (
    <>
      <Header setTheme={setTheme} />
      <Content></Content>
      <Footer />
    </>
  );
}

const Content = styled.section`
  flex: 1 1 auto;
  overflow-y: auto;
`;
