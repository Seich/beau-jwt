const jwt = require('jsonwebtoken');

module.exports = class {
	constructor(settings = {}) {
		this.settings = settings;
	}

	preRequest(req, orig) {
		if (!orig.skip_jwt) {
			req.headers.Authorization = `Bearer ${jwt.sign(this.settings.data || {}, this.settings.secret)}`;
		}
	}
};
