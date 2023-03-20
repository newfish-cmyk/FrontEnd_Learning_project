const Controller = require('egg').Controller;

class JwtController extends Controller {
    async index() {
        let user = {
            username: 'heheer',
        }
        let token = this.app.jwt.sign(user, this.app.config.jwt.secret);
        // this.ctx.body = token;

        //
        let decode = this.app.jwt.verify(token, this.app.config.jwt.secret);
        this.ctx.body = decode;
    }
}

module.exports = JwtController;
