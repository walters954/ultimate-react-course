import { useState } from "react";

export default function Accordion({ data }) {
    return (
        <div>
            <h1>Accordion</h1>
            <div className="accordion">
                {data.map((item, index) => (
                    <Item
                        key={index}
                        number={index + 1}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}

function Item({ number, title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className="item">
            <div className="title" onClick={handleToggle}>
                <span className="number">{number}</span>
                {title}
                <span className="icon">{isOpen ? "-" : "+"}</span>
            </div>
            <div
                className="content-box open"
                style={isOpen ? { height: "auto" } : { display: "none" }}
            >
                <p className="text">{text}</p>
            </div>
        </div>
    );
}
