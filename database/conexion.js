var admin=require("firebase-admin");
var keys=require("../keys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});

var  micuenta=admin.firestore();
var conexion=micuenta.collection("miejemploBD");
var conexionpr=micuenta.collection("producDB");

module.exports={
    conexion,
    conexionpr
};