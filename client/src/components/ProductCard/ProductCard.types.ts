import { Product } from 'graphql.schema';

export type ProductCardProps = Product & { withLink?: boolean };
