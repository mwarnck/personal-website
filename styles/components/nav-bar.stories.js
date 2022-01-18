import "./nav-bar.css";

export default {
  title: "Component/Nav-bar",
};

export const Regular = () => `<nav class="nav">
<ul class="nav__ul">
  <li>
    <a class="nav__links" href="#biography">Biography</a>
  </li>
  <li>
    <a class="nav__links" href="#contact">Contact</a>
  </li>
  <li>
    <a class="nav__links" href="#networks">Networks</a>
  </li>
</ul>
</nav>`;
