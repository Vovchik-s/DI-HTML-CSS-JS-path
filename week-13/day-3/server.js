let Parser = require('rss-parser');
let parser = new Parser();
const cors = require('cors');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static((__dirname, './public')))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/pages');

(async () => {
    let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
    console.log(feed.title);

    let items = [];

    await Promise.all(feed.items.map(async (currentItem) => {

    if(items.filter((item) => item === currentItem).length <= 1) {
        items.push(currentItem);
    }

}));

fs.writeFileSync('./public/data.json', JSON.stringify(items));

    app.get('/', (req, res) => {
        let data = fs.readFileSync('./public/data.json');
        console.log(data)
        // res.send('Hello World!');
        res.render('index', { data: JSON.parse(data) });
    });

    app.get('/search', (req, res) => {
        let data = fs.readFileSync('./public/data.json');

        res.render('search', { data: JSON.parse(data) });

        // res.render('search', {  data: JSON.parse(data)  });
    });


    app.post('/search', (req, res) => {
        let data = fs.readFileSync('./public/data.json');
        let search = req.body.search;
        let filtered = JSON.parse(data).filter((item) => item.title.includes(search));
        res.render('search', { data: filtered });
    }
    );


    app.listen(port, () => console.log(`Server is running on port ${port}`));


})();

