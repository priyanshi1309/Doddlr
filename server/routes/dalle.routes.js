import express from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch'; // Ensure you install this package

dotenv.config();

const router = express.Router();

// Async function to query Hugging Face API
async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`, // Use environment variable for security
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    const errorText = await response.text(); // Read the error response text
      throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
    
  }
  const result = await response.buffer(); // Use .buffer() for binary data
  return result;
}

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // Validate input
    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    // Query the Hugging Face API
    const imageBuffer = await query({ inputs: prompt });

    // Convert imageBuffer to base64 if needed
    const imageBase64 = imageBuffer.toString('base64');

    res.status(200).json({ photo: `data:image/png;base64,${imageBase64}` });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
