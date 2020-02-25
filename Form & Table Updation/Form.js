
window.onload=function(){
//Form Div
let div1=document.createElement("div");
div1.setAttribute('id','div1');
document.body.appendChild(div1);
let form=document.createElement("form");
form.setAttribute('id','form')
div1.appendChild(form);
//Name input
let divname=document.createElement("div");
divname.setAttribute('class','form-group');
form.appendChild(divname);
let lb1=document.createElement("label");
lb1.innerHTML="Name";
divname.appendChild(lb1);
let input1=document.createElement('input');
input1.setAttribute("type",'text');
input1.setAttribute("class",'form-control');
input1.setAttribute("id",'Name');
divname.appendChild(input1);
//Mail input
let divmail=document.createElement("div");
divname.setAttribute('class','form-group');
form.appendChild(divmail);
let lb2=document.createElement("label");
lb2.innerHTML="E-Mail";
divmail.appendChild(lb2);
let input2=document.createElement('input');
input2.setAttribute("type",'mail');
input2.setAttribute("class",'form-control');
input2.setAttribute("id",'Mail');
divmail.appendChild(input2);
//Password input
let divpassword=document.createElement("div");
divpassword.setAttribute('class','form-group');
form.appendChild(divpassword);
let lb3=document.createElement("label");
lb3.innerHTML="Password";
divpassword.appendChild(lb3);
let input3=document.createElement('input');
input3.setAttribute("type",'Password');
input3.setAttribute("class",'form-control');
input3.setAttribute("id",'Password');
divpassword.appendChild(input3);
//Re-type Password
let divrpass=document.createElement("div");
divrpass.setAttribute('class','form-group');
form.appendChild(divrpass);
let lb4=document.createElement("label");
lb4.innerHTML="Retype Password";
divrpass.appendChild(lb4);
let input4=document.createElement('input');
input4.setAttribute("type",'Password');
input4.setAttribute("class",'form-control');
input4.setAttribute("id",'RPass');
divrpass.appendChild(input4);
//Country Drop down
let divcountry=document.createElement("div");
divcountry.setAttribute('class','form-group');
form.appendChild(divcountry);
let lb5=document.createElement("label");
lb5.innerHTML="Country:";
divcountry.appendChild(lb5);
let cntsel=document.createElement('select');
cntsel.setAttribute('id','country');
divcountry.appendChild(cntsel);
let cop0=document.createElement('option');
cop0.setAttribute("value",'Select');
cop0.innerHTML="Select";
cntsel.appendChild(cop0);
let cop1=document.createElement('option');
cop1.setAttribute("value",'India');
cop1.innerHTML="India";
cntsel.appendChild(cop1);
let cop2=document.createElement('option');
cop2.setAttribute("value",'USA');
cop2.innerHTML="USA";
cntsel.appendChild(cop2);
let cop3=document.createElement('option');
cop3.setAttribute("value",'Australia');
cop3.innerHTML="Australia";
cntsel.appendChild(cop3);
//State Drop Down
let divstate=document.createElement("div");
divstate.setAttribute('class','form-group');
form.appendChild(divstate);
let lb6=document.createElement("label");
lb6.innerHTML="State:";
divstate.appendChild(lb6);
let stsel=document.createElement('select');
stsel.setAttribute('id','state');
divstate.appendChild(stsel);
let sop0=document.createElement('option');
sop0.setAttribute('value','Select');
sop0.innerHTML="Select";
stsel.appendChild(sop0);
let sop1=document.createElement('option');
sop1.setAttribute('value','Tamil Nadu');
sop1.innerHTML="Tamil Nadu";
stsel.appendChild(sop1);
let sop2=document.createElement('option');
sop2.setAttribute('value','Kerala');
sop2.innerHTML="Kerala";
stsel.appendChild(sop2);
let sop3=document.createElement('option');
sop3.setAttribute('value','Mumbai');
sop3.innerHTML="Mumbai";
stsel.appendChild(sop3);
//City Drop Down
let divcity=document.createElement("div");
divcity.setAttribute('class','form-group');
form.appendChild(divcity);
let lb7=document.createElement("label");
lb7.innerHTML="City:";
divcity.appendChild(lb7);
let ctsel=document.createElement('select');
ctsel.setAttribute('id','city');
divcity.appendChild(ctsel);
let ctop0=document.createElement('option');
ctop0.setAttribute("value",'Select');
ctop0.innerHTML="Select";
ctsel.appendChild(ctop0);
let ctop1=document.createElement('option');
ctop1.setAttribute("value",'Chennai');
ctop1.innerHTML="Chennai";
ctsel.appendChild(ctop1);
let ctop2=document.createElement('option');
ctop2.setAttribute("value",'Kochin');
ctop2.innerHTML="Kochin";
ctsel.appendChild(ctop2);
let ctop3=document.createElement('option');
ctop3.setAttribute("value",'Aheri');
ctop3.innerHTML="Aheri";
ctsel.appendChild(ctop3);
//Gender Radios
let divgender=document.createElement("div");
divgender.setAttribute('class','form-group');
form.appendChild(divgender);
let lb8=document.createElement("label");
lb8.innerHTML="Gender:";
divgender.appendChild(lb8);
let gmlbm=document.createElement("label");
gmlbm.innerHTML="Male";
let ginp1=document.createElement('input');
ginp1.setAttribute('type','radio');
ginp1.setAttribute('value','Male');
ginp1.setAttribute('name','gender');
divgender.appendChild(ginp1);
divgender.appendChild(gmlbm);
gmlbf=document.createElement("label");
gmlbf.innerHTML="Female";
let ginp2=document.createElement('input');
ginp2.setAttribute('type','radio');
ginp2.setAttribute('value','Female');
ginp2.setAttribute('name','gender');
divgender.appendChild(ginp2);
divgender.appendChild(gmlbf);
gmlbo=document.createElement("label");
gmlbo.innerHTML="Other";
let ginp3=document.createElement('input');
ginp3.setAttribute('type','radio');
ginp3.setAttribute('value','Other');
ginp3.setAttribute('name','gender');
divgender.appendChild(ginp3);
divgender.appendChild(gmlbo);
//Marital Status Radio
let divmarst=document.createElement("div");
divmarst.setAttribute('class','form-group');
form.appendChild(divmarst);
let lb9=document.createElement("label");
lb9.innerHTML="Marital Status:";
divmarst.appendChild(lb9);
let marsts=document.createElement("label");
marsts.innerHTML="Single";
let marstsin=document.createElement('input');
marstsin.setAttribute('type','radio');
marstsin.setAttribute('value','Single');
marstsin.setAttribute('name','MaritalStatus');
divmarst.appendChild(marstsin);
divmarst.appendChild(marsts);
let marstm=document.createElement("label");
marstm.innerHTML="Married";
let marstmd=document.createElement('input');
marstmd.setAttribute('type','radio');
marstmd.setAttribute('value','Married');
marstmd.setAttribute('name','MaritalStatus');
divmarst.appendChild(marstmd);
divmarst.appendChild(marstm);
//Fav Places Checkbox
let divfavpl=document.createElement("div");
divfavpl.setAttribute('class','form-group');
form.appendChild(divfavpl);
let lb10=document.createElement("label");
lb10.innerHTML="Fav Places:";
divfavpl.appendChild(lb10);
let ck1=document.createElement("input");
ck1.setAttribute('type','Checkbox');
ck1.setAttribute('value','Goa');
ck1.setAttribute('class','fav');
let fp1=document.createElement("label");
fp1.innerHTML="Goa";
divfavpl.appendChild(ck1);
divfavpl.appendChild(fp1);
let ck2=document.createElement("input");
ck2.setAttribute('type','Checkbox');
ck2.setAttribute('value','Agra');
ck2.setAttribute('class','fav');
let fp2=document.createElement("label");
fp2.innerHTML="Agra";
divfavpl.appendChild(ck2);
divfavpl.appendChild(fp2);
let ck3=document.createElement("input");
ck3.setAttribute('type','Checkbox');
ck3.setAttribute('value','Manali');
ck3.setAttribute('class','fav');
let fp3=document.createElement("label");
fp3.innerHTML="Manali";
divfavpl.appendChild(ck3);
divfavpl.appendChild(fp3);

//Submit Button
let divsubmit_btn=document.createElement("div");
divsubmit_btn.setAttribute('class','form-group');
form.appendChild(divsubmit_btn);
let submit_btn=document.createElement('input');
submit_btn.setAttribute('type','submit');
submit_btn.setAttribute("value","Submit");
submit_btn.setAttribute('id','submit');
submit_btn.setAttribute('onclick',"add()");
divsubmit_btn.appendChild(submit_btn);


//Table DIV
let div2=document.createElement("div");
div2.setAttribute('id','div2');
document.body.appendChild(div2);

//Table Structure Creation
let table=document.createElement("table");
table.setAttribute("class","table table-striped table-dark");
table.setAttribute("id","display");
div2.appendChild(table);
let thead=document.createElement("thead");
table.appendChild(thead);
let tr=document.createElement("tr")
thead.appendChild(tr);
let td1=document.createElement("td");
td1.innerHTML="Name";
tr.appendChild(td1);
let td2=document.createElement("td");
td2.innerHTML="Mail";
tr.appendChild(td2);
let td3=document.createElement("td");
td3.innerHTML="Password";
tr.appendChild(td3);
let td4=document.createElement("td");
td4.innerHTML="Country";
tr.appendChild(td4);
let td5=document.createElement("td");
td5.innerHTML="State";
tr.appendChild(td5);
let td6=document.createElement("td");
td6.innerHTML="City";
tr.appendChild(td6);
let td7=document.createElement("td");
td7.innerHTML="Gender";
tr.appendChild(td7);
let td8=document.createElement("td");
td8.innerHTML="Marital Status";
tr.appendChild(td8);
let td9=document.createElement("td");
td9.innerHTML="Fav Places";
tr.appendChild(td9);
let edit_btn=document.createElement("td");
edit_btn.innerHTML="Edit";
tr.appendChild(edit_btn);
let del_btn=document.createElement("td");
del_btn.innerHTML="Delete";
tr.appendChild(del_btn);

};


