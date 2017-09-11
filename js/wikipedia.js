
$(document).ready(function(){
  $('#searchArticle').keypress(function(e) {
  if(e.which == 13) {
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+ $("input[id=searchArticle]").val() +"&callback=?",
        dataType: "jsonp",
        success: function (data, textStatus, jqXHR) {
            console.log(data.query.search);
            createTable(data.query.search);
        },
        error: function (errorMessage) {
        }
    });
  };
});
});
function createTable(results){
var list = document.getElementById("myTabody");
    var rowCount = myTable.rows.length;
  if (rowCount>0) {
    for (var p=0; p<rowCount; p++) {
     list.deleteRow(0);
   }
  }
for (i=0; i<results.length; i++){
        var y = document.createElement("TR");
          y.setAttribute("id", "myTr"+i);
            list.appendChild(y);
            var t = document.createElement("TD");
             var l = document.createElement("A");
            var u = document.createTextNode(results[i].title);
            l.setAttribute("href", "https://en.wikipedia.org/?curid="+results[i].pageid);
              l.setAttribute("target", "_blank");
            l.appendChild(u);
            t.appendChild(l);

            document.getElementById("myTr"+i).appendChild(t);
            var t2 = document.createElement("TD");
            t2.setAttribute("id", "myTd"+i);
            document.getElementById("myTr"+i).appendChild(t2);
            document.getElementById("myTd"+i).innerHTML = results[i].snippet;
            document.getElementById("myTable").setAttribute("class", "table table-hover");
};
}
