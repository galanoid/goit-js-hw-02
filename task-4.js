const formatString = myStr => {
    let arrStr;
    let newStr1;
    if (myStr.length > 40) {
        newStr1 = myStr.substr(0, 40);
        myStr = myStr.substr(40);
        arrStr = newStr1.split('');
        arrStr.push('...');
        newStr1 = arrStr.join('');
        console.log(newStr1);
        console.log(myStr);
    } else {
        console.log(myStr);
    }
    
};

formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');