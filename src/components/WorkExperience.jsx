import { useEffect, useState } from "react";
import "./WorkExperience.css";

function WorkExperience({ klass, experience, showDetails }) {
    const [expand, $expand] = useState(showDetails);

    useEffect(() => {
        $expand(showDetails);
    }, [showDetails]);

    return (
        <div onClick={() => $expand(!expand)} className={`work-experience ${klass ?? ""} padding:1`}>
            <div className="flex f:v ai:b gap:0">
                {experience.logo && (
                    <div>
                        <img src={experience.logo} alt={experience.name} />
                    </div>
                )}
                <div className="subheading tt:u fw:b">{experience.name}</div>
                <div>[{experience.duration}]</div>
                <div>{experience.location && experience.location.join("; ")}</div>
            </div>
            <div className="flex f:v tt:u fw:b">{experience.role}</div>
            {expand && (
                <div className="flex f:v gap:0">
                    {experience.projects.length > 0 && (
                        <div className="flex f:v gap:0">
                            {experience.projects.length > 0 && <div className="tt:u fw:b fs:i">projects</div>}
                            {experience.projects.length > 0 && (
                                <ol className="flex f:v gap:0 f:v">
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

                    <div className="flex f:v f:sb">
                        {experience.responsibilities.length > 0 && (
                            <div className="flex">
                                {experience.responsibilities.length > 0 && (
                                    <div className="tt:u fw:b fs:i">responsibilities</div>
                                )}
                                {experience.responsibilities.length > 0 && (
                                    <div className="flex f:v">
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
                            <div className="flex">
                                {experience.skills.length > 0 && <div className="tt:u fw:b fs:i">skills</div>}
                                {experience.skills.length > 0 && (
                                    <div className="flex f:v">
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
                            <div className="flex">
                                {experience.tags.length > 0 && <div className="tt:u fw:b fs:i">tags</div>}
                                {experience.tags.length > 0 && (
                                    <div className="flex f:v">
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
                </div>
            )}
        </div>
    );
}

function WorkExperienceList({ klass, experiences }) {
    const [expandAll, $expandAll] = useState(false);
    const toggleDetails = () => {
        $expandAll(!expandAll);
    };
    return (
        <>
            <div className="flex f:v gap:2">
                <div>
                    <button className="button" onClick={toggleDetails}>
                        {expandAll ? "close all" : "expand all"}
                    </button>
                </div>
            </div>
            <div className="flex">
                {experiences.map((experience, index) => (
                    <WorkExperience
                        showDetails={expandAll}
                        key={`work-experience-${index}`}
                        klass={"flex f:v"}
                        experience={experience}
                    />
                ))}
            </div>
        </>
    );
}

export { WorkExperience, WorkExperienceList };
