import React from 'react';
import SettingCounter from './SettingCounter';
import styles from './Counter.module.sass';
const Counter3 = () => {
  return (
    <div className={styles.container}>
      <h2>COUNTER</h2>
      <SettingCounter />
    </div>
  );
}

export default Counter3;
