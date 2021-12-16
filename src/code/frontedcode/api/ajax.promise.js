
function ajaxdemo(){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url,true)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
               if( xhr.status === 200){
                resolve(xhr.responseText)
               }else{
                   reject(xhr.statusText)
               }
            }
        }
        xhr.onerror = function(){
            reject(xhr.statusText)
        }
        xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send(null)
    })
}
