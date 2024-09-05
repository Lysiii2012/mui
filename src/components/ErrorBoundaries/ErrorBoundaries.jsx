import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = () => (
    <div role="alert">
        <h1>Sorry, something went wrong.</h1> 
    </div>
);

const ErrorBoundaries = ({ children }) => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
    </ErrorBoundary>
);

export default ErrorBoundaries;

