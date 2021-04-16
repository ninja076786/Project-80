var array_parai1=[];
function geti1(){

    for(i=1;i<=6;i++)
array_parai1.push(document.getElementById("para1_input_box_"+i).value);
array_parai1.join(". ")
document.getElementById("Para Outputi1").innerHTML = array_parai1.join(". ")

}
var array_parai2=[];
function geti2(){

    for(j=1;j<=6;j++)
array_parai2.push(document.getElementById("para2_input_box_"+j).value);
array_parai2.join(". ")
document.getElementById("Para Outputi2").innerHTML = array_parai2.join(". ")

}