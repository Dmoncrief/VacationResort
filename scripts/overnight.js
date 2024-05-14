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
    const submitButton = document.getElementById("submitButton");


   window.onload = function() {
      submitButton.onclick = submitReservation
   }
    

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
      //get all of our input (starting values)

      let numberOfNights;
      let discountPercent;

      //compute the unknown
        // you will want to pass the right values into getRoomRate so that it can do it's calculation correctly
        let roomRate = getRoomRate();

        let originalRoomCost = roomRate * numberOfNights;

        //look at the radio buttons
        let discountAmount;

        let discountedRoomCost = originalRoomCost - discountAmount;
        
        let taxRate = 0.12;
        let taxAmount;
        let total = discountedRoomCost = taxAmount;



      //display our results.
        console.log(roomRate);
       
        console.log("Reservation has been submitted");
     }
     
     function calculateDiscountedRoomRate(roomRate, discountPercent) {
        
     }


