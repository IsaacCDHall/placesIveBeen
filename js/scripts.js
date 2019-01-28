//business Logicc
function Place(location, landmarks, timeVisited, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeVisited = timeVisited;
  this.notes = notes;
}
var hawaii = new Place("Middle of ocean", "Surfers", "last week", "Hot");
var mexico = new Place("South of border", "Mexicans", "not last week", "Hot-sauce");
var yoMamasHouse = new Place("side of I-5", "dirty sheets", "most days", "Hot N' Heavy");

// User Interface Logic
$(function() {
  $("p.mexico").append(mexico.location +"<br>"+ mexico.landmarks +"<br>"+ mexico.timeVisited+"<br>"+ mexico.notes+"<br>"+ "<br>");
});
  $(function() {
    $("p.hawaii").append(hawaii.location +"<br>"+ hawaii.landmarks +"<br>"+ hawaii.timeVisited+"<br>"+ hawaii.notes+"<br>"+ "<br>");
  });
  $(function() {
    $("p.yoMamasHouse").append(yoMamasHouse.location +"<br>"+ yoMamasHouse.landmarks +"<br>"+ yoMamasHouse.timeVisited+"<br>"+ yoMamasHouse.notes+"<br>"+ "<br>");
  

});
