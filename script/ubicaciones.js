fetch('./script/ubicaciones.json')
.then(response => response.json())
.then(data => {console.log(data)
crearCard(data)
}
)

function crearCard(data){
    divRes = document.querySelector("#resultado"),
    divRes.innerHTML = ""
    data.forEach(item => {
        divRes.innerHTML +=
            `<div class="cardEvents">
            <iframe src="${item.iframe}" width="100%" ></iframe>
  <div class="text">
      <h4>${item.nombre}</h4>
      <div class="descripcion">
      <img src="./img/ubicacion.png" alt="" srcset="">
      <p> ${item.descripcion} </p>
      </div>
  </div>
  </div> `
    });
}