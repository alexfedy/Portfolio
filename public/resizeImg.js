//navigate to public folder (where image is)
//create script called resizeImg.js
//run node resizeImg.js to execute
//if import doesnt work then add "type": "module", to package.json file
//npm i sharp@^0.31.3

import sharp from "sharp";

async function resizeImage() {
  try {
    await sharp("mesh4.png")
      .resize({
        width: 200,
        height: 200,
      })
      .toFormat("png", { mozjpeg: true })
      .toFile("mesh_opt.png");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
