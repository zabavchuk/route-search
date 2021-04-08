const GRAPH = new Graph();

function getFullUrl(uri) {
    return window.location.origin + '/' + (uri !== '' ? uri + '/' : '');
}

function openDropdown() {
    $(this).parent().toggleClass('open');
}

function selectItem() {
    let $text = $(this).text(),
        $dropdownList = $('.dropdown > .list > .item');

    if ($(this).parent().parent().hasClass('left')) {
        $dropdownList.removeClass('disable_left');
        $('.dropdown.left > .list > .item').removeClass('selected');
        $('.dropdown.right > .list > .item[data-id="' + $(this).data('id') + '"]').addClass('disable_left');

        GRAPH.setStartVertex($text);

        if ($('.dropdown.right > .list > .item').hasClass('selected')) {

            showPath();
        }
    }
    if ($(this).parent().parent().hasClass('right')) {

        GRAPH.setEndVertex($text);

        if ($('.dropdown.left > .list > .item').hasClass('selected')) {

            showPath()
        }

        $dropdownList.removeClass('disable_right');
        $('.dropdown.right > .list > .item').removeClass('selected');
        $('.dropdown.left > .list > .item[data-id="' + $(this).data('id') + '"]').addClass('disable_right');

    }

    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text($text);
}

function closeDropdown(e) {
    if ($(e.target).closest(".dropdown > .caption").length === 0) {
        $('.dropdown').removeClass('open');
    }
}

function showPath() {
    let resultMin = GRAPH.findPath(),
        resultMax = GRAPH.findMaxPath();

    $('.result_min > .path').text(resultMin[0]);
    $('.result_min > .distance').text(' ' + resultMin[1]);

    $('.result_max > .path').text(resultMax[0]);
    $('.result_max > .distance').text(' ' + resultMax[1]);

    if (resultMin.length > 1) {
        $('.save-path').removeClass('hidden')
    }
}

function handleResponse(response) {
    if (response.success) {

        $('.save-path').css({
            "background-color": "#4caf6f",
            "color": "#fff",
            "transition": "background-color 0.5s ease"
        });
        $('.save-path').prop('text', 'Збережено');

        setTimeout(function () {
            $('.save-path').css({"background-color": "", "color": ""});
            $('.save-path').prop('text', 'Зберегти шлях');
        }, 2000);
    }
    else {
        alert('Цей шлях вже є у базі даних');
    }
}

function savePath(e) {
    e.preventDefault();

    let data = {
        'path': $('.result_min > .path').text().replace(/\s/g, '').split('––'),
        'distance': parseInt($('.result_min > .distance').text())
    };

    $.post(
        getFullUrl('home/savePath'),
        data,
        handleResponse,
        'json'
    );
}

function initVertices() {
    $.ajax({
        url: getFullUrl('home/getPoints'),
        type: 'GET',
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        success: function (response) {
            response.map(vertext => GRAPH.addVertex(vertext.name));
            initEdges(getFullUrl('home/getDirections'));
            initEdges(getFullUrl('home/getFile'));
        }
    });
}


function initEdges(path) {
    $.ajax({
        url: path,
        type: 'GET',
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        success: function (response) {
            response.map(edge => GRAPH.addEdge(edge.from, edge.to, parseInt(edge.distance)));
        }
    });
}

$(function () {
    initVertices();

    $(document).on('click', '.dropdown > .caption', openDropdown);
    $(document).on('click', '.dropdown > .list > .item', selectItem);
    $(document).on('click', closeDropdown);

    $(document).on('click', '.save-path', savePath);
});