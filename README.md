# Readme
# Express Temp by Zip

## Overview

A simple app that returns the temperature in degrees Fahrenheit at a United States ZIP Code.  It is an example of simple routing, because there is a route for the homepage where it asks the user for a ZIP code, and another route that sends the temperature as JSON.  This app was *adapted* from a tutorial from a book called *Express in Action*, by Evan M. Hahn (2016).  As the code in the book was a bit rustic, much of it didn't actually work anymore.  So my learning experience was actually enhanced by having to fix it! My adaption includes the following changes:

| Original Tutorial                                   | Mine                                                                |
|-----------------------------------------------------|---------------------------------------------------------------------|
| Uses forecastio npm module                          | Requests weather data from openweathermap.org API using node-fetch  |
| Uses JQuery and Pure for styling for text and forms | Uses Bootstrap                                                      |
| Uses CommonJS module system                         | Uses ECMA module system                                             |
| Uses Node.js built-in __dirname                     | Uses Node.js url module to create __dirname                         |
| Uses var variables                                  | Prefers const and let variables                                     |
| Only runs locally                                   | Deployed via Heroku                                                 |

### Links
- [Live Site](https://obscure-refuge-38884.herokuapp.com/)
- [Repo](https://github.com/mattdimicelli/temp_by_zipcode_node)

## My process

### Built with

- Node.js
- Express 
- EJS (for rendering HTML views)
- ECMA Module System
- Heroku
- Bootstrap
- openweathermap.org API
- node-fetch
- zippity-do-dah

### What I learned

- Routing is a mapping of an HTTP verb (like GET or POST) and a URI (like /users/123)
- Routing can map to a simple string, but it can also match against patterns or regex
- While the built-in http module can be used to request data from an API endpoint, it can be verbose.  As you can see if you look at my code, I started off with this strategy but ended up commenting it out, and replacing it with node-fetch.  For extra practice, I wrote the node-fetch code with async/await syntax as well as with promise-chaining