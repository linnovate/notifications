var talkToRocketChat = require ('./talkToRocketChat')

exports.createRoom = function(rocketChat, params, callback) {
	talkToRocketChat.talkToRocketChat(rocketChat, {method: 'POST',
            cmd: '/api/bulk/createRoom',
            form: {
                rooms:[{
                    private: true,
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
            cmd: '/api/bulk/updateRoom',
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