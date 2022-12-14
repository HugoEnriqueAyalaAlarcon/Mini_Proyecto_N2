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
    tipAmount =  (bill * (selectTip)) / numPeople; //propina por persona
    total = (bill/numPeople)+tipAmount;             //cuenta entre las personas y su parte de propina por persona
    let newTipAmoun = tipAmount.toFixed(0);
    let newTotal = total.toFixed(0);
    /////hacer resultado mas chico
    newTipAmoun.length < 6 ? tipDoom.classList.add ('fs-1'): tipDoom.classList.remove ('fs-1');    
    newTotal.length < 6 ? totalDoom.classList.add ('fs-1'): totalDoom.classList.remove ('fs-1');
        /////////////
    tipDoom.innerHTML = `${newTipAmoun}`;
    totalDoom.innerHTML = `${newTotal}`;
};
////////////resultados
let calcula = (bill , selectTip , numPeople) => {
    if (bill > 0 && selectTip > 0 && numPeople > 0){
        calculos(bill , selectTip , numPeople)
    }
}
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
    event.preventDefault()
    buttons[5].innerHTML = "custom";
    selectTip = .05;  
    calcula(bill , selectTip , numPeople);
}
buttons[1].onclick = () => {
    event.preventDefault()
    buttons[5].innerHTML = "custom";
    selectTip = .1;  
    calcula(bill , selectTip , numPeople);
}
buttons[2].onclick = () => {
    event.preventDefault()
    buttons[5].innerHTML = "custom";
    selectTip = .15;  
    calcula(bill , selectTip , numPeople);
}
buttons[3].onclick = () => {
    event.preventDefault()
    buttons[5].innerHTML = "custom";
    selectTip = .2;  
    calcula(bill , selectTip , numPeople);
}
buttons[4].onclick = () => {
    event.preventDefault()
    buttons[5].innerHTML = "custom";
    selectTip = .25;  
    calcula(bill , selectTip , numPeople);
}

buttons[5].onclick = () =>{
    event.preventDefault()
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
    event.preventDefault()
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

/////////detecta cambios en inputBill
inputBill.oninput = () => {
    /* result.innerHTML = input.value;*/
     let datoEntrada=inputBill.value;
     if(Number(datoEntrada)){
         bill = datoEntrada;
         bill = parseFloat(bill);
         console.log(bill);
     }
}

/////////detecta cambios en inputNPeople
inputNPeople.oninput = () => {
    /* result.innerHTML = input.value;*/
     let datoEntrada=inputNPeople.value;
     if(Number(datoEntrada)){
        numPeople = datoEntrada;
        numPeople = parseFloat(numPeople);
         console.log(numPeople);
     }
}

/////// clik en de mouse
inputBill.onclick = () => {
    console.log(inputBill.value);
    inputBill.value != Number ? inputBill.value="" : alert('Error');
}

inputNPeople.onclick = () => {
    console.log(inputNPeople.value);
    inputNPeople.value != Number ? inputNPeople.value="" : alert('Error');

///////eventos del teclado
inputBill.addEventListener("keypress",(event) => { 
    bill=datosInput(event , "bill");
    calcula(bill , selectTip , numPeople);
});

}
inputNPeople.addEventListener("keypress",(event) => {//
    numPeople=datosInput(event , "people");
    calcula(bill , selectTip , numPeople);

});




