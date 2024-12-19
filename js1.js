const app = express();
app.get('/path, (req, res) => {
        eval(req.query.param);
        res.send('OS command inj');
});
