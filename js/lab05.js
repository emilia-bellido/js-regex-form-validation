
let modal = document.getElementById("login");

function loggedIn(fname,lname){ //succesful login

    //// Manually closing modal
    let modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();

    //hide login buttons
    document.getElementById("userBtn").style.visibility = "hidden";
    document.getElementById("loginNav").style.visibility = "hidden";

    //show logout buttons
    document.getElementById("logoutNav").classList.remove("invisible");

    //show greeting message
    document.getElementById("greetingMessage").innerHTML = `Hello, ${fname} ${lname}`;
}



document.getElementById("userBtn").addEventListener("click", function(){

    //getting user input
    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let email = document.getElementById("emailUser").value.trim();
    let age = document.getElementById("age").value;
    let postalCode = document.getElementById("postalCode").value;
    let phone = document.getElementById("phoneNum").value;


    //proving i can see my input
    console.log(lname);
    console.log(fname);


    // regex

    //Names regex
    let namesRegex = /^[A-Za-z]+$/;

    let firstNameValidation = namesRegex.test(fname);
    let lastNameValidation = namesRegex.test(lname);

    console.log(lastNameValidation);


    //Age Regex
    let ageRegex = /^(120|1[0-1][0-9]|[1-9][0-9]|[0-9])$/;

    //converting it to string so the test can work
    let ageValidation = ageRegex.test(age.toString());

    console.log(ageValidation);

    //EMAIL
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValidation = emailRegex.test(email);
    console.log(emailValidation);

    //PHONE
    let phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    let phoneValidation = phoneRegex.test(phone);
    console.log(phoneValidation);

    //postal code validation

    let postalCodeRegex = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/i;
    let postalValidation = postalCodeRegex.test(postalCode)
    console.log(postalValidation);


    //putting all validation results, input box and error message in an object so i can access it trhough a for loop

    let validationResults = [
        {
            name: "firstName",  //using the same ID as the input on html so i can affect it
            result: firstNameValidation, //true or false
            input: fname,
            error: "Correct Format: No space in the name" //error name
        },
        {
            name: "lastName",
            result: lastNameValidation,
            input: lname,
            error: "Correct Format: No space in the last name"

        },
        {
            name: "emailUser",
            result: emailValidation,
            input: email,
            error: " Enter valid email"
        },
        {
            name :"age",
            result: ageValidation,
            input: age,
            error:"Age: 0 - 120"

        },
        {
            name: "postalCode",
            result: postalValidation,
            input: postalCode,
            error: "Canadian postal code"
        },
        {
            name:"phoneNum",
            result: phoneValidation,
            input: phone,
            error: "Format: 000-000-0000 or 0000000000 or 000 000 0000"


        }];


    //assuming all inputs are correct, it will only change to false if the inputs are fasle
    //if this isnt added, then even if one inout is true, the form will "pass"
    let isFormValid = true;

    //go through the array with all my inputs results and error info
    for (let i = 0; i < validationResults.length; i++) {

        //instead of rewriting "let email = docume...; " I targeted every id on my input value so i could grab the htmlbelow
        let inputBox = document.getElementById(validationResults[i].name);


        //reset after input is corrected if its error / or success
       // inputBox.parentElement.classList.remove("inputError", "inputSuccess");

        //checking every individual input to see if they are valid or not
        if (validationResults[i].result === false) { //if inputs are false

            //if any of the inputs are false, itll do a check
            isFormValid = false;

            //parent element to affect the input-group
            inputBox.parentElement.classList.add('inputError', 'rounded-2'); //red border around

            if (validationResults[i].input === "") { //if they are empty
                inputBox.setAttribute('placeholder', 'This field can not be empty');
            }
            else {
                inputBox.value = ""; //delete input if the format is  wrong
                inputBox.setAttribute('placeholder', `${validationResults[i].error}`);
            }
        }
        else{ //if they are succesful
            inputBox.parentElement.classList.remove("inputError");
            inputBox.parentElement.classList.add('inputSuccess','rounded-2'); //green border
        }
    }
        //if all the inputs are correct, it will skip the first if-else,  close the modal and log in the user
         if(isFormValid) {
             loggedIn(fname,lname); //creating hello message
             createCard(fname, lname, email, age, postalCode, phone); //creating card
         }

});

//function to create the user card
function createCard(fname, lname, email, age, postalCode, phone){

        let cardUser = document.getElementById("cardUser");
        cardUser.innerHTML=`
            <div class="card" id="card" style="width: 18rem;">
                  <div class="d-flex justify-content-center align-items-center">
                    <i class="bi bi-people-fill" style="font-size:139px"></i>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title"> ${fname} ${lname}</h5>
                    <p>${email}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Age: <span class="text-danger fw-bold">${age}  </span></li>
                    <li class="list-group-item">Postal Code:<span class="text-primary fw-bold"> ${postalCode}</span></li>
                    <li class="list-group-item">Ph:<span class="text-success fw-bold"> ${phone}</span></li>
                  </ul
            </div>
       
        `;
}

//logout button function: hide logout button, carduser, and message and show login buttons
document.getElementById("logoutNav").addEventListener("click", function(){

    //show login buttons
    document.getElementById("userBtn").style.visibility="visible";
    document.getElementById("loginNav").style.visibility="visible";

    //hide logout button, card, and message
    document.getElementById("logoutNav").style.visibility = "hidden";
    document.getElementById("cardUser").innerHTML = "";
    document.getElementById("greetingMessage").innerHTML="";


})


//resseting modal so no information is saved when reclicked after another user uses it

modal.addEventListener('show.bs.modal',()=>{

    document.getElementById("userForm").reset(); //resets forms value to og values

    //putting all inputs from html in an array so i can remove the borders after a user puts their info
    let inputs = ["firstName", "lastName", "emailUser", "age", "postalCode", "phoneNum"];

    //putting placeholders back in place
    let placeholders =["First Name", "Last Name", "Email", "Age", "Postal Code", "Phone Number"];


    for (let i = 0; i < inputs.length; i++) {

        //grabbing every single input back in the html
        let input = document.getElementById(inputs[i]);

        if (input) {

            //revert placeholders
            input.setAttribute('placeholder', placeholders[i]);

            // remove error and success borders
            input.parentElement.classList.remove("inputError", "inputSuccess");
        }
    }

});

