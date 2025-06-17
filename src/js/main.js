
function clickBtnCalcular(){
    txtPeso = document.getElementById("txtPeso")
    peso = txtPeso.value;
    

    txtAltura = document.getElementById("txtAltura")
    altura = txtAltura.value;
    

    imc = peso / (altura * altura);
    alert("Su IMC es:" + imc);
}
