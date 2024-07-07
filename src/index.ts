class UserModel {

    //  Class With the Concepts of Getter & Setter //

   protected username: string;
   protected number: number;
   protected email: string
    
   private creatorUid!: string
    
    constructor(username: string, number: number, email: string,) {
        this.email = email;
        this.number = number;
        this.username = username
    }

    get getCreatorUid(): string {
        return this.creatorUid;
    }
    
    set setCreatorUid(UserUid : string)  {
         this.creatorUid = UserUid;
    }
}

let data = new UserModel('Shahwaiz@dev', 923112393716, 'Shahwaiz@gmail.com');


data.setCreatorUid = '190323';
console.log(data.getCreatorUid)

class AdminUser extends UserModel{
    accountType: 'Admin' | 'User';

    constructor(username: string, number: number, email: string, accountType: 'Admin' | 'User') {
        super(username, number, email);
        this.email = email;
        this.number = number;
        this.accountType = accountType;
        this.username = username;
    }

    createAdminUser(): void {
        console.log(`Username : ${this.username} \n Email : ${this.email} \n Number : ${this.number} \n Account Type : ${this.accountType} \n User Uid : ${this.getCreatorUid}`)}


    
}

let UserType = new AdminUser('Huzaifa@dev', 9211923, 'Huzaifa@gmail.com', 'Admin');

UserType.setCreatorUid = '0987212';
UserType.createAdminUser();


