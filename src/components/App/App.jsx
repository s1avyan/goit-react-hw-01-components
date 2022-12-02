import Profile from '../profile/Profile';
import Statistics from '../statistics/Statistics';
import FriendList from '../friendList/Friends';
import TransactionHistory from '../transactionHistory/TransactionHistory';
import user from '../DB/user';
import { Container } from './App.styled';
export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </Container>
  );
}
