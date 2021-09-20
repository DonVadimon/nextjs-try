import { ApolloClient, InMemoryCache } from '@apollo/client';

export const Client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
});
