var Main = require('./Main')

exports.handler = function (event, context) {
    console.log(event);
    return Main.run(event)()
}