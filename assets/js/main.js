$(document).ready(function () {
    $("#addBtn").click(function () {
        let li = $("<li></li>");
        let bookmark = $("<a>");
        bookmark.attr("href", $("#url").val());
        bookmark.text($("#url").val());
        li.append(bookmark);
        $("#bookmarks").append(li);
    });
});
