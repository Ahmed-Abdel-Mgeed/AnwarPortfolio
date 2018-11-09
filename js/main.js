

    document.getElementById("navBtn").onclick = function () {

        const list = document.getElementById("navList");
        list.classList.toggle("visible");

        let start = -100,
            move = setInterval(animate, 0);
            function animate(e) {

                if (list.classList.contains("visible")) {
                    if (start == 140) {
                        clearInterval(animate);
                    } else {
                        start++;
                        list.style.height = start + 'px';
                    }
                }else {
                    if (start < -100) {
                        clearInterval(animate);
                    } else {
                        start--;
                        list.style.height = start + 'px';
                    }
                }

            }







        //
        // if (list.classList == "visible") {
        //     list.style.top = "56px";
        // }else {
        //     list.style.top = "-300px";
        // }
    }
