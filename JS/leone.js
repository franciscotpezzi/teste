
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
        
        tela.innerHTML +=` ${pro} &#x1f40c`
        pro = (atu + ant)
        atu = ant
        ant = pro
        i++
    }
}
function limpar(){
    tela.innerHTML=`&#x1f58c  &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c`
}

function transC_F(){
    /*  let olha = window.document.getElementById('tela')*/
      let c = 10
      let f = 0
      telC_F.innerHTML =''
      while(c <= 100){
          f = (c * 9 / 5) + 32
          telC_F.innerHTML+=`</br><strong>${c}°C</strong> equivale à <strong>${f}°F</strong>`
          c += 10
      }
  }
  function limC_F(){
      telC_F.innerHTML=`  &#x1f63c  &#x1f408  &#x1f63c `
  }

  
function dobra(){
    let i = 0;
    let n = 2;
    let d = 0;
    let s = 0;
    par.innerHTML = " "
    while(i < 64){
        d = n**i
        par.innerHTML += `${d} &#x1f33e `
        s += d
        i++
    }
    par.innerHTML +=`<br/><strong>A totalização de grãos de trigo é ${s}</strong> &#x1f33e`
    img.src = img.src="../imagens/xadres470.jpg "
}

function limDob_Som(){
    par.innerHTML= ` &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b  &#x265b  &#x265b
    &#x265b    &#x265b  &#x265b &#x265b &#x265b &#x265b    &#x265b    &#x265b    &#x265b    &#x265b `
    img.src = img.src="../imagens/xadres470.jpg "
}