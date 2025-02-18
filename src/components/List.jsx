
function List(props) {
    return <div className="list-item">
        <h2>{props.title}</h2>
        <ul>
            {
                props.values.map((value, index) => <li key={index}>{value}</li>)
            }
        </ul>
    </div>
}

function ListOLink(props) {
    return <div className="list-item">
        <h2>{props.title}</h2>
        <ul className="flex vflex">
            {
                props.values.map((value, index) => <li key={index}>
                    {
                        <a href={value.url} target="_blank" rel="noopener noreferrer">
                            {value.title}
                        </a>
                    }
                </li>)
            }
        </ul>
    </div>


}

export { List, ListOLink };
