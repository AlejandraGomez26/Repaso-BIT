
// el i++ no se coloca adentro al igual que el break  se usa para salir de un ciclo 
// el return de toda la funcion
// el while es casi igual que un for
// let i =0
// while ( i <= 10){
//     console.log (i)
//     i++
//     return
// }


// Los array son listas [ ] con esos corchetes identifica que es una lista
// los array empiezan desde 0
// se podria poner undefined ? pero para hacerlo mas sencillo se pone!   ?
// ejemplo:console.log (!students[posicion] ?  "esta posicion no existe": students)

// let students  = [
//     "alejandra",
//     "maria",
//     "sofia"

// ]
// let posicion = 5
// console.log (!students[posicion]  ?  "esta posicion no existe": students)


// nombre.length es para que me cuente cuantas cosas tiene (los caracteres)
// nombre.charcodeAt es para saber el codigo ascci
// String.fromCharCode(#) es para obtener el caracter con el numero ascci
// nombre.charAt(#) obtiene el caracter en la posicion dada

// let txt = "array"
// let arr = ["A","r","r","a","y"]

// console.log(String.fromCharCode(65))

// of es como el for de python lo que hacees traer los elementos y guardarlos en el pos ya sabe donde inciar y donde terminar
// in trae las posiciones

// for(let pos in txt){
// console.log(pos)
// }

// encriptacion lo que hace es mover las letras 13 posiciones
// let encrypted = ""

// for(let i = 0; i < txt.length; i++){
//     let code = txt[i].charCodeAt()
//     encrypted += String.fromCharCode(code + 13)
//     console.log(code + 13) 
// }

// console.log(encrypted)

// para encriptar contrasenas o como funciona es 
//bcrypt(pass, "clave") = hash
//dcrypt(pass, "") = hash desencriptado
