var rhit = rhit || {};

/* Main */
/** function and class syntax examples */
rhit.main = function () {

	const inputEmailEl = document.querySelector("#inputEmail");
	const inputPasswordEl = document.querySelector("#inputPassword");
	document.querySelector("#logInButton").onclick = (event) => {
		console.log(`Log in to existing account for email: ${inputEmailEl.value}  password: ${inputPasswordEl.value}`);
		const userAction = async () => {
			const obj={username: `${inputEmailEl.value}`,password: `${inputPasswordEl.value}`};
			 const response = await fetch(' http://localhost:8080/v1/test/user', {
			  method: 'POST',
			  body: JSON.stringify(obj),
              headers: {
                'Content-Type': 'application/json'
              }
			}).then(function(value){
			console.log(value.status);
			// do something with myJson
			if( value.status==200){
				location.href="mainPage.html";
			}else{
				location.href="fail.html";
			}
		}
			)};
			
		  userAction();
		}

		document.querySelector("#createAccountButton").onclick = (event) => {
			console.log(`Create account for email: ${inputEmailEl.value}  password: ${inputPasswordEl.value}`);
			const userActionIn = async () => {
				const obj={username: `${inputEmailEl.value}`,password: `${inputPasswordEl.value}`};
			const response = await fetch('http://localhost:8080/v1/insert/user', {
			  method: 'POST',
			  body: JSON.stringify(obj),
			  headers: {
                'Content-Type': 'application/json'
              }
			}).then(function(value){
			console.log(value.status);
			// do something with myJson
			if( value.status==200){
				location.href="mainPage.html";
			}else{
				location.href="fail.html";
			}
			}
			)};
			userActionIn();
		}
	
		 
	}


rhit.main();
