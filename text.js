$(document).ready(function () {
    var myRules = {
        myNumber:
            {
                required: true,
                digits: true,
                min: 1,
                max: 1000
            }
    };
    var myMessages = {
        myNumber:
            {
                required: "Must fill in number",
                digits: "Only whole numbers",
                min: "Must be 1 - 1000",
                max: "Must be 1 - 1000"
            }
    };

    $("#loopTestForm").validate({
        rules: myRules,
        messages: myMessages,
        submitHandler: runLoops
    });
});
function runLoops() {
    var selectedLoop = $("input[name=loop-type]:checked").val();
    switch(selectedLoop){
        case "while-loop":
            runWhileLoop()
            break;
        case "do-while-loop":
            runDoWhileLoop()
            break;
        default:
            runForLoop()
            break;
    }
}
function runWhileLoop() {
    var number = parseInt($("#myNumber").val());
    var output = "";

    var iterations = 0
    while(iterations !== number){
        output = output + String.fromCharCode(iterations+65)
        iterations++
    }
    $("#while-result").text(output);
}
function runForLoop() {
    var number = parseInt($("#myNumber").val());
    var sum = 0;

    var i
    for(i = 1; i<=number; i++){
        sum+=i
    }

    $("#for-result").text(sum);
}
function runDoWhileLoop() {
    var number = parseInt($("#myNumber").val());
    var output = "";

    var iterations = 1
    do{
        output = output + iterations
        iterations++
    }
    while(iterations <= number)
}