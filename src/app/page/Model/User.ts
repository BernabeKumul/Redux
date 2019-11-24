export class User{
    public Id:number;
    public Name:string;
    public Email:string;
    public Enable:boolean;

    constructor( _Name: string, _Email:string){
        this.Id = Math.random();
        this.Name = _Name;
        this.Email = _Email;
        this.Enable = true;
    }
}