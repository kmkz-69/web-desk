require('dotenv').config()

const config = {
    // Main Application URL
    'Url' : process.env.URL,

    // Application Name
    'appName' : process.env.APP_NAME,

    // Application window width and height
    'width' : 1280,
    'height' : 800,
    'minWidth' : 1280,
    'minHeight' : 800,

    // Hide elements by ID
    'hideElementsId' : [],

    // Hide elements by Class
    'hideElementsClass' : [],

}

module.exports = config
