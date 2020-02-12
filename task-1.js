const logItem = array => {
    for (let i = 0; i < array.length; i++) 
        console.log(i + 1, '-', array[i]);
};

logItem(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItem([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);