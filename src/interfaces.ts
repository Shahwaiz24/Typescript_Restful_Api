


// Interfaces Start //

interface User {
    username: string
    useremail: string
    usernumber: number

    printuserdata(): string

}

let user: User = {
    useremail: 'Shahwaiz@dev', username: 'Shahwaiz', usernumber: 9231123, printuserdata: () => {
        return `${user.username}`;

    }
};

interface SuperUser extends User {

    accountType: 'Admin' | 'User',

}
const usertype: SuperUser = {
    useremail: 'Huzaifa@dev', username: 'Huzaifa', usernumber: 9231123, printuserdata: () => {
        return `${user.username}`;

    }, accountType: 'Admin'
}

console.log(`Printing User \n ${user}`);
console.log(`Printing AdminUser \n ${usertype}`);