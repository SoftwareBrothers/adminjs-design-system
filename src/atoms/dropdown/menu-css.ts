import styled from 'styled-components';

interface WrapperProps {
  isOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.default};
  border-radius: 2px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity .2s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
`

export default Wrapper
