
import {Wrapper,  Description,  Avatar,  Username,  Tag,  Location,  Status,  Item,  Label,  Quantity,} from './Profile.styled';

export default function Profile ({ username,
    tag, location,  avatar,  stats: { followers, views, likes },})  {
        return  (
      
        <Wrapper>
        <Description>
          <Avatar
            src={avatar}
            alt="User avatar"/>
          <Username>{username}</Username>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>
      
        <Status>
          <Item>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </Item>
          <Item>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </Item>
          <Item>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </Item>
        </Status>
      </Wrapper>
      )
    }
    