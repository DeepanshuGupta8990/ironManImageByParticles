# ironManImageByParticles - https://64bb7f013be6e333de4cc220--majestic-heliotrope-950b02.netlify.app/
Title: Image-to-Particle Effect using HTML Canvas

Introduction:
This code is an HTML and JavaScript implementation of an image-to-particle effect using the HTML canvas element. The effect converts an image into a particle system, where each particle represents a pixel of the original image. As the mouse moves over the canvas, particles are attracted towards the mouse cursor, creating a visually appealing interaction.

How it works:

HTML Structure:
The HTML file should contain a canvas element with the ID "canvas1" and a button with the ID "warpButton". Additionally, it should include an image element with the ID "image1" containing the image that you want to convert into particles.

JavaScript Implementation:
The JavaScript code uses the canvas element and its context to create and draw particles based on the image data. The Effect class represents the image-to-particle effect, while the Particle class represents individual particles. The Effect class is responsible for initializing particles, updating their positions, and drawing them on the canvas.

Effect Class:

Constructor: The Effect class is initialized with the canvas dimensions, canvas context, and the canvas element. It also sets up mouse event listeners to track the mouse position for particle interaction.
init method: This method loads the image, extracts its pixel data, and creates particles for non-transparent pixels.
draw method: This method iterates through all particles and draws them on the canvas.
update method: This method updates particle positions based on mouse interaction.
wrap method: When the "warpButton" is clicked, this method randomly repositions all particles.
Particle Class:

Constructor: The Particle class represents each particle. It is initialized with the Effect, the x and y position, and the particle's color.
draw method: This method is responsible for drawing each particle on the canvas.
update method: This method updates the particle's position based on the mouse position, applying an attractive force towards the mouse.
wrap method: This method randomly repositions the particle.
Conclusion:
The image-to-particle effect demonstrated in this code creates an interactive and visually appealing animation. By moving the mouse over the canvas, particles are attracted to the cursor, generating a mesmerizing visual effect. The "warpButton" allows you to reset the particle positions randomly.

Note:
Make sure to have an HTML file that includes the necessary elements (canvas, image, and button) and the JavaScript code inside a <script> tag. The image should be accessible through the provided image URL, and you can adjust the canvas dimensions to suit your needs. Happy coding!
We are not using any kind of library here to convert an image data into particles.....
we are creating particles of image by just using vanilla Javascript .....
fell free to check this code here - https://64bb7f013be6e333de4cc220--majestic-heliotrope-950b02.netlify.app/
