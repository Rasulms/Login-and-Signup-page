//CORS 
const whitelist = ['https://www.google.com', 'http://localhost:4000']
const corsOption = {
    origin: (origin, callback) => {
        // console.log('origin is ', this.origin);

        if (whitelist.indexOf(origin) !== -1 || !origin) {
            // console.log('CORS allowed');

            callback(null, true)
        }
        else {
            callback(new Error('not allowed by cors'))
        }

    },
    optionSuccessStatus: 200
}

module.exports = corsOption;