import './assets/fonts/fonts.css';

import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider, Spinner, theme } from '@chakra-ui/react';

import ErrorFallBack from './components/base/error-page';
import AllRoutes from './routes';

export const App = () => (
  <>
    {/* <Helmet>
      <title>TTT Role Showcase</title>
    </Helmet> */}
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        {/* <Middlewares> */}
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <AllRoutes />
          </Suspense>
        </BrowserRouter>
        {/* </Middlewares> */}
      </ErrorBoundary>
    </ChakraProvider>
  </>
);
