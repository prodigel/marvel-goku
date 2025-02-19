import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
