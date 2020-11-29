const estadisticas = require("./estadisticas.js")
const colegios = require("./colegios.js")

const process = async (req) => {
    const intent = req.queryResult.intent.displayName
    let responses
    switch(intent) {
        case 'Estadisticas':
            responses = await estadisticas.run(req)
            break
        case 'Colegios':
            responses = await colegios.run(req)
            break
    }
    return build(responses)

}


const build = async (responses) => {
    return {
        fulfillmentMessages: [
            {
                text: {
                    text: [responses]
                }
            }
        ]
    }
}

module.exports = {
    process
}