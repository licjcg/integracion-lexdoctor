const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Firebird = require('node-firebird');
const app = express();

const options = {
  host: 'localhost',
  port: 3050,
  database: 'C:/LEX11E/DATOS/LEX11E.fdb', // Asegúrate de actualizar esta ruta
  user: 'SYSDBA',
  password: 'masterkey', // Asegúrate de que esta contraseña es correcta
  role: null, // Puedes dejar esto como null si no estás usando roles específicos
  pageSize: 4096, // Puedes ajustar esto según tu configuración
  charset: 'UTF8', // Asegúrate de que el charset coincida con el de tu base de datos
  sessionTimeZone: 'UTC'
};

app.use(cors());
app.use(bodyParser.json());

app.get('/api/proc', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM PROC', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        db.detach();
        return;
      }

      res.json(result);
      db.detach();
    });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
