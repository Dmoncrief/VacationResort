"use strict"




    // Get form data
    const name = document.getElementById("name");
    const email = document.getElementById("email").value;
    const checkInDate = new Date(document.getElementById("checkInDate")).value;
    const numnNights = parseInt(document.getElementById("numNights").value);
    const roomType = document.querySelector('input[name="roomType"]:checked').value;
    const numAdults = parseInt(document.getElementById("numAdults").value);
    const nuumChildren = parseInt(document.getElementById("numChildren").value);
    const discount = document.querySelector('input[name="discount"]:checked').value;

    // calulate stay cost 
    const roomRate = getRoomRate(checkInDate, roomType);
    const discountPerecent = getDiscountPercent(discount);
    const discountedRoomRate = calculateDiscountedRoomRate(roomRate, discountPercent);
    const tax = calulateTax(discountedRoomRate);
    const totalCost = calculateTotalCost(discountedRoomRate, tax);

    // Display Results
    const messageDiv = document.getElementById("messageDive");
    messageDiv.innerHTML = `
    <p> Original Room Cost: $${roomRate.toFixed(2)}</p>
    <p> Discount: ${discountPercent}%</p>
    <p> Discounted Room Cost: $${discountedRoomrate.toFixed(2)}</p>
    <p> Tax: $${tax.toFixed(2)}</p>
    <p> Total Cost of Stay: $${totalCost.toFixed(2)}</p>
    `;
 

    function getRoomRate(checkInDate, roomType) {
        return 150.00;
    }


     function getDiscountPercent(discount) {

     }
   