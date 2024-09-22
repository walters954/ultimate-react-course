import "./App.css";

function App() {
    return (
        <div className="App">
            <Bill />
            <YourService />
            <FriendService />
            <Tip />
            <Reset />
        </div>
    );
}

function Bill() {
    return (
        <div>
            <h1>Bill</h1>
        </div>
    );
}

function YourService() {
    return (
        <div>
            <h1>Service</h1>
        </div>
    );
}

function FriendService() {
    return (
        <div>
            <h1>Friend Service</h1>
        </div>
    );
}

function Tip() {
    return (
        <div>
            <h1>Tip</h1>
        </div>
    );
}

function Reset() {
    return (
        <div>
            <h1>Reset</h1>
        </div>
    );
}

export default App;
