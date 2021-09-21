import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo.client';
import store from 'app/store';
import { MainLayout } from 'layouts/MainLayout';
import type { AppProps } from 'next/app';

import 'styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </ApolloProvider>
    );
}
