
function apiToLambda(vehicle){
    const vehiculo = {
        nombre: vehicle.name,
        modelo: vehicle.model,
        fabricante: vehicle.manufacturer,
        costos_en_creditos: vehicle.cost_in_credits,
        tamano: vehicle.length,
        velocidad_maxima_atmosfera: vehicle.max_atmosphering_speed,
        equipo: vehicle.crew,
        pasajeros: vehicle.passengers,
        capacidad_carga: vehicle.cargo_capacity,
        consumibles: vehicle.consumables,
        clase_vehiculo: vehicle.vehicle_class,
        pilotos: vehicle.pilots,
        peliculas: vehicle.films,
        creado: vehicle.created,
        editado: vehicle.edited,        
        url: vehicle.url,
    }
    
    return vehiculo;
}

module.exports = {
    apiToLambda
}