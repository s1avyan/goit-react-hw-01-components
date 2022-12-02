import PropTypes from 'prop-types';
import {
  ProfileCardItem,
  ProfileCardItemLabel,
} from '../profileStatistic/ProfileStatistic.styled';

const ProfileStatistic = ({ name, count }) => {
  return (
    <ProfileCardItem key={name}>
      <ProfileCardItemLabel>{name}</ProfileCardItemLabel>
      <span className="count">{count}</span>
    </ProfileCardItem>
  );
};

export default ProfileStatistic;

ProfileStatistic.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
