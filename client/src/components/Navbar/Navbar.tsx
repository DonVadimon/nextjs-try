import React from 'react'
import cnBind, { Argument } from 'classnames/bind';
import Link from 'next/link'

import styles from './Navbar.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const Navbar = () => {
    return (
        <div className={cx('container')}>
            <Link href="/counter">Counter</Link>
            <Link href="/products">Products</Link>
            <Link href="/">Main</Link>
        </div>
    )
}
