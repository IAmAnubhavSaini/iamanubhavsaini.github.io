import { Box } from "./Box";
import "./Table.css";

/**
 *
 * @param {{ name: String, data: Array<{ name: String, value: Array<string> }}} ({name, data})
 * @returns
 */
function NamedRowTable({ name, data }) {
    return <div className={`nmr ${name} flex vflex`}>
        {
            data.map((datum, index) => {
                return <div key={`nmr-row-${index}`} className="row flex">
                    <Box name={datum.name} key={`nmr-row-${index}-name-0`} klass="col name t:dim tt:u ta:l" />
                    <div className="flex f:ac:l f:shrink">
                        {
                            datum.value.map((item, itemIndex) =>
                                <Box name={item} key={`nmr-col-${itemIndex}`} klass="col :hc:accent" />
                            )
                        }
                    </div>
                </div>
            })
        }
    </div>
}

export { NamedRowTable };

