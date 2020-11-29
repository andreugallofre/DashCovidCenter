// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

const intent = require("./intents")

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.post("/hook", (req, res) => {
  await intent.process(req)
  res.status(200).end() // Responding is important
})

app.use(basicAuth( { authorizer: authF } ))
 
function authF(username, password) {
    const userMatches = basicAuth.safeCompare(username, 'customer')
    const passwordMatches = basicAuth.safeCompare(password, 'custompassword')
    return userMatches & passwordMatches
}

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

