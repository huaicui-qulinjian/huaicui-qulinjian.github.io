window.onload = function() {
    const code = document.querySelectorAll(".code");
    let txt = document.createElement("textarea");
    txt.style.cssText = "position:fixed;left: -999999px";
    document.body.appendChild(txt)
    for(var i=0;i<code.length;i++) {
        code[i].onclick = function() {
            txt.value = this.innerHTML;
            txt.select();
            document.execCommand("Copy");
        }
    }
}