import React from 'react';
import { gql } from '@apollo/client';
import { Client } from 'apollo-client';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Counter } from 'components/Counter/Counter';

import styles from 'styles/Home.module.css';

type Country = {
    code: string;
    name: string;
    emoji: string;
};

interface IResp {
    countries: Country[];
}

const IndexPage: NextPage<{ countries: Country[] }> = ({ countries }) => {
    return (
        <div className={styles.container}>
            <div className="">
                {countries.map(({ code, emoji, name }) => (
                    <div key={code}>{`${code} ${emoji} ${name}`}</div>
                ))}
            </div>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/logo.svg" className={styles.logo} alt="logo" />
                <Counter />
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

export async function getStaticProps() {
    const { data } = await Client.query<IResp>({
        query: gql`
            query Countries {
                countries {
                    code
                    name
                    emoji
                }
            }
        `,
    });

    return {
        props: {
            countries: data.countries.slice(0, 4),
        },
    };
}

export default IndexPage;
