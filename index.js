import express from 'express';
import initApp from './src/modules/index.router.js';
import "dotenv/config.js"
const app = express();
const PORT=3000;

initApp(app,express);
app.listen(PORT,()=>{
  console.log(`server listening on ${PORT} `);
}
);