var rhit = rhit || {};

/* Main */
/** function and class syntax examples */
rhit.main = function () {

	const inputFile = document.querySelector("#formFileMultiple");
	document.querySelector("#submitButton").onclick = (event) => {
		console.log(`Pictures submitted: ${inputFile.value} `);
		const userAction = async () => {
            const formData = new FormData();
            for (const file of inputFile.files) {
                formData.append("files", file);
            }
            const response = await fetch("http://localhost:8080/files", {
                method: "post",
                body: formData,
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
		 
	}


rhit.main();
