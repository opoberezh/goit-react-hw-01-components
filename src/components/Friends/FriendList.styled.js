import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  margin: auto;
  padding: 10px 35px;
  overflow: hidden;
`;

export const FriendsList = styled.ul`
  width: 280px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  gap: 15px;
  box-shadow: 0px 2px 15px 2px rgba(120, 120, 120, 0.5);
  border-radius: 10px;
`;

export const OnlineStatus = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;


export const Avatar = styled.img`
  border-radius: 6px;
  background-color: gainsboro;
  padding: 3px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
`;
