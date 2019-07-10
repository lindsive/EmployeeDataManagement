$(document).ready(function () {



    var firebaseConfig = {
        apiKey: "AIzaSyAkhiHmctjV6GB-ATEqfoES3wx0NxI9QZc",
        authDomain: "employee-database-june09-class.firebaseapp.com",
        databaseURL: "https://employee-database-june09-class.firebaseio.com",
        projectId: "employee-database-june09-class",
        storageBucket: "",
        messagingSenderId: "14533112450",
        appId: "1:14533112450:web:0e253a8387f3a690"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var name;
    var role;
    var startDate;
    var monthsWorked = 0;
    var monthlyRate = 0;
    var totalBilled = 0;
    $("#add-input").on("click", function () {
        name = $("#employeeName").val();
        role = $("#role1").val();
        startDate = $("#startDate1").val();
        monthlyRate = $("#monthlyRate1").val();
        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
        })
        var dateStarted = startDate;
        console.log("THIS IS THE DATE " + dateStarted)
        // console.log how many months since start date
        console.log(moment().diff(dateStarted, "months"))
    });


    database.ref().on("child_added", function (childSnapshot) {
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().startDate);
        console.log(childSnapshot.val().monthsWorked);
        console.log(childSnapshot.val().monthlyRate);
        console.log(childSnapshot.val().totalBilled);


        $("#currentEmployees").append("<div class='row'><div class='col-sm-2'> " +
            childSnapshot.val().name +
            " </div><div class='col-sm'> " + childSnapshot.val().role +
            " </div><div class='col-sm'> " + childSnapshot.val().startDate +
            " </div><div class='col-sm'> " + childSnapshot.val().monthsWorked +
            " </div><div class='col-sm'> " + childSnapshot.val().monthlyRate +
            " </div><div class='col-sm'> " + childSnapshot.val().totalBilled +
            " </div></div>");
        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
})