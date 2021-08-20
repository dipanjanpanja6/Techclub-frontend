const joi = require("joi")
const path = require("path")
require("dotenv").config()

const envVarsSchema = joi
  .object()
  .keys({
    REACT_APP_FIREBASE_AUTHDOMAIN: joi.string().required().description("Map api secret"),
    REACT_APP_FIREBASE_MEASUREMENTID: joi.string().required().description("Map api secret"),
    REACT_APP_FIREBASE_API_KEY: joi.string().required().description("Firebase api secret"),
    REACT_APP_FIREBASE_API_ID: joi.string().required().description("Firebase api secret"),
    REACT_APP_FIREBASE_DATABASE: joi.string().uri().required().description("Firebase Database endpoint"),
    REACT_APP_PRODUCTION_ENDPOINT: joi.string().uri().required().description("My api "),
    REACT_APP_DEVELOPMENT_ENDPOINT: joi.string().uri().required().description("My api "),
  })
  .unknown()

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: "key" } }).validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}
