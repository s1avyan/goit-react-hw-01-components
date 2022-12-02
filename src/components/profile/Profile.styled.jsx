import styled from '@emotion/styled';

export const ProfileCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  padding: 10px;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to bottom, #16334e 0%, #1f4465 50%, #091723 100%);
`;
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 100px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: aqua;
`;

export const ProfileName = styled.p`
  font-size: 35px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
`;
export const ProfileTag = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
`;
export const ProfileLocation = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
`;
export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-basis: 60px;
  background: #f0f0f0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.4);
  z-index: 5;
`;
