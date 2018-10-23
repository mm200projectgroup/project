let status;
  
    

    function sendData(endpoint, data) {
        return fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data)
        }).then(data => {
            status = data.status;
            return data.json();
        });
    }




    function loggInn() {
        let data = {
            username: loggInnUsername.value,
            password: loggInnpassword.value
        };
        

        sendData("/innafor/users/login", data)
            .then(json => {
                console.log(json.status);
                outputLogIn1.style.color = "black";
            if(status == 200){
                console.log("yay");
                headerButton1.style.visibility = 'hidden';
                headerButton2.style.visibility = 'hidden';
                logInForm.style.display = "none";
                user.innerHTML = json.mld;
                user.style.visibility = 'visible';
                
            }else{
                console.log("ops");
                outputLogIn1.innerHTML = json.mld;
            }
            })
            .catch(error => {
                outputLogIn1.innerHTML = error;
                console.log(error);
            });

    }



    function register() {

        let data = {
            username: regUsername.value,
            password: regPassword.value,
            email: regEmail.value
        };

        sendData("/innafor/users/register", data)
            .then(json => {
                outputSignUp1.style.color = "white";
                outputSignUp1.innerHTML = "Bruker registrert";
                signUpForm.style.display = "none";
            })
            .catch(error => {
                outputSignUp1.style.color = "red";
                outputSignUp1.innerHTML = "error";
                console.log(error);
            });



    }
