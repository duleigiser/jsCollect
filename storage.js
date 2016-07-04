
export default {
    local: {
        get(key){
            let strValue = localStorage.getItem(key);
            return JSON.parse(strValue);
        },
        set(key, jsonValue){
            var strValue = JSON.stringify(jsonValue);
            localStorage.setItem(key, strValue)
        },
        remove(key){
            localStorage.removeItem(key);
        }
    },
    session: {
        get(key){
            let strValue = sessionStorage.getItem(key);
            return JSON.parse(strValue);
        },
        set(key, jsonValue){
            var strValue = JSON.stringify(jsonValue);
            sessionStorage.setItem(key, strValue)
        },
        remove(key){
            sessionStorage.removeItem(key);
        }
    }

}
