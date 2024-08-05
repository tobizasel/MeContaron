import React, { useState } from 'react';

function KeywordExtractor() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual Dandelion API token
  const API_TOKEN = 'ea9b325f23cb47fa807ab0fb953da5d4';

  const analyzeText = async () => {
    setLoading(true);
    setError(null);

    const text = "En Buenos Aires, el gobierno de la ciudad ha inaugurado el primer centro de reciclaje de plásticos avanzados en América Latina. Este nuevo centro está equipado con tecnología de punta para procesar plásticos difíciles de reciclar y convertirlos en nuevos productos, con el objetivo de reducir la contaminación y promover la economía circular.";

    // Set up the API endpoint and parameters
    const url = 'https://api.dandelion.eu/datatxt/nex/v1';
    const params = new URLSearchParams({
      text: text,
      token: API_TOKEN,
      lang: 'es',
      min_confidence: 0.7,
      include: 'types,categories,abstract,image,concepts,place,events,work,organisations,persons,events'
    });

    try {
      const response = await fetch(`${url}?${params}`);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      setResult(data.annotations);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={analyzeText} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze Text'}
      </button>
      {error && <p>Error: {error}</p>}
      {result && (
        <div>
          <h2>Extracted Entities:</h2>
          {result.map((entity, index) => (
            <div key={index}>
              <p><strong>{entity.spot}</strong></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default KeywordExtractor;