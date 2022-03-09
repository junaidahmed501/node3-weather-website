const request = require('request')

const forecast = (latitude, longitude, callback) => {
  // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
  const url = 'http://api.weatherstack.com/current?access_key=40e40bab34fb588f47e3f464e018e6e6&query='+ latitude + ',' + longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      // callback(undefined, body.current[0].summary + ' It is currently ' + body.current.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
      callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
    }
  })
}

module.exports = forecast
