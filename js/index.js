$(document).ready(function() {



  $('.addtask').click(function(e) {
    e.preventDefault();

    var inputTask = $('.taskTitle').val();
    var taskDescription = $('.description').val();
    var taskDate = $('.date').val();
    var newRow = $("<tr>");
    var wordTd = $("<td>").append(inputTask).append(taskDescription).append(taskDate);
    var deleteBtn = $("<button>").append("Delete");
    var deleteTd = $("<td>").append(deleteBtn);
    var completeBtn = $("<input>").append("Complete")
    var completeTd = $("<td>").append(completeBtn);

    //style buttons and checkbox
    deleteBtn.addClass("btn btn-danger");
    completeBtn.attr('type', 'checkbox');

    //Add content to table
    newRow.append(wordTd);
    newRow.append(completeTd);
    newRow.append(deleteTd);
    $("tbody").append(newRow);

    //Clear task atfetr submit
    $(".taskTitle,.description,.date").val("");
    // alert("hey do i work");
  });
});