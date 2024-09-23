import "./App.css";
import { useState } from "react";
function App() {
    const [bill, setBill] = useState(0);
    const [yourService, setYourService] = useState(0);
    const [friendService, setFriendService] = useState(0);

    return (
        <div className="App">
            <Bill bill={bill} setBill={setBill} />
            <YourService
                yourService={yourService}
                setYourService={setYourService}
            />
            <FriendService
                friendService={friendService}
                setFriendService={setFriendService}
            />
            <Tip
                yourService={yourService}
                friendService={friendService}
                bill={bill}
            />
            <Reset
                setBill={setBill}
                setYourService={setYourService}
                setFriendService={setFriendService}
            />
        </div>
    );
}

function Bill({ bill, setBill }) {
    return (
        <div>
            <p>How much was the bill?</p>
            <input
                type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />
        </div>
    );
}

function YourService({ yourService, setYourService }) {
    return (
        <ServiceQualitySelector
            service={yourService}
            onServiceChange={setYourService}
        >
            <p>How did you like the service?</p>
        </ServiceQualitySelector>
    );
}

function FriendService({ friendService, setFriendService }) {
    return (
        <ServiceQualitySelector
            service={friendService}
            onServiceChange={setFriendService}
        >
            <p>How did your friend like the service?</p>
        </ServiceQualitySelector>
    );
}

function ServiceQualitySelector({ service, onServiceChange, children }) {
    return (
        <div>
            {children}
            <select
                value={service}
                onChange={(e) => onServiceChange(Number(e.target.value))}
            >
                <option value={0}>Dissatisfied (0%)</option>
                <option value={0.05}>It was okay (5%)</option>
                <option value={0.1}>It was good (10%)</option>
                <option value={0.2}>It was amazing (20%)</option>
            </select>
        </div>
    );
}
function Tip({ yourService, friendService, bill }) {
    const tipAmount = (yourService + friendService) * bill;
    const totalAmount = bill + tipAmount;
    return (
        <div>
            <p>Tip amount: {tipAmount}</p>
            <p>Total amount: {totalAmount}</p>
        </div>
    );
}

function Reset({ setBill, setYourService, setFriendService }) {
    function handleReset() {
        setBill(0);
        setYourService(0);
        setFriendService(0);
    }
    return (
        <div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default App;
