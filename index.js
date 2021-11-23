let personas=[
    {nombre: "John", apellido: "Doe"},
     {nombre: "Jane",  apellido: null}, 
     {nombre: "Jose", apellido:"Doe"},
     {nombre: "Maria", apellido:"Doe"}
] ;
let arreglo_final=[];
personas.map(function(personas,string){
    if(personas.apellido=='Doe'){
       arreglo_final.push({nombre:personas.nombre,apellido:personas.apellido});
      }
 
})
console.log(arreglo_final);