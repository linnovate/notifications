var talkToRocketChat = require('./talkToRocketChat')

exports.addMember = function(rocketChat, params, callback) {
	talkToRocketChat.talkToRocketChat(rocketChat, {
		method: 'POST',
		form: {
			roomId: params.roomId,
			userId: params.member
		},
		cmd: '/api/v1/groups.invite'
	}, function(error, result) {
		callback(error, result)
	});
}

exports.removeMember = function(rocketChat, params, callback) {
	talkToRocketChat.talkToRocketChat(rocketChat, {
		method: 'POST',
		form: {
			roomId: params.roomId,
			userId: params.member
		},
		cmd: '/api/v1/groups.kick'
	}, function(error, result) {
		callback(error, result)
	});
}