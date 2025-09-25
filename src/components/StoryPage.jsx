import { useParams } from 'react-router-dom';

function StoryPage() {
  // URL-ից ստանում ենք պատմության համարը
  const { storyNumber } = useParams();
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Պատմություն #{storyNumber}</h1>
      <p>Դուք գտնվում եք Hayrik & Little Fox պատմության {storyNumber} համարի էջում</p>
      
      {/* Ստուգում ենք՝ համարը 1-ից 10-ի մեջ է */}
      {storyNumber >= 1 && storyNumber <= 10 ? (
        <div>
          <h2>✅ Համարը ճիշտ է!</h2>
          <p>Այս էջում կլինի պատմություն #{storyNumber}</p>
        </div>
      ) : (
        <div>
          <h2>❌ Սխալ համար</h2>
          <p>Պատմությունները 1-ից 10 են</p>
        </div>
      )}
      
      <div style={{ marginTop: '30px' }}>
        <p><strong>URL:</strong> Kayt.am/KaytArt-Production/little-fox/hayrik&littlefox/#{storyNumber}</p>
      </div>
    </div>
  );
}

export default StoryPage;