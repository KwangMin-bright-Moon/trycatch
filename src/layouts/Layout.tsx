import { DefaultTheme } from 'styled-components/dist/types';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import { ReactNode } from 'react';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  children: ReactNode;
};

export default function Layout({ setTheme, children }: Props) {
  return (
    <>
      <Header setTheme={setTheme} />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

const Content = styled.section`
  flex: 1 1 auto;
  overflow-y: auto;
  margin-top: 6rem;
`;
