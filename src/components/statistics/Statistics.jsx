import ProfileStatistic from '../profileStatistic/ProfileStatistic';
import data from '../DB/data';
const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        <ProfileStatistic stats={data} />
        {/* {propsssss.map(prop => {
          return (
            <li className="item">
              <span className="label">{prop.label}</span>
              <span className="percentage">{prop.percentage}</span>
            </li>
          );
        })} */}
      </ul>
    </section>
  );
};

export default Statistics;
