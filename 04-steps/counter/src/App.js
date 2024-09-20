import { useState } from "react";

export default function App() {
    return (
        <div>
            <Counter></Counter>
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    return (
        <>
            <div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <span>Steps : {step}</span>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>
            <div>
                {count} days from today is {date.toDateString()}
            </div>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}
