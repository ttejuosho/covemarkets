$(document).ready(function() { 
    
var listTableBody = $("#listTableBody");
var nobody = $('#nobody');
var listItem;

// This function grabs users from the database and updates the view on the mailing list page
  function getMailingList(data) {
    $.get("/api/mlist/", function(data) {
      console.log("List", data);
      listItem = data;
      if (!listItem || !listItem.length) {
        displayEmpty();
      }
      else {
        listTableBody.empty();
        var listItemToAdd = [];
        for (var i = 0; i < listItem.length; i++) {
          listItemToAdd.push(tablelize(listItem[i]));
        }
        listTableBody.append(listItemToAdd);
      }
    });
  }

// Call the function that gets all the records from the database
getMailingList();

  function tablelize(listItem){
    var tablerow = $('<tr>');
    var tableheading = $('<th>').append('<td>' + listItem.id  + '</td>');
    var listItemName = $('<td>' + listItem.firstName + " " + listItem.lastName + '</td>');
    var listItemEmail = $('<td>' + listItem.email + '</td>');
    var active = $('<td>' + listItem.active + '</td>');

    tablerow.append(tableheading);

    tablerow.append(
        listItemName,
        listItemEmail,
        active );

    tablerow.data('listItem', listItem);
    return tablerow;
  }

  // This function displays a messgae when there are no posts
  function displayEmpty() {  
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("Theres no one in your mailing list.");
    nobody.append(messageh2);
  }


});