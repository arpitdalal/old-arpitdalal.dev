const express = require('express');
const app = express();
const robots = require('express-robots-txt');
const ngrok = require('ngrok');
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
router.get('/me', (req, res) => res.sendFile(__dirname + '/public/me.html'));
router.get('/projects', (req, res) => res.sendFile(__dirname + '/public/projects.html'));
router.get('/contact', (req, res) => res.sendFile(__dirname + '/public/contact.html'));
router.get('/sitemap.xml', (req, res) => res.sendFile(__dirname + '/sitemap.xml'));
router.get('/arpit.png', (req, res) => res.sendFile(__dirname + '/public/images/arpit.png'));
router.get('/logo.png', (req, res) => res.sendFile(__dirname + '/public/images/arpit.png'));
router.get('/resume', (req, res) => res.sendFile(__dirname + '/public/pdfs/resume.pdf'));
router.get('*', (req, res) => res.sendFile(__dirname + '/public/404.html'));

app.use('/', router);
app.listen(port, () => {
  console.log(`local: http://localhost:${port}`);
  (async () => {
    console.log(`public: ${await ngrok.connect(port)}`);
  })();
});
