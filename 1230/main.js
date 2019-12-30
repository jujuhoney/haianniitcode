
$(document).ready(function(){
    var num;
    $('.main>li[id]').hover(function(){
        /*图标向上旋转*/
        $(this).find("span").removeClass().addClass('hover-up');
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = parseInt(Obj.substring(3, Obj.length));
        $('#box_'+num).slideDown(300);
    },function(){
        /*图标向下旋转*/
        $(this).find("span").removeClass().addClass('hover-down');
        /*下拉框消失*/
        $('#box_'+num).hide();
    });

});