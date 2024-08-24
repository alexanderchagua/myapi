const express = require('express');
const app = express();
const lesson01Controller = (require('./controllers/lesson01'));
 
app.get('/', lesson01Controller.alexanderRoute);


app.get('/nancy', lesson01Controller.nancyRoute);

const port = 3000
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});