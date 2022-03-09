const request = require('request')

const geocode = (address, callback) => {
  const url = encodeURI(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?limit=1&access_token=pk.eyJ1IjoianVuYWlkYWhtZWQ1MDEiLCJhIjoiY2wwaTBleGwzMDAxZzNpcnM1cDNoeTd1eiJ9.LFUyAaD39c14A4C0tvLX7Q`);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
