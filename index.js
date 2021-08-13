const { connect } = require("mqtt")
const redis = require("redis")
const client=redis.createClient({
    port:6379,
    host:"127.0.0.1"
})

client.on('connect',()=>console.log("Connected to Redis"))
client.on('ready',()=>console.log("Connected to Redis and ready to accept connetion "))
client.on("error",(err)=>console.log("Connection failed"+err.message))

