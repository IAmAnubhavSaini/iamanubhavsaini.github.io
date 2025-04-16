function Tag({ tag }) {
    return <span className="tag">{tag}</span>
}

function Tags({ tags, name }) {
    return <>
        {
            tags &&
            tags.map((tag, index) => <Tag key={`tag-${name}-${index}`} tag={tag} />)
        }
    </>
}

export { Tag, Tags };
