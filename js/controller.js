//clase de test para el contolador que llama a los endpoints del backend

document.addEventListener('DOMContentLoaded', function(){
    //recogemos el boton 
    const button = document.getElementById('getEndpointTest');

    //creamos el listener
    button.addEventListener('click',function(){

        //se hace la solicitud GET a mi endpoint
        fetch('http://localhost:8080/api/impConsola')
        .then(response => {
            if(!response.ok){
                throw new Error('La respuesta de la conexión no es OK');
            }
            return response.text('Se retorna texto o un posible Json');
        })
        .catch(error => {
            console.error('Ha ocurrido un error en la petición al endpoint GET. El mensaje de error es: ', error);
        })
    });
});