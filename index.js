

const PANOLENS = require("panolens");

var app, panorama, viewer, infospot;

app = document.querySelector("#app");


viewer = new PANOLENS.Viewer({
    enableReticle: false,
    container: app,
    output: "console",
    viewIndicator: true,
});

panorama = new PANOLENS.ImagePanorama(
    'https://firebasestorage.googleapis.com/v0/b/chalk-bot.appspot.com/o/res.jpg?alt=media&token=1b96c6ea-a503-49cb-9c17-adcc2afd5d25&_gl=1*e1f3ay*_ga*MTk4MjI3NzU5OC4xNjk0NjU0MzUz*_ga_CW55HF8NVT*MTY5NzI0NjQzNy4yMS4xLjE2OTcyNDY0NzkuMTguMC4w'
);

infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, 0, 0);

panorama.add(infospot);

viewer.add(panorama);