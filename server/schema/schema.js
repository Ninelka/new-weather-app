import {GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';

import weatherForecastType from './weatherForecastType.js';
import axios from 'axios';

const query = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
        weatherForecast: {
            type: weatherForecastType,
            description: 'Weather forecast for the next 5 days / 3 hours',
            args: {
                city: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (_, {city}) => {
                const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}`;
                return axios.get(url)
                    .then(function (response) {
                        return response.data;
                    });
            }
        }
    }),
});

const schema = new GraphQLSchema({
    query
});

export default schema;
