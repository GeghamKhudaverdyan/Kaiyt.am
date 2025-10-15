import { useParams, useNavigate } from 'react-router-dom';

function StoryPage() {
  const { storyNumber } = useParams();
  const navigate = useNavigate();
  const storyNum = parseInt(storyNumber, 10);
  
  console.log("Story number (string):", storyNumber);
  console.log("Story number (parsed):", storyNum);
  
  const isValid = !isNaN(storyNum) && storyNum >= 1 && storyNum <= 10;
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>History #{isValid ? storyNum : '?'}</h1>
      <p>Hayrik & Little Fox Story {isValid ? storyNum : '?'} number page</p>
      
      {isValid ? (
        <div>
          <h2>✅ Number is right!</h2>
          <p>In this page will be a story #{storyNum}</p>
        </div>
      ) : (
        <div>
          <h2>❌ Error</h2>
          <p>Choose only 1-10</p>
        </div>
      )}
      
      <div style={{ marginTop: '30px' }}>
        <p><strong>URL:</strong> Kayt.am/KaytArt-Production/Little-Fox/Hayrik&Little-Fox/{storyNum}</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => navigate('/Little-Fox')}
          style={{ padding: '10px 14px', cursor: 'pointer', marginRight: 10 }}
        >
          Back to List
        </button>
        <button
          onClick={() => navigate('/')}
          style={{ padding: '10px 14px', cursor: 'pointer' }}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default StoryPage;