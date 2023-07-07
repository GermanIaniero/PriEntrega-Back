import FileManager from "./file.manager.js";

export default class CartManager extends FileManager{

    constructor (){
        super('./carts.json')
    }

    create=async()=>{
        const data = {
            products: []
        }
        return await this.set(data)

    }

    addProduct = async(idc, idp) => { 
        const cart = await this.getById(idc)
        cart.products.push(idp)

        return await this.update (cart)

    }    


    getCartById = async(id) => { 
        const carritos = await this.get()
        const carrito= carritos.find((carritos) => carritos.id === id)
        if (!carrito) {
            throw ('El carrito no existe')
        }
        return carrito
    }  
    /*delProduct = async(idc, idp) => { 
        const cart = await this.getById(idc)

        cart.products.  (idp)



        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
          return;
        }
    
        manager.saveProductsToDisk().splice(index, 1);
        await this.saveProductsToDisk();
        console.log(`Producto con ID ${id} a sido eliminado`);




        return await this.update (cart)

    }  
/*

    ////////////////////////////////
    async deleteProduct(id) {
        await this.loadProductsFromDisk();
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
          return;
        }
    
        manager.saveProductsToDisk().splice(index, 1);
        await this.saveProductsToDisk();
        console.log(`Producto con ID ${id} a sido eliminado`);
      }
////////////////////////////////////////////////////////////////
*/

    list = async () => {
        return await this.get()
    }   
}
