import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos';
const app = express();
const port: number = 3000;

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routes
app.use('/todos',todoRoutes);
//Middlewares de error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
res.status(500).json({message: err.message})
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`) 
  })