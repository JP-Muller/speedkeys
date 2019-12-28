const bcrypt = require('bcrypyt')
const saltRounds = 10

module.exports = {
    async login(req, res) {
        let {username, password} = req.body
        const db = req.app.get('db')
        let [existingUser] = await db.get_user_by_handle(username);
        if (!existingUser) return res.status(401).send('Username not found!');
        let result = await bcrypt.compare(password, existingUser.password)
        if (result) {
            req.session.user = {
                id: existingUser.user_id,
                firstName: existingUser.first_ame,
                lastName: existingUser.last_name,
                username: existingUser.username,
                country: existingUser.country,
                profilePic: existingUser.profile_pic,
                loggedIn: true,
            }
            console.log(req.session.user.username, 'logged in!')
            res.send(req.session.user)
        }else res.status(401).send('Username or password incorrect!')
    },
    async register(req, res) {
        let {firstName, lastName, username, password, profilePic, country} = req.body;
        const db = req.app.get('db');
        let [existingUser] = await db.get_user_by_handle(username);
        if (existingUser) return res.status(400).send('Username is taken!');
        let salt = await bcrypt.genSalt(saltRounds);
        let hash = await bcrypt.hash(password, salt);
        let [user] = await db.register_user([firstName, lastName, username, hash, profilePic, country]);
        req.session.user = {
            id: existingUser.user_id,
            firstName: user.first_name,
            lastName: user.last_name,
            username: user.username,
            country: user.country,
            profilePic: user.profile_pic,
            loggedIn: true
        }
        console.log('User successfully registered', req.session.user.username)
        res.send(req.session.user)
    },
    logout(req, res){
        req.session.destroy();
        res.sendStatus(200)
    },
    getUser(req, res){
        res.send(req.session.user)
    },
    async editUser(req,res) {

    },
    async editUserProfilePic(req, res){

    }
}