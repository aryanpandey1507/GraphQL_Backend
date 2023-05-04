const express = require('express');
const colors= require('colors');
const connectDB= require('./db');
const cors = require('cors');
require('dotenv').config();
const {graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const PORT = process.env.PORT || 2000;


connectDB();
app.use(cors())

app.get('/',(req,res)=>{
  res.send('this is the graphql project');
})
console.log(process.env.NODE_ENV)
app.use('/graphql', graphqlHTTP({
     schema,
     graphiql : process.env.NODE_ENV === 'production'
}))





app.listen(PORT ,()=>{
    console.log(`server is listening at ${PORT}`)
})
