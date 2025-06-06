import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Rorisang-Mathiba/"
              target="_blank"
              rel="noreferrer"
            >
              Rorisang Mathiba
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Rorisang-Mathiba/Dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a
              href="https://dictionary-projeect.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
