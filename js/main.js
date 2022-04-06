$(document).ready(function() {
    //选单搜寻列的显示和隐藏控制
    $(".search-icon").on('click', function() {
        $(".header-bottom-search").slideToggle();
        $(".first-currencies").css("display", "none");
        $(".first-languages").css("display", "none");
    });
});
