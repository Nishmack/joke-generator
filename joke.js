const btnE = document.getElementById("btn");
const jokeE = document.getElementById("joke");
const apikey = "Cvrfnpm/5EWPrCaF1tnRog==dNCgrYJhSdie1BtO";
const options = {                                     //create object 
    method: "GET",     
    headers: {
        "X-Api-Key": apikey,

    },
};
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    try {                                          //shows error in console when user is in offline

    jokeE.innerText = "Updating...";               //when delay occure display updating
    btnE.disabled = true;                          //when display updating, button disabled and display loading
    btnE.innerText = "Loading..." ;                  //loading shows on the button
    const response = await fetch(apiURL, options);
    const data = await response.json();               //convert response to json so we can use this data
    btnE.disabled = false;                          //when button is not disable .it shows "tell me the joke"
    btnE.innerText = "Tell me a joke" ;                  
    jokeE.innerText = data[0].joke;    
                  
    } catch (error) {
        jokeE.innerText  = "An error happened , try again later";    //any error happened that make happened by user.may be they  dont have any internet,api doesnt work
        btnE.disabled = false;                          //when button is not disable .it shows "tell me the joke" when error message display
        btnE.innerText = "Tell me a joke" ; 
        console.log(error);
        
    }
    
}

btnE.addEventListener("click", getJoke)