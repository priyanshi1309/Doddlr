import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Parse JSON bodies (with a limit on the size of the payload)
app.use(express.json({ limit: '50mb' }));

// Route for DALL.E API
app.use('/api/v1/dalle', dalleRoutes);

// Route for health check or base endpoint
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from DALL.E' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error('Internal Server Error:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(8080, () => console.log('Server has started on port 8080'));
