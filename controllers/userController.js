const userSchema = require('../mongo/users')
const path = require('path');


const getUserLogin = async (req, res) => {

    // const getuserData = await userSchema.find()

    // res.send(getuserData)
    res.sendFile(path.join(__dirname, '../', 'Views', 'login.html'))

}
const postUserLogin = (req, res) => {

    // console.log('im in postUserLogin');
    (async () => {

        var userLogin = JSON.parse(JSON.stringify(req.body));
        debugger;
        const oneUser = await userSchema.where('email').equals(userLogin.email).where('password').equals(userLogin.password)

        if (oneUser.length > 0) {
            res.sendFile(path.join(__dirname, '../', 'Views', 'success.html'))
        }
        if (oneUser.length <= 0) {
            // res.sendFile(path.join(__dirname, '../', 'Views', 'failed.html'))
            res.json({
                errorcode: 'account not found',
            })
        }
    })();

}

const postUserSignup = (req, res) => {

    (async () => {
        var userLogin = JSON.parse(JSON.stringify(req.body));
        console.log('User is ', userLogin);


        if (userLogin.password === userLogin.confirmPassword) {
            const oneUser = await userSchema.create({

                name: userLogin.name,
                mobileNumber: userLogin.mobileNumber,
                email: userLogin.email,
                password: userLogin.password,
                gender: userLogin.gender,
                dateOfBirth: new Date(userLogin.dateOfBirth),
                state: userLogin.state,
                confirmPassword: userLogin.confirmPassword
            })
            console.log('user added successfully');
            if (oneUser) {
                res.sendFile(path.join(__dirname, '../', 'Views', 'login.html'))
            }
        }
        else {
            console.log('Confirm Password not matching')
        }
    })();
    // console.log(req.header);
}

const getUserSignUp = (req, res) => {

    res.sendFile(path.join(__dirname, '../', 'Views', 'signup.html'))
}
module.exports = { getUserLogin, postUserLogin, getUserSignUp, postUserSignup }