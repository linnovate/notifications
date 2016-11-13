var talkToRocketChat = require ('./talkToRocketChat')

exports.createMessage = function(rocketChat, params, callback) {

	talkToRocketChat.talkToRocketChat(rocketChat, {
		method: 'POST',
            form: {
                msg: params.message,
                owner: params.owner,
                room: params.roomId
            },
            cmd: '/api/rooms/' + params.roomId + '/send'
        }, function(error, result) {
            callback(error, result)
        });
}