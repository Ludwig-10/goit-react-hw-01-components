import React from 'react';
import Container from './components/container/container';
import Profile from './components/profile/profile';
import user from './data/user.json';
import Statistics from './components/statistics/statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/friendList/friends';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from './components/transactionHistory/transactionHistory';
const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
export default App;
