import React from "react"
import { Image } from "semantic-ui-react"
import { Link } from "react-router-dom"

export function AppHeader() {
  return (
    <>
      <div className="ui clearing segment header-seg">
        <h3 className="ui left floated header header-seg-left">
          <Link to="/">
            <div className="flex">
              <span>
                <Image size="tiny" src="/diggy.png" className="mr-5" />{" "}
              </span>
              <div>
                <p className="header-text">Dgraph</p>
                <p className="t-size">DISCUSS</p>
              </div>
            </div>
          </Link>
        </h3>
      </div>
    </>
  )
}
