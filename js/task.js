$(document).ready(function () {
  n = new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.getElementById("dateTime").innerHTML = m + "/" + d + "/" + y;
});

$("#addBtn").click(function () {
  var data = "";
  if ($("#addBtn").val() == "yes") {
    data += `<div>
<textarea name="text" id="textArea" class="text-value" cols="30" rows="1"></textarea> <button id="btnCheck" type="button" class="btn btn-outline-primary rounded-pill" name = "btn" value="yes" onclick = "showText()">+</button> 
</div>
`;
    $("#textAreaAdded").html(data);
    $("#submitButton").show();
  }
});

  function showText() {
    var data = "";
    if ($("#addBtn").val() == "yes") {
      data += `<div>
  <textarea name="text" id="textArea" class="text-value" cols="30" rows="1"></textarea> <button id="btnCheck" type="button" class="btn btn-outline-primary rounded-pill" name = "btn" value="yes" onclick = "showText()">+</button>
  </div>
 `;
      $("#textAreaAdded").append(data);
    }
  }

  var textArray = [];
  $("#submitButton").click(function () {
    var listOfTextArea = document.getElementsByClassName("text-value");
    for (let i = 0; i < listOfTextArea.length; i++) {
      var inputValue = document.getElementsByClassName("text-value")[i].value;
      textArray.push(inputValue);
    }
    localStorage.setItem("To DO", JSON.stringify(textArray));
    toShowData()
    
  });

  function toShowData() {
var xyz = document.getElementsByClassName("abc");
   var listOfData = localStorage.getItem("To DO",)
   var listOfArray = JSON.parse(listOfData)
   listOfArray.forEach((item) => {
    let li = document.createElement("li")
    li.innerText = item;
    $("#storeToDO").append(li);
   });
   for (let y = 0; y < xyz.length; y++) {
    document.getElementsByClassName("abc")[y].remove();
   }

   document.getElementById("submitButton").remove();
   toShowData()

  }






