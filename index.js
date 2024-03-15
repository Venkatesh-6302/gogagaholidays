document.addEventListener('DOMContentLoaded',function(){
    const flightForm=document.getElementById("flight-form");
    const hotelForm=document.getElementById("hotel-form");
    const flightResults=document.getElementById("flight-results");
    const hotelsResults=document.getElementById("hotel-results");

    var defaultTab=document.getElementById("collection-tabs").getElementsByTagName("button")[0];
    if(defaultTab){
        defaultTab.click();
    }

    flightForm.addEventListener("submit",function (event){
        event.preventDefault();

        const departure=document.getElementById("departure").value;
        const destination=document.getElementById('destination').value;
        const date=document.getElementById('date').value;

        const flights=[
            {airline:'Airline 1', departure:'City 1', destination:'City 2', price:'$200'},
            {airline:'Airline 2', departure:'City 2', destination:'City 1', price:'$250'},
            {airline:'Airline 3', departure:'City 1', destination:'City 3', price:'$180'}
        ]

        flightResults.innerHTML='';

        flights.forEach(flight=>{
            const resultItem=document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML=`
            <p>Airline: ${flight.airline}</p>
            <p>Departure: ${flight.departure}</p>
            <p>Destination: ${flight.destination}</p>
            <p>Price: ${flight.price}</p>
            <hr/>
            `;
            flightResults.appendChild(resultItem);
        });
    });

    hotelForm.addEventListener('submit', function (event){
        event.preventDefault();

        const location=document.getElementById('location').value;
        const checkIn=document.getElementById('check-in').value;
        const checkOut=document.getElementById('check-out').value;

        const hotels=[
            {name:'Hotel 1', location:'Location 1', price:'$100/night'},
            {name:'Hotel 2', location:'Location 2', price:'$120/night'},
            {name:'Hotel 3', location:'Location 3', price:'$150/night'}
        ];

        hotelsResults.innerHTML =''

        hotels.forEach(hotel=>{
            const resultItem=document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML=`
            <p>Name:${hotel.name}</p>
            <p>Location:${hotel.location}</p>
            <p>Price:${hotel.price}</p>
            <hr/>
            `;
            hotelsResults.appendChild(resultItem);
        });
    });
});

function openCollection(event,collectionName){
    var i, collectionContent, tablinks;

    collectionContent=document.getElementsByClassName("collection-content");
    for (i=0; i<collectionContent.length; i++){
        collectionContent[i].computedStyleMap.display="none";
    }

    tablinks=document.getElementsByClassName("tablink");
    for (i=0; i<tablinks.length; i++){
        tablinks[i].className=tablinks[i].className.replace("active","");
    }

    document.getElementById(collectionName).style.display="block";
    event.currentTarget.className +=" active";
}
document.getElementById("collection-tabs").getElementsByTagName("button")[0].click();
