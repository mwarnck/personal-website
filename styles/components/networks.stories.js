import "./networks.css";

export default {
  title: "Component/Networks",
};

export const Regular = () => `<section class="networks" id="networks">
<div>
  <h2>Find me on the following networks:</h2>
</div>
<div class="wrapper">
  <figure>
    <a href="https://github.com" target="_blank"
      ><img src="/images/github-logo.svg" alt="" width="150" height="100"
    /></a>
    <figcaption>GitHub</figcaption>
  </figure>
  <figure>
    <a href="https://codepen.io" target="_blank"
      ><img src="/images/codepen-logo.svg" alt="" width="150" height="100"
    /></a>
    <figcaption>CodePen</figcaption>
  </figure>
  <figure>
    <a href="https://linkedin.com" target="_blank"
      ><img src="/images/linkedin-logo.svg" alt="" width="150" height="100"
    /></a>
    <figcaption>LinkedIn</figcaption>
  </figure>
</div>
</section>`;
