import React from "react"
import "./App.css"
import { Image } from "semantic-ui-react"

export function App() {
  return (
    <>
      <div className="app-banner">
        <div className="inline-flex">
          <span>
            Powered by{" "}
            <a href="https://slash.dgraph.io" target="__blank">
              <strong>Slash GraphQL</strong>
            </a>
          </span>
          <Image size="mini" src="/lighting.svg" className="lightning-logo" />
        </div>
      </div>
      <div className="App">
        <div className="mt-4 mx-8">
          <p>
            Learn about building GraphQL apps with Slash GraphQL at
            https://dgraph.io/learn
          </p>
        </div>
      </div>
    </>
  )
}
