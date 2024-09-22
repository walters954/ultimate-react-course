import { useState } from "react";

export default function Accordion({ data }) {
    const [currentItem, setCurrentItem] = useState(null);

    return (
        <div>
            <h1>Accordion</h1>
            <div className="accordion">
                {data.map((item, index) => (
                    <Item
                        key={index}
                        number={index + 1}
                        title={item.title}
                        currentItem={currentItem}
                        onOpen={setCurrentItem}
                    >
                        {item.text}
                    </Item>
                ))}
            </div>
        </div>
    );
}

function Item({ number, title, currentItem, onOpen, children }) {
    const isOpen = number === currentItem;

    function handleToggle() {
        onOpen(isOpen ? null : number);
    }

    return (
        <div className="item" onClick={handleToggle}>
            <div className="title">
                <span className="number">{number}</span>
                {title}
                <span className="icon">{isOpen ? "-" : "+"}</span>
            </div>
            <div
                className="content-box open"
                style={isOpen ? { height: "auto" } : { display: "none" }}
            >
                <p className="text">{children}</p>
            </div>
        </div>
    );
}
