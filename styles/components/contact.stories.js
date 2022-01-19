import "./contact.css";

export default {
  title: "Component/Contact",
};

export const Regular = () => `<section class="contact wrapper" id="contact">
<div class="contact__phone-mail">
  <h2>Contact</h2>
  <div class="wrapper contact__contact-base">
    <div class="contact__phone">
      <p><strong>Phone:</strong></p>
      <p>+49 / 1234 567890</p>
    </div>
    <div class="contact__mail">
      <p><strong>Mail:</strong></p>
      <p><a href="mailto:fish@neuefische.de">fish@neuefische.de</a></p>
    </div>
  </div>
</div>
</section>`;
