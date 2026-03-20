function createCanvas() {
    const container = document.querySelector(".canvas");
    
    container.innerHTML = '';

    for (let i = 0; i < 64; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        pixel.addEventListener("click", () => {
            pixel.style.backgroundColor = "black";
        });

        container.appendChild(pixel);
    }
}


const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", createCanvas);

createCanvas();
