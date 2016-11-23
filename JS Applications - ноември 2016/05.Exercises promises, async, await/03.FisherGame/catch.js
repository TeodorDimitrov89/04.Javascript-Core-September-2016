function attachEvents() {
    let username = "guest";
    let userPass = 'guest';
    let authorization = btoa(username + ":" + userPass);
    let baseUrl = 'https://baas.kinvey.com/appdata/kid_B1Vj6aaWx/biggestCatches';

    $('.load').click(displayCathes);
    $('.add').click(createCathes);
    function generateHTML(responseData) {

        $("#catches").empty();

        let divCatches, angler, weight, species, location, bait, captureTime, btnupdate, btnDelete, container;
        container = $('#catches');
        for (let data of responseData) {
            divCatches = $('<div class="catch">').attr('data-id', `${data._id}`);
            angler = $('<label>').text('Angler');
            let input1 = ($('<input type="text" class="angler">').attr("value", `${data.angler}`));
            weight = $('<label>').text('Weight');
            let input2 = ($('<input type="number" class="weight">').attr("value", `${Number(data.weight)}`));

            species = $('<label>').text('Species');
            let input3 = ($('<input type="text" class="species">').attr("value", `${data.species}`));

            location = $('<label>').text('Location');
            let input4 = ($('<input type="text" class="location">').attr("value", `${data.location}`));

            bait = $('<label>').text('Bait');
            let input5 = ($('<input type="text" class="bait">').attr("value", `${data.bait}`));

            captureTime = $('<label>').text('Capture Time')
            let input6 = ($('<input type="number" class="captureTime">').attr("value", `${Number(data.captureTime)}`));

            btnupdate = $('<button class="update"> Update</button>');
            btnDelete = $('<button class="delete"> Delete</button>');
            divCatches
                .append(angler)
                .append(input1)
                .append(weight)
                .append(input2)
                .append(species)
                .append(input3)
                .append(location)
                .append(input4)
                .append(bait)
                .append(input5)
                .append(captureTime)
                .append(input6)
                .append(btnupdate)
                .append(btnDelete);
            container.append(divCatches);
        }
        return container
    }

    function displayCathes() {
        let requestHeaders = {
            "Content-Type": "application/json",
            "Authorization": "Basic " + authorization
        };
        let request = {
            method: "GET",
            url: baseUrl,
            headers: requestHeaders,
            success: listAllCathes,
            error: AJAXErrorHandler
        };
        $.ajax(request)
            .then(deleteOrUpdate);

        function listAllCathes(responseData) {
            let html = generateHTML(responseData);
            $('#main').append(html)
        }
    }

    function AJAXErrorHandler() {
        // console.log("error");
    }

    function createCathes() {
        let addForm = $('#addForm');
        let angler = addForm.find('.angler').val();
        let weight = addForm.find('.weight').val();
        let species = addForm.find('.species').val();
        let location = addForm.find('.location').val();
        let bait = addForm.find('.bait').val();
        let captureTime = addForm.find('.captureTime').val();
        let requestHeaders = {
            "Authorization": "Basic " + authorization,
            "Content-Type": "application/json"
        };
        let data = JSON.stringify({
            angler: angler,
            weight: Number(weight),
            species: species,
            location: location,
            bait: bait,
            captureTime: Number(captureTime)
        });

        let request = {
            method: "POST",
            headers: requestHeaders,
            url: baseUrl,
            data: data,
            success: Success,
            error: AJAXErrorHandler
        };

        $.ajax(request);
        function Success() {
            let addForm = $('#addForm');
            let angler = addForm.find('.angler').val('');
            let weight = addForm.find('.weight').val('');
            let species = addForm.find('.species').val('');
            let location = addForm.find('.location').val('');
            let bait = addForm.find('.bait').val('');
            let captureTime = addForm.find('.captureTime').val('');
            displayCathes();
        }
    }

    function deleteOrUpdate() {
        $('.delete').click(deleteCathes);
        $('.update').click(updateCatches);
        function updateCatches() {
            let id = $(this).parent().attr('data-id');
            let requestUrl = baseUrl + "/" + id;
            let updateForm = $(this).parent();
            let angler = updateForm.find('.angler').val();
            let weight = updateForm.find('.weight').val();
            let species = updateForm.find('.species').val();
            let location = updateForm.find('.location').val();
            let bait = updateForm.find('.bait').val();
            let captureTime = updateForm.find('.captureTime').val();

            let data = JSON.stringify({
                angler: angler,
                weight: Number(weight),
                species: species,
                location: location,
                bait: bait,
                captureTime: Number(captureTime)
            });

            let requestHeaders = {
                "Content-Type": "application/json",
                "Authorization": "Basic " + authorization
            };
            let request = {
                method: "PUT",
                url: requestUrl,
                headers: requestHeaders,
                data: data,
                success: updateSuccess,
                error: AJAXErrorHandler
            };

            function updateSuccess() {
                displayCathes()
            }

            $.ajax(request);

        }

        function deleteCathes() {
            let id = $(this).parent().attr('data-id');
            let requestHeaders = {
                "Authorization": "Basic " + authorization,
                "Content-Type": "application/json"
            };
            let request = {
                method: "DELETE",
                headers: requestHeaders,
                url: baseUrl + "/" + id,
                success: Success1,
                error: AJAXErrorHandler
            };
            $.ajax(request);
            function Success1() {
                displayCathes()
            }
        }
    }
}
