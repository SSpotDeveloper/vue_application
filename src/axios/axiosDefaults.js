import axios from 'axios'

axios.defaults.baseURL = 'https://shadowdragon.azurewebsites.net';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


// Functions
function verifyServerAvailability(){
    return axios.get('/api/server_state').then((res) => {
        if(res.status == 200){
            return true;
        }
    }).catch(() => {
        return false;
    })
}

export {verifyServerAvailability}