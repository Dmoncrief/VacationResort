"use strict"


document.getElementById("costsEstimator").addEventListener"submit" , function(event) {
    event.preventDefault();   //prevent the form from submitting

}

// Get form data

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const checkInDate = new Date(document.getElementById("checkinDate").value);
const numNights = parseInt(document.getElementById("numNights").value);
const roomType = document.querySelector('input[name="roomType"]:checked').value;
const numAdults = parseInt(document.getElementById("numAdults").value);
const numChildren = parseInt(document.getElementById("numChildren").value);
const discount = document.querySelector('input[name="discount"]:checked').value;


// validate form data

const messageDiv = document.getElementById("messageDiv");
if(!validateFormData)(name,email,checkInDate, numNights, roomType, numAudits, numChildren, discount)) {
    messageDiv.innerText = "Invalid input. Please check your entries";
    return;
}

// calculate stay cost

const roomRate = getroomRate(checkInDate, roomType);
const discountPercent = getDiscountPercent(discount);
const discountedRoomRate = calculateDiscountedRoomRate(roomRate, discountPercent)
const totalCost = calculateTotalCost(discountRoomRate, tax);


// Display results
messageDiv.innerHTML = 
<p>Original </p>




