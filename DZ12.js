
let rastoynie = documentdocument.getElementById('rastoynie')
let time = documentdocument.getElementById('time')
function f1(g,t) {
    let s = (g / t)
    let g = +rastoynie.value
    let t = +time.value
   $('#brut').html('<h3>Нужно двигать со Скоростью ' + s.toFixed(2) + ' км/ч</h3>')

     if(t <= 0)  {
        $('#brut').html('<h3>Время не может быть отрицательным.</h3>')
    }
    else if (g <= 0){
       $('#brut').html('<h3>Вы указали не правильное растояние.</h3>')
    }
}
    $('#scor').click(function () {
        f1($('#rastoynie').val(), $('#time').val())
    })
    $('#tuk').click(function () {
        f1($('#rastoynie').val(''), $('#time').val(''))
    })
    $("#tuk").click( function(){ $("h3").text("")
    } )

function f2(d,c) {
    let sh = Math.floor(d / c)
    let o = (sh * c)
    let p = (d - o)
    $('#but2').html('<h3>Можно купить: ' + sh + ' шоколадки <h3> <h3>Остается: ' + p + ' рублей</h3>')
    if(d<c){
        $('#but2').html('<h3>Цена шоколада больше чем денег, вы не купите ее!</h3>')
    }
    else if(c<0){
          $('#but2').html('<h3>Цена шоколада не бывает отрицательной!</h3>')
    }
    else if (d<=0){
       $('#but2').html('<h3>Без денег вы ничего не купите</h3>')
    }
}
    $('#shtuk').click(function () {
        f2($('#mani').val(), $('#cena').val())
    })
    $('#tyk').click(function () {
        f2($('#mani').val(''), $('#cena').val(''))
    })
    $("#tyk").click( function(){ $("h3").text("") } )

let eu = 90.2
let u = 84.4

function f3(et) {
    let ok = Math.floor(et * eu) / u
    $('#rub1').html('<span> ' + ok.toFixed(2) + ' USD </span>')
}
    $('#euro').click(function () {
        f3($('#eput1').val())
    })
    $('#wer').click(function () {
        f3($('#eput1').val(''))
    })
     $("#wer").click( function(){ $("span").text("") } )

function f4(s1) {
    let ot = ((s1 * u) / eu)
    $('#rub2').html('<span> ' + ot.toFixed(2) + ' EURO </span>')
}
    $('#usdo').click(function () {
        f4($('#sput2').val())
    })
    $('#typ').click(function () {
        f4($('#sput2').val(''))
    })
     $("#typ").click( function(){ $("span").text("") } )

