var post = document.getElementsByClassName('post');
var galaxy = "rgb(36, 11, 59)"
var btn = document.getElementsByClassName('selection');
post[0].style.display = "block";
btn[0].style.backgroundColor = galaxy;
btn[0].style.setProperty("color", "#fff", "important");
function showContent(choice) {
    for (let i = 0; i < post.length; i++) {
        if (choice == i) {
            post[i].style.display = "block";
            btn[i].style.backgroundColor = galaxy;
            btn[i].style.setProperty("color", "#fff", "important");
        }
        else {
            post[i].style.display = "none";
            btn[i].style.backgroundColor = "#fff";
            btn[i].style.setProperty("color", "#000", "important");
        }
    }
}