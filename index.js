// a function to copy the text from the input form
function copyText() {
    let copyText = document.querySelector("input");
    copyText.select();
    document.execCommand("copy");
    document.body.appendChild(copyText.value);
    alert(copyText.value);
}

