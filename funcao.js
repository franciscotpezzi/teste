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