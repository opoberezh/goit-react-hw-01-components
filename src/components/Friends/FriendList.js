import { FriendListItem } from "./FriendListItem"

export default function FriendList ({friends}) {
  return (
     <ul className="friend-list">
            {friends.map(({id, avatar, name, isOnline, }) => {
                return (
                        <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                     />
                )
            
                }
         
            )}
        </ul>
  )
       
}


// export const FriendList = ({ friends }) => {
//     return (
//       <Wrapper>
//         <FriendsList>
//           {friends.map(({ id, avatar, name, isOnline }) => (
//             <FriendListItem
//               key={id}
//               avatar={avatar}
//               name={name}
//               isOnline={isOnline}
//             />
//           ))}
//         </FriendsList>
//       </Wrapper>
//     );
//   };
