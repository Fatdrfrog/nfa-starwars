import "./App.css";
import { ContentLayout } from "./components/ContentLayout";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Planets } from "./components/Planets";
import { Characters } from "./components/Characters";
import { Starships } from "./components/Starships";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<ContentLayout />}>
          <Route path="/planets" element={<Planets />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/starships" element={<Starships />} />
        </Route>

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}
