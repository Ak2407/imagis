import { prompts } from "@/constants";
import axios from "axios";
import fs from "fs";
import path from "path";

// Output folder where images will be saved
const OUTPUT_FOLDER = path.join(process.cwd(), "public", "generated-images");

// Ensure the output folder exists
if (!fs.existsSync(OUTPUT_FOLDER)) {
  fs.mkdirSync(OUTPUT_FOLDER, { recursive: true });
}

// Define available sizes for images
const sizes = [
  { width: 1080, height: 1920 },
  { width: 1280, height: 720 },
  { width: 520, height: 520 },
];

// Function to create the image URL
const createImageURL = (
  prompt: string,
  width: number,
  height: number,
  seed: number,
): string => {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&nologo=True`;
};

// Function to download the image and save it to the folder
const downloadImage = async (url: string, filename: string): Promise<void> => {
  const imagePath = path.join(OUTPUT_FOLDER, filename);

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);
    writer.on("finish", () => resolve());
    writer.on("error", reject);
  });
};

// Function to select a random size from the available options
const getRandomSize = () => {
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
};

// Main function to generate images
const generateImages = async () => {
  try {
    for (let i = 0; i < prompts.length; i++) {
      const prompt = prompts[i].prompt;
      const randomSeed = Math.floor(Math.random() * 100000);

      // Select random size for width and height
      const { width, height } = getRandomSize();
      const imageURL = createImageURL(prompt, width, height, randomSeed);
      const filename = `image-${i + 1}.jpg`;

      // Download and save image
      await downloadImage(imageURL, filename);
      console.log(
        `Saved image ${i + 1} (Size: ${width}x${height}) for prompt: "${prompt}"`,
      );
    }
    console.log("All images generated and saved!");
  } catch (error) {
    console.error("Error generating images:", error);
  }
};

// Run the script
generateImages();
