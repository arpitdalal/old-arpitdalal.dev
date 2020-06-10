const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

router.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.use('/', router);
app.listen(port, () => console.log(`arpitdalal.dev initialized on port ${port}!`));
