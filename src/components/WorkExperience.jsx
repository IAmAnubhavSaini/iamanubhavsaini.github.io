import { useState } from "react";
import "./WorkExperience.css";

function WorkExperience({ klass, experience, showDetails = false, toggleDetails }) {
    return (
        <div onClick={toggleDetails} className={`work-experience ${klass ?? ""} flex f:v padding:1 gap:2`}>
            <div className="flex ai:b f:v gap:0">
                {experience.logo && (
                    <div>
                        <img src={experience.logo} alt={experience.name} />
                    </div>
                )}
                <div className="subheading tt:u fw:b">{experience.name}</div>
                <div>[{experience.duration}]</div>
                <div>{experience.location && experience.location.join("; ")}</div>
            </div>
            <div className="tt:u fw:b">{experience.role}</div>
            {showDetails && (
                <>
                    {experience.projects.length > 0 && (
                        <div className="flex f:v gap:0">
                            {experience.projects.length > 0 && <div className="tt:u fw:b fs:i">projects</div>}
                            {experience.projects.length > 0 && (
                                <ol className="flex f:v gap:0">
                                    {experience.projects.map((p, index) => (
                                        <li key={`work-experience-project-${index}`} className="flex f:v gap:0">
                                            <div className="tt:u">{p.name}</div>
                                            <div className="fs:i">{p.description}</div>
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </div>
                    )}

                    <div className="flex gap:2 f:sa">
                        {experience.responsibilities.length > 0 && (
                            <div className="flex f:v gap:0">
                                {experience.responsibilities.length > 0 && (
                                    <div className="tt:u fw:b fs:i">responsibilities</div>
                                )}
                                {experience.responsibilities.length > 0 && (
                                    <div className="flex f:v gap:0">
                                        {experience.responsibilities.map((r, index) => (
                                            <div key={`work-experience-responsibility-${index}`} className="fs:i">
                                                {r}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {experience.skills.length > 0 && (
                            <div className="flex f:v gap:0">
                                {experience.skills.length > 0 && <div className="tt:u fw:b fs:i">skills</div>}
                                {experience.skills.length > 0 && (
                                    <div className="flex f:v gap:0">
                                        {experience.skills.map((s, index) => (
                                            <div key={`work-experience-skill-${index}`} className="fs:i">
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {experience.tags.length > 0 && (
                            <div className="flex f:v gap:0">
                                {experience.tags.length > 0 && <div className="tt:u fw:b fs:i">tags</div>}
                                {experience.tags.length > 0 && (
                                    <div className="flex f:v gap:0">
                                        {experience.tags.map((t, index) => (
                                            <div key={`work-experience-tag-${index}`} className="fs:i">
                                                {t}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

function WorkExperienceList({ klass, experiences }) {
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return (
        <>
            <div>
                <button className="button" onClick={toggleDetails}>
                    {showDetails ? "hide details" : "show details"}
                </button>
            </div>
            <div className="flex gap:4 ">
                {experiences.map((experience, index) => (
                    <WorkExperience
                        showDetails={showDetails}
                        key={`work-experience-${index}`}
                        klass={klass}
                        experience={experience}
                        toggleDetails={toggleDetails}
                    />
                ))}
            </div>
        </>
    );
}

export { WorkExperience, WorkExperienceList };
