import "./biography.css";

export default {
  title: "Component/Biography",
};

export const Regular = () => `<section class="biography wrapper" id="biography">
<div class="biography__div-bio">
  <h2>Biography</h2>
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eveniet voluptate porro, harum dolorem
      iste minus deserunt aperiam doloribus, inventore magnam ea corrupti quia perspiciatis distinctio ullam
      incidunt saepe molestias.<br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eveniet voluptate porro, harum dolorem
      iste minus deserunt aperiam doloribus, inventore magnam ea corrupti quia perspiciatis distinctio ullam
      incidunt saepe molestias.
    </p>
  </div>
</div>
<div class="table__table-body">
  <table class="table">
    <caption class="table__caption">
      CV
    </caption>
    <tbody>
      <tr>
        <th class="table__th">Year</th>
        <th class="table__th">Station</th>
      </tr>
      <tr>
        <td class="table__left-column">01/2022 - now</td>
        <td class="table__right-column">Bootcamp Web Development</td>
      </tr>
      <tr>
        <td class="table__left-column">04/2017 - 12/2021</td>
        <td class="table__right-column">work experience #2</td>
      </tr>
      <tr>
        <td class="table__left-column">08/2014 - 03/2017</td>
        <td class="table__right-column">work experience #1</td>
      </tr>
      <tr>
        <td class="table__left-column">09/2009 - 07/2014</td>
        <td class="table__right-column">Bachelor of Science</td>
      </tr>
      <tr>
        <td class="table__left-column">06/2009</td>
        <td class="table__right-column">Abitur</td>
      </tr>
    </tbody>
  </table>
</div>
</section>`;
