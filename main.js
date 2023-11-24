$(document).ready(function() {

    
    $('form').on('submit', function(e){
        
        e.preventDefault();

        const tarefa = $('#inputs').val();

        const novaTarefa = $('<li></li>');

        
        $(`<p>${tarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        
        
        
    })
    
        $("ul").on("click", "li", function() {

            $(this).toggleClass("aprovado");
            
        })


})

