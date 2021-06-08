import "../styles/globals.scss";
import "../assets/css/fontawesome copy.scss";
import { setContext } from "apollo-link-context";
import {
  ApolloCache,
  InMemoryCache,
  ApolloProvider,
  ApolloClient,
} from "@apollo/client";
import { appWithTranslation } from "next-i18next";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);
