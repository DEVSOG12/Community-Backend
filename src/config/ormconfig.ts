import { ConnectionOptions } from 'typeorm';
import Chat from '../entity/Chat';
import Message from '../entity/Message';
import User from '../entity/User';

const docker = {
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'chapDB',
};
// For Development Locally
const dev = {
  host: 'localhost',
  port: 5432,
  username: 'testing',
  password: '1234',
  database: 'chapDB',
};


// To deploy to heroku 
// You will need to add a POSTGRES ADD-ON ON HEROKU

// Put the URL in ENV


const deploy = {
  url: process.env.POSTGRES_URL,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};


//postgres://tvjpypkdpeneeq:07870730d86ebfee3fbd5be2bab42d300dfaba5dc654c327725e60cd5ac5992d@ec2-52-204-20-42.compute-1.amazonaws.com:5432/dd4c8mpho9b7j4
const config = process.env.POSTGRES_URL ? deploy :docker;



// const config = heroku;

export const dbconfig: ConnectionOptions = {
...config,
  type: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Chat, User, Message],
  dropSchema: false,
  // ssl: {
  //   ca: process.env.SSL_CERT,
  // },
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: '../entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
