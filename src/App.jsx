// src/App.jsx
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation
} from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Kayt.am TEST</h1>
      <p>React is working! 🎉</p>
      <Link
        to="/little-fox/hayrik&littlefox/#1"
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

function Hayrik() {
  const slug = 'hayrik&littlefox';

  return (
    <div style={{ padding: 20 }}>
      <h1>Hayrik & Little Fox</h1>
      <p>URL Example: <code>/little-fox/{slug}/#3</code></p>

      <h2>History</h2>
      <div style={{ marginTop: 20 }}>
        {[1,2,3,4,5,6,7,8,9,10].map(number => (
          <Link
            key={number}
            to={`/little-fox/${slug}/#${number}`}
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
        <Link to="/" style={{ textDecoration: 'none' }}> Beck to main page</Link>
      </div>
    </div>
  );
}

function Story() {

  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();


  const rawHash = location.hash || ''; // e.g. "#3"
  const withoutHash = rawHash.startsWith('#') ? rawHash.slice(1) : rawHash;
  const storyNumber = Number(withoutHash);

  const valid = Number.isInteger(storyNumber) && storyNumber >= 1 && storyNumber <= 10;

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>{valid ? `History #${storyNumber}` : 'Choos History (#n)'}</h1>

      {valid ? (
        <>
          {/* <p>Դուք գտնվում եք {slug} պատմության {storyNumber} համարի էջում</p> */}
          <h2>✅ Number is Right!</h2>
          {/* <p>Այստեղ կտեղադրվի պատմությունը #{storyNumber}</p> */}
        </>
      ) : (
        <>
          <h2>ℹ️ Whanted chosen number</h2>
          <p> Chose one 1-10 (URL #n)։</p>
          <p>Example <code>/little-fox/{slug}/#3</code></p>
        </>
      )}

      <div style={{ marginTop: 30 }}>
        <p>
          <strong>URL:</strong> /KaytArt-Production/little-fox/{slug}{rawHash || '/#n'}
        </p>
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => navigate(-1)}
          style={{ padding: '10px 14px', cursor: 'pointer' }}
        >
          Beck
        </button>
      </div>
    </div>
  );
}

export default function App() {

  return (
    <BrowserRouter basename="/KaytArt-Production">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/little-fox" element={<Hayrik />} />

        <Route path="/little-fox/:slug/*" element={<Story />} />
        <Route path="*" element={<div style={{ padding: 20 }}>404 Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}