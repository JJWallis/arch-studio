import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import GlobalStyles from '../components/styled/GlobalStyles';
import { Theme } from '../config/theme';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider theme={Theme}>
         <GlobalStyles />
         <Header />
         <main id="main">
            <Component {...pageProps} />
         </main>
         <footer></footer>
      </ThemeProvider>
   );
}

export default MyApp;
