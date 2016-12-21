var talkToRocketChat = require('./talkToRocketChat')

exports.createRoom = function(rocketChat, params, callback) {
    talkToRocketChat.talkToRocketChat(rocketChat, {
        method: 'POST',
        cmd: '/api/v1/groups.create',
        form: {
            name: params.name,
            members: params.members
        }
    }, function(error, result, statusCode) {
        callback(error, result)
    });
}

exports.renameRoom = function(rocketChat, params, callback) {
    talkToRocketChat.talkToRocketChat(rocketChat, {
        method: 'POST',
        cmd: '/api/v1/groups.rename',
        form: {
            name: params.name,
            roomId: params.roomId
        }
    }, function(error, result) {
        callback(error, result)
    });
}