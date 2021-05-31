function quadrado() {
    var n1 = 15
    var n2 = 200
    var res = window.document.getElementById('resultado')
    var i = n1
    res.innerHTML = ''
    while (i <= n2){
        var s = i * i
        res.innerHTML += `O quadrado de ${i} é igual a <strong>${s}`
        i++
    }
}

function limpa() {
    resultado.innerHTML = ` &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914`
}

function tabuada() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('respT')
    var n = Number(num.value)
    var i = 1
    tab.innerHTML =''
    while (i <=10){
        tab.innerHTML += `<strong>${n} x ${i} = ${n*i}</strong></br>`
        i++
    }
}

function limpaT() {
    document.getElementById('num').value = ''
    respT.innerHTML=`&#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914`
}

function soma100() {
    let res = window.document.getElementById('resS100')
    let soma = 0
    let cont = 1
    while (cont <= 100){
        soma += cont
        cont ++
    }
    res.innerHTML = `<strong>${soma}</strong>`
}

function limpa100() {
    resS100.innerHTML = ` &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914 &#x1f914` 
}

function som500p(){
    let res500p = window.document.getElementById('res500p')
    let i = 1
    let soma = 0
    while (i <= 500){
        if(i % 2 == 0){
            soma += i
        }
        i++
    }
    res500p.innerHTML =`O resultado é <strong>${soma}</strong>`

}

function limpa500p(){
    res500p.innerHTML=`&#129409  &#129409  &#129409  &#129409`
}