const {addItem} = require("./repository/dynamodbOperations")
const { format } = require('date-fns');
const addDroide = async(event) => {

    try{
        const {nombre,
            modelo,
            fabricante,
            year_fabricacion,
            funcionalidad,
            propietario, 
            estado, 
            } = JSON.parse(event.body);
    const fecha_registro = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    

    const newDroide = {
        nombre,
        modelo,
        fabricante,
        year_fabricacion,
        funcionalidad,
        propietario, 
        estado, 
        fecha_registro
    }
    await addItem('DroideTable', newDroide);

    return {
        statusCode: 201,
        body: JSON.stringify({ mensaje: 'Droide agregado correctamente' }),
    };
    
    }catch(err){
        return {error: err}
    }

}

module.exports = {
    addDroide
}