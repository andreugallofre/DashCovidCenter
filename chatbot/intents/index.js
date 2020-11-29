
const estadisticas = require("./estadisticas.js")

export const process = async (req) => {
    const intent = req.intent.displayName
    switch(intent) {
        case 'estadisticas':
            estadisticas(req)
            break
    }
}