import "./App.css";

import { Route, Routes, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const SearchPage = () => <h1>SearchPage</h1>;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Just trying ReactRouterDom v6</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-page">Search page</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
