import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 8px;
  background-color: ${(props): string => props.theme.colors.primary};
`;
