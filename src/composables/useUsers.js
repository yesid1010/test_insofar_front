import axios from 'axios'
import {reactive,ref} from 'vue'

const user = reactive({
    id:'',
    nombres:'',
    apellidos:'',
    cedula:'',
    correo:'',
    telefono:''
})

export const users = ref([])

const url = "http://localhost:8000/api/users/"
const useUsers = () => {
    const getUsers = async () => {
        axios.get(url).then(response => {
            let aux_user= response.data.data
            aux_user.forEach(item => {
                users.value.unshift(item)
            });

            console.log(users.value)
        })
    }

    const editUser = async (user) => {
        console.log(user)
    }

    return {getUsers,editUser}
}

export default useUsers
