
![Alt text](assets/banner.png)
A web-based animation project where lines with waves pass through an image. The project is built using the p5.js library and generates an animation with different phases for each wave line.

## Installation and Setup

1.  Clone the repository using the following command:

```bash
git clone https://github.com/starlove54/image-waves.git
```

2.  Navigate to the project directory:

```bash
cd image-waves
````

3.  Open `index.html` in a web browser.

## Usage

1.  The project contains an image (`starlove.jpeg`) in the `assets` folder on which the wave lines are superimposed.
2.  Open the `index.html` file in a web browser to view the animation.
3.  The animation can be exported as a GIF by uncommenting the commented code in the `index.js` file.

## Project Structure

The project contains the following files and directories:

1.  `index.html` - The main HTML file of the project.
2.  `index.js` - The main JavaScript file of the project.
3.  `assets` - A directory containing the image (`starlove.jpeg`) on which the wave lines are superimposed.
4.  `p5.js` - A p5.js library file.
5.  `src` - A directory containing the following files:
    -   `CCapture.js` - A script to capture frames of the animation to create a GIF.
    -   `gif.js` - A script to create a GIF.
    -   `gif.worker.js` - A script to create a GIF.
    -   `download.js` - A script to download the created GIF.

## License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/chat/LICENSE) file for details.