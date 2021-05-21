// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var mat=[];
  for(var cada in objeto){
    var vec=[];
    vec.push(cada);
    vec.push(objeto[cada]);
    mat.push(vec);
  }
  return mat;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var nuevoObj={};
  var streva=string.split('');
  var strord=streva.sort();
  while(strord.length>0){
    var letra=strord[0];
    var cont=0;
    for(var i=0 ; i<strord.length ; i++){
      if(strord[i]===letra && i!==strord.length-1){
        cont++;
      }
      else if(strord[i]===letra && i===strord.length-1){
        cont++;
        for(var j=0 ; j<=i ; j++){
          strord.shift();
        }
        break;
      }
      else if(strord[i]!==letra){
        for(var j=0 ; j<i ; j++){
          strord.shift();
        }
        break;
      }
    }
    nuevoObj[letra]=cont;
  }
  return nuevoObj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  function Mayu(le){
    return le===le.toUpperCase();
  }
  function Minu(le){
    return le===le.toLowerCase();
  }
  var smayu='';
  var sminu='';
  for(var i=0 ; i<s.length ; i++){
    var leact=s.charAt(i);
    if(Mayu(leact)){
      smayu=smayu+leact;
    }
    else if(Minu(leact)){
      sminu=sminu+leact;
    }
  }
  return smayu+sminu;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strdiv=str.split(' ');
  //function Invertida(pala){
    //var inv='';
    //for(var i=pala.length-1 ; i>=0 ; i--){
      //inv=inv+pala.charAt(i);
    //}
    //return inv;
  //}
  //var strinv=strdiv.forEach(Invertida);
  var strinv=[];
  for(var i=0 ; i<strdiv.length ; i++){
    var inver='';
    for(var j=strdiv[i].length-1 ; j>=0 ; j--){
      inver=inver+strdiv[i].charAt(j);
    }
    strinv.push(inver);
  }
  var strres=strinv.reduce(function(count,palabra){
    return count+' '+palabra;
  });
  return strres;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num=numero;
  var vec=[];
  var j=0;
  while(num>=1){
    var cl=num%10;
    vec.push(cl);
    var numen=num/10;
    num=Math.floor(numen);
  }
  if(vec.length%2===0){
    for(var i=0 ; i<vec.length/2 ; i++){
      if(vec[i]!==vec[vec.length-1-i]){
        return 'No es capicua';
      }
    }
  }
  else if(vec.length%2!==0){
    for(var i=0 ; i<(vec.length-1)/2 ; i++){
      if(vec[i]!==vec[vec.length-1-i]){
        return 'No es capicua';
      }
    }
  }
  return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí 
  var cad=cadena.split('');
  for(var i=0 ; i<cad.length ; i++){
    if((cad[i]==='a' || cad[i]==='b' || cad[i]==='c') && i!==cad.length-1){
      for(var j=i ; j<cad.length-1 ; j++){
        cad[j]=cad[j+1];
      }
      cad.pop();
      i--;
    }
    else if((cad[i]==='a' || cad[i]==='b' || cad[i]==='c') && i===cad.length-1){
      cad.pop();
    }
  }
  if(cad.length===cadena.length){
    return cadena;
  }
  else if(cad.length<cadena.length){
    var otro=cad.reduce(function(coun,pal){
      return coun+pal;
    },'');
    return otro;
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(var i=0 ; i<arr.length-1 ; i++){
    var min=i;
    for(var j=i+1 ; j<arr.length ; j++){
      if(arr[j].length<arr[min].length){
        min=j;
      }
    }
    var aux=arr[i];
    arr[i]=arr[min];
    arr[min]=aux;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var inter=[];
  for(var i=0 ; i<arreglo1.length ; i++){
    for(var j=0 ; j<arreglo2.length ; j++){
      if(arreglo1[i]===arreglo2[j]){
        inter.push(arreglo1[i]);
      }
    }
  } 
  if(inter.length===0){
    return inter;
  }
  else{
    return inter;
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

