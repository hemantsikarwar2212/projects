import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    const response = await axios.post("http://localhost:3000/upload", formData);
    setPrompt(response.data.prompt);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Generate Prompt</button>
      {prompt && (
        <div className="mt-4 bg-gray-100 p-2 rounded">
          <h3 className="font-semibold">Generated Prompt:</h3>
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}



export default App
