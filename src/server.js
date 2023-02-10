const express = require('express'); 
const app = express();

app.get('/api', async(req, res) => { 
    //const feed = await fetch('https://medium.com/feed/@spacelabdev/');
    //res.json(await response.json());
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server running on port %d', 3000);
}); 
