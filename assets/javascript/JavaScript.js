var apikey = '3f5eb59655ab4a5f9cd29ecbc248268c';
var baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var searchTerm;
var numberOfRecords;
var startYear;
var endYear;
var url;

function ajaxCall() {
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    })
};
$('.search').on('click', function () {
    url = baseUrl + '?' + $.param({
        'api-key': apikey,
        'q': $('#searchTerm').val(),
        'page': $('#numberOfRecords').val(),
        'begin_date': $('#startYear').val() + '0101',
        'end_date': $('#endYear').val() + '0101'
    });
    ajaxCall();
});

