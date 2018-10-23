let status;
  
    

    function sendData(endpoint, data) {
        return fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data)
        }).then(data => {
            status = data.status
            return data.json();
        });
    }




    function loggInn() {
        let data = {
            username: loggInnUsername.value,
            password: loggInnpassword.value
        };
        
        sendData("/app/users/login", data)
            .then(json => {
                
            if(status == 200){
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
                console.log(error);
            });

    }



    function register() {

        let data = {
            username: regUsername.value,
            password: regPassword.value,
            email: regEmail.value
        };

        sendData("/app/users/register", data)
            .then(json => {
                outputSignUp1.style.color = "white";
                outputSignUp1.innerHTML = "Bruker registrert";
                signUpForm.style.display = "none";
            })
            .catch(error => {
                console.log(error);
            });



    }
