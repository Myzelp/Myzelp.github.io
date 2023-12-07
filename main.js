let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #c22824;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #c22824;">Aprendiendo desarrollo de software.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
