import { DefaultTheme } from 'styled-components/dist/types';
import Header from './Header';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

export default function Layout({ setTheme }: Props) {
  return (
    <div>
      <Header setTheme={setTheme} />
    </div>
  );
}
