// point_text
document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    const shape = document.querySelector(".shape");
    const shapeRect = shape.getBoundingClientRect();
    const shapeX = mouseX - shapeRect.width / 2;
    const shapeY = mouseY - shapeRect.height / 2 - 230;

    gsap.to(".shape", {
        x: shapeX + shapeRect.width / 2,
        y: shapeY + shapeRect.height / 2,
        stagger: -0.1
    });
});