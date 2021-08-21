const messageButton = document.getElementById("sendMessageButton");
const phone = document.getElementById("phone");

function sendMessage() {
    let phoneNumber = phone.value;
    // console.log(phoneNumber)   
    let url = `https://api.whatsapp.com/send?phone=91${phoneNumber}&text=`
    location.href = url;
    console.log(url);
}

messageButton.addEventListener("click", sendMessage);