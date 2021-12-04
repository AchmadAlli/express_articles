import express from 'express'
import cors from 'cors'

class Application {
  app: express.Application

  constructor(){
    this.app = express()
    this.configureMiddleware()
  }

  private configureMiddleware(){
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: false}))
  }

  public serve(port: number|string){
    this.app.listen(port, () => {
      console.log(`app running at : http://localhost:${port}`)
    })
  }

}

export default new Application();