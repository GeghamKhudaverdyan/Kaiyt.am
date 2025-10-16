// src/App.jsx
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import HomePage from './pages/HomePage';
import KaytArtProd from './pages/KaytArtProd';

function LittleFoxList() {
  const slug = 'Hayrik&Little-Fox';

  return (
    <div style={{ padding: 20 }}>
      <h1>Hayrik & Little Fox</h1>
      <p>URL Example: <code>/Little-Fox/{slug}/#3</code></p>

      <h2>History</h2>
      <div style={{ marginTop: 20 }}>
        {[1,2,3,4,5,6,7,8,9,10].map(number => (
          <Link
            key={number}
            to={`/Little-Fox/${slug}/${number}`}
            style={{
              display: 'block',
              margin: '8px 0',
              padding: '12px',
              width: 320,
              textDecoration: 'none',
              border: '1px solid #ccc',
              borderRadius: 6,
            }}
          >
            📖 History #{number}
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>Back to main page</Link>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: 20 }}>
      <h1>404 Page Not Found</h1>
      <p>Current path: {window.location.pathname}</p>
      <p>Full URL: {window.location.href}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/KaytArt-Production" element={<KaytArtProd/>} />
        <Route path="/KaytArt-Production/Little-Fox" element={<LittleFoxList />} />
        <Route path="/KaytArt-Production/Little-Fox/Hayrik&Little-Fox/:storyNumber" element={<StoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}