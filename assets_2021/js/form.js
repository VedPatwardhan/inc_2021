var stateObject = {
    "Machine Learning and Pattern Recognition": {
        "Knowledge representation": 1,
        "Machine learning": 2,
        "Deep learning": 3,
        "Natural Language Processing": 4,
        "Human computer interaction": 5,
        "Web Data Mining": 6,
        "Content Based Information Retrieval": 7,
        "Others": 8,
    },
    "Big Data Analytics": {
        "Big Earth Data Analytics": 1,
        "Geo Informatics": 2,
        "Data Mining on Big Data": 3,
        "Digital marketing optimization": 4,
        "Data exploration and discovery": 5,
        "Fraud detection and prevention": 6,
        "Social network and relationship analysis": 7,
        "Machine generated data analytics": 8,
        "Data retention.": 9,
        "Others": 10,
    },
    "Communication Networks": {
        "Computer networks": 1,
        "Internet of Things": 2,
        "Software Defined Network": 3,
        "Vehicular Networks": 4,
        "Wireless and Mobile Networks": 5,
        "Information and Network Security": 6,
        "GPS | GSM Projects": 7,
        "Wireless Communication": 8,
        "Antenna & RF Communication": 9,
        "Optical Communication & Network": 10,
        "Others": 11,
    },
    "Virtualization and Autonomic Computing": {
        "High Speed Network": 1,
        "Security in Cloud": 2,
        "Cloud Computing": 3,
        "Data center Management": 4,
        "Handling Big Data on Cloud": 5,
        "Mobile Cloud": 6,
        "Cloud Forensics": 7,
        "Fog Computing": 8,
        "Others": 9,
    },
    "Digital / Image/ Speech / Video Processing ": {
        "Digital Signal processing": 1,
        "Image processing": 2,
        "Speech recognition": 3,
        "Video processing": 4,
        "Speech to text / Text to speech": 5,
        "Others": 6,
    },
    "VLSI Design & Test": {
        "Analog & Mixed Signal VLSI Design": 1,
        "Testing & Verification of VLSI Design": 2,
        "Others": 3,
    },
    "Embedded Systems": {
        "Image Processing & Remote Sensing": 1,
        "Machine Learning for Embedded Systems": 2,
        "Embedded Vision": 3,
        "Internet of Things": 4,
        "Others": 5,
    },
    "Blockchain": {
        "Smart City": 1,
        "E-governance": 2,
        "Healthcare": 3,
        "E-School": 4,
        "Supply Chain Management": 5,
        "Identity and Access Management": 6,
        "Others": 7,

    },
    "Applications": {
        "Mobile Applications (Android)": 1,
        "Web Applications": 2,
        "Database applications": 3,
        "Others": 4,
    },

    "Others": {
        "Bio-Signal Processing": 1,
        "Bio medical": 2,
        "Bio informatics": 3,
        "Nano Technology": 4,
        "Others": 5,
    },

}
window.onload = function() {
    var domain = document.getElementById("domain"),
        subdomain = document.getElementById("subdomain");
    /* citySel = document.getElementById("citySel"); */
    for (var state in stateObject) {
        domain.options[domain.options.length] = new Option(state, state);
    }
    domain.onchange = function() {
        subdomain.length = 1; // remove all options bar first
        /* citySel.length = 1; */ // remove all options bar first
        if (this.selectedIndex < 1) {
            subdomain.options[0].text = "Please select domain first"
                /* citySel.options[0].text = "Please select county first" */
            return; // done   
        }
        subdomain.options[0].text = "Please select sub-domain"
        for (var county in stateObject[this.value]) {
            subdomain.options[subdomain.options.length] = new Option(county, county);
        }
        if (subdomain.options.length == 2) {
            subdomain.selectedIndex = 1;
            subdomain.onchange();
        }

    }
    domain.onchange(); // reset in case page is reloaded
    /*countySel.onchange = function () {
       citySel.length = 1; // remove all options bar first
       if (this.selectedIndex < 1) {
         citySel.options[0].text = "Please select county first"
         return; // done   
       }  
       citySel.options[0].text = "Please select city"
       
       var cities = stateObject[stateSel.value][this.value];
       for (var i = 0; i < cities.length; i++) {
           citySel.options[citySel.options.length] = new Option(cities[i], cities[i]);
       }
       if (citySel.options.length==2) {
         citySel.selectedIndex=1;
         citySel.onchange();
       }  
       
   } */
}

$(document).ready(function() {
    $('#abstract').simplyCountable({
        counter: '#counter2',
        countType: 'words',
        maxCount: 1200,
        countDirection: 'up'
    });
});

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
    if (noofmem1 == '2') {
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

function myFunction1(company) {
    var company1 = company.value;
    if (company1 == 'Sponsored') {
        document.getElementById("company").style.display = "block";
        document.getElementById("nda1").style.display = "block";
        document.getElementById("patent").style.display = "none";

    } else {
        document.getElementById("patent").style.display = "block";

        document.getElementById("company").style.display = "none";
        document.getElementById("nda1").style.display = "none";
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

function myFunction2(payment) {
    var payment1 = payment.value;
    if (payment1 == 'dd not paid') {
        document.getElementById("ddnumber").style.display = "block";
        document.getElementById("receiptid").style.display = "none";
        //document.getElementById("ddnumber").style.required = "true";
    } else if (payment1 == 'paid') {
        document.getElementById("receiptid").style.display = "block";
        document.getElementById("ddnumber").style.display = "none";
        //document.getElementById("receiptid").style.required = "true";
    } else if (payment1 != 'dd not paid') {
        document.getElementById("ddnumber").style.display = "none";
        document.getElementById("receiptid").style.display = "none";
        //document.getElementById("ddnumber").style.required = "false";
        //document.getElementById("receiptid").style.required = "false";
    }
}

function myFunction3(company) {
    var company1 = company.value;
    if (company1 == 'No') {
        document.getElementById("reason2").style.display = "block";

    } else {
        document.getElementById("reason2").style.display = "none";
    }
}

var wordLen = 1200; // Maximum word length
function checkWordLen(obj) {
    var len = obj.value.split("/[\s]+/");
    if (len.length > wordLen) {
        alert("You've exceeded the " + wordLen + " word limit for the article!");
        obj.oldValue = obj.value != obj.oldValue ? obj.value : obj.oldValue;
        obj.value = obj.oldValue ? obj.oldValue : "";
        return false;
    }
    return true;
}

textarea.addEventListener('keyup', check_words);