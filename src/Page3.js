import hobbies1 from "./hobbies1.jpg";
import img6 from "./img6.jpg";

function Page3() {
  return (
    <div className="container-fluid bg-dark text-white">
      <h2 className="bg-primary">Strengths</h2>
      <ul>
        <li>Excellent knowledge of Core subjects.</li>
        <li>Ability to grasp the new skills quickly.</li>
        <li>Hard-working.</li>
        <li>Excellent communication skill.</li>
      </ul>
      <br />
      <h2 className="bg-primary">Hobbies</h2>
      <div class="container-fluid  ">
        <img src={hobbies1} alt="My Image" />
        <img src={img6} alt="My Image" />
        <br />
      </div>
      <div>
        <h2 className="bg-primary">Personal Information</h2>
        <ul>
          <li>Father's Name : Jagannath Mahajan</li>
          <li>Date of Birth : 22th April 1997</li>
          <li>Address : Warje, Pune</li>
          <li>Nationality : Indian</li>
          <li>Marital Status : Unmarried</li>
          <li>Languages known: English, Hindi, Marathi</li>
        </ul>
        <br />
        <div class="d-flex justify-content-around">
          <p>
            <a
              href="https://github.com/jitmahajan"
              class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Follow me on github
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/jitmahajan/"
              class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Follow me on Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
