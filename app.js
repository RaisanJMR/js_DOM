var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// Add Submit Event
form.addEventListener("submit", addItem);

// Add Item
function addItem(e) {
  e.preventDefault();

  // Get input Value
  var newItem = document.getElementById("item").value;

  //   Create new li Element
  var li = document.createElement("li");

  //   Add Class to li
  li.className = "list-group-item";

  //   add text to input value
  li.appendChild(document.createTextNode(newItem));

  //   create delete button element
  var deleteBtn = document.createElement("button");

  // add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //   append text node
  deleteBtn.appendChild(document.createTextNode("x"));

  //   add deleteBtn to li
  li.appendChild(deleteBtn);

  //   adding li to ul
  itemList.appendChild(li);
}
