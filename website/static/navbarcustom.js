(function () {
    const link = document.querySelectorAll(".navbar-custom > .hover-this");
    const cursor = document.querySelector(".cursor-custom");

    const animateit = function (e) {
        const span = this.querySelector(".nav-anime");
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 12.5,
            xMove = (x / width) * (move * 1.5) - move,
            yMove = (y / height) * (move * 1.5) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === "mouseleave") span.style.transform = "";
    };

    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    };

    link.forEach((b) => b.addEventListener("mousemove", animateit));
    link.forEach((b) => b.addEventListener("mouseleave", animateit));
    window.addEventListener("mousemove", editCursor);
})();
