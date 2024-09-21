import { useState } from "react";
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

function Logo() {
    return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();
        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}

function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = items;
    }

    if (sortBy === "description") {
        sortedItems = items
            .slice()
            .sort((a, b) =>
                a.description.toString().localeCompare(b.description.toString())
            );
    }

    if (sortBy === "packed") {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        onDeleteItems={onDeleteItems}
                        onToggleItems={onToggleItems}
                    ></Item>
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    );
}

function Item({ item, onDeleteItems, onToggleItems }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                checked={item.packed}
                onChange={() => onToggleItems(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItems(item.id)}>❌</button>
        </li>
    );
}

function Stats({ numItems, numPacked, packedPercentage }) {
    if (numItems === 0)
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </footer>
        );

    return (
        <footer className="stats">
            <em>
                {packedPercentage === 100
                    ? "You got everything! Ready to go ✈"
                    : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${packedPercentage}%)`}
            </em>
        </footer>
    );
}
