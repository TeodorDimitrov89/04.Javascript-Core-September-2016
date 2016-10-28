function attachEvents() {
    $('#items li').on('click', selectedTowns);
    function selectedTowns() {
        let li = $(this);
        if (li.attr('data-selected')) { //data-selected е атрибут,който ние го създаваме.
            li.removeAttr('data-selected');
            li.css('background', '');
        }
        else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    }
        $('#showTownsButton').on('click', function () {
            let selectedLi = $('#items li[data-selected = true]');
            let towns = selectedLi.toArray() //трябва да е toArray-за да ползвам map или цикъл
                .map(li => li.textContent)
                .join(', ');

            $('#selectedTowns').text("Selected towns: " + towns);//когато ползвам text мога да го ползвам като console.log
        })
    
}

// function attachEvents() {
//     $('#items').on('click', 'li', function() {
//         let li = $(this);
//         if (li.attr('data-selected')) {
//             li.removeAttr('data-selected');
//             li.css('background', '');
//         } else {
//             li.attr('data-selected', 'true');
//             li.css('background', '#DDD');
//         }
//     });
//     $('#showTownsButton').on('click', function() {
//         let selLi = $('#items li[data-selected=true]');
//         let towns = selLi.toArray()
//             .map(li => li.textContent).join(', ');
//         $('#selectedTowns')
//             .text("Selected towns: " + towns);
//     });
// }
