import React, { useState } from 'react';

function ChatComponent() {
  const [inputValue, setInputValue] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

const callApi = () => {
    // Make an API call with the inputValue
    // Replace 'API_ENDPOINT' with the actual API endpoint
    fetch(`https://tamu-gpt.vercel.app/${inputValue}`)
        .then((response) => {
            console.log(response); // Print the response in the terminal
            return response.json();
        })
        .then((data) => {
            console.log(data); // Access the response data
            // Do something with the data
            setApiResponse(data['message'])
        })
        .catch((error) => console.error(error));
};

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    <button onClick={callApi}>Call API</button>
      <div>{apiResponse}</div>
    </div>
  );
}

export default ChatComponent;
