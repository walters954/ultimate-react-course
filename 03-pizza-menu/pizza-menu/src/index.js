import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
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

function Pizza() {
    return (
        <div>
            <img src="pizzas/focaccia.jpg" alt="Focaccia" />
            <h2>Focaccia</h2>
            <p>Bread with italian olive oil and rosemary</p>
        </div>
    );
}

function Header() {
    return <h1>Fast React Pizza Company</h1>;
}

function Menu() {
    return (
        <div>
            <h2>Menu</h2>
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();

    return (
        <footer>
            {new Date().toLocaleTimeString()}. &copy; 2021 Fast React Pizza
            Company
        </footer>
    );
}
