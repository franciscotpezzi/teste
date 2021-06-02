
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
        resp3_15.innerHTML+=`3<sup>${cont}</sup> = ${n} &#x1f4a1`
        cont += 1
    }

}
function limpot3_15(){
    resp3_15.innerHTML=`&#x1f914  &#x1f914  &#x1f914`

}

function calcPot(){
    let exit = window.document.getElementById('resPot')
    let bn = window.document.getElementById('base')
    let en = window.document.getElementById('exp')
    let b = Number(bn.value)
    let e = Number(en.value)
    let res = 1
    let i = 0
    
        if(e == 0){
            res = 1
        }
        if(e == 1){
            res = b
        }
        if(e >=2){
            for(let i = 1; i <= e; i++){
                res *= b
            }
        }
        exit.innerHTML = `${res}`
        i ++
    
    e = 0
    b = 0
    }
    function limPot(){
    resPot = window.document.getElementById('resPot').innerHTML='&#x1f436  &#x1f436  &#x1f436'
    document.getElementById('base').value =`0`;   
    document.getElementById('exp').value =`0`;   
    
    }

    
function fibonacci(){
    let tela = window.document.getElementById('tela')
    let ant = 1
    let atu = 0
    let pro = 0
    let i = 1
    tela.innerHTML=' '

    while( i <= 15){
        
        tela.innerHTML +=` ${pro}`
        pro = (atu + ant)
        atu = ant
        ant = pro
        i++
    }
}
function limpar(){
    tela.innerHTML=`&#x1f58c  &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c`
}