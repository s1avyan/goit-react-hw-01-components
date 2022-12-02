import PropTypes from 'prop-types';
// module
import ProfileStatistic from '../profileStatistic/ProfileStatistic';
// css
import {
  ProfileImg,
  ProfileCard,
  ProfileDescription,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileImg src={avatar} alt={username} className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>
      <ProfileStats>
        {Object.entries(stats).map(([name, value]) => (
          <ProfileStatistic key={value} name={name} count={value} />
        ))}
      </ProfileStats>
    </ProfileCard>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  // stats: PropTypes.string.isRequired,
};
export default Profile;

// followers={stats.followers}
// views={stats.views}
// likes={stats.likes}
