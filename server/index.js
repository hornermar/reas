import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import clientRoutes from './routes/newClient.js';

const app = express();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/lead', clientRoutes);

const CONNECTION_URL =
  'MONGOLAB_URI=mongodb+srv://marketah:id7ufAMpPn3_KvE@cluster0.56y88.mongodb.net/mern?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)),
  )
  .catch((error) => console.log(error.message));
