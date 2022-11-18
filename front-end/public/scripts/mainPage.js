var rhit = rhit || {};

/* Main */
/** function and class syntax examples */
rhit.main = function () {

	const inputFile = document.querySelector("#formFileMultiple");
	const inputNameEl = document.querySelector("#inputName");
	const inputDateEl = document.querySelector("#datepicker");
	const inputEventEl = document.querySelector("#inputEvent");
	const inputNamesEl = document.querySelector("#people");

	document.querySelector("#addButton").onclick=(event)=>{
		document.querySelector("#people").appendChild(document.createElement("input"));
	};

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
			const names=[];
			var i=0;
			inputNamesEl.childNodes.forEach(value=>{
				if(i!=0){
					names.push(value.value);	
				}
				i++;
			})
			const sendTags = async () => {
				const obj={name:`${inputNameEl.value}`,event:`${inputEventEl.value}`,date:`${inputDateEl.value}`,names:names}
				console.log(obj);
				const response = await fetch("http://localhost:8080/files", {
					method: "post",
					body: JSON.stringify(obj),
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

			sendTags();
		  userAction();
		}	 
	}
rhit.main();
