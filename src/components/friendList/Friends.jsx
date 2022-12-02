import FriendListItem from '../friendListItem/FriendListItem';
import friends from '../DB/friends';
const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;
