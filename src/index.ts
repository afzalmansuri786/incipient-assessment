import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import bodyParser from 'body-parser';
import { db } from './modules/db/db.connection';


import { userRouter } from './modules/users/user.routes';
import { roleRouter } from './modules/roles/roles.routes';
import { userRoleRouter } from './modules/roles/user-roles/user-role.routes';
import { userImageRouter } from './modules/users/user-images/user-images.routes';

const app = express();
const port = process.env.PORT ?? 3001;

db();
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.send(`Hello Assessment!`);
});

// routes
app.use('/roles',roleRouter);
app.use('/users',userRouter);
app.use('/user-images',userImageRouter);
app.use('/user-roles',userRoleRouter);


app.listen(port, () => {
  console.log(`Server is up at port : ${port}`);
});
