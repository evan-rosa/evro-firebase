import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const SENDGRID_API_KEY = process.env.SENDGRID;

const sendEmail = async ({ name, email, message }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email: 'evandanrosa@gmail.com'
                }
              ],
              subject: 'Email from: evan-rosa.com'
            }
          ],
          from: {
            email: email,
            name: name
          },
          content: [
            {
              type: 'text/html',
              value: message
            }
          ]
        })
    });
}

export { sendEmail };