var d = new Date("Thu Dec 12 2019 08:00:00 GMT-0300")
var year = d.getFullYear()
var month = d.getMonth()+1
document.getElementById("update-date").innerHTML = `Atualizado em: ${month}-${year}`;


