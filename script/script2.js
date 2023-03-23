let Propietario, Modelo, Placa, TipoVehiculo, Fecha, Inicio, Horas;
let formulario=document.getElementById("form2")

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    Propietario=document.getElementById('Propietario').value
    Modelo=document.getElementById('Modelo').value
    Placa=document.getElementById('Placa').value
    TipoVehiculo=document.getElementById('TipoV').value
    Fecha=document.getElementById('Fecha').value
    Inicio=document.getElementById('Inicio').value
    Horas=document.getElementById('Horas').value
    ValidarData(Propietario, Modelo, Placa, TipoVehiculo, Fecha, Inicio, Horas)
    GuardarLocalStore(Propietario, Modelo, Placa, TipoVehiculo, Fecha, Inicio, Horas)
}




function ValidarData(Propietario, Modelo, Placa, TipoVehiculo, Fecha, Inicio, Horas) {
    if(Propietario.length==0 || Modelo.length==0 || Placa.length==0 || TipoVehiculo.length==0 || Fecha.length==0 || Inicio.length==0 || Horas.length==0) {
        swal.fire({
            title:'Error!',
            text:'Do you want to continue?',
            icon:'error',
            confirmButtonText:'cool',
            iconColor: 'purple'
        })
    }
}

function GuardarLocalStore(Propietario, Modelo, Placa, TipoVehiculo, Fecha, Inicio, Horas) {
    localStorage.setItem('Propietario Del Vehículo', Propietario)
    localStorage.setItem('Modelo Del Vehículo', Modelo)
    localStorage.setItem('Placa Del Vehículo', Placa)
    localStorage.setItem('Tipo De Vehículo', TipoVehiculo)
    localStorage.setItem('Fecha', Fecha)
    localStorage.setItem('Hora De Inicio', Inicio)
    localStorage.setItem('Cantidad De Horas', Horas)
    ListarData()
}

function ListarData() {
    let PropietarioUsu = localStorage.getItem('Propietario Del Vehículo')
    let ModeloUsu = localStorage.getItem('Modelo Del Vehículo')
    let PlacaUsu = localStorage.getItem('Placa Del Vehículo')
    let TipoVUsu = localStorage.getItem('Tipo De Vehículo')
    let FechaUsu = localStorage.getItem('Fecha')
    let InicioUsu = localStorage.getItem('Hora De Inicio')
    let HorasUsu = localStorage.getItem('Cantidad De Horas')
}