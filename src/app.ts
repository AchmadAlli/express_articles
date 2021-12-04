import express from 'express';
import cors from 'cors';
import getRegisteredRoutes from './routes';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(getRegisteredRoutes())

export default app