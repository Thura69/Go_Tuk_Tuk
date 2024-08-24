import "./App.css";
import createApolloClient from "../src/graphql/apolliClient";
import { RouterProvider } from "react-router-dom";

import useAppRouter from "./routers/main-routes";
import { ApolloProvider } from "@apollo/client";

function App() {
  const apolloClient = createApolloClient();
  const router = useAppRouter();

  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
