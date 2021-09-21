import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_IS_DEV === 'true' ? 'http://localhost:5000/graphql' : '',
    cache: new InMemoryCache(),
});
