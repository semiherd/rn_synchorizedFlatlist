function capitalizeFirstCh(str) {
    let newStr=[]; 
    str.split(' ').map((item) => {
        newStr.push(item.charAt(0).toUpperCase() + item.slice(1));
    })
    return newStr.join(' ');
}

export default capitalizeFirstCh;