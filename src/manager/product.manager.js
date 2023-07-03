import FileManager from "./file.manager";


export default class ProductManager extends FileManager{

    constructor (){
        super('./productos.json')
    }
    create=async(data)=>{
        const result = await this.set(data)
        return result;

    }

    list = async () => {
        const result =await this.get()
        console.log('asdsadsds', result)
        return result
    }    
}
