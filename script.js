function openNav() {
    document.getElementById("opacity").style.height = "100vh";
    document.getElementById("sidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("opacity").style.height = "0";
    document.getElementById("sidenav").style.width = "0";
}

function scrollbar() {
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = ( winscroll / height ) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = scrollbar;

function sendmsg() {
    console.log("tes")
    let div = document.createElement("div")
    div.className = "textmsg right"
    let p = document.createElement("p")
    p.innerHTML = "tes scfef435f65gy5y5ygvy5yytvg5tytes"
    div.appendChild(p)
    document.getElementById("msgpage").appendChild(div)
}