import "./Company.css";

function Company({ name, logo }) {
    return (
        <div className="company">
            {logo && (
                <div>
                    <img src={logo} alt={name} />
                </div>
            )}
            <div>{name}</div>
        </div>
    );
}

export { Company };
