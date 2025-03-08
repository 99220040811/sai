const express = require('express');
const path = require('path');
const mongoose = require('mongoose');



const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define additional routes for other HTML files
app.get('/CourseDetails/Btech', (req, res) => {
    res.sendFile(path.join(__dirname, 'CourseDetails/Btech/index.html'));
});

app.get('/CourseDetails/Mtech', (req, res) => {
    res.sendFile(path.join(__dirname, 'CourseDetails/Mtech/index.html'));
});

app.get('/MaterialManagement', (req, res) => {
    res.sendFile(path.join(__dirname, 'MaterialManagement/index.html'));
});

app.get('/CourseDetails', (req, res) => {
    res.sendFile(path.join(__dirname, 'CourseDetails/index.html'));
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Sample data fetched successfully!' });
});

// Catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
