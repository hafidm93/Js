    function TOCalinux() {
        var TOCalinux = i = headlength = gethead = 0;
        headlength = document.getElementById("post-toc").querySelectorAll("h3, h4, .tr_bq").length;
        for (i = 0; i < headlength; i++) {
            gethead = document.getElementById("post-toc").querySelectorAll("h3, h4, .tr_bq")[i].textContent;
            document.getElementById("post-toc").querySelectorAll("h3, h4, .tr_bq")[i].setAttribute("id", "point" + i);
            TOCalinux = "<li><a href='#point" + i + "'>" + gethead + "</a></li>";
            document.getElementById("TOCalinux").innerHTML += TOCalinux;
        }
    }

function mbtToggle() {
    var mbt = document.getElementById('TOCalinux');
    if (mbt.style.display === 'none') {
        mbt.style.display = 'block';
    } else {
        mbt.style.display = 'none';
    }
}
