const messageButton = document.getElementById("sendMessageButton");
const phone = document.getElementById("phone");

function phoneNumberValid(phoneNumber) {
    if(phoneNumber.match(/^\d{10}$/)) {
        return true;
    } else {
        return false;
    }
}

function sendMessage() {
    let phoneNumber = phone.value.replace("+91", "").split(" ").join("")
    console.log(phoneNumber)   
    if(phoneNumberValid(phoneNumber)) {
        let url = `https://api.whatsapp.com/send?phone=91${phoneNumber}&text=`
        location.href = url;    
    } else {
        alert("Please enter a valid number");
    }
    
}

messageButton.addEventListener("click", sendMessage);
