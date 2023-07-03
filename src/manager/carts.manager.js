import FileManager from "./file.manager";

export default class CartManager extends FileManager{

    constructor (){
        super(',/carts.json')
    }

    create=async(data)=>{
        const result = await this.set(data)
        return result;

    }

    list = async () => {
        const result =await this.get()
        
        return result
    }   
}
