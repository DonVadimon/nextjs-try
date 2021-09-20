import React from 'react';
import { Provider } from 'react-redux';
import store from 'app/store';
import type { AppProps } from 'next/app';

import 'styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
