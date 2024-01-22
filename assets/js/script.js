var today = dayjs().format("dddd MMMM D");
$("#currentDay").text(today + "th")

var currentHour = dayjs().hour();

$('.list-group-item').each(function() {
    var timeslot = $(this).data('timeslot');
    if (timeslot > currentHour) {
        $(this).addClass('future');
    } else if (timeslot == currentHour) {
        $(this).addClass('present');
    } else {
        $(this).addClass('past');
    }
});

$('.middle-section').on('click', function() {
    $(this).attr('contenteditable', 'true');
  });
  
$('.list-group-item').each(function() {
    var timeslot = $(this).data('timeslot');
    var savedData = localStorage.getItem('timeslot-' + timeslot);
    if (savedData) {
        $(this).find('.middle-section').text(savedData);
    }
});

$('.list-group-item .right-section').on('click', function() {
    var timeslot = $(this).closest('.list-group-item').data('timeslot');
    var inputData = $(this).closest('.list-group-item').find('.middle-section').text();
    localStorage.setItem('timeslot-' + timeslot, inputData);
});