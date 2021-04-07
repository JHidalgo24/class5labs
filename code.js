$(document).ready(function () {
    $("button").on("click",outputRank)
    $("input#learning").on("change", totalLearning)
    $("input#donation").on("change", totalDonation)
    $("input#donation").on("change", GrandTotal)
    $("input#learning").on("change", GrandTotal)
})

function GrandTotal (event){
    let totalLearn = parseFloat( $("input#learning").val())*39.99;
    let totalDonation = parseFloat( $("input#donation").val())*14.99;
    let grandTotal = totalLearn + totalDonation;
    $("p#grandTotal").text(grandTotal.toFixed(2));
}

function totalLearning(event){
    let totalLearn = parseFloat( $("input#learning").val())*39.99;
    $("p#total-learning").text(totalLearn.toFixed(2));

}

function totalDonation(event){
    let totalDonation = parseFloat( $("input#donation").val())*14.99;
    $("p#total-Donation").text(totalDonation.toFixed(2));

}

function outputRank(){
    let rank =  $("input[name=rank]:checked").data("rank");
    let textColor = $("input[name=rank]:checked").data("textcolor");
    let name = $("#name").val();

    $("#output").text(`Hello, ${rank} ${name}`);
    $("#output").css("color", textColor);
}

