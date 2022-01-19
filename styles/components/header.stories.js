import "./header.css";

export default {
  title: "Component/Header",
};

export const Regular = () => `<header class="header">
<h1>Mirco Warnck</h1>
<nav class="nav">
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
</nav>
</header>`;
