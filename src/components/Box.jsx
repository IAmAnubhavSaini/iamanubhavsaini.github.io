import "./Box.css";

function Box({ name, logo, klass, children }) {
    return (
        <div className={`box ${klass}`}>
            {logo && (
                <div>
                    <img src={logo} alt={name} />
                </div>
            )}
            <div>{name}</div>
            {children}
        </div>
    );
}

export { Box };
