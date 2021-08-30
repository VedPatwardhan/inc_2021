function myFunction21(domain1) {
    var domain2 = domain1.value;
    if (document.getElementById("domain").value = "Others") {
        document.getElementById("name1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("phone1").style.display = "block";
        document.getElementById("name2").style.display = "block";
        document.getElementById("email2").style.display = "block";
        document.getElementById("phone2").style.display = "block";
        document.getElementById("name3").style.display = "none";
        document.getElementById("email3").style.display = "none";
        document.getElementById("phone3").style.display = "none";
        document.getElementById("name4").style.display = "none";
        document.getElementById("email4").style.display = "none";
        document.getElementById("phone4").style.display = "none";
        document.getElementById("name5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
    }
}

function checkphone() {
    var em = document.getElementById("email11").value;
    var emailpat = "/^([A-Za-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/";

    var no = document.getElementById("phone11").value;
    var em1 = document.getElementById("email22").value;
    var no1 = document.getElementById("phone22").value;

    if (emailpat.test(em) == true) {
        if (no.length == 10) {
            //alert("Please check your details \n\n name:"+name+"\n\n E-mail:"+em+"\n\n Phone Number:"+no+"\n\n");
            //return true;

            if (emailpat.test(em1) == true) {
                if (no1.length == 10) {
                    //alert("Please check your details \n\n name:"+name+"\n\n E-mail:"+em+"\n\n Phone Number:"+no+"\n\n");
                    return true;
                } else {
                    alert("invalid phone number 2");
                    return false;
                }
            } else {
                alert("invalid Email-id 2");
                return false;
            }


        } else {
            alert("invalid phone number 1");
            return false;
        }
    } else {
        alert("invalid Email-id 1");
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
        document.getElementById("name4").style.display = "none";
        document.getElementById("gender4").style.display = "none";
        document.getElementById("email4").style.display = "none";
        document.getElementById("phone4").style.display = "none";
        document.getElementById("name5").style.display = "none";
        document.getElementById("gender5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
        document.getElementById("file3").style.display = "none";
        document.getElementById("file4").style.display = "none";
        document.getElementById("file5").style.display = "none";
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
        document.getElementById("name4").style.display = "none";
        document.getElementById("gender4").style.display = "none";
        document.getElementById("email4").style.display = "none";
        document.getElementById("phone4").style.display = "none";
        document.getElementById("name5").style.display = "none";
        document.getElementById("gender5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
        document.getElementById("file3").style.display = "none";
        document.getElementById("file4").style.display = "none";
        document.getElementById("file5").style.display = "none";
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
        document.getElementById("file4").style.display = "none";
        document.getElementById("file5").style.display = "none";
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
        document.getElementById("file5").style.display = "none";
    } else if (noofmem1 == '5') {
        document.getElementById("name1").style.display = "block";
        document.getElementById("gender1").style.display = "block";
        document.getElementById("email1").style.display = "block";
        document.getElementById("phone1").style.display = "block";
        document.getElementById("name2").style.display = "block";
        document.getElementById("gender2").style.display = "block";
        document.getElementById("email2").style.display = "block";
        document.getElementById("phone2").style.display = "block";
        document.getElementById("name3").style.display = "block";
        document.getElementById("gender3").style.display = "block";
        document.getElementById("email3").style.display = "block";
        document.getElementById("phone3").style.display = "block";
        document.getElementById("name4").style.display = "block";
        document.getElementById("gender4").style.display = "block";
        document.getElementById("email4").style.display = "block";
        document.getElementById("phone4").style.display = "block";
        document.getElementById("name5").style.display = "block";
        document.getElementById("gender5").style.display = "block";
        document.getElementById("email5").style.display = "block";
        document.getElementById("phone5").style.display = "block";
        document.getElementById("file1").style.display = "block";
        document.getElementById("file2").style.display = "block";
        document.getElementById("file3").style.display = "block";
        document.getElementById("file4").style.display = "block";
        document.getElementById("file5").style.display = "block";
    } else {
        document.getElementById("name1").style.display = "none";
        document.getElementById("email1").style.display = "none";
        document.getElementById("phone1").style.display = "none";
        document.getElementById("name2").style.display = "none";
        document.getElementById("email2").style.display = "none";
        document.getElementById("phone2").style.display = "none";
        document.getElementById("name3").style.display = "none";
        document.getElementById("email3").style.display = "none";
        document.getElementById("phone3").style.display = "none";
        document.getElementById("name4").style.display = "none";
        document.getElementById("email4").style.display = "none";
        document.getElementById("phone4").style.display = "none";
        document.getElementById("name5").style.display = "none";
        document.getElementById("email5").style.display = "none";
        document.getElementById("phone5").style.display = "none";
        document.getElementById("gender1").style.display = "none";
        document.getElementById("gender2").style.display = "none";
        document.getElementById("gender3").style.display = "none";
        document.getElementById("gender4").style.display = "none";
        document.getElementById("gender5").style.display = "none";
    }
}

function disp(origin) {
    var country = document.getElementById("country");
    var city = document.getElementById("city");
    var district = document.getElementById("district");
    var state = document.getElementById("state");
    console.log(origin.value);
    if (origin.value == "National") {

        country.style.display = "none";
        state.style.display = "block";
        district.style.display = "block";
        city.style.display = "block";

    } else if (origin.value == "International") {

        country.style.display = "block";
        country.setAttribute('value', "");
        city.style.display = "block";
        state.style.display = "none";
        district.style.display = "none";
        state.setAttribute('value', "");
        district.setAttribute('value', "");
        state.removeAttribute('required');
        district.removeAttribute('required');

    }
}







function myFunction22(domain1) {
    var subevent = domain1.value;
    console.log(subevent);

    if (subevent == "Concepts") {
        window.location.href = "/concepts_register21/";
    }
    if (subevent == "Pradnya") {

        // document.getElementById("1").style.display = "block";
        // document.getElementById("2").style.display = "block";
        // document.getElementById("3").style.display = "none";
        // document.getElementById("4").style.display = "none";
        // document.getElementById("5").style.display = "none";
        // document.getElementById("6").style.display = "none";
        document.getElementById("slotcheck").style.display = "block";
        console.log(document.getElementById("slotcheck").style.display);
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
        // document.getElementById("1").style.display = "block";
        // document.getElementById("2").style.display = "block";
        // document.getElementById("3").style.display = "none";
        // document.getElementById("4").style.display = "none";
        // document.getElementById("5").style.display = "none";
        // document.getElementById("6").style.display = "none";
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
        // document.getElementById("1").style.display = "block";
        // document.getElementById("2").style.display = "block";
        // document.getElementById("3").style.display = "none";
        // document.getElementById("4").style.display = "none";
        // document.getElementById("5").style.display = "none";
        // document.getElementById("6").style.display = "none";
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
        // document.getElementById("1").style.display = "block";
        // document.getElementById("2").style.display = "block";
        // document.getElementById("3").style.display = "none";
        // document.getElementById("4").style.display = "none";
        // document.getElementById("5").style.display = "none";
        // document.getElementById("6").style.display = "none";
        document.getElementById("slotcheck").style.display = "block";
        document.getElementById("tantra_rules").style.display = "block";
        document.getElementById("tantra_rules1").required = true;
        document.getElementById("naipunya_rules").style.display = "none";
        document.getElementById("lakshya_rules").style.display = "none";
        document.getElementById("pradnya_rules").style.display = "none";
        document.getElementById("pratibha_rules").style.display = "none";
        document.getElementById("daksha_rules").style.display = "none";
        document.getElementById("yukti_rules").style.display = "none";

    }
    if (subevent == "Pratibha") {
        // document.getElementById("1").style.display = "block";
        // document.getElementById("2").style.display = "block";
        // document.getElementById("3").style.display = "block";
        // document.getElementById("4").style.display = "block";
        // document.getElementById("5").style.display = "none";
        // document.getElementById("6").style.display = "none";
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
        // document.getElementById("1").style.display = "block";
        // document.getElementById("2").style.display = "block";
        // document.getElementById("3").style.display = "none";
        // document.getElementById("4").style.display = "none";
        // document.getElementById("5").style.display = "none";
        // document.getElementById("6").style.display = "none";
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
        // document.getElementById("1").style.display = "block";
        // document.getElementById("2").style.display = "block";
        // document.getElementById("3").style.display = "block";
        // document.getElementById("4").style.display = "block";
        // document.getElementById("5").style.display = "block";
        // document.getElementById("6").style.display = "block";
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






textarea.addEventListener('keyup', check_words);