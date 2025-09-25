// LittleFox.jsx
import { Link } from 'react-router-dom';

function LittleFox() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Little Fox</h1>
      <p>URL: Kayt.am/KaytArt-Production/little-fox</p>
      
      <Link 
        to="/KaytArt-Production/little-fox/hayrik&littlefox"
        style={{ color: 'blue' }}
      >
        → Hayrik & Little Fox
      </Link>
    </div>
  );
}

export default LittleFox;