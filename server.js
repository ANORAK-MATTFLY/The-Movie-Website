const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) =>{
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            return console.log(err);
        }
        data = data.replace(/__TITLE__/g, ' The movie critiques')
        .replace(/__DESCRIPTION__/g, 'A movie like website for all sort of movies and anime for all ages.')
        res.send(data)
    });
});


// Rendering static files from the build folder using the midleware on the next line.
app.use(express.static(path.resolve(__dirname, './build')))

app.listen(PORT, ()=>{
    console.log(`The server is listening on ${PORT}`)
})


