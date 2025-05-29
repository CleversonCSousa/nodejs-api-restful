import fastify from 'fastify';

const app = fastify();

const x = 10;
app.get('/hello', () => {
  return 'Hello World';
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  });
