import React from 'react';
import PropTypes from 'prop-types';
import styles from './friends.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <li className={styles.item} key={id}>
          <span className={isOnline ? styles.online : styles.offline}></span>
          <img className={styles.avatar} src={avatar} alt="" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;
