// function domSearch(selector, cs) {
//     function createListItem() {
//         let text = $('.add-controls').find('input').val();
//         let ul = $('.items-list');
//         let list = $(`<li class="item-list"><a class="button">X</a><strong>${text}</strong></li>`);
//         list.find('a').click(deleteListItem);
//         ul.append(list);
//         // list.appendTo(ul);
//
//        // let element = $('.add-controls').find('input').val();
// //         let item = $(`<li class="list-item"><a class="button">X</a><strong>${element}</strong></li>`)
// //         item.find('a').click(deleteListItem)
// //         $('.items-list').append(item);
//
//     }
//     function deleteListItem() {
//         let li = $(this).parent();
//         li.remove();
//     }
//     function generateHtml(selector) {
//         let addControls = $(`<div class="add-controls"><label>Enter text: <input></label><a class="button" style="display:inline-block;">Add</div>`);
//         let searchControls = $(`<div class="search-controls"><label>Search: <input></label></div>`);
//         let resultControls = $(`<div class="result-controls"><ul class="items-list">
// <li class="list-item"></li>
// </ul></div>`);
//         //използване на find за директно намиране на търсения елемент.(от jQuery) намира детето от този тип в този елемент
//         addControls.find('a').click(createListItem);
//         searchControls.on('input',searchListItem); //on input за да може докато пише да се променя и да остават само търсените резултати.
//         selector.append(addControls);
//         selector.append(searchControls);
//         selector.append(resultControls);
//     }
//
//     function searchListItem() {
//         let searchText = $('.search-controls').find('input').val();
//         if(cs) {
//             searchText=searchText.toLowerCase();
//         }
//         let itemList = $('.items-list li');
//         for (let i = 0; i < itemList.length; i++) {
//             let item = itemList.eq(i);
//             //eq-достъпвам елементите от jquery колекция
//             let textContent = item.find('strong').text();
//             if(!cs) {
//                 textContent = textContent.toLowerCase();
//             }
//             if(!textContent.includes(searchText)) {
//                 itemList.eq(i).css('display','none');
//             }
//             else {
//                 itemList.eq(i).removeAttr('style')
//             }
//         }
//     }
//     //за да се генерира html-a просто извикваме функцията и подавам selector.
//     generateHtml(selector,cs);
// }
//



// function domSearch(selector, cs) {
//     let wrapper = $(selector);
//
//     function createListItem() {
//
//         let element = $('.add-controls').find('input').val();
//         let item = $(`<li class="list-item"><a class="button">X</a><strong>${element}</strong></li>`)
//         item.find('a').click(deleteListItem)
//         $('.items-list').append(item);
//     }
//
//     function deleteListItem() {
//         let li = $(this).parent();
//         li.remove();
//     }
//
//
//     function generateHtml(selector) {
//         let addControls = $(`<div class="add-controls"><label>Enter text: <input></label><a class="button" style="display:inline-block;">Add</a>
// </div>`);
//
//         let searchControls = $(`<div class="search-controls">
// <label>Search: <input></label></div>`);
//
//         let resultControls = $(`<div class="result-controls">
// <ul class="items-list">
// </ul></div>`);
//         //използване на find за директно намиране на търсения елемент.(от jQuery)
//         addControls.find('a').click(createListItem);
//         searchControls.on('input', searchListItem); //on input за да може докато пише да се променя и да остават само търсените резултати.
//         selector.append(addControls);
//         selector.append(searchControls);
//         selector.append(resultControls);
//     }
//
//     function searchListItem() {
//         let searchText = $('.search-controls').find('input').val();
//         if (cs) {
//             searchText = searchText.toLowerCase();
//         }
//         let itemList = $('.items-list li');
//         for (let i = 0; i < itemList.length; i++) {
//             let item = itemList.eq(i);
//             //eq-достъпвам елементите от jquery колекция
//             let textContent = item.find('strong').text();
//             if (!cs) {
//                 textContent = textContent.toLowerCase();
//             }
//             if (!textContent.includes(searchText)) {
//                 itemList.eq(i).css('display', 'none');
//             }
//             else {
//                 itemList.eq(i).removeAttr('style')
//             }
//         }
//     }
//
//     //за да се генерира html-a просто извикваме функцията и подавам selector.
//     generateHtml(wrapper, cs);
// }
