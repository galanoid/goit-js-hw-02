const formatString = myStr => {
    if (myStr.length > 40) {
        console.log(myStr.substr(0, 40), '...');
    } else {
        console.log(myStr);
    }
};

formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');