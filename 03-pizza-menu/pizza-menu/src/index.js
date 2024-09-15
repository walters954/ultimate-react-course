import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data.js";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function Pizza({ pizzaObj }) {
    return (
        <li
            className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}
            key={pizzaObj.name}
        >
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Company</h1>
        </header>
    );
}

function Menu() {
    const hasPizzas = pizzaData.length > 0;
    return (
        <main className="menu">
            <h2>Menu</h2>

            {hasPizzas ? (
                <>
                    <p>
                        Authentic italian cuisine. 6 creative dishes to choose
                        from all our stone over, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => {
                            return <Pizza pizzaObj={pizza} key={pizza.name} />;
                        })}
                    </ul>
                </>
            ) : null}

            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Bread with italian olive oil and rosemary"
                photoName="pizzas/focaccia.jpg"
                price={10}
            /> */}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const open = 12;
    const closeHour = 22;
    const isOpen = hour >= open && hour < closeHour;

    console.log("isOpen", isOpen);

    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}. &copy; 2021 Fast React Pizza
            Company {isOpen ? "We are open" : "We are closed"}
            {isOpen ? <Order closeHour={closeHour} /> : <p>Sorry</p>}
        </footer>
    );
}

function Order({ closeHour }) {
    return (
        <div className="order">
            <p>
                We're open! Call us at{" "}
                <a href="tel:+1234567890">123-456-7890</a> to place an order. We
                close at {closeHour}.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}
