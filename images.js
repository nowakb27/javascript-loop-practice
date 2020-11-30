$(document).ready(function () {

    $("button").click(runLoops);


    function runLoops() {
        // Clear out all existing images
        $(".imageHolder").empty();

        // Get the number from the box
        var num = parseInt($("#numPics").val());

        // Print the desired number of images for each loop
        $("#while-num").text(num + 1);
        $("#do-while-num").text(num - 1);
        $("#for-num").text(num);

        var iterations = 0
        var numPlus = num + 1
        while(iterations !== numPlus) {
            addImageToDiv("#while-loop");
            iterations++
        }

        var doIterations = 0
        var numMinus = num - 1
        do{
            addImageToDiv("#do-while-loop");
            doIterations++
        }
        while(doIterations !== numMinus)

        var i
        for(i = 0; i < num; i++){
            addImageToDiv("#for-loop");
        }
    }

    function addImageToDiv(divId) {
        var fileName = $(":radio[name='pictureSelect']:checked").val();
        // Create a new image element
        var imageElement = $("<img>");
        // Set its source attribute
        imageElement.attr("src", `img/${fileName}`);
        // Add it as a child of another element
        $(divId).append(imageElement);
    }

});