var valuable = prompt("Por favor ingrese el formato que desea utilizar 1. si la esctructura dd/MM/yyyy 2.si la esctructura yyyy-MM-dd 3. si la estructura dd/XXXX/yyyy ");
if (valuable==1){

var date2 = prompt("Ingrese la fecha en formato dd/MM/yyyy")
var year =date2.slice(6, 10);
var date1="01/01/"+ year
ms1 = Date.parse(date1);
fecha1 = new Date(ms1);
ms2 = Date.parse(date2);
fecha2 = new Date(ms2);
var Difference_In_Time = fecha2.getTime() - fecha1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
alert= ("Total number of days between dates  <br>"+ Difference_In_Days);
  
}
else if (valuable==2){
var date2 = prompt("Ingrese la fecha en formato yyyy-MM-dd")
var year =date2.slice(1,4);
var date1= year+"/01/01"
ms1 = Date.parse(date1);
fecha1 = new Date(ms1);
ms2 = Date.parse(date2);
fecha2 = new Date(ms2);
var Difference_In_Time = fecha2.getTime() - fecha1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
alert= ("Total number of days between dates  <br>"+ Difference_In_Days);
}
else if (valuable==3){

var date2 = prompt("Ingrese la fecha en formato dd/XXXX/yyyy")
var year =date2.slice(9, 12);
var date1= year+"Ener/01/"
ms1 = Date.parse(date1);
fecha1 = new Date(ms1);
ms2 = Date.parse(date2);
fecha2 = new Date(ms2);
var Difference_In_Time = fecha2.getTime() - fecha1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
alert= ("Total number of days between dates  <br>"+ Difference_In_Days);

}

else

alert=("El valor no es valido")