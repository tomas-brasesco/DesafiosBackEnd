const fs= require ("fs");

const pathToProducts="./products.JSON"

class Contenedor{
    saveProduct=async (product) =>{
      if(!product.title)return {status:"error",error:"Falta titulo"}
      try {
        if(fs.existsSync(pathToProducts)){
          let data=await fs.promises.readFile(pathToProducts,"utf-8")
          let products=JSON.parse(data);
          let id=products[products.length-1].id+1;
          product.id=id;
          products.push(product);
          await fs.promises.writeFile(pathToProducts,JSON.stringify(products,null,2))
          return {status:"success",message:"Producto agregado"}
        }else {
          product.id=1
          await fs.promises.writeFile(pathToProducts,JSON.stringify([product],null,2))
          return {status:"succes",message:"Producto agregado!"}
        }
      } catch (error) {
        return{status:"error",message:error}
      }
    }
    getAll=async()=>{
      if(fs.existsSync(pathToProducts)){
        let data=await fs.promises.readFile(pathToProducts,"utf-8")
        let products=JSON.parse(data);
        return {status:"succcess", data:products}
        }
    }
    getById=async(id)=>{
      if(!id) return {status:"error",error:"Ingresar Id"}
      if(fs.existsSync(pathToProducts)){
        let data=await fs.promises.readFile(pathToProducts,"utf-8")
        let products=JSON.parse(data);
        //metodo filter visto en clase
        //let product=products.filter(p=>p.id==id);
        //if(product.length>0) return{status:"success",data:product}
        //else return{status:"error",error:"Producto no encontrado"}
        //metodo Find
        let product=products.find(p=>p.id===id);
        if(product)return{status:"success",data:product}
        else return{status:"error",error:"Producto no encontrado"}
        }
    }
    modifyProduct=async(id,updatedProduct)=>{
      if(!id) return {status:"error",error:"Ingresar Id"}
      if(fs.existsSync(pathToProducts)){
        let data=await fs.promises.readFile(pathToProducts,"utf-8")
        let products=JSON.parse(data);
        let newProducts=products.map((product)=>{
          if(product.id==id){
            updatedProduct.id=id;
            return updatedProduct
          }
          else{
            return product
          }
        })
        await fs.promises.writeFile(pathToProducts,JSON.stringify(newProducts,null,3))
        return{status:"success",message:"Producto actualizado"}
      }
    }
    deleteProduct=async(id)=>{
      if(!id) return {status:"error",error:"Ingresar Id"}
      if(fs.existsSync(pathToProducts)){
        let data=await fs.promises.readFile(pathToProducts,"utf-8")
        let products=JSON.parse(data);
        let newProducts=products.filter(product=>product.id!==id)
        await fs.promises.writeFile(pathToProducts,JSON.stringify(newProducts,null,3))
        return{status:"success",message:"Producto borrado correctamente"}
      }
    }
}
module.exports=Contenedor;
