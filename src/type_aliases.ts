
// Type Alaises

type data = {
    name: string;
    email: string;
    mobileNumber: string | number;

}

function getuserdata(fn: data) {
    if (typeof fn.mobileNumber === "number") {
        console.log(` Type Of MobileNumber : ${typeof fn.mobileNumber} \n Name : ${fn.name} \n Email : ${fn.email}`)

    }
    else {
        console.log(` Type Of MobileNumber : ${typeof fn.mobileNumber} \n Name : ${fn.name} \n Email : ${fn.email}`)


    }
}

getuserdata({ name: 'Shawhaiz', email: 'Shawhaiz@dev', mobileNumber: 112334 })

type returnType = number | string | string[] | number[];

function getdata(input: returnType) {
    return console.log(input);
}
getdata(9231123936715);
