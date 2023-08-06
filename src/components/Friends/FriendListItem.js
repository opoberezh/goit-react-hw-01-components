import { Item, OnlineStatus, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <>
        <Item>
          <OnlineStatus isonline={isOnline}/> 
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Item>
      </>
    );
  };
  
  
  
  
  
  