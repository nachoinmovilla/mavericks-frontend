import axios from '../middleware'
import API from '../API'

export const userLogin = (json) =>{
    return axios.get(
        `${API}/v1/login?email=${json?.email}&password=${json?.password}`,
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