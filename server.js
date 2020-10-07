if (process.env.NODE_ENV !== 'production') {
    require('dotenv/config')
}

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const HomeRoute = require('./routes/home');
// const ExperienceRoute = require('./routes/experience');
// const SympathyRoute = require('./routes/sympathy');

const App = express();

App.use(cors());
App.use(bodyParser.json());
App.use("/", HomeRoute)
// App.use("/experience", ExperienceRoute);
// App.use("/sympathy", SympathyRoute);

const PORT = process.env.PORT;
App.listen(PORT, () => {
    console.log(`Server runnig at PORT: ${PORT}`)
});