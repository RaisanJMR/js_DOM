// EXAMINE THE DOCUMENT OBJECT //
// console.log(document.all);
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.dir(document);

// GETELEMENTBYID
// var mainHeader = document.getElementById('main-header');
// var headerTitle = document.getElementById('header-title');
// var main = document.getElementById('main');
// console.log('main header ',mainHeader);
// console.log('header title ',headerTitle);
// console.log('main ',main);
// headerTitle.textContent = 'HELLO';
// headerTitle.innerHTML = '<h3>HAI</h3>';

// GETELEMENTBYCLASSNAME//
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// // console.log(items[1]);
// // items[1].textContent = "Hello 2";
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// GET ELEMENTBY TAG NAME //
// var li = document.getElementsByTagName("li");
// console.log(li);

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "#cccccc";
//   }

// QUERY SELECTOR //{only select first item}

// var mainId = document.querySelector("#main");
// var titleTag = document.querySelector("title");
// var titleId = document.querySelector(".title");
// var listTag = document.querySelectorAll("li");
// var input = document.querySelector("input");
// // input.value = "Hello World";
// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'Send';

// var listItem = document.querySelector('.list-group-item');
// listItem.style.color = '#ff0000';
// listItem.style.textTransform = 'uppercase';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = '#ff0000';
// lastItem.style.textTransform = 'uppercase';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = '#ff0000';
// secondItem.style.textTransform = 'uppercase';

// QUERY SELECTORALL //

// var title = document.querySelectorAll('.title');
// console.log(title);
// console.log(title[0]);
// console.log(title[1]);

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#cccccc";
// }

// TRAVERSING THE DOM//

// var itemsList = document.querySelector("#items");

// parentNode
// console.log(itemsList.parentNode);
// console.log(itemsList.parentNode.parentNode.parentNode);
// itemsList.parentNode.style.backgroundColor = "#cccccc";

// Parent Element
// console.log(itemsList.parentElement);
// console.log(itemsList.parentElement.parentElement.parentElement);
// itemsList.parentElement.style.backgroundColor = "#cccccc";

// Child Nodes
// console.log(itemsList.childNodes);
// console.log(itemsList.children);
// itemsList.children[2].style.backgroundColor = '#888888';

// nextElementSibling
// console.log(itemsList.nextElementSibling);
// nextSibling
// console.log(itemsList.nextSibling);

// previousElementSibling
// console.log(itemsList.previousElementSibling);

// Previoussibling
// console.log(itemsList.previousSibling);

// createElement
// creating a div
// var newDiv = document.createElement("div");
// // add class
// newDiv.className = "hello";
// // add id
// newDiv.id = "hello1";
// // add attr
// // setAttribute(attr name, value);
// newDiv.setAttribute("title", "hello div");

// //create text node
// var newDivText = document.createTextNode("hello world");

// // add text to div
// newDiv.appendChild(newDivText);

// // adding div to dom
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// newDiv.style.fontSize = '30px';
// console.log(newDiv);

// container.insertBefore(newDiv, h1);

// DOM EVENTS
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);
//   above method is also correct
// button.addEventListener("click", function () {
//   console.log("button clicked");
// });
// function buttonClick(e) {
//   console.log("button clicked");
//   document.getElementById("header-title").textContent = "Changed";
//   document.querySelector("#main").style.backgroundColor = '#888888';
//   console.log(e);
//   console.log(e.target);
//   console.log("id - ", e.target.id);
//   console.log("text content - ", e.target.textContent);
//   console.log("class Name - ", e.target.className);
//   console.log("class List - ", e.target.classList);
//   console.log("inner html - ", e.target.innerHTML);
//   console.log("tag Name - ", e.target.tagName);
//   console.log(e.path[0]);
//   console.log(e.path[2]);
//   console.log('toElement ',e.toElement);
//   console.log('clientX ',e.clientX);
//   var output = document.getElementById("output");
//   output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   console.log(e.type);
//   console.log(e.clientY);
//   console.log(e.clientX);
//   console.log("X ", e.offsetX);
//   console.log("Y ", e.offsetY);
// console.log("altkey pressed ", e.altKey);
// console.log("shiftkey pressed ", e.shiftKey);
// }

// var button = document.getElementById("button");
// var box = document.getElementById("box");
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener("mousemove", runEvent);

// var inputItem = document.querySelector('input[type="text"]');
// var form = document.querySelector("form");
// var select = document.querySelector("select");
// form.addEventListener("submit", runEvent);
// inputItem.addEventListener("keyup", runEvent);
// inputItem.addEventListener("keydown", runEvent);
// inputItem.addEventListener("keypress", runEvent);
// inputItem.addEventListener("focus", runEvent);
// inputItem.addEventListener("blur", runEvent);

// inputItem.addEventListener("cut", runEvent);
// inputItem.addEventListener("paste", runEvent);

// inputItem.addEventListener('input', runEvent);
// select.addEventListener("change", runEvent);

// function runEvent(e) {
// e.preventDefault();
// console.log("EVENT TYPE: " + e.type);
// console.log(e.target.value);
// document.getElementById("output").innerHTML =
//   "<h3>" + e.target.value + "</h3>";
// output.innerHTML =
//   "<h5>MouseX:" + e.offsetX + " </h5><h5>MouseY: " + e.offsetY + "</h5>";
// box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
// document.body.style.backgroundColor =
//   "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// }



// part 4
