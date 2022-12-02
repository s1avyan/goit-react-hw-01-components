import styled from '@emotion/styled';

export const ProfileCardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  padding: 0 15px;
  border-right: 1px dotted black;
  &:last-child {
    border-right: none;
  }
`;
export const ProfileCardItemLabel = styled.span`
  text-transform: capitalize;
`;
