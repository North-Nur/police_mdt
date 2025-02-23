var idPlayer = 0 ;

window.addEventListener("message", function (event) {
    
    if (event.data.action == 'showtime'){
        $('.box-container-showtime-jail').show()
        
        $('#showtime').html(event.data.showtime)

    }
    if (event.data.action == 'hidetime'){
        $('.box-container-showtime-jail').hide()

    }
})
window.addEventListener("message", function (event) {

    if (event.data.action == 'add') {
        if(event.data.type == 1){
            $('.container').show()
            $('#all-normal').append(`
            <div class="title-content">
            <div class="main-con">
                <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        else if (event.data.type == 2){
            $('#all-money').append(`
            <div class="title-content">
            <div class="main-con"> 
            <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        else if (event.data.type == 3){
            $('#all-com').append(`
            <div class="title-content">
            <div class="main-con"> 
            <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        else if (event.data.type == 4){
            $('#all-street').append(`
            <div class="title-content">
            <div class="main-con"> 
            <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        else if (event.data.type == 5){
            $('#all-seree').append(`
            <div class="title-content">
            <div class="main-con"> 
            <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        else if (event.data.type == 6){
            $('#all-rut').append(`
            <div class="title-content">
            <div class="main-con"> 
            <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        else if (event.data.type == 7){
            $('#all-health').append(`
            <div class="title-content">
            <div class="main-con"> 
            <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        else if (event.data.type == 8){
            $('#all-drug').append(`
            <div class="title-content">
            <div class="main-con"> 
            <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        else if (event.data.type == 9){
            $('#all-munkong').append(`
            <div class="title-content">
            <div class="main-con"> 
            <p>${event.data.label}</p>
            </div>
            <div class="number">
                <input type="number" value="1" class="quantity" onkeyup="if(this.value<1){this.value='1';}"}>
            </div>
            <div class="pricePer1">
            ${event.data.fine}
            </div>
            <div class="timePer1">
            ${event.data.jail}
            </div>
            <div class="price">
            ${event.data.fine}
            </div>
            <div class="time">
            ${event.data.jail}
            </div>
            <div class="select">
                <input type="checkbox" class="checkbox">
            </div>
        </div>`)
        }
        // $('.container').css('animation', 'In 1s forwards');

    }
    if (event.data.action == 'player'){
        $('.container').show()
        $('#list').append(`<li class="options" value='${event.data.id}'>
        <div class="playername" > ${event.data.name}[ ${event.data.id}]</div>
        </li>`)
    }
    var selectField = document.getElementById('selectField');
    var selectText =  document.getElementById('selectText');
    var options = document.getElementsByClassName('options');
    var nameT = document.getElementsByClassName('nametarget');
    var totalPrice = 0;
    var totalTime = 0;
    var nameSS =''

    var showDetail =  document.getElementById('showDetail');
    var checkboxes = document.getElementsByClassName('checkbox');
    var list = document.getElementById('list');
    var arrowIcon = document.getElementById('arrow');
    selectField.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}
for(option of options){
    option.onclick = function(){
        const audio = new Audio();
        audio.src = "./sound/enter.mp3";
        audio.play()
        audio.volume = 0.08;
        $('.nametarget').html(this.textContent);
        selectText.innerHTML = this.textContent;
        idPlayer = this.value
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");


    }
}
$(".title-content").on("input", ".checkbox", function() {
    var $main = $(this);
    var nameS = $main.parent().parent().find(".main-con").text().replace(/\s/g, '')

    var $amount = parseFloat($main.parent().parent().find(".quantity").val());
    var $price = parseFloat($main.parent().parent().find(".pricePer1").text());
    var $time = parseFloat($main.parent().parent().find(".timePer1").text());
    var $total = $amount*$price
    var $totalTime = $amount*$time
    if(this.checked == true){
       
       totalTime = totalTime + $totalTime
       totalPrice = totalPrice + $total
       nameSS =nameSS+nameS+'<br>'
    //    console.log(totalTime,totalPrice)
       updateDatail()
    }
    else{
        const audio = new Audio();
        
        totalTime = totalTime - $totalTime
        totalPrice = totalPrice - $total
        nameSS = nameSS.replace(nameS+'<br>','')
        updateDatail()
    }




});
$(".title-content2").on("input", ".checkbox", function() {
    var $main2 = $(this);
    var nameS = $main2.parent().parent().find(".main-con").text().replace(/\s/g, '')
    var $price = parseFloat($main2.parent().parent().find(".price-other").val());
    var $time = parseFloat($main2.parent().parent().find(".time-other").val());
    var $total = $price
    var $totalTime = $time
    if(this.checked == true){
        
       totalTime = totalTime + $totalTime
       totalPrice = totalPrice + $total
       nameSS =nameSS+nameS+'<br>'

    //    console.log(totalTime,totalPrice)
       updateDatail()
    }
    else{
        const audio = new Audio();
        
        totalTime = totalTime - $totalTime
        totalPrice = totalPrice - $total
        nameSS = nameSS.replace(nameS+'<br>','')
        // console.log(totalTime,totalPrice)
        updateDatail()
    }

});
$(".title-content").on("input", ".quantity", function() {
	var $count = $(this);
    var $amount = parseFloat($count.parent().parent().find(".quantity").val());
    var $price = parseFloat($count.parent().parent().find(".pricePer1").text());
    var $time = parseFloat($count.parent().parent().find(".timePer1").text());
    var $total = $amount*$price
    var $totalTime = $amount*$time
    $count.parent().parent().find(".price").html($total)
    $count.parent().parent().find(".time").html($totalTime)

});
function updateDatail(){
    $('#time').html(totalTime)
    $('#price-total').html(totalPrice)
    $('#all-detail').html(nameSS)
}


})


document.onkeyup = function (data) {
    if (data.which == 27) {
        $('.container').hide()
        const audio = new Audio();
        audio.src = "./sound/Cancel.ogg";
        audio.play()
        audio.volume = 0.08;
        // $('.container').css('animation', 'Out 1s forwards');
        setTimeout(() => {
            location.reload()
        }, 1000);
        $.post('https://police_mdt/quit', JSON.stringify({}));
    }
}
function submit(){
    $('.container').hide()
    jail = parseFloat($('#time').text())
    fine = parseFloat($('#price-total').text())
    labelX = $('#all-detail').html().replaceAll('<br>',',')
    if (jail >0 || fine >0){
        const audio = new Audio();
        audio.src = "./sound/Click.ogg";
        audio.play()
        audio.volume = 0.08;
        $.post('https://police_mdt/jail', JSON.stringify({
            jailTime:jail,
            finePlayer:fine,
            label:labelX,
            player:idPlayer
    
        }));
        location.reload()
    }
    else{
        const audio = new Audio();
        audio.src = "./sound/Cancel.ogg";
        audio.play()
        audio.volume = 0.08;
        $.post('https://police_mdt/quit', JSON.stringify({}));
    //    console.log('check')
       location.reload()

    }
}


