//fs con promesas
//sintaxis simplificada, mas limpia.

const fs=require("fs");
/*
fs.promises.writeFile('archivo.txt',"hola mama").then(result=>{
    console.log("Escrito");
}).catch(error=>console.log(error));

fs.promises.readFile("archivo.txt","utf-8").then(data=>{
    console.log(data);
    console.log("finalizada la tarea")
}).catch(error=>console.log(error))
*/

const readFile=async(path)=>{
    try {
        let data= await fs.promises.readFile(path,"utf-8")
        let objet=JSON.parse(data);
        objet.contenidoObj.author="tomas";
        await fs.promises.writeFile("copiaJson.json",JSON.stringify(objet,null,3))
        console.log(data);
    } catch (error) {
        console.log("nada hermano, quebradaso");
    }
}
readFile("info.txt");
