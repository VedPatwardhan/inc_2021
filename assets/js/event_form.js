function myFunction21(domain1) {
    const selected_no_mem = document.getElementById("noofmem");
    selected_no_mem.selectedIndex = 0;
    selected_no_mem.onchange();
    document.getElementById("name1").style.display = "none";
    document.getElementById("gender1").style.display = "none";
    document.getElementById("email1").style.display = "none";
    document.getElementById("phone1").style.display = "none";
    document.getElementById("name2").style.display = "none";
    document.getElementById("gender2").style.display = "none";
    document.getElementById("email2").style.display = "none";
    document.getElementById("phone2").style.display = "none";
    document.getElementById("name3").style.display = "none";
    document.getElementById("gender3").style.display = "none";
    document.getElementById("email3").style.display = "none";
    document.getElementById("phone3").style.display = "none";
    document.getElementById("name4").style.display = "none";
    document.getElementById("gender4").style.display = "none";
    document.getElementById("email4").style.display = "none";
    document.getElementById("phone4").style.display = "none";
    document.getElementById("name5").style.display = "none";
    document.getElementById("gender5").style.display = "none";
    document.getElementById("email5").style.display = "none";
    document.getElementById("phone5").style.display = "none";
    document.getElementById("name6").style.display = "none";
    document.getElementById("gender6").style.display = "none";
    document.getElementById("email6").style.display = "none";
    document.getElementById("phone6").style.display = "none";
    document.getElementById("file1").style.display = "none";
    document.getElementById("file2").style.display = "none";
    document.getElementById("file3").style.display = "none";
    document.getElementById("file4").style.display = "none";
    document.getElementById("file5").style.display = "none";
    document.getElementById("file6").style.display = "none";




    var subevent = domain1.value;

    if (subevent == "Concepts") {
        window.location.href = "/concepts_register21/";
    }
    if (subevent == "Pradnya") {

        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("slotcheck").style.display = "block";
        document.getElementById("pradnya_rules").style.display = "block";
        document.getElementById("pradnya_rules1").required = true;
        document.getElementById("lakshya_rules").style.display = "none";
        document.getElementById("naipunya_rules").style.display = "none";
        document.getElementById("tantra_rules").style.display = "none";
        document.getElementById("pratibha_rules").style.display = "none";
        document.getElementById("daksha_rules").style.display = "none";
        document.getElementById("yukti_rules").style.display = "none";

    }
    if (subevent == "Lakshya") {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("slotcheck").style.display = "none";
        document.getElementById("lakshya_rules").style.display = "block";
        document.getElementById("lakshya_rules1").required = true;
        document.getElementById("pradnya_rules").style.display = "none";
        document.getElementById("naipunya_rules").style.display = "none";
        document.getElementById("tantra_rules").style.display = "none";
        document.getElementById("pratibha_rules").style.display = "none";
        document.getElementById("daksha_rules").style.display = "none";
        document.getElementById("yukti_rules").style.display = "none";


    }

    if (subevent == "Naipunya") {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("slotcheck").style.display = "block";
        document.getElementById("naipunya_rules").style.display = "block";
        document.getElementById("naipunya_rules1").required = true;
        document.getElementById("lakshya_rules").style.display = "none";
        document.getElementById("pradnya_rules").style.display = "none";
        document.getElementById("tantra_rules").style.display = "none";
        document.getElementById("pratibha_rules").style.display = "none";
        document.getElementById("daksha_rules").style.display = "none";
        document.getElementById("yukti_rules").style.display = "none";


    }

    if (subevent == "Tantra") {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("slotcheck").style.display = "block";
        document.getElementById("tantra_rules").style.display = "block";
        document.getElementById("tantra_rules1").required = true;
        document.getElementById("naipunya_rules").style.display = "none";
        document.getElementById("lakshya_rules").style.display = "none";
        document.getElementById("pradnya_rules").style.display = "none";
        document.getElementById("pratibha_rules").style.display = "none";
        document.getElementById("daksha_rules").style.display = "none";
        document.getElementById("yukti_rules").style.display = "none";
        let noofmem = document.getElementById("noofmem");


    }
    if (subevent == "Pratibha") {
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("slotcheck").style.display = "none";
        document.getElementById("pratibha_rules").style.display = "block";
        document.getElementById("pratibha_rules1").required = true;
        document.getElementById("tantra_rules").style.display = "none";
        document.getElementById("naipunya_rules").style.display = "none";
        document.getElementById("lakshya_rules").style.display = "none";
        document.getElementById("pradnya_rules").style.display = "none";
        document.getElementById("daksha_rules").style.display = "none";
        document.getElementById("yukti_rules").style.display = "none";



    }
    if (subevent == "Daksha") {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "none";
        document.getElementById("slotcheck").style.display = "none";
        document.getElementById("daksha_rules").style.display = "block";
        document.getElementById("daksha_rules1").required = true;
        document.getElementById("pratibha_rules").style.display = "none";
        document.getElementById("tantra_rules").style.display = "none";
        document.getElementById("naipunya_rules").style.display = "none";
        document.getElementById("lakshya_rules").style.display = "none";
        document.getElementById("pradnya_rules").style.display = "none";
        document.getElementById("yukti_rules").style.display = "none";


    }


    if (subevent == "Yukti") {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "block";
        document.getElementById("6").style.display = "block";
        document.getElementById("slotcheck").style.display = "none";
        document.getElementById("yukti_rules").style.display = "block";
        document.getElementById("yukti_rules1").required = true;
        document.getElementById("daksha_rules").style.display = "none";
        document.getElementById("pratibha_rules").style.display = "none";
        document.getElementById("tantra_rules").style.display = "none";
        document.getElementById("naipunya_rules").style.display = "none";
        document.getElementById("lakshya_rules").style.display = "none";
        document.getElementById("pradnya_rules").style.display = "none";


    }

}
/*
function checkphone(){
	var em1=document.getElementById("email11").value;
	var emailpat=/^([A-Za-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/;
			var em2=document.getElementById("email22").value;
	    var no2=document.getElementById("phone22").value;

	    var no1=document.getElementById("phone11").value;
	 if(emailpat.test(em1)==true){
	if(no1.length==10 ){
			//return true;
		 if(emailpat.test(em2)==true){
	if(no2.length==10 ){
			//return true;
		
		
	}
	else{
		alert("invalid phone number 2");
		return false;
	}
	 }
	else{
		alert("invalid Email-id 2");
		return false;
	}
		
	}
	else{
		alert("invalid phone number 1");
		return false;
	}
	 }
	else{
		alert("invalid Email-id 1");
		return false;
	}
		
} */


