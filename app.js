var express = require('express');

var app = express();

app.set('view engine', 'pug');

var richTools = {
    "1": {
        name: 'cie-rich-tool',
        attributes: [
            { 'attr': 'question', 'val': 'What is the capital of England?' },
            { 'attr': 'correct-answer', 'val': 'London' },
            { 'attr': 'show-answer', 'val': true }
        ]
    }
}

app.get('/:questionId', (req,res) => {
    var richTool = richTools[req.params.questionId];
    res.render('question', { title: 'question number...' + req.params.questionId, richtool_tag: richTool.name, attributes: richTool.attributes });
});

app.get('/richtools/:richTool', (req,res) => {
    res.sendFile(__dirname + '/richtools/' + req.params.richTool);
});

app.listen(9999);