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

    function handleStepIncrease() {
        if (step > 0) setStep((s) => s + 1);
    }

    function handleStepDecrease() {
        if (step > 1) setStep((s) => s - 1);
    }

    return (
        <>
            <div>
                <button onClick={handleStepDecrease}>-</button>
                <span>Steps : {step}</span>
                <button onClick={handleStepIncrease}>+</button>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <span>Count : {count}</span>
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>
            <div>
                {count} days from today is {date.toDateString()}
            </div>
        </>
    );
}
