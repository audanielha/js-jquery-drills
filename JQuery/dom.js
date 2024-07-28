$(document).ready(function(){

// START TASK 1
$('<button class="task-one-button">Task One Button</button>').appendTo(document.body);
$('.task-one-button').click(function(){
    alert('test')
})
// END TASK ONE

// START TASK TWO
$('.task-two-button').click(function(){
    alert($('.task-two-input').val())
})
// END TASK TWO

// START TASK THREE
$('.task-three').css({
    'background-color':'red',
    'width':'50px',
    'height':'50px',
    'margin': '10px'
});
$('.task-three').mouseenter(function(){
    $(this).css({
        'background-color':'blue'
    })
})
$('.task-three').mouseleave(function(){
    $(this).css({
        'background-color':'red'
    })
})
// END TASK THREE

// START TASK FOUR

$('p').click(function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(this).css({
        'color':`#${randomColor}`
    })
})
// END TASK FOUR

// START TASK FIVE
$('.task-five-button').click(function(){
    let $span = ('<span></span>');
    $('.task-five-div').append($span)
})
// END TASK FIVE

// START TASK SIX
let friends = ['A','B','C','D','E','F','G','H','I','J'];
let counter = 0;
$('.task-six-button').click(function(){
    $('ul').append(`<li>${friends[counter]}</li>`);
    counter++;
})
// END TASK SIX
});
