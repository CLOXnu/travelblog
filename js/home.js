let info;
let all_blog_json;

readinfo("",function (json) {
    info = json;
})

readall(function (json) {
    all_blog_json = json;
})

window.addEventListener('scroll', function (e) {
    const screen_height = document.documentElement.clientHeight;
    const welcome_offset = -document.getElementById("welcome").getBoundingClientRect().top;
    const welcome_offset_ratio = welcome_offset / screen_height;

    // 为了避免 opacity 的快速变化导致动画失效，
    // 将此 opacity 分为外层 welcome-p1-wrap 的动画 opacity 和 welcome-p1 的非动画 opacity
    document.getElementById("welcome-p1-wrapper").style.opacity =
        (welcome_offset_ratio < 0.3 ? '1' : '0.3'); // 1 --- 0.3
    document.getElementById("welcome-p1").style.opacity =
        (welcome_offset_ratio < 0.3 ? '1' :
            (welcome_offset_ratio > 0.6 ? '0' : (
                (-(10 / 3) * welcome_offset_ratio + 2).toString()
            ))); // 1 ---> 0
    document.getElementById("welcome-p1").style.bottom =
        (welcome_offset_ratio < -1 ? '73' :
            (welcome_offset_ratio > 0.6 ? '57' : (
                (-10 * welcome_offset_ratio + 63).toString()
            ))) + '%'; // 73 ---> 57
    document.getElementById("welcome-p2-wrapper").style.opacity =
        (welcome_offset_ratio < 0.3 ? '0.3' : '1'); // 0.3 --- 1
    document.getElementById("welcome-p2").style.opacity =
        (welcome_offset_ratio < 0 ? '0' :
            (welcome_offset_ratio > 0.3 ? '1' : (
                ((10 / 3) * welcome_offset_ratio).toString()
            ))); // 0 ---> 1
    document.getElementById("welcome-p2").style.top =
        (welcome_offset_ratio < 0 ? '57' :
            (welcome_offset_ratio > 1.6 ? '73' : (
                (10 * welcome_offset_ratio + 57).toString()
            ))) + '%'; // 57 ---> 73
});

