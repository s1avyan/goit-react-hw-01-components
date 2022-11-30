import PropTypes from 'prop-types';
import Statistics from './statistics/Statistics';

import user from './DB/user';
import Profile from './profile/Profile';

export default function App() {
  return (
    <div>
      <Profile user={user} />
      {/* <Statistics stats={data} /> */}
      <Statistics />
    </div>
  );
}
Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
