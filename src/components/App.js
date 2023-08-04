
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import bank from "../data/bank.json";
import Profile  from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transactions/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile username={user.username}
               tag={user.tag}
               location={user.location} 
               avatar={user.avatar}
               stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} 
      />
        <FriendList friends={friends} 
      />
      <TransactionHistory items={bank} />
    </div>


  );
};
