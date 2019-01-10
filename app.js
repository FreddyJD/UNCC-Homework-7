var config = {
    apiKey: "AIzaSyA_zPKqw-r0wD5EPjrBT84sXA7SrGcAMuo",
    authDomain: "daboclock-demo.firebaseapp.com",
    databaseURL: "https://daboclock-demo.firebaseio.com",
    projectId: "daboclock-demo",
    storageBucket: "daboclock-demo.appspot.com",
    messagingSenderId: "533607149029"
  };

firebase.initializeApp(config);
var database = firebase.database();
var refDir = database.ref('/entries');


refDir.on("child_added", function(snap){
        $("tbody").append(passHTML(snap.val()));
});

$("#add").on("click", function(event) {
    event.preventDefault();
    console.log("Works!")

    var name = $("#Train-name-input").val();
    var destination = $("#Destination-input").val();
    var freq = $("#Frequency-input").val();
    var first = $("#Next-input").val();

    refDir.push({
      name,
      destination,
      freq,
      first

    });
  });

function passHTML(data) {
    var firstConv = moment(`${data.first}`, "HH:mm").subtract(1, "years");
    var diference = moment().diff(moment(firstConv), "minutes");
    var getRemainder = diference % `${data.freq}`;
    var getLeft = `${data.freq}` - getRemainder;
    console.log(getLeft);

    var momentGet = moment();

    var whatHour = moment(momentGet, "hh:mm:ss A")
    .add(0, 'seconds')
    .add(getLeft, 'minutes')
    .format('LTS');


    var htmlData = $('tbody').append(`
    <tr>
        <th scope="col">${data.name}</th>
        <th scope="col">${data.destination}</th>
        <th scope="col">${data.freq}</th>
        <th scope="col">${whatHour}</th>
        <th scope="col">${getLeft}</th>


    </tr>`);
    return htmlData;
};


function trainLogic() { 
    let getTransform = moment(InputDestination, "HH:mm").subtract(1, "years");
    let getTime = moment();
    let getDif = getTime.diff(moment(getTransform), "minutes");
    let getRemainder = getDif % InputFreq;
    let away = InputFreq - getRemainder;
};
