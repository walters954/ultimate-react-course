import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    function handlePrevious() {
        if (step > 1) setStep((s) => s - 1);
    }

    function handleNext() {
        if (step < 3) setStep((s) => s + 1);
    }

    return (
        <div>
            <button className="close" onClick={() => setIsOpen((is) => !is)}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <StepMessage step={step}>
                        <p>
                            Step {step}: {messages[step - 1]}
                        </p>
                    </StepMessage>
                    <div className="buttons">
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            onClick={handlePrevious}
                        >
                            <span>👈</span>
                            Previous
                        </Button>
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            onClick={handleNext}
                        >
                            <span>👉</span>
                            Next
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function StepMessage({ step, children }) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    );
}
