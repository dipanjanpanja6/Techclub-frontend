const fs = require("fs")
const path = require("path")

const envFile = `REACT_APP_FIREBASE_API_KEY="AIzaSyAHq0pb8nDiPqcVIkFZNHPqc0wJsi2nWR8"
REACT_APP_FIREBASE_MEASUREMENTID="G-KK083XRQ6P"
REACT_APP_FIREBASE_AUTHDOMAIN="techclubgcect.firebaseapp.com"
REACT_APP_FIREBASE_API_ID="1:200360092473:web:4ec0d97fe1f03d0a6ffee8"
REACT_APP_FIREBASE_DATABASE="https://techclubgcect.firebaseio.com"
REACT_APP_PRODUCTION_ENDPOINT=http://localhost:7000
REACT_APP_DEVELOPMENT_ENDPOINT=http://localhost:7000
GENERATE_SOURCEMAP=false`

fs.writeFileSync(path.join(process.cwd(), ".env"), envFile)
