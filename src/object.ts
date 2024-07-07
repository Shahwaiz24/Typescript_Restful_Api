// Object Start //

//tsc@ ignore
const user1 = {

    name: 'Shahwaiz Dev',
    email: 'shahwaiz@gmail.com',
    number: 3112393716,

}

function forObj(obj: { name: string, number: string | number, email: string }) {
    if (typeof obj.number == "string") {
        console.log(typeof obj.number + ' Number is String')
    }
    else if (typeof obj.number == "number") {
        console.log(`Type : ${typeof obj.number}  ${obj.number}`)
    }
}

forObj({ name: 'Shahwaiz', number: '0212434', email: '@gmail.com' })

