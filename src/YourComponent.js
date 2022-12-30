import React, { Component } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import listaTiendas from "./store_directory.json";

let listaCoordenadas = [];
let listaNombres = [];
let latitud = 0;
let longitud = 0;

const containerStyle = {
  width: "1000px",
  height: "600px",
};

const center = {
  lat: 19.42847,
  lng: -99.12766,
};

const centrar = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

/* console.log(listaTiendas);
listaTiendas.forEach((element) => {
  console.log(element.Name);
}); */

/* function obtenerCoordenadas(direccion) {
  geocodeByAddress(direccion)
  .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) =>
    console.log('Las coordenadas son:', { lat, lng })
  );
} */

/* obtenerCoordenadas(); */

//Ejemplo de lista de marcadores, por falta de API para usar geocoding

let objeto = {};

objeto.nombre = "Red Barn Stores 3858-CUAJIMALPA";
objeto.lat = 19.3586799;
objeto.long = -99.2963298;
listaCoordenadas.push(objeto);

objeto = {};
objeto.nombre = "Red Barn Stores 2344-LOMAS";
objeto.lat = 19.4503588;
objeto.long = -99.2203664;
listaCoordenadas.push(objeto);

objeto = {};
objeto.nombre = "Red Barn Stores 1770-PATIO SANTA FE";
objeto.lat = 19.4505123;
objeto.long = -99.2882177;
listaCoordenadas.push(objeto);

objeto = {};
objeto.nombre = "Red Barn Stores 2466-CUITLAHUAC";
objeto.lat = 19.4715087;
objeto.long = -99.1673653;
listaCoordenadas.push(objeto);

objeto = {};
objeto.nombre = "Red Barn Stores 3862-AZCAPOTZALCO";
objeto.lat = 19.474986;
objeto.long = -99.1966587;
listaCoordenadas.push(objeto);

console.log(listaCoordenadas);

export default class YourComponent extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 style={{ textAlign: "center" }}>Mapa de la Ciudad de México:</h1>
        <h3>Haz click en algún marcador para agregarlo a tu lista de tiendas favoritas</h3>
        <div style={centrar}>
          <LoadScript
          googleMapsApiKey="AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={11}
            >
              {/* Child components, such as markers, info windows, etc. */}
              {/* Agregar coordenadas  */}
              {listaCoordenadas.map((coordenada) => (
                <MarkerF
                  key={coordenada.nombre}
                  position={{ lat: coordenada.lat, lng: coordenada.long }}
                  onClick={() => {
                    if (!listaNombres.includes(coordenada.nombre)) {
                      listaNombres.push(coordenada.nombre);
                      this.forceUpdate();
                    }
                  }}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
        <h1>Lista de tiendas favoritas:</h1>
        <ul>
          {listaNombres.map((nombre) => (
            <li>{nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

var divStyle = {
  border: "red",
  borderWidth: 2,
  borderStyle: "solid",
  padding: 20,
};
