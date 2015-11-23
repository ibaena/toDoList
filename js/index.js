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
    completeBtn.attr('value', 'FALSE');
    completeBtn.addClass("checkBox");

    //Add content to table
    newRow.append(wordTd);
    newRow.append(completeTd);
    newRow.append(deleteTd);
    $("tbody").append(newRow);

    //Clear input text afetr submit
    $(".taskTitle,.description,.date").val("");
    // alert("hey do i work");
  });

//delete button function
$("table").on("click",".btn-danger", function(){
    $(this).parent().parent().remove();


});

//checkbox to create strikethrough

    
$("table").on("click",".checkBox", function(){
    $('.checkBox').prop('checked',".checkBox");
    //alert("yes!!");
    $(this).parent().parent().css("text-decoration", "line-through");
    $(this).remove();
});


});