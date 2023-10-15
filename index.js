

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
    'https://firebasestorage.googleapis.com/v0/b/memoryscape-59213.appspot.com/o/result.jpg?alt=media&token=dc7afe49-9e11-4428-9f06-336b79254fd8&_gl=1*1g0bpet*_ga*MjkyNzgzNDQuMTY5NzIzNzI3OQ..*_ga_CW55HF8NVT*MTY5NzM0MTEzMi45LjEuMTY5NzM0MTE0NC40OC4wLjA'
    // 'https://firebasestorage.googleapis.com/v0/b/chalk-bot.appspot.com/o/res.jpg?alt=media&token=1b96c6ea-a503-49cb-9c17-adcc2afd5d25&_gl=1*e1f3ay*_ga*MTk4MjI3NzU5OC4xNjk0NjU0MzUz*_ga_CW55HF8NVT*MTY5NzI0NjQzNy4yMS4xLjE2OTcyNDY0NzkuMTguMC4w'
    /* The commented line `//
    "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"` is
    specifying the URL of an equirectangular image that will be used as the panorama for the viewer. */
    // "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"
    // '/Users/dhruvroongta/Downloads/a-landscape-with-hills-and-trees-hvwpfxfz.jpeg'
//    ' http://127.0.0.1:8080/Unknown-8.jpeg'
// 'Unknown-8.jpg'
// 'https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MzYwfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60'
    //"https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"
);

infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, 0, 0);

panorama.add(infospot);

viewer.add(panorama);