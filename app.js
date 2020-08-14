var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Add Submit Event
form.addEventListener("submit", addItems);
// delete event
itemList.addEventListener("click", removeItems);
// filter event
filter.addEventListener("keyup", filterItems);

// Add Item
function addItems(e) {
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

// Remove item
function removeItems(e) {
  // delete event should only happen when we click delete button
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure!")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter item
function filterItems(e) {
  // convert to lowercase
  var text = e.target.value.toLowerCase();
  //   Get li's
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
