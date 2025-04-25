import { useEffect, useState } from "react";
import "./FizzBuzz.css";

function FizzBuzz() {
    const [count, setCount] = useState(100);
    const [items, setItems] = useState(new Array(count).fill(0).map((_, i) => <div key={`fizzbuzz-${i}`} className="fizzbuzz">&nbsp;</div>));

    useEffect(() => {
        setItems(new Array(count).fill(0).map((_, i) => <div key={`fizzbuzz-${i}`} className="fizzbuzz"></div>));
    }, [count]);

    return (
        <div className="flex f:v">
            <div className="subheading tt:u">CSS based FizzBuzz</div>
            <div className="flex">
                <label htmlFor="fizzbuzz-count"> upto: {count}</label>
                <input
                    type="range"
                    min={0}
                    max={1000}
                    step={10}
                    value={count}
                    onChange={e => setCount(Number(e.target.value))}
                    onInput={e => setCount(Number(e.target.value))}
                />
            </div>
            <div className="flex" id="fizzbuzz">
                {items}
            </div>
        </div>
    );
}

export { FizzBuzz };
