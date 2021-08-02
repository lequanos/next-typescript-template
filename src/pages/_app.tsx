// Import React
import * as React from 'react';

// Type
type MyAppProps = {
  Component: React.ComponentType;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
