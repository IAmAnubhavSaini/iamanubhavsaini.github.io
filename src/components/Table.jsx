import { Box } from "./Box";
import "./Table.css";

/**
 *
 * @param {{ name: String, data: Array<{ name: String, value: Array<string> }}} ({name, data})
 * @returns
 */
function NamedRowTable({ name, data }) {
    return <div className={`nmr ${name} flex f:v`}>
        {
            data.map((datum, index) => {
                return <div key={`nmr-row-${index}`} className="row flex f:v">
                    <div name={datum.name} key={`nmr-row-${index}-name-0`} className={`col name tt:u`} >{datum.name}</div>
                    <div className="flex f:ac:l f:shrink">
                        {
                            datum.value.map((item, itemIndex) =>
                                <Box name={item.name}
                                    key={`nmr-col-${itemIndex}`}
                                    klass={`thin col ${item.highlight ? "highlight h:" + item.highlight : ""}`} />
                            )
                        }
                    </div>
                </div>
            })
        }
    </div>
}

export { NamedRowTable };
