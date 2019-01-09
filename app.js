// Create DOM 
//  Pass variables Train Name --- Destination --- Frequency (min) --- Next arrival --- Minutes Away 
// Create a function that listen to the DB cloud 
// Push data to the DB and 
// Listener DB (should push the passHTML)


firebase.initializeApp(config);
var database = firebase.database();

ref.on("value", function(snapshot){ 
    htmlData()
});

$("#add-user").on("click", function(event) {
    event.preventDefault();

    InputName = $("#Train-name-input").val().trim();
    InputDestination = $("#Destination-input").val().trim();
    InputFreq = $("#Frequency-input").val().trim();
    InputNext = $("#Next-input").val().trim();
    // We will need this later ❤️ (Get data and update it!)
    let getTransform = moment(InputDestination, "HH:mm").subtract(1, "years");
    let getTime = moment();
    let getDif = getTime.diff(moment(getTransform), "minutes");
    let getRemainder = getDif % InputFreq;
    let away = InputFreq - getRemainder;

    database.ref().set({
      name,
      destination,
      freq,
      next,
      away
    });

  });

function passHTML(data) {
    var htmlData = `
    <tr>
        <th scope="col">${data.name}</th>
        <th scope="col">${data.destination}</th>
        <th scope="col">${data.freq}</th>
        <th scope="col">${data.next}</th>
        <th scope="col">${data.away }</th>
    </tr>`
    return htmlData;
}


