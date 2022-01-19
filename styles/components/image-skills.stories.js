import "./image-skills.css";

export default {
  title: "Component/Image-skills",
};

export const Regular = () => `<section class="image-skills wrapper" id="image-skills">
<figure class="image-skills__illustration">
  <img class="image-skills__image" src="https://source.unsplash.com/random/400x300" alt="" />
  <figcaption>A random image for illustration</figcaption>
</figure>
<div>
  <h2>Short facts</h2>
  <ul class="image-skills__list">
    <li class="image-skills__li-item">born in Lübeck</li>
    <li class="image-skills__li-item">Bachelor of Science</li>
    <li class="image-skills__li-item">Web Developer</li>
    <li class="image-skills__li-item">Sports (Running, Fitness)</li>
  </ul>
  <h2>Skills</h2>
  <ul class="image-skills__list">
    <li class="image-skills__li-item">HTML</li>
    <li class="image-skills__li-item">CSS</li>
    <li class="image-skills__li-item">JavaScript</li>
    <li class="image-skills__li-item">project management</li>
  </ul>
</div>
</section>`;
