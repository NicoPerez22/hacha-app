export class UserModel {
    // public id: number;
    public username: string;
    public password: string;
    public email: string;


    constructor(obj?: any){
        // this.id = obj && obj.id || 0,
        this.username = obj && obj.username || "",
        this.password = obj && obj.password || "",
        this.email = obj && obj.email || ""
    }
}