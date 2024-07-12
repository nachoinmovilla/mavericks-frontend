import axios from '../middleware'
import API from '../API'

export const getContacts = ({ page = '1' }) =>{
    return axios.get(
        `${API}/v1/contacts?page=${page}`,
        {
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
    ).then(res=>{
        return res
    }).catch(err=>{
        return err.response
    })
}