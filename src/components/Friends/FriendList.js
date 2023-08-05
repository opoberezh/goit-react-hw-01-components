import { Wrapper, FriendsList } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <Wrapper>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendsList>
    </Wrapper>
  );
}