let row=1;



function add(){
	let f_name=document.getElementById("Name").value;
	let f_mail=document.getElementById("Mail").value;
	let f_pass=document.getElementById("Password").value;
	let f_country=document.getElementById("country").value;
	let f_state=document.getElementById("state").value;
	let f_city=document.getElementById("city").value;
	let f_gender=document.getElementsByName("gender");
	let f_mstatus=document.getElementsByName("MaritalStatus");
	let f_fav=document.getElementsByClassName("fav");console.log(f_fav);
	
	let tab=document.getElementById("display");

	if(!f_name||!f_mail||!f_pass){
		alert("Please Fill All The Fields");
	}

	let new_row=tab.insertRow(row);
	let c1=new_row.insertCell(0);
	let c2=new_row.insertCell(1);
	let c3=new_row.insertCell(2);
	let c4=new_row.insertCell(3);
	let c5=new_row.insertCell(4);
	let c6=new_row.insertCell(5);
	let c7=new_row.insertCell(6);
	let c8=new_row.insertCell(7);
	let c9=new_row.insertCell(8);

	let c10=new_row.insertCell(9);
	let c11=new_row.insertCell(10);

	c1.innerHTML=f_name;
	c2.innerHTML=f_mail;
	c3.innerHTML=f_pass;
	c4.innerHTML=f_country;
	c5.innerHTML=f_state;
	c6.innerHTML=f_city;
	
	for(i=0;i<f_gender.length;i++){
			if(f_gender[i].checked){
					console.log(f_gender[i].value);
					c7.innerHTML=f_gender[i].value;
		}
	}
	for(j=0;j<f_mstatus.length;j++){
		if(f_mstatus[j].checked){
			c8.innerHTML=f_mstatus[j].value;
		}
	}
	//Edit Button On Table
	let edit_tab=document.createElement("Button");
	edit_tab.textContent="Edit";
	edit_tab.setAttribute("id",'edit_table');
	edit_tab.setAttribute("onclick",'edit()');
	//Delete Button On Table
	let del=document.createElement("Button");
	del.textContent="Delete";
	del.setAttribute("id",'delete_table');
	del.setAttribute("onclick",'delete()');
	c10.appendChild(edit_tab);
	c11.appendChild(del);

	for(k=0;k<f_fav.length;k++){
		if(f_fav[k].checked){
			c9.innerHTML=f_fav[k].value;
		}
	}



	row++;
	// document.getElementById("form").reset();

}
