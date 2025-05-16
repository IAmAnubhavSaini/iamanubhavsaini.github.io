import "./Company.css";

function Company({ klass, company }) {

    return (
        <div className={`company ${klass} flex f:v`}>
            {company.logo && (
                <div>
                    <img src={company.logo} alt={company.name} />
                </div>
            )}
            <div className="subheading tt:u fw:b">{company.name}</div>
            <div>{company.role}</div>
            <div>[{company.duration}]</div>
        </div>
    );
}

export { Company };
