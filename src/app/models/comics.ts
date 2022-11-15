export class Comic{
    public nombre:string;
    public imagen:string;
    public personaje:string;

    //CREAMOS UN CONSTRUCTOR PARA RECIBIR
    //LOS PARAMETROS DEL PRODUCTO
    constructor(name: string,imagen:string,personaje:string){
        this.nombre = name;
        this.imagen = imagen;
        this.personaje = personaje
    }
}