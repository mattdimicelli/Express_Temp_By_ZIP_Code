import path, { dirname } from 'path';
import express from 'express';
import zipdb from 'zippity-do-dah';
import http from 'http';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(dirname(import.meta.url));

const app = express();
const OPEN_WEATHER_API_KEY = '72e691cc8e68804d3b51462e3f5c963f';

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get(/^\/(\d{5})$/, (req, res, next) => {
    const zipcode = req.params[0];
    const location = zipdb.zipcode(zipcode);
    if (!location.zipcode) {
        next();
        return;
    }

    const {latitude, longitude} = location;
    

    // http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
    // , resp => {
    //     let data = '';

    //     // A chunk of data has been received.
    //     resp.on('data', chunk => {
    //         data += chunk;
    //     });

    //     // The whole response has been received.  Print out the result.
    //     resp.on('end', () => {
    //         res.json({
    //             zipcode: zipcode,
    //             temperature: JSON.parse(data).main.temp,
    //         });
    //     });
    // }).on('error', err => {
    // next();
    // });


//    Alternate use of node-fetch
    // (async () => {
    //     try {
    //         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`);
    //         const data = await response.json();
                        
    //         res.json({
    //             zipcode: zipcode,
    //             temperature: data.main.temp,
    //         });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // })();

    // node-fetch with regular promises
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(data => res.json({
        zipcode,
        temperature: data.main.temp,
    }))
    .catch(err => console.error(err));
});




app.use((req, res) => {
    res.status(404).render('404');
});

let port = process.env.PORT;
if (port == null || port == '') {
    port = 8000;
}
app.listen(port);




