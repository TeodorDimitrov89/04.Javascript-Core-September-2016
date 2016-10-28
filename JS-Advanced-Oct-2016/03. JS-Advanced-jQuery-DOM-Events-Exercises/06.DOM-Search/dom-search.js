function domSearch(selector, cs) {
    let wrapper = $(selector);
    function createListItem() {
        let element = $('.add-controls').find('input').val();
        let item = $(`<li class="list-item"><a class="button">X</a><strong>${element}</strong></li>`);
        item.find('a').click(deleteListItem);
        $('.items-list').append(item);
    }
    function deleteListItem() {
        let li = $(this).parent();
        li.remove();
    }


    function generateHtml(selector) {
        let addControls = $(`<div class="add-controls"><label>Enter text: <input></label><a class="button" style="display:inline-block;">Add</a>
</div>`);

        let searchControls = $(`<div class="search-controls">
<label>Search: <input></label></div>`);

        let resultControls = $(`<div class="result-controls">
<ul class="items-list">
</ul></div>`);
        addControls.find('a').click(createListItem);
        searchControls.on('input',searchListItem);
        selector.append(addControls);
        selector.append(searchControls);
        selector.append(resultControls);
    }

    function searchListItem() {
        let searchText = $('.search-controls').find('input').val();
        if(cs) {
            searchText=searchText.toLowerCase();
        }
        let itemList = $('.items-list li');
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList.eq(i);

            let textContent = item.find('strong').text();
            if(!cs) {
                textContent = textContent.toLowerCase();
            }
            if(!textContent.includes(searchText)) {
                itemList.eq(i).css('display','none');
            }
            else {
                itemList.eq(i).removeAttr('style')
            }
        }
    }
    
    generateHtml(wrapper,cs);
}
