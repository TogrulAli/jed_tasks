const numberInMind = 36;
let userNumber = Number(prompt('Enter the number.'))
let successStep = 1;


const successMessage = (ugurluAddim) => {
    let amount = 1000;
    if (successStep === 1) {
        amount = 1000;
        let message = `You will get ${amount} manat to your bank account.`;
        console.log(message)
    } else if (successStep >= 2 && successStep <= 5) {
        amount = 750;
        let message = `You will get ${amount} manat to your bank account.`;
        console.log(message)
    } else if (successStep >= 6 && successStep <= 9) {
        amount = 250;
        let message = `You will get ${amount} manat to your bank account.`;
        console.log(message)
    } else if (successStep >= 10) {
        amount = -250;
        let negativeMessage = `You will be charged ${amount} manat from your bank account.`
        console.log(negativeMessage);
    }
    
};


while (userNumber !== numberInMind) {
    successStep++;
    userNumber = Number(prompt('Enter the number.'));
}

console.log(`Great! You found ${successStep} time`);
successMessage(successStep);