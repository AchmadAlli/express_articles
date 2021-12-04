import app from './src/app'
import Logger from './utils/logger'
import morgan from 'morgan';

const port = process.env.PORT || 3000

app.use(morgan('combined'));

app.listen(port, () => {
  Logger.debug(`server is running on port : ${port}`)
})