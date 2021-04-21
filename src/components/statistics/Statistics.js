import React from 'react';
import styles from './statistic.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.item} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  title: 'Upload stats',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
