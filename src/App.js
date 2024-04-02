import logo from './logo.svg';
import './App.css';
import Chat from "./components/Chat";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>AI</h1>
            </header>
            <main>
                <Chat/>
            </main>
        </div>
    )
        ;
}

export default App;
