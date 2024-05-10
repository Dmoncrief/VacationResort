"use strict"


document.getElementById("costsEstimator") , function(event) {
    

}

// Get form data

const name = document.getElementById("name");
const email = document.getElementById("email").value;
const checkInDate = new Date(document.getElementById("checkinDate");
const numNights = parseInt(document.getElementById("numNights").value);
const roomType = documentr('input[name="roomType"]:checked');
const numAdults = parseInt(document.getElementById("numAdults").value);
const numChildren = document.getElementById("numChildren");
const discount = ["discount"]


// validate form data

const messageDiv = document.getElementById("messageDiv");


// calculate stay cost

const roomRate = getroomRate(checkInDate, roomType);
const discountPercent = getDiscountPercent(discount);
const discountedRoomRate = calculateDiscountedRoomRate(roomRate, discountPercent)
const totalCost = calculateTotalCost(discountRoomRate, tax);


// Display results




