import { useState } from "react";
import Logo from "./Logo";
import Form from "./components/Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
    const [items, setItems] = useState(initialItems);

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const packedPercentage = Math.round((numPacked / numItems) * 100);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItems(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItems(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleClearList() {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) {
            setItems([]);
        }
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItems={handleDeleteItems}
                onToggleItems={handleToggleItems}
                onClearList={handleClearList}
            />
            <Stats
                numItems={numItems}
                numPacked={numPacked}
                packedPercentage={packedPercentage}
            />
        </div>
    );
}
