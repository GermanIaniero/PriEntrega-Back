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
    

    list = async () => {
        return await this.get()
    }   
}
