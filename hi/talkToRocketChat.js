
request = require('request');

exports.talkToRocketChat = function(rocketChat, options, callback) {
	console.log('================================================talkToRocketChat======================================')

    var objReq = {
        uri: rocketChat.uri + options.cmd,
        method: options.method,
        headers: {}
    };

    if (options.form) {
        objReq.form = options.form;
        objReq.headers['X-Auth-Token'] = rocketChat.authToken;
        objReq.headers['X-User-Id'] = rocketChat.userId;
        //objReq.headers['Content-Type'] = 'multipart/form-data';
        // Made By OHAD
        objReq.headers['Content-Type'] = 'application/json';
    }

    request(objReq, function(error, response, body) {
        console.log('====================================error============================================')
        console.log(error)
        console.log('====================================body============================================')
        console.log(body)
        if (!error && response.body.length && response.statusCode < 300) {
            var res = JSON.parse(body);
            return callback(null, res['ids'] ? {id: res['ids'][0]['rid']} : res, response.statusCode);
        }
        callback(error ? error : body, response ? response.statusCode : 500);
    });
}