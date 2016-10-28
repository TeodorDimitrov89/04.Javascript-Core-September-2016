
function domSearch(content, booleanValue) {
    let selector = $('#content').addClass('items-control');
    let fragment = document.createDocumentFragment();

    let addControls = $('<div>')
        .addClass('add-controls')
        .append($('<label>')
            .text("Enter text: ")
            .append($('<input>')));

    addControls.append($('<a>')
        .addClass("button")
        .text("Add")
        .attr('display', 'inline-block;'));

    let searchContr = $('<div>').addClass('search-controls');
    searchContr.append($('<label>')
        .text("Search:")
        .append($('<input>')));

    let resultContr = $('<div>').addClass('result-controls');

    let ul = ($('<ul>').addClass('items-list'));
    let li = ($('<li>').addClass('list-item'));
    li.append($('<a>').addClass('button').text('X'));
    li.append($('<strong>').text('Element 1'));
    li.appendTo(ul);
    let li2 = ($('<li>').addClass('list-item'));
    li2.append($('<a>').addClass('button').text('X'));
    li2.append($('<strong>').text('Element 2'));
    li2.appendTo(ul);

    resultContr.append(ul);
    addControls.appendTo(fragment);
    searchContr.appendTo(fragment);
    resultContr.appendTo(fragment);
    selector.append(fragment);

    let addBtn = $('div.add-controls a.button');
    addBtn.on('click',addItems);

    let delBtn = $('li.list-item > a');
    delBtn.click(deleteItems);

    let res = $('div.search-controls > label > input');

    res.on('input',searchForTextMatch);



    function searchForTextMatch() {
        let searchText = $('div.search-controls > label > input').val();
        let matches = $(`a.button:contains("${searchText}")`);
        // $("ul li.list-item").each((index, item) => {
        //     if (item.textContent.includes(searchText)) {
        //         $(item).css("background", "blue");
        //         matches++;
        //     } else
        //         $(item).css("font-weight", "");
        // });
    }

    function addItems() {
        let li = $('<li>');
        li.addClass('list-item');
        let input = $('input').val();
        li.append($('<a>').addClass('button').text('X'));
        li.append($('<strong>').text(input));
        li.appendTo(ul);
    }

    function deleteItems() {
        let li = $(this).parent();
        li.remove();
    }
}
