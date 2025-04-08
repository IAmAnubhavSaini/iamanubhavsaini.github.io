import "./Box.css";

function Box({name, logo, klass }) {
    return (
        <div className={`box ${klass}`}>
            {logo && (
                <div>
                    <img src={logo} alt={name} />
                </div>
            )}
            <div>{name}</div>
        </div>
    );
}

export { Box };
