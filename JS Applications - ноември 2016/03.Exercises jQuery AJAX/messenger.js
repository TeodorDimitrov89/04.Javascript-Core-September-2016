//function result() {
const baseServiceUrl = 'https://messanger-d5038.firebaseio.com/messenger';
$('#submit').on('click', send);
$('#refresh').on('click', refresh);
let textBox = $('#messages');
textBox.prop('disabled', true);
textBox.css('resize', 'none');
function send() {
    let msgVal = $('#author').val();
    let msgContent = $('#content').val();
    let request = {
        author: msgVal,
        content: msgContent,
        timestamp: Date.now()
    };
    $.post(baseServiceUrl + '.json', JSON.stringify(request));
    $('#content').val('');

}
function refresh() {
    let messages = $('#messages');
    $.get(baseServiceUrl + '.json')

        .then((response) => {

            messages.empty();
            let msg = messages.prop('disabled', true);
            let keys = Object.keys(response).sort((m1, m2) => response[m1].timestamp - response[m2].timestamp);
            for (let m of keys) {
                let author = response[m].author;
                let content = response[m].content;
                let messages = `${author}: ${content}\n`;
                msg.append(messages);
            }
            $('#content').val('');
        })
        .catch((error)=> {
            messages.val(JSON.stringify(error.statusText))
        });
}
//}



