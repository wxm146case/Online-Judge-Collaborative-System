const redis = require('redis');
const client = redis.createClient();

function set(key, value, callback) {
    client.set(key, value, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        callback(res);
    });
}

function get(key, callback) {
    client.get(key, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        callback(res);
    });
}

function expire(key, timeInSeconds) {
    client.expire(key, timeInSeconds);
}

function quit() {
    client.quit();
}

module.exports = {
    get,
    set,
    expire,
    quit,
    redisPrint: redis.print
}
