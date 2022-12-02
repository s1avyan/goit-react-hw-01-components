import StatisticsItem from '../statisticsItem/StatisticsItem';
import data from '../DB/data';

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      {data.map(item => (
        <StatisticsItem
          key={item.id}
          id={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
      <ul className="stat-list"></ul>
    </section>
  );
};

export default Statistics;
