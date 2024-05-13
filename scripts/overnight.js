"use strict"




    // Get form data
    const name = document.getElementById("name");
    const email = document.getElementById("email").value;
    const checkInDate = new Date(document.getElementById("checkInDate")).value;
    const numnNights = parseInt(document.getElementById("numNights").value);
    const roomType = document.getElementsByName('roomType');
    const numAdults = parseInt(document.getElementById("numAdults").value);
    const nuumChildren = parseInt(document.getElementById("numChildren").value);
    const discount = document.getElementsByName("discount");
   // const submitButton = document.getElementById("submitButton");

    


    // calulate stay cost 
    // const roomRate = getRoomRate(checkInDate, roomType);
    // const discountPerecent = getDiscountPercent(discount);
    // const discountedRoomRate = calculateDiscountedRoomRate(roomRate, discountPercent);
    // const tax = calulateTax(discountedRoomRate);
    // const totalCost = calculateTotalCost(discountedRoomRate, tax);

    // Display Results
    
    function getRoomRate(checkInDate, roomType) {
        //check in date
        //between june-aug more expensive

        //number of night
        return 150.00;
    }


     function getDiscountPercent(discount) {
        return 0;

     }
   
     function submitReservation(event) {
        event.preventDefault();

        console.log(getRoomRate());
       
        console.log("Reservation has been submitted");
     }
     
     function calculateDiscountedRoomRate(roomRate, discountPercent) {
        
     }