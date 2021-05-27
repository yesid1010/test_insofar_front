import axios from 'axios'
import {reactive,ref} from 'vue'
import useValidations from './useValidatios'

const {validateEmail,validateNumber,validateFiels} = useValidations()

export let user = reactive( {
    nombres:'',
    apellidos:'',
    cedula:'',
    correo:'',
    telefono:'',
    ids:''
})

export const users = ref([])
export let modal = ref(false)

const url_local = "http://localhost:8000/api/users/"
const url_red = "http://192.168.1.10:8000/api/users"
const useUsers = () => {
    const getUsers = async () => {
        axios.get(url_red).then(response => {
            let aux_user= response.data.data
            aux_user.forEach(item => {
                users.value.unshift(item)
            });
        })
    }

    const optionUser = async(option) => {

        if(!validateFiels(user)){
            alert("Todos los campos son obligatorios")
            return
        }
        
        if(!validateNumber(user.cedula) || !validateNumber(user.telefono)){
            alert("El campo cedula y el campo telefono solo admite valores numericos")
            return
        }

        if(!validateEmail(user.correo)){
            alert("Por favor escriba un correo válido")
            return
        }

        if(option=="save"){
            axios.post(url_red,user)
            .then(response => {
                console.log(response)
                users.value.unshift(response.data.data)
                cleanFields()
            })
        }

        if(option=="update"){
            axios.put(`${url_red}/${user.ids}`,user)
            .then(() => {
                cleanFields()
                users.value = []
                getUsers()
            })
        }


    }

    const editUser =  (user_) => {
        user.cedula = user_.attributes.cedula
        user.nombres = user_.attributes.nombres
        user.apellidos = user_.attributes.apellidos
        user.correo = user_.attributes.correo
        user.telefono = user_.attributes.telefono
        user.ids = user_.id
        modal.value = true
    }

    const cleanFields = () => {
        user.cedula = ""
        user.nombres = ""
        user.apellidos = ""
        user.correo = ""
        user.telefono = ""
        modal.value = false
    }

    return {getUsers,editUser,optionUser,cleanFields}
}

export default useUsers
