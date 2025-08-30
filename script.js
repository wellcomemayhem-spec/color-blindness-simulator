const imageInput = document.getElementById('imageInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

imageInput.addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function applyColorBlindness(type) {
    // Implement color blindness adjustments here based on the type
}

document.getElementById('protanopiaBtn').addEventListener('click', () => applyColorBlindness('protanopia'));
document.getElementById('deuteranopiaBtn').addEventListener('click', () => applyColorBlindness('deuteranopia'));
document.getElementById('tritanopiaBtn').addEventListener('click', () => applyColorBlindness('tritanopia'));
document.getElementById('resetBtn').addEventListener('click', () => {
    // Reset the canvas to the original image
});