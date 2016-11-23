function loadCommits() {
    let username = $('#username').val();
    let repo = $('#repo').val();
    const baseServiceUrl = `https://api.github.com/repos/`;

    function displayCommits(data) {
        $('#commits').empty();

        for (let com of data) {
            let commits = $('<li>').text(com.commit.author.name + ': ' + com.commit.message);
            $('#commits').append(commits)
        }
    }

    function displayError(error) {
        $('#commits').append($('<li>').text("Error: "+error.status + ' ('+ error.statusText+')'))
    }

    $.get(baseServiceUrl+`${username}/${repo}`+ '/commits')
        .then(displayCommits)
        .catch(displayError)
}
