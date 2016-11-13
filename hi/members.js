var talkToRocketChat = require ('./talkToRocketChat')

exports.addMember = function(rocketChat, params, callback) {
	talkToRocketChat.talkToRocketChat(rocketChat, {
	method: 'POST',
		form: {
			member: params.member		},
		cmd: '/api/rooms/' + params.roomId + '/addMember'
	}, function(error, result) {
		callback(error, result)
	});
}

exports.removeMember = function(rocketChat, params, callback) {
	talkToRocketChat.talkToRocketChat(rocketChat, {
	method: 'POST',
		form: {
			member: params.member		},
		cmd: '/api/rooms/' + params.roomId + '/removeMember'
	}, function(error, result) {
		callback(error, result)
	});
}