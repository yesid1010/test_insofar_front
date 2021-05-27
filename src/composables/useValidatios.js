
const useValidations = ()=>{

    const validateEmail = (email) => {
        if (
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              email
            )
          ) {
            return true;
          }
          return false;
    };

    const validateNumber = (number) => {
        let acept = /^[0-9]+$/
        if(number.match(acept)){
            return true
        }else{
            return false
        }
    }

    const validateFiels = (user) => {
        if(user.cedula == "" || user.nombres == "" || user.apellidos == "" || user.correo == "" || user.telefono == ""){
            return false
        }
        return true
    }

    return {validateEmail,validateNumber,validateFiels}
}

export default useValidations