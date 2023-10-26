const express = require('express');
const session = require('express-session');

const port = 8080;
const path = require('path');
const app = express();

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', ()=>{
    
})

app.listen(port, () => {
  console.log(`Servidor está funcionando na porta ${port}`);
});
