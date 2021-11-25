function jsonpSend(url, callback,success){
    let script = document.createElement('script')
    script.src = url
    script.async = true
    script.type = 'text/javascript'
    window[callback] = function(data){
        success&&success(data)
    }
}
jsonpSend('http://xxx?name=12&callback=demo1', 'demo1', function(data){
    console.log(data)
})