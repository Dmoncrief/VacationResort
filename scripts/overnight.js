"use strict"




    // Get form data
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const checkInDate = document.getElementById("checkInDate");
    const numNights = document.getElementById("numNights");
    const roomType = document.getElementsByName('roomType');
    const numAdults = document.getElementById("numAdults");
    const numChildren = document.getElementById("numChildren");
    const discount = document.getElementsByName("discount");
    const submitButton = document.getElementById("submitButton");


   window.onload = function(event) {
      submitButton.addEventListener('click',()=>{
         submitReservation(event);
      })
   }
    

    // Display Results
    //this method specifally helps calculate how much a room costs per day
    //depending on the time of year (month) and tyoe of room
    
    function getRoomRate(month, roomType) {
        //check in date
        //between june-aug more expensive

        let roomAmount = 0;

        //if the mnth is june - august
        if(month == 5 || month== 6 || month == 7){
         // and if the room is a king or queen
         if(roomType == "King" || roomType == "Queen"){
            //the room is 250 a night
            return 250;
         } else {
            //if its not a king or queen but its still in the months on jnue - aug
            // the room is 350
           return 350;
         }

         //this else statement is for the rest of the year
         //the moths that are not june-aug
        } else {
         if(roomType == "King" || roomType == "Queen"){
            return 150;
        } else {
         //the only other option is 2 bedroom
         return 210;
        }
      }

    }

    //get value from radion button to pss into method
    //this helper funtion is specifically to get the discount a user has

 function getDiscountPercent(discount) {
   // Example implementation
   if (discount === "AAA/Senior") {
       return 10;
   } else if (discount === "Military") {
       return 20;
   } else {
       return 0;
   }
} 

//our submit function
   
     function submitReservation(event) {
        event.preventDefault();
      //get all of our input (starting values)
      let nameVal = name.value;
      let emailVal = email.value;


      //make sure the email and name are not empty
      if(!nameVal || !emailVal){
        alert("Please fill out all feilds")
      } else {
         // we can decide someting to do woth those values later
         
      }

    
      let discountPercent; 
      let numberOfNights = parseInt(numNights.value); 
 let totalGuests = parseInt(numAdults.value) + parseInt(numChildren.value);
 let date = new Date(checkInDate.value);

 //room type should be coming from radio button


      //compute the unknown
        // you will want to pass the right values into getRoomRate so that it can do it's calculation correctly
         let roomRate = getRoomRate(date.getMonth(),"King");
         console.log(`Room Rate: ${roomRate}`)

       // let originalRoomCost = roomRate * numberOfNights;

        //look at the radio buttons
        let discountAmount; //using discount funtion we created

       // let discountedRoomCost = originalRoomCost - discountAmount;
        
        let taxRate = 0.12;
        let taxAmount;
       // let total = discountedRoomCost = taxAmount;



      //display our results.
        console.log(`Number of night: ${numberOfNights} \nTotal Guests: ${totalGuests} `);
       
        console.log("Reservation has been submitted");

      
       
     }
     
     function calculateDiscountedRoomRate(roomRate, discountPercent) {
        
     }


// ------------------------------------------------------------


// function submitReservation(event) {
//    event.preventDefault();

//    // Compute the unknown
//    let roomRate = getRoomRate(checkInDate, roomType);
//    let originalRoomCost = roomRate * numNights;

//    // Calculate discount
//    let discountPercent = getDiscountPercent(discount);
//    let discountedRoomCost = originalRoomCost * (1 - discountPercent / 100);

//    // Calculate tax
//    let taxRate = 0.12;
//    let taxAmount = discountedRoomCost * taxRate;

//    // Calculate total
//    let total = discountedRoomCost + taxAmount;

//    // Display results
//    console.log("Room Rate: $" + roomRate.toFixed(2));
//    console.log("Discount Percent: " + discountPercent + "%");
//    console.log("Original Room Cost: $" + originalRoomCost.toFixed(2));
//    console.log("Discounted Room Cost: $" + discountedRoomCost.toFixed(2));
//    console.log("Tax Amount: $" + taxAmount.toFixed(2));
//    console.log("Total: $" + total.toFixed(2));
//    console.log("Reservation has been submitted");
// }