function checkphone() {
    var em = document.getElementById("email11").value;
    var emailpat = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/;
    var no1 = document.getElementById("phone11").value;
    if (emailpat.test(em) == true) {

        if (no1.length == 10) {
            return true;
        } else {
            alert("invalid phone number");
            return false;
        }
        // window.location.href="home.html";
        // alert("registered");
    } else {
        alert("invalid Email-id");
        return false;
    }




}




function myFunction(noofmem) {
    var noofmem1 = noofmem.value;

    if (noofmem1 == '1') {
        document.getElementById("name1").style.display = "block";
        document.getElementById("gender1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("phone1").style.display = "block";
        document.getElementById("file1").style.display = "block";
        document.getElementById("name2").style.display = "none";
        document.getElementById("gender2").style.display = "none";
        document.getElementById("email2").style.display = "none";
        document.getElementById("phone2").style.display = "none";
        document.getElementById("file2").style.display = "none";
        document.getElementById("name3").style.display = "none";
        document.getElementById("gender3").style.display = "none";
        document.getElementById("email3").style.display = "none";
        document.getElementById("phone3").style.display = "none";
        document.getElementById("file3").style.display = "none";
        document.getElementById("name4").style.display = "none";
        document.getElementById("gender4").style.display = "none";
        document.getElementById("email4").style.display = "none";
        document.getElementById("phone4").style.display = "none";
        document.getElementById("file4").style.display = "none";
        document.getElementById("name5").style.display = "none";
        document.getElementById("gender5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
        document.getElementById("file5").style.display = "none";
        document.getElementById("name6").style.display = "none";
        document.getElementById("gender6").style.display = "none";
        document.getElementById("email6").style.display = "none";
        document.getElementById("phone6").style.display = "none";
        document.getElementById("file6").style.display = "none";
        //   window.location.href = "individual/success1.php";
    } else if (noofmem1 == '2') {
        document.getElementById("name1").style.display = "block";
        document.getElementById("gender1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("phone1").style.display = "block";
        document.getElementById("file1").style.display = "block";
        document.getElementById("name2").style.display = "block";
        document.getElementById("gender2").style.display = "block";
        document.getElementById("email2").style.display = "block";
        document.getElementById("phone2").style.display = "block";
        document.getElementById("file2").style.display = "block";
        document.getElementById("name3").style.display = "none";
        document.getElementById("gender3").style.display = "none";
        document.getElementById("email3").style.display = "none";
        document.getElementById("phone3").style.display = "none";
        document.getElementById("file3").style.display = "none";
        document.getElementById("name4").style.display = "none";
        document.getElementById("gender4").style.display = "none";
        document.getElementById("email4").style.display = "none";
        document.getElementById("phone4").style.display = "none";
        document.getElementById("file4").style.display = "none";
        document.getElementById("name5").style.display = "none";
        document.getElementById("gender5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
        document.getElementById("name6").style.display = "none";
        document.getElementById("gender6").style.display = "none";
        document.getElementById("email6").style.display = "none";
        document.getElementById("phone6").style.display = "none";
        document.getElementById("file5").style.display = "none";
        document.getElementById("file6").style.display = "none";
    } else if (noofmem1 == '3') {
        document.getElementById("name1").style.display = "block";
        document.getElementById("gender1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("phone1").style.display = "block";
        document.getElementById("file1").style.display = "block";
        document.getElementById("name2").style.display = "block";
        document.getElementById("gender2").style.display = "block";
        document.getElementById("email2").style.display = "block";
        document.getElementById("phone2").style.display = "block";
        document.getElementById("file2").style.display = "block";
        document.getElementById("name3").style.display = "block";
        document.getElementById("gender3").style.display = "block";
        document.getElementById("email3").style.display = "block";
        document.getElementById("phone3").style.display = "block";
        document.getElementById("file3").style.display = "block";
        document.getElementById("name4").style.display = "none";
        document.getElementById("gender4").style.display = "none";
        document.getElementById("email4").style.display = "none";
        document.getElementById("phone4").style.display = "none";
        document.getElementById("name5").style.display = "none";
        document.getElementById("gender5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
        document.getElementById("name6").style.display = "none";
        document.getElementById("gender6").style.display = "none";
        document.getElementById("email6").style.display = "none";
        document.getElementById("phone6").style.display = "none";
        document.getElementById("file4").style.display = "none";
        document.getElementById("file5").style.display = "none";
        document.getElementById("file6").style.display = "none";
    } else if (noofmem1 == '4') {
        document.getElementById("name1").style.display = "block";
        document.getElementById("gender1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("phone1").style.display = "block";
        document.getElementById("file1").style.display = "block";
        document.getElementById("name2").style.display = "block";
        document.getElementById("gender2").style.display = "block";
        document.getElementById("email2").style.display = "block";
        document.getElementById("phone2").style.display = "block";
        document.getElementById("file2").style.display = "block";
        document.getElementById("name3").style.display = "block";
        document.getElementById("gender3").style.display = "block";
        document.getElementById("email3").style.display = "block";
        document.getElementById("phone3").style.display = "block";
        document.getElementById("file3").style.display = "block";
        document.getElementById("name4").style.display = "block";
        document.getElementById("gender4").style.display = "block";
        document.getElementById("email4").style.display = "block";
        document.getElementById("phone4").style.display = "block";
        document.getElementById("file4").style.display = "block";
        document.getElementById("name5").style.display = "none";
        document.getElementById("gender5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
        document.getElementById("name6").style.display = "none";
        document.getElementById("gender6").style.display = "none";
        document.getElementById("email6").style.display = "none";
        document.getElementById("phone6").style.display = "none";
        document.getElementById("file5").style.display = "none";
        document.getElementById("file6").style.display = "none";
    } else if (noofmem1 == '5') {
        document.getElementById("name1").style.display = "block";
        document.getElementById("gender1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("phone1").style.display = "block";
        document.getElementById("file1").style.display = "block";
        document.getElementById("name2").style.display = "block";
        document.getElementById("gender2").style.display = "block";
        document.getElementById("email2").style.display = "block";
        document.getElementById("phone2").style.display = "block";
        document.getElementById("file2").style.display = "block";
        document.getElementById("name3").style.display = "block";
        document.getElementById("gender3").style.display = "block";
        document.getElementById("email3").style.display = "block";
        document.getElementById("phone3").style.display = "block";
        document.getElementById("file3").style.display = "block";
        document.getElementById("name4").style.display = "block";
        document.getElementById("gender4").style.display = "block";
        document.getElementById("email4").style.display = "block";
        document.getElementById("phone4").style.display = "block";
        document.getElementById("file4").style.display = "block";
        document.getElementById("name5").style.display = "block";
        document.getElementById("gender5").style.display = "block";
        document.getElementById("email5").style.display = "block";
        document.getElementById("phone5").style.display = "block";
        document.getElementById("file5").style.display = "block";
        document.getElementById("name6").style.display = "none";
        document.getElementById("gender6").style.display = "none";
        document.getElementById("email6").style.display = "none";
        document.getElementById("phone6").style.display = "none";
        document.getElementById("file6").style.display = "none";
    } else if (noofmem1 == '6') {
        document.getElementById("name1").style.display = "block";
        document.getElementById("gender1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("phone1").style.display = "block";
        document.getElementById("file1").style.display = "block";
        document.getElementById("name2").style.display = "block";
        document.getElementById("gender2").style.display = "block";
        document.getElementById("email2").style.display = "block";
        document.getElementById("phone2").style.display = "block";
        document.getElementById("file2").style.display = "block";
        document.getElementById("name3").style.display = "block";
        document.getElementById("gender3").style.display = "block";
        document.getElementById("email3").style.display = "block";
        document.getElementById("phone3").style.display = "block";
        document.getElementById("file3").style.display = "block";
        document.getElementById("name4").style.display = "block";
        document.getElementById("gender4").style.display = "block";
        document.getElementById("email4").style.display = "block";
        document.getElementById("phone4").style.display = "block";
        document.getElementById("file4").style.display = "block";
        document.getElementById("name5").style.display = "block";
        document.getElementById("gender5").style.display = "block";
        document.getElementById("email5").style.display = "block";
        document.getElementById("phone5").style.display = "block";
        document.getElementById("file5").style.display = "block";
        document.getElementById("name6").style.display = "block";
        document.getElementById("gender6").style.display = "block";
        document.getElementById("email6").style.display = "block";
        document.getElementById("phone6").style.display = "block";
        document.getElementById("file6").style.display = "block";
    } else {
        document.getElementById("name1").style.display = "none";
        document.getElementById("gender1").style.display = "none";
        document.getElementById("email1").style.display = "none";
        document.getElementById("phone1").style.display = "none";
        document.getElementById("name2").style.display = "none";
        document.getElementById("gender2").style.display = "none";
        document.getElementById("email2").style.display = "none";
        document.getElementById("phone2").style.display = "none";
        document.getElementById("name3").style.display = "none";
        document.getElementById("gender3").style.display = "none";
        document.getElementById("email3").style.display = "none";
        document.getElementById("phone3").style.display = "none";
        document.getElementById("name4").style.display = "none";
        document.getElementById("gender4").style.display = "none";
        document.getElementById("email4").style.display = "none";
        document.getElementById("phone4").style.display = "none";
        document.getElementById("name5").style.display = "none";
        document.getElementById("gender5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
        document.getElementById("name6").style.display = "none";
        document.getElementById("gender6").style.display = "none";
        document.getElementById("email6").style.display = "none";
        document.getElementById("phone6").style.display = "none";
        document.getElementById("file1").style.display = "none";
        document.getElementById("file2").style.display = "none";
        document.getElementById("file3").style.display = "none";
        document.getElementById("file4").style.display = "none";
        document.getElementById("file5").style.display = "none";
        document.getElementById("file6").style.display = "none";

    }
}