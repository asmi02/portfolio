// console.log("hello world");

$(window).scroll(function()
{
    var s=$(window).scrollTop();
    if(s>0)
    {
        $(".navbar").css({transition:"all 0.3s linear"})
        $("nav.navbar").css({backgroundColor:"rgba(10, 0, 207, 0.95)",boxShadow:"0 3px 6px 0 rgba(0,0,0,0.5)"});
        $(".navbar-nav li a").css({color:"white"});
        $("a.navbar-brand").css({color:"white"});
        $(".navbar-nav li a").hover(function()
        {
            $(this).css({color:"#e84843"});
        },function(){
            $(this).css({color:"white"});
        });
        $("a.navbar-brand").hover(function(){
            $(this).css({color:"#e84843"});
        },function(){
            $(this).css({color:"white"});
        });
    }
    else
    {
        $("nav.navbar").css({backgroundColor:"",boxShadow:""});
        $(".navbar-nav li a").css({color:""});
        $("a.navbar-brand").css({color:""});
        $(".navbar-nav li a").hover(function()
        {
            $(this).css({color:""});
        });
        $("a.navbar-brand").hover(function()
        {
            $(this).css({color:""});
        });
    }
});

$(".navbar-toggler").click(function()
{
    $("nav.navbar").css({backgroundColor:"rgba(10, 0, 207, 0.95)"});
    $(".navbar-toggler").css({boxShadow:"none"});
    $(window).scroll(function()
    {
        var s=$(window).scrollTop();
        if(s>0)
        {
            $("nav.navbar").css({transition:"all 0.3s linear"})
            $("nav.navbar").css({backgroundColor:"rgba(10, 0, 207, 0.95)",boxShadow:"0 3px 6px 0 rgba(0,0,0,0.5)"});
            $(".navbar-nav li a").css({color:"white"});
            $("a.navbar-brand").css({color:"white"});
            $(".navbar-nav li a").hover(function()
            {
                $(this).css({color:"#e84843"});
            },function(){
                $(this).css({color:"white"});
            });
            $("a.navbar-brand").hover(function(){
                $(this).css({color:"#e84843"});
            },function(){
                $(this).css({color:"white"});
            });
        }
        else
        {
            $("nav.navbar").css({backgroundColor:"",boxShadow:""});
            $(".navbar-nav li a").hover(function()
            {
                $(this).css({color:""});
            });
            $("a.navbar-brand").hover(function()
            {
                $(this).css({color:""});
            });
        }
    })
});
