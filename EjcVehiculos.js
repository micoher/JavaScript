function totalAPagar (vehiculo, kms_recorridos){
    
    if (vehiculo = "coche"){
        precio_km = 0.1;
        precio = kms_recorridos * precio_km

    } else if (vehiculo = "moto"){
        precio_km = 0.2;
        precio = kms_recorridos * precio_km
    
    } else if (vehiculo = "autobús"){
        precio_km = 0.5;
        precio = kms_recorridos * precio_km
    } else {
        alert("No has escrito bien el vehículo")
    }
    
    if (kms_recorridos >= 0 && kms_recorridos <= 100){
        precio = precio + 1;
    } else if (kms_recorridos > 100){
        precio = precio + 2;
    } else {
        alert("No has escrito bien los km")
    }
    return precio
}

alert(totalAPagar(prompt("¿Tipo vehículo?"), prompt("¿Km recorridos?") ))