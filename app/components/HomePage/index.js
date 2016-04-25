/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

// import img from './banner.jpg';
import styles from './index.css';

export function HomePage() {
  return (
    <div className={ styles.header }>
      <h1 className={ styles.h1 }>Greenville</h1>
    </div>
  );
}

export default HomePage;
