const $ = document ; 
const form = $.querySelector(".left__side--form") ; 
const submitButton = $.querySelector(".submitFormButton") ; 
const UserNameInput = $.querySelector(".UserNameInput") ; 
const apiKeyInput = $.querySelector(".APIKEYInput") ; 
const apiSecretInput = $.querySelector("#APISecret") ; 
const rowCount = $.querySelector(".Brow--number") ; 
const UserName = $.querySelector(".Buser--name") ; 
const ApiKey = $.querySelector(".Bapi--key") ; 
const ApiSecret = $.querySelector(".Bapi--secret") ; 
const removeButton = $.querySelectorAll(".remove") ; 
const rightSideContainer = document.querySelector(".right__side__board--view") ; 
let rowCounter = 0 ; 
removeButton.forEach(e => {
    e.addEventListener("click" , (e) =>{
        console.log("pg9ij");
    })
});
submitButton.addEventListener('click' , (e) => {
    e.preventDefault() ; 
    if(UserNameInput.value === "" && apiKeyInput.value === "" && apiSecretInput.value === "" ) {
        console.log("your input is wrong");
    }
    else if (UserNameInput.value.indexOf(" ") >= 0 || apiKeyInput.value.indexOf(" ") >= 0  || apiSecretInput.value.indexOf(" ") >= 0 ) {
        console.log("your Input Is containe space");
    }
    else {
        rowCounter++ ;
        const newRow = `
                <div class="right__board--view__body">
                <div class="row--number"><p>
                    ${rowCounter}
                </p></div>
                <div class="user--name"><p>
                    ${UserNameInput.value}
                </p></div>  
                <div class="api--key"><p>
                    ${apiKeyInput.value}
                </p></div>
                <div class="api--secret"><p>
                    ${apiSecretInput.value}
                </p></div>
                <div class="button__container">
                    <div class="edit">
                        <button>
                            Edit
                        </button>
                    </div>
                    <div class="remove">
                        <button>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        ` ; 
        rightSideContainer.innerHTML += newRow ; 
        form.reset();
    }
})
