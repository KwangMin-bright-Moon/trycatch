import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <h1>title</h1>
      <div>
        <span>다크모드</span>
        <span>옵션</span>
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
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
`;

// const Title = styled.h1`
//     font-size: ${props => props.theme.fonts}
// `
