import express from 'express';
import eventRoutes from './routes/EventRoutes.js';
import keyRoutes from './routes/KeyRoutes.js';
import sequelize from './sequelizeConfig.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors()); 
app.use('/api', eventRoutes,keyRoutes ); // Prefix para las rutas de la API

const PORT = process.env.PORT || 3306;s

app.listen(PORT, async () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
});