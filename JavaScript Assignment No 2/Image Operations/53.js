function getImageDimensions(imageSrc) {
    const img = new Image(); 
    img.src = imageSrc;

    document.body.appendChild(img);

    img.onload = function() {
        console.log("Image Width: " + img.width + "px");
        console.log("Image Height: " + img.height + "px");
    };

    
    img.onerror = function() {
        console.log("Failed to load the image.");
    };
}

window.onload = function() {
    const imageUrl = "https://as2.ftcdn.net/v2/jpg/03/31/84/47/500_F_331844776_sU4f3bWxu2zwKsqnNdJvjEcmlbj0hVSP.jpg"; 
    getImageDimensions(imageUrl);
};
