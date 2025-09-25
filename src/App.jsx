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
      <h1>Kayt.am ԹԵՍՏ</h1>
      <p>React-ը աշխատում է! 🎉</p>
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
  // հիմա օգտագործում ենք ոչ encoded slug՝ որպես raw մասնիկ
  const slug = 'hayrik&littlefox';

  return (
    <div style={{ padding: 20 }}>
      <h1>Hayrik & Little Fox</h1>
      <p>URL օրինակ: <code>/little-fox/{slug}/#3</code></p>

      <h2>Պատմություններ</h2>
      <div style={{ marginTop: 20 }}>
        {[1,2,3,4,5,6,7,8,9,10].map(number => (
          // ՆՍՏԱՑԻՐ՝ ավելացնում ենք trailing slash մինչեւ hash
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
            📖 Պատմություն #{number}
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>← Վերադարձ գլխավոր էջ</Link>
      </div>
    </div>
  );
}

function Story() {
  // Մեր Route-ը վերցնում է slug-ը՝ համ `/*` որը թույլ կտա trailing slash
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // location.hash կլինի օրինակ "#3" կամ "" եթե չկա
  const rawHash = location.hash || ''; // e.g. "#3"
  const withoutHash = rawHash.startsWith('#') ? rawHash.slice(1) : rawHash;
  const storyNumber = Number(withoutHash);

  const valid = Number.isInteger(storyNumber) && storyNumber >= 1 && storyNumber <= 10;

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>{valid ? `Պատմություն #${storyNumber}` : 'Ընտրեք Պատմություն (#n)'}</h1>

      {valid ? (
        <>
          <p>Դուք գտնվում եք {slug} պատմության {storyNumber} համարի էջում</p>
          <h2>✅ Համարը ճիշտ է!</h2>
          <p>Այստեղ կտեղադրվի պատմությունը #{storyNumber}</p>
        </>
      ) : (
        <>
          <h2>ℹ️ Պահանջվում է ընտրված համար</h2>
          <p>Խնդրում ենք ընտրել 1–10 միջակայքից որևէ մեկը (URL-ում օգտագործելով #n)։</p>
          <p>Օրինակ՝ <code>/little-fox/{slug}/#3</code></p>
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
          ← Վերադարձ
        </button>
      </div>
    </div>
  );
}

export default function App() {
  // Եթե ուզում ես basename-ը պահես՝ թողիր, այլապես հանի այն
  return (
    <BrowserRouter basename="/KaytArt-Production">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/little-fox" element={<Hayrik />} />
        {/* Օգտագործում ենք '*' որպեսզի trailing slash նախքան '#' լավ ընդունվի */}
        <Route path="/little-fox/:slug/*" element={<Story />} />
        <Route path="*" element={<div style={{ padding: 20 }}>404 — Բացակայող էջ</div>} />
      </Routes>
    </BrowserRouter>
  );
}