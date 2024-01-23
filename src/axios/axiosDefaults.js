import axios from 'axios'

axios.defaults.baseURL = 'https://laraveldragon.azurewebsites.net';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


// Functions
function verifyServerAvailability(){
    return axios.get('/api/server_state').then((res) => {
        if(res.status == 200){
            return {
                State: true,
                Message: 'Service Running'
            };
        }
    }).catch(() => {
        return {
            State: false,
            Message: 'Service Under Maintenance'
        };
    })
}

function Login(){
    console.log("Loggin In")
}

export { verifyServerAvailability, Login}