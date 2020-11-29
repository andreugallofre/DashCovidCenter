
const run = async (req) => {
    const { parameters } = req.queryResult 
    const regio = parameters.regio ? parameters.regio.city : 'Catalunya'
    let data = parameters.data
    if (data) {
      const d = new Date(data);
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      data = `${da} de ${mo} de ${ye}`
    }

    const responses = []
    let inici = `Aquí tienes los datos de COVID en ${regio}`
    inici += data ? ` durante el ${data}` : ` en total`
    responses.push(inici)
    // Casos confirmados
    responses.push('Casos confirmados: xx.xxx')
    // Defunciones
    responses.push('Defunciones: xxxx')
    // Hospitalizaciones
    responses.push('Hospitalizaciones: xx.xxx')
    return responses
}

module.exports = {
  run
}