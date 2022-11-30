// import ProfileStatistic from 'components/profileStatistic/ProfileStatistic';

const Profile = props => {
  console.log('🚀 ~ props', props);

  return (
    <section className="profile">
      <div className="description">
        {/* <img src={avatar} alt="User avatar" className="avatar" /> */}
        {/* <p className="name">{name}</p> */}
        {/* <p className="tag">@{tag}</p> */}
        {/* <p className="location">{location}</p> */}
      </div>
      {/* <ul className="stats">
        {Object.keys(stats).map(key => (
          <li key={key} className="stats">
            <span className="label">{key}</span>
            <span className="likes">{stats[key]}</span>
          </li>
        ))}
      </ul> */}
    </section>
  );
};
export default Profile;
