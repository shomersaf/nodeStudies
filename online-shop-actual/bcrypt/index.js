const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'password1';

async function init() {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPasswrod = await bcrypt.hash(myPlaintextPassword, salt)
    console.log(hashedPasswrod)
}


init();
