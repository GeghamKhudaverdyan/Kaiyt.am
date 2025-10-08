import { useParams } from 'react-router-dom';

function StoryPage() {

  const { storyNumber } = useParams();
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>History #{storyNumber}</h1>
      <p> Hayrik & Little Fox Story {storyNumber} number page</p>
      

      {storyNumber >= 1 && storyNumber <= 10 ? (
        <div>
          <h2>✅ Number is right!</h2>
          <p>In this page will be a story #{storyNumber}</p>
        </div>
      ) : (
        <div>
          <h2>❌ Error </h2>
          <p>Choos only 1-10</p>
        </div>
      )}
      
      <div style={{ marginTop: '30px' }}>
        <p><strong>URL:</strong> Kayt.am/KaytArt-Production/little-fox/hayrik&littlefox/#{storyNumber}</p>
      </div>
    </div>
  );
}

export default StoryPage;