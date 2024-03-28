import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NavBar from '../pages/NavBar';
import MoviesListPage from '../pages/MoviesListPage';
import MovieDetailPage from '../pages/MovieDetailPage';
import ActorListPage from '../pages/ActorListPage';

function App() {
  // Define user state
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        {/* Conditional rendering based on user state */}
        {user && <NavBar user={user} />} 

        {/* Route configuration */}
        <Routes>
          {/* LoginPage route */}
          <Route path="/" element={<LoginPage setUser={setUser} />} />

          {/* Protected routes */}
          {user && (
            <>
              <Route path="/" element={<MoviesListPage />} />
              <Route path="/movies/:movieName" element={<MovieDetailPage />} />
              <Route path="/actors" element={<ActorListPage />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
