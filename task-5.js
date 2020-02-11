const checkForSpam = message => {
    if(message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam')) {
        return true;
    }

    return false;
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));