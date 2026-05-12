let advice = document.getElementById("advice");
let adviceBtn = document.querySelector(".change-advice-btn");

adviceBtn.addEventListener('click', () => {
    // 1. Create a new request every time the button is clicked
    let adviceRequest = new XMLHttpRequest();
    // 2. Open and Send the request
    adviceRequest.open("GET", "https://api.adviceslip.com/advice?t=" + Date.now());
    adviceRequest.send();
    // 3. Define what happens when the data arrives
    adviceRequest.onreadystatechange = () => {
        if (adviceRequest.readyState === 4 && adviceRequest.status === 200) {
            let jsData = JSON.parse(adviceRequest.responseText);
            // 4. Update the DOM directly inside the callback
            advice.innerText = jsData.slip.advice;
        } else if (adviceRequest.readyState === 4) {
            advice.innerText = "Failed to fetch advice. Try again!";
        }
    };
});