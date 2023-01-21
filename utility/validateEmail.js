exports.validateEmail = (email) => {
    if(!email.match(/^([a-z0-9]+)@([a-z]{3,9})\.([a-z]{2,3})$/))
        return false;
    
    return true;
}