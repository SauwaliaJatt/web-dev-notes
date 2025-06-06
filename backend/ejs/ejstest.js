const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const notes = [
  { id: 1, title: 'JavaScript Async/Await', content: 'Use async/await for cleaner promise handling...', language: 'javascript' },
  { id: 2, title: 'Python List Comprehension', content: '[x for x in range(10)] creates a list...', language: 'python' },
];

app.get('/', (req, res) => {
  res.render('indexejs', { notes: notes, pageTitle: 'Programming Notes', search: req.query.search || '' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));