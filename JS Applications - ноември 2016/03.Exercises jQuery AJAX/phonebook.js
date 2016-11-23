function attachEvents() {
    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContacts);
    const baseServiceUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';
    // const baseServiceUrl = 'https://phonebook-a62cd.firebaseio.com/phonebook';

    function deleteContact(key) {
        let request = {
            method: 'DELETE',
            url: baseServiceUrl + '/' + key + '.json'
        };
        $.ajax(request)
            .then(loadContacts)
            .catch(displayError);
    }
    function loadContacts() {
        $("#phonebook").empty();
        $.get(baseServiceUrl + '.json')
            .then(displayContacts)
            .catch(displayError);
    }
    function displayContacts(data) {
        for (let key in data) {
            let person = data[key]['person'];
            let phone = data[key]['phone'];
            let li = $("<li>");
            li.text(person + ': ' + phone + ' ');
            $("#phonebook").append(li);
            li.append($('<button>[Delete]</button>').click(function() { deleteContact(key) }))
        }
    }


    function createContacts() {
        let person = $('#person').val();
        let phone = $('#phone').val();
        let data =  JSON.stringify({
            person:person,
            phone:phone
        });
        let request = {
            method:"POST",
            data:data,
            url:baseServiceUrl + '.json'
        };
        $.ajax(request)
            .then(loadContacts)
            .catch(displayError);
        $('#person').val('');
        $('#phone').val('');

    }

    function displayError(err) {
        $("#phonebook").append($("<li>err</li>"));
    }

}
