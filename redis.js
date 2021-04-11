const redis = require('redis');

const redisClient = redis.createClient({
  host: 'myredis',
  port: 4343,
  // retry_strategy: () => 1000
});

redisClient.on('connect', () => {
  console.log('Redis connected')
})


module.exports = {redisClient}
