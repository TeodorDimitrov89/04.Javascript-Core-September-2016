$(function secretKnock() {
    //const appKey = 'kid_BJXTsSi-e';
    //const appSecret = '447b8e7046f048039d95610c1b039390';
    //const authToken = '2898a2bc-86ee-4045-94cb-22fd7c99635e.4lxl+87BAxafh8dzxzOr5IrRlmL02VKUMZlE77Vx8xw='
    let baseUrl = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock';
    let userName= 'guest';
    let userPass = 'guest';
    let authorization = btoa(userName + ":" + userPass);
    let message = 'Knock Knock.';
    let query = `?query=${message}`;


    function requestHeaders() {
        return requestHeaders = {
            "Authorization":"Basic " + authorization,
            "Content-Type":"application/json"
        };
    }
    console.log(message);
    let request = {
        method:"GET",
        url:baseUrl + query,
        headers:requestHeaders(),
        success:Success,
        error:Error
    };
    $.ajax(request);
    function Success(data) {
        console.log(data['answer']);
        console.log(data['message']);
        let request1 = {
            method:"GET",
            url:baseUrl + '?query=' + data.message,
            headers:requestHeaders,
            success:Success1,
            error:Error1
        };
        $.ajax(request1);

        function Success1(data) {
            console.log(data['answer']);
            console.log(data['message']);
            let request2 = {
                method:"GET",
                url:baseUrl + '?query=' + data.message,
                headers:requestHeaders,
                success:Success2,
                error:Error2
            };

            $.ajax(request2);

            function Success2(data) {
                console.log(data['answer']);
            }
            function Error2(data) {
                alert('error')
            }
        }
        function Error1(data) {
            alert('error')
        }
    }
    function Error() {
        alert('error')
    }
});
