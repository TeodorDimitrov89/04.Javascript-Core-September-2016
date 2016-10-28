function initializeTable() {
    $('#createLink').click(function () {
        let newCountryText = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        createNewCountry(newCountryText, capital)
    });

    createNewCountry('Bulgaria', 'Sofia');
    createNewCountry('Germany', 'Berlin');
    createNewCountry('Russia', 'Moscow');

    function createNewCountry(countryName, capital) {
        let tr = $('<tr>');
        tr.append($('<td>').text(countryName));
        tr.append($('<td>').text(capital));

        let linkUp = ($("<a href='#'>[Up]</a>")
            .click(moveUp));
        let linkDown = ($("<a href='#'>[Down]</a>")
            .click(moveDown));

        let delLink = ($("<a href='#'>[Delete]</a>")
            .click(deleteItems));

        let actionTd = $('<td>')
            .append(linkUp)
            .append(" ")
            .append(linkDown)
            .append(" ")
            .append(delLink);

        tr.append(actionTd);
        tr.append(actionTd);

        $('#countriesTable').append(tr);
        fixRowAction();
    }

    function fixRowAction() {
        let rows = $("#countriesTable tr").toArray();
        $(rows).find("td a").css('display','inline');
        $(rows[2]).find("td a:contains('Up')").css('display','none');
        $(rows[rows.length-1]).find("td a:contains('Down')").css('display','none');
    }

    function deleteItems() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            fixRowAction();

        });
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.prev().insertAfter(row);
            row.fadeIn();
            fixRowAction();

        });

    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.next().insertBefore(row);
            row.fadeIn();
            fixRowAction();

        });

    }
}
