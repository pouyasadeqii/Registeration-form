export const validate = (data, type) => {
    const errors = {};

    if (type === "signUp") {

        if (!data.name.trim()) {
            errors.name = "Username required"
        } else {
            delete errors.name ;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = 'Confirm the password'
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password do not match"
        } else {
            delete errors.confirmPassword;
        }
    
        if (data.isAccepted) {
            delete data.isAccepted;
        } else {
            errors.isAccepted = "Accept our regulations"
        }

    }

    
    if (!data.email) {
        errors.email = "Email required"
    } else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is invalid"
    } else {
        delete errors.email ;
    }

    if (!data.password) {
        errors.password = 'Password required'
    }else if (data.password.length < 6) {
        errors.password = 'password need to be character or more'
    } else {
        delete errors.password;
    }
 
    return errors;
}