let x: number = 10
let y: string = '20'



console.log(x + y);

function islogin(username: string, userpassword: string): string {
    let password = '1234565';
    let name = 'Shahwaiz';

    if (username == name && userpassword == password) {

        return 'User Logined'
    }
    else {
        return 'Invalid Values';
    }


}


let checklogin = islogin('Shahwaiz', '1234565');

console.log(checklogin);

