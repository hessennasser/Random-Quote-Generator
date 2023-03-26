// selectors 
const generatorBtn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const output = document.querySelector(".output");

// add event listener to btn 
generatorBtn.addEventListener("click", () => {
    getQuote()
});

// create fetch api function
const getQuote = async () => {
    const url = "https://api.api-ninjas.com/v1/quotes?category=";

    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "VTOMZO2EHgXCKNUu6C5G4Q==3HksQbohiVTSTlnX");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("https://api.api-ninjas.com/v1/quotes?category=", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            let response = `
            <p class="body">${result[0].quote}</p>
            <div class="author">
            <p class="authorName">${result[0].author}</p>
            <span class="category">${result[0].category}</span>
            `;
            output.innerHTML = response;
            wrapper.classList.add("active");
        })
        .catch(error => alert('error', error));
};