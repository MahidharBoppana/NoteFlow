import express from 'express';
import cors from 'cors';
import errorMiddleware from './middleware/error.middleware.js';


const app = express();

app.use(cors(
    {
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Import routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend API!' });
});


app.use(errorMiddleware);

export default app;