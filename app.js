const express = require('express');
const app = express();
const robots = require('express-robots-txt');
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(
	robots({
		UserAgent: '*',
		Disallow: '',
		Sitemap: 'https://www.arpitdalal.dev/sitemap.xml'
	})
);

router.get('', (req, res) => res.sendFile(__dirname + '/public/index.html'));
router.get('/sitemap.xml', (req, res) => res.sendFile(__dirname + '/sitemap.xml'));
router.get('/public/images/arpit.png', (req, res) => res.sendFile(__dirname + '/public/images/arpit.png'));
router.get('*', (req, res) => res.sendFile(__dirname + '/public/404.html'));

app.use('/', router);
app.listen(port, () => console.log(`arpitdalal.dev initialized on port ${port}!`));
