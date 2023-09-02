//your JS code here. If required.
const button = document.getElementById("btn");
const name = document.getElementById("name")
const age = document.getElementById("age")


button.addEventListener("click", ()=>{
	const nameVal=  name.value;
  console.log(nameVal);
	const ageVal = age.value;
	let p1 = new Promise((resolve,reject) =>{
		setTimeout(() =>{
			if(ageVal >18){
				resolve("Welcome, "+nameVal+". You can vote.")
			}
			else{
				reject("Oh sorry "+nameVal+". You aren't old enough.")
			}
		},4000)
	})
	.then((data) =>{
    alert(data);
  })
  .catch((data) =>{
    alert(data);
  })
})