var xmlhttp
// 创建对象
if(window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest()
}else{
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
}
// 链接服务器
xmlhttp.open('get', url, true)
// true 异步，false 同步

xmlhttp.send()

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readystate == 4){
        if(xmlhttp.status === 200){
            fnSucc(xmlhttp.responseText)
        }
    }else{
        if(fnFail){
            fnFail()
        }
    }
}