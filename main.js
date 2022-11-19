let inputBill = document.getElementById("bill");
let inputNPeople = document.getElementById("inputNPeople");
let tipDoom=document.getElementById("tipA");
let totalDoom=document.getElementById("total");
let custom=0;
let keyBill = "";
let keyPeople = "";
let keyDom = "";//representar texto input
let bill,        //total de consumo
    selectTip,     //porcentaje de propina
    numPeople,      //numeros de personas
    tipAmount,          //Monto de la propina por persona
    total;              //Monto por persona de propina mas la cuenta a pagar
let buttons=document.querySelectorAll(".btn");

//////////////se ingresan los datos y se guandar en las variables si son validos
/////////////calculos
let calculos = (bill , selectTip , numPeople) => {
    tipAmount =  (bill * (selectTip)) / numPeople;
    total = (bill/numPeople)+tipAmount;
    let newTipAmoun = tipAmount.toFixed(1);
    let newTotal = total.toFixed(1);
    totalDoom.innerHTML = `${newTipAmoun}`;
    tipDoom.innerHTML = `${newTotal}`;
};
////////////resultados
let calcula = (bill , selectTip , numPeople) => {
    if (bill > 0 && selectTip > 0 && numPeople > 0){
        calculos(bill , selectTip , numPeople)
    }
}
////////funciones
let datosInput = (cuenta , input) => {
    if(cuenta.charCode>47 && cuenta.charCode<57){
        if(input==='bill'){
            cuenta.key+keyBill;
            keyBill=keyBill+(cuenta.key);
            keyBill = parseFloat(keyBill);
            return(keyBill);
        };
        if(input==='people'){
            cuenta.key+keyPeople;
            keyPeople=keyPeople+(cuenta.key);
            keyPeople = parseFloat(keyPeople);

            return(keyPeople);
        }
    }
} 

///////botones
buttons[0].onclick = () => {
    buttons[5].innerHTML = "custom";
    selectTip = .05;  
    calcula(bill , selectTip , numPeople);
}
buttons[1].onclick = () => {
    buttons[5].innerHTML = "custom";
    selectTip = .10;  
    calcula(bill , selectTip , numPeople);
}
buttons[2].onclick = () => {
    buttons[5].innerHTML = "custom";
    selectTip = .15;  
    calcula(bill , selectTip , numPeople);
}
buttons[3].onclick = () => {
    buttons[5].innerHTML = "custom";
    selectTip = .20;  
    calcula(bill , selectTip , numPeople);
}
buttons[4].onclick = () => {
    buttons[5].innerHTML = "custom";
    selectTip = .25;  
    calcula(bill , selectTip , numPeople);
}

buttons[5].onclick = () =>{
    custom=prompt("Dame por favor el porcentaje de propina, gracias");
    if(!isNaN(custom) && custom != null && custom != ""){
        buttons[5].innerHTML = `${custom}%`;
        parseFloat(custom);
        custom/=100;
        selectTip=custom;
        calcula(bill , selectTip , numPeople);
    }else{
        buttons[5].innerHTML = "custom";
        return alert("Error no es un numero")
    }
}

///////////////////////*reset*/
buttons[6].onclick = () => {
    bill=0;
    selectTip=0;  
    numPeople=0;
    keyBill = "";
    keyPeople = "";
    inputBill.value = "0";
    inputNPeople.value = "0";
    totalDoom.innerHTML = 0;
    tipDoom.innerHTML = 0;
    buttons[5].innerHTML = "custom";
};


////////main
inputBill.addEventListener('click', function() {
    if (bill>0){
        inputBill.value = bill;
    }else{
        inputBill.value = "";
    }
});

inputNPeople.addEventListener('click', function() {
    if (numPeople>0){
        inputNPeople.value = numPeople;
    }else{
        inputNPeople.value = "";
    }
});


inputBill.addEventListener("keypress",(event) => {//si entran datos por input bill
    bill=datosInput(event , "bill");
    calcula(bill , selectTip , numPeople);
});

inputNPeople.addEventListener("keypress",(event) => {//si entran datos por input numbrePeople
    numPeople=datosInput(event , "people");
    calcula(bill , selectTip , numPeople);

});




