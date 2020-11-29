
const run = async (req) => {

    const { parameters } = req.queryResult 
    const regio = parameters.regio ? parameters.regio : 'Catalunya'
    const data = parameters.data

    const responses = []
    let inici = `Esta es la informacion que he obtenido sobre los grupos de colegios confinados en ${regio}:`
    inici += data ? ` durante ${data}` : ` en total`
    responses.push(inici)
    // Casos confirmados
    responses.push('Escuelas con mínimo un caso COVID: xx.xxx')
    // Defunciones
    responses.push('Total de grupos confinados: xxxx')
    return responses
}

module.exports = {
    run
}