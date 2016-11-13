var talkToRocketChat = require ('./talkToRocketChat')

exports.createRoom = function(rocketChat, params, callback) {
	talkToRocketChat.talkToRocketChat(rocketChat, {method: 'POST',
            cmd: '/api/bulk/createPrivateRoom',
            form: {
                rooms:[{
                    name: params.name,
                    members: params.members
                }]
            }
        }, function(error, result) {
            callback(error, result)
        });
}

exports.renameRoom = function(rocketChat, params, callback) {
	talkToRocketChat.talkToRocketChat(rocketChat, {method: 'PUT',
            cmd: '/api/bulk/updatePrivateRoom',
            form: {
                rooms:[{
                    name: params.name,
                    id: params.roomId
                }],
                message: params.message
            }
        }, function(error, result) {
            callback(error, result)
        });
}