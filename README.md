# react-express-boilerplate
A boilerplate to use React and Express with Knex configured for a Postgres database. Both servers can be run at the same time.

Set a .env file with the following:

    DB_HOST=localhostDB_USER=*the database user*
    DB_PASS=*the database password*
    DB_NAME=*the database name*
    DB_SSL=true if heroku
    DB_PORT=5432

* install dependencies for both client and server:  npm i && cd client && npm i && cd ..

* npm start will run react on local host 3000 and the backend server on local host 3001