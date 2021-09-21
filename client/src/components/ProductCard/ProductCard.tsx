import React from 'react';
import cnBind, { Argument } from 'classnames/bind';
import Link from 'next/link';

import { ProductCardProps } from './ProductCard.types';

import styles from './ProductCard.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const ProductCard: React.FC<ProductCardProps> = ({ _id, title, price, withLink = false }) => (
    <div className={cx('container')}>
        <h1 className={cx('title')}>{title}</h1>
        <p className={cx('price')}>Price - {price}Р</p>
        {withLink && <Link href={`products/${_id}`}>Go to page</Link>}
    </div>
);
