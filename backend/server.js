const app = require('./app');

// Vercel dynamically assigns the port, so use it here
const PORT = process.env.PORT || 5004;  // Use default port in local environment if not on Vercel
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
