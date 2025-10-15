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

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Kayt.am TEST</h1>
      <p>React is working! 🎉</p>
      <Link
        to="/Little-Fox/Hayrik&Little-Fox/1"
        style={{
          display: 'inline-block',
          marginTop: 20,
          padding: '12px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: 6
        }}
      >
        → Hayrik & Little Fox Պատմություններ (տես #1)
      </Link>
    </div>
  );
}

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

export default function App() {
  return (
    <BrowserRouter basename="/KaytArt-Production">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Little-Fox" element={<LittleFoxList />} />
        <Route path="/Little-Fox/Hayrik&Little-Fox/:storyNumber" element={<StoryPage />} />
        <Route path="*" element={
          <div style={{ padding: 20 }}>
            <h1>404 Page Not Found</h1>
            <p>Current path: {window.location.pathname}</p>
            <p>Full URL: {window.location.href}</p>
            <Link to="/">Go Home</Link>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}