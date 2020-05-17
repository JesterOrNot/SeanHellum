import React from "react"

export default function ExternalLink(props) {
    return <a target="_blank" className="externalLink" href={props.to}>{props.children}</a>
}
