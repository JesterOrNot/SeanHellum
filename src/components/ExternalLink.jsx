import React from "react"

export default function ExternalLink(props) {
    return <a className="externalLink" href={props.to}>{props.children}</a>
}
