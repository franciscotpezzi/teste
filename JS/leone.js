
function pot3_15(){
    let tela = document.createElement('resp3_15').innerHTML=' '
    let n = 0
    let cont = 0
    resp3_15.innerHTML=''
   /* while(cont <= 15){
        n = 3 ** cont
        resp.innerHTML+=`${n}`
        cont ++
    }*/
    while(cont <= 15){
        if (cont == 0){
            n = 1
        }
        if(cont == 1){
            n = 3
        }
        if(cont >= 2){
            n *= 3 
        }
        resp3_15.innerHTML+=` ${n} &#x1f4a1`
        cont += 1
    }

}
function limpot3_15(){
    resp3_15.innerHTML=`&#x1f914  &#x1f914  &#x1f914`

}