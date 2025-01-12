$(document).ready(function () {
    let numColumns = $("#numberOfColumns");
    let numRows = $("#numberOfRows");
    let button = $("#button");

    button.on("click", function () {
        let columns = $(numColumns).val();
        let rows = $(numRows).val();

        columns = parseInt(columns);
        rows = parseInt(rows);

        const $table = $("<table></table>");
        for (let i = 1; i <= rows; i++) {
            const $row = $("<tr></tr>");
            for (let j = 1; j <= columns; j++) {
                const $cell = $("<td></td>").text(`Row-${i} Column-${j}`);
                $row.append($cell);
            }
            $table.append($row);
        }
        $("body").append($table);
    });
});
