import React, { useState } from 'react';

const KeywordExtractor = () => {
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = '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';
  const url = 'https://console.anthropic.com/';

  const extractKeywords = async () => {
    setLoading(true);
    setError(null);

    const prompt = `Extrae las palabras clave del siguiente texto:\n\n${text}`;

    const data = {
      prompt: prompt,
      model: 'claude-v1',
      max_tokens: 300
    };

    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      const extractedKeywords = result.choices[0].text.trim();
      setKeywords(extractedKeywords);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Extractor de Palabras Clave</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ingresa tu texto aqui"
        rows="10"
        cols="50"
      />
      <button onClick={extractKeywords} disabled={loading}>
        {loading ? 'Extrayendo...' : 'Extraer Palabras Clave'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {keywords && (
        <div>
          <h2>Palabras Clave:</h2>
          <p>{keywords}</p>
        </div>
      )}
    </div>
  );
};

export default KeywordExtractor;