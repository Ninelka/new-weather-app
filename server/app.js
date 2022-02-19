import dotenv from 'dotenv';
import express from 'express';
import {graphqlHTTP} from "express-graphql";
import schema from "./schema/schema.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})
