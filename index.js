const express= require('express');
require('dotenv').config();

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello World! (api is running fine)');
});

PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




