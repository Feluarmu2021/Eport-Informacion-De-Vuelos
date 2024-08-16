window.addEventListener('load', function(){
    
    let insertDate = document.getElementById('insertDate');
    let insertTime = document.getElementById('insertTime');
    let flightNumber = document.getElementById('flightNumber');


    // JS para mostar hora (Hora:Minutos:Segundos)

    function mostrarHora(){
        let fechaDinamica = new Date();
        // let insertTime = document.getElementById('insertTime');
        let horas = fechaDinamica.getHours();
        let minutos = fechaDinamica.getMinutes();
        let segundos = fechaDinamica.getSeconds();

        //Condiciones
        if(segundos < 10){
            segundos = '0'+segundos;
        }

        if(minutos<10){
            minutos = '0'+minutos;
        }

        if(horas<10){
            horas = '0'+horas;
        }

        let horaActual = `${horas}:${minutos}:${segundos}`;
        document.getElementById('insertTime').textContent = horaActual;
    }

    mostrarHora();

    setInterval (mostrarHora,1000);

    // JS para mostrar fecha (Día-Mes-AñoCompleto)

    function mostrarFecha(){
        let fechaDinamica = new Date();
        // let insertDate = document.getElementById('insertDate');
        let dia = fechaDinamica.getDate();
        let mes = fechaDinamica.getMonth() + 1;
        let año = fechaDinamica.getFullYear();

        //Condiciones
        if(dia < 10){
            dia = '0'+dia;
        }

        if(mes<10){
            mes = '0'+mes;
        }


        let fechaActual = `${dia}-${mes}-${año}`;
        document.getElementById('insertDate').textContent = fechaActual;
    }

    mostrarFecha();

    setInterval (mostrarFecha,1000);

    // JS para mostrar número de vuelo (número aleatorio de 1 a 9999)

    function generarNumeroAleatorioVuelo() {
        return Math.floor(Math.random() * 9999) + 1;
    }
    generarNumeroAleatorioVuelo();

    let vuelo = generarNumeroAleatorioVuelo();

    console.log(vuelo);

    document.getElementById('flightNumber').textContent = vuelo;

    // JS para mostrar número de terminal (número aleatorio de 1 a 50)

    function generarNumeroAleatorioTerminal() {
        return Math.floor(Math.random() * 50) + 1;
    }
    generarNumeroAleatorioTerminal();

    let terminal = generarNumeroAleatorioTerminal();

    console.log(terminal);

    document.getElementById('terminalNumber').textContent = terminal;

    // JS para generar una alerta al conultar la página

    window.alert ('Pasajero, se le recuerda que para abordar el avión debe tener en su mano el pasaporte y su boleto de embarque. Manténgase atento a los avisos a través de esta plataforma');
      



})