var responseDiv=document.body.querySelector(".response");

document.body.querySelector(".butt").addEventListener("click", function () {
    var textValue = document.body.querySelector(".input").value;

    if (textValue === "coolStudent123"|| textValue=== "coolstudent123") {
        createNav();
        createWrapper();
        navigate("Home");
    } else {
        responseDiv.innerHTML = "You have the wrong username!";
    }

});


var pages=["Home","About","View"];
function createNav() {
    document.body.innerHTML=""

    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);
    nav.style.backgroundColor = "red";

    document.body.appendChild(nav);
    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {

            navigate(pg);

        });
        nav.appendChild(butt);
    }
}

function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg) {
    if (pg === "Home") {
        homePage()
    } else if(pg==="About") {
        aboutPage()
    }
    else{
        viewpage()
    }

}


function homePage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Home Page";

    wrapper.appendChild(header);
}
function aboutPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "About Page";
    var header2= document.createElement("h3")
    header2.innerHTML="Karin";
    wrapper.appendChild(header);
    wrapper.appendChild(header2);
}

function viewpage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "View Notes";
    wrapper.appendChild(header);


    var responseDive2 = document.createElement("div")
    responseDive2.classList.add("responseDiv2");
    document.body.appendChild(responseDive2);

    var Text = document.createElement("input")
    var importance = document.createElement("input")
    responseDive2.classList.add("Text");
    responseDive2.classList.add("importance");
    responseDive2.appendChild(Text)
    responseDive2.appendChild(importance)
    document.body.appendChild(Text)
    document.body.appendChild(importance)
    var submitAnswer = document.createElement("button");
    responseDive2.appendChild(submitAnswer)
    document.body.appendChild(submitAnswer)
    submitAnswer.innerHTML="Submit";
    submitAnswer.addEventListener("click",function () {
        if (Text.value.length >= "" && isNaN(importance.value)) {
            responseDive2.innerHTML = "You have entered an invalid importance"
        } else if (Text.value.length <= "" && !isNaN(importance.value)) {
            responseDive2.innerHTML = "You have entered an invalid Text"

        } else if (Text.value.length <= "" && isNaN(importance.value))
            responseDive2.innerHTML = "Nothing you have entered is valid"
        else {
            responseDive2.innerHTML = "Note: "+Text.value + " Importance: "+importance.value;


        }
    })}





