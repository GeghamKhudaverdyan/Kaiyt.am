import { Link } from 'react-router-dom';

function HayrikLittleFox() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Hayrik & Little Fox</h1>
      <p>URL: Kayt.am/KaytArt-Production/little-fox/hayrik&littlefox</p>
      
      <h2>History:</h2>
      <div style={{ marginTop: '20px' }}>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
          <Link 
            key={number}
            to={`/KaytArt-Production/little-fox/hayrik&littlefox/${number}`}
            style={{ 
              display: 'block', 
              margin: '10px 0', 
              color: 'blue',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              textDecoration: 'none'
            }}
          >
            📖 History #{number}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HayrikLittleFox;