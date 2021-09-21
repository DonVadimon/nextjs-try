import React from 'react';
import { gql } from '@apollo/client';
import { client } from 'apollo.client';
import { Product } from 'graphql.schema';
import type { GetServerSideProps, NextPage } from 'next';

import { ProductCard } from 'components/ProductCard';

interface IResp {
    product: Product;
}

const ProductPage: NextPage<IResp> = ({ product }) => {
    return (
        <div>
            <h1>One Product</h1>
            <ProductCard {...product} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id as string;

    const { data } = await client.query<IResp>({
        query: gql`
            query getProduct($id: ID!) {
                product(id: $id) {
                    _id
                    title
                    price
                }
            }
        `,
        variables: {
            id
        },
    });

    return {
        props: {
            product: data.product,
        },
    };
};

export default ProductPage;
