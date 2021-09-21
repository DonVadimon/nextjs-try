import React from 'react';
import { gql } from '@apollo/client';
import { client } from 'apollo.client';
import { Product } from 'graphql.schema';
import type { NextPage } from 'next';

import { ProductCard } from 'components/ProductCard';

interface IResp {
    products: Product[];
}

const IndexPage: NextPage<IResp> = ({ products }) => {
    return (
        <div>
            <h1>Products</h1>
            {products.map((prod) => (
                <ProductCard key={prod._id} {...prod} withLink />
            ))}
        </div>
    );
};

export async function getServerSideProps() {
    const { data } = await client.query<IResp>({
        query: gql`
            query products {
                products {
                    _id
                    title
                    price
                }
            }
        `,
    });

    return {
        props: {
            products: data.products,
        },
    };
}

export default IndexPage;
