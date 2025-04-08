import { Box } from "./Box";
import "./Stack.css";

function Stack({ stack, name }) {
    return (
        <div className={`stack ${name} flex vflex`}>
            <div className="minorheading">{name}</div>
            {stack.map((level, index) => (
                <div key={`stack-${name}-${index}`} className="level flex">
                    {level.map((item, itemIndex) => (
                        <Box name={item} key={`level-${index}-item-${itemIndex}`} klass={"small light"} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export { Stack };
