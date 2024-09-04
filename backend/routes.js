import express from 'express';
import Replicate from 'replicate';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

router.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

router.post('/generate-image', async (req, res) => {
  try {
    const { 
      prompt, 
      guidance, 
      numOutputs, 
      aspectRatio, 
      outputFormat, 
      outputQuality, 
      promptStrength, 
      numInferenceSteps,
      disableSafetyCheck,
      imageUrl  // New parameter for image URI
    } = req.body;

    const input = {
      prompt,
      guidance_scale: guidance,
      num_outputs: numOutputs,
      aspect_ratio: aspectRatio,
      output_format: outputFormat,
      output_quality: outputQuality,
      prompt_strength: promptStrength,
      num_inference_steps: numInferenceSteps,
      disable_safety_checker: disableSafetyCheck,
      image: imageUrl  // Add the image URI to the input
    };

    console.log('Sending request to Replicate:', input);

    const output = await replicate.run("black-forest-labs/flux-dev", { input });

    console.log('Received response from Replicate:', output);

    res.json({ success: true, images: output });
  } catch (error) {
    console.error('Error in generate-image route:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
