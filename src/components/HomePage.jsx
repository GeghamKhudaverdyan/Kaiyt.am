import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Kayt.am</h1>
      <p>Բարի գալուստ Kayt.am կայք</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link 
          to="/KaytArt-Production" 
          style={{ 
            display: 'block', 
            margin: '10px 0', 
            color: 'blue', 
            textDecoration: 'underline' 
          }}
        >
          → KaytArt Production
        </Link>
      </div>
    </div>
  );
}

export default HomePage;