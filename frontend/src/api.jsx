// src/api.js
export const BASE_API_URL = 'http://localhost:8000/api';

// Function to make API requests with headers
export const apiFetch = async (endpoint, method, body = null) => {
  const headers = {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${yourToken}`,
  };

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_API_URL}${endpoint}`, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'API request failed.');
  }

  return await response.json(); // Return the parsed JSON response
};
