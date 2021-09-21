import React from 'react';
import cnBind, { Argument } from 'classnames/bind';

import { Navbar } from 'components/Navbar';

import styles from './MainLayout.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const MainLayout: React.FC = ({ children }) => {
    return (
        <div className={cx('container')}>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};
