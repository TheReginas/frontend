const router = require("./userRoutes");
const {google} = require('googleapis');
//import OAuth2Client from 'google-auth-library'
const { OAuth2Client } = require('google-auth-library');
//import {GoogleLogin} from 'react-google-login'
const {GoogleLogin} = require('react-google-login');

//Google API documetation
const GOOGLE_CLIENT_ID = '15518858462-1ftie3oh1cch121j8dgk44a8dm65r1o3.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const REFRESH_TOKEN = ''

const oauth2Client = new google.auth.Oauth20(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'http://www.localhost:3000'
)

router.get('/', async(req, res, next) => {
    res.send({message: 'API is working'})
})

router.post('/createToken', async(req, res, next)=> {
    try{
        const {code} = req.body
        const {tokens} = await oauth2Client.getToken(code) 
        res.send(tokens)
    } catch(error) {
        next(error)
    }
})

router.post('/createEvent', async (req, res, next) => {
    try {
        const{ summary, description, setDateTime, endDateTime } = req.body
        oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
        const calendar = google.calendar('v3')
        const response = await calendar.events.insert({
            auth: auth2Client,
            calendar: 'primary',
            requestBody: {
                summary: summary,
                description: description,
                location: location,
                colorId: '1',
                start: {
                    dateTime: new Date(startDateTime),
                
                },
                end: {
                    dateTime : new Date(endDateTime),
                }


            }
        })
    } catch(error) {
        next(error)
    }
})

module.exports = router;
