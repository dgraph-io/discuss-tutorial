import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"
import "semantic-ui-css/semantic.min.css"
import "./index.css"
import "./styles/main.css"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: "https://blue-surf-820037.us-east-1.aws.cloud.dgraph.io/graphql",
  })

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
}

ReactDOM.render(
  <ApolloProvider client={createApolloClient()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
