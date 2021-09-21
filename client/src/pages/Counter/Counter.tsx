import React from 'react';
import Head from 'next/head';

import { Counter as CounterComponent } from 'components/Counter';

import styles from './Counter.module.css';

export const Counter = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/logo.svg" className={styles.logo} alt="logo" />
                <CounterComponent />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a className={styles.link} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        React
                    </a>
                    <span>, </span>
                    <a className={styles.link} href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className={styles.link}
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className={styles.link}
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
            </header>
        </div>
    );
};
