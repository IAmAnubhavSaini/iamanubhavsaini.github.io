function Anchor({ href, title }) {
    return <a href={href}>{title}</a>
}

function ExternalAnchor({ href, title }) {
    return <a href={href}
        target="_blank"
        rel="nofollow"
    >{title}</a>
}

export { Anchor, ExternalAnchor }
