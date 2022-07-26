import { API } from "./apiConfig";

export const CValue = async (corpus) => {
    try{
        let myHeaders = new Headers();        
        myHeaders.append("Content-Type", "application/json");    
        const raw = JSON.stringify({corpus});    
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        const url = API + 'c_value'
        const response = await fetch(url, requestOptions)
            .catch((e) => {
                return {error: e}
            })    
        const result = await response.json()
        return result
    }catch(e){
        return {error: e}
    }
}