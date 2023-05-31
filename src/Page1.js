import { Link, useNavigate } from "react-router-dom";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import simg4 from "./simg4.jpg";

function Page1() {
  const navigate = useNavigate();
  function NextPage() {
    navigate("/Page2");
  }

  const navigate1 = useNavigate();
  function NextPag() {
    navigate("/Page3");
  }

  return (
    <div className="container-fluid bg-dark text-white">
      <h1 className="d-flex justify-content-center text-danger">
        Introduction
      </h1>
      <br />
      <h2 className="text-info">Jitesh Mahajan</h2>
      <br />
      <div className="text-info">Email : jiteshmahajan22@gmail.com</div>
      <div className="text-info">Mobile : 7058201511</div>
      <br />
      <p1>
        Objectives : To obtain a challenging and responsible position in the
        area of Software Development where my knowledge, ability and dedication
        will be utilized. As a web developer, my objective is to create
        user-friendly and efficient websites that are visually appealing and
        easy to navigate. I utilize my skills in HTML, CSS, JavaScript, and PHP
        to develop websites that meet all the requirements of the client.
      </p1>
      <br />
      <br />
      <div class="container-fluid bg-black d-flex justify-content-between">
        <img src={img1} alt="My Image" />
        <img src={img2} alt="My Image" />
        <img src={img3} alt="My Image" />
      </div>
      <br />
      <h1 className="bg-primary">Education Details</h1>
      <div class="container text-center">
        <div class="row border border-danger">
          <div class="col">Course Details</div>
          <div class="col-6">University</div>
          <div class="col">Passing Year</div>
          <div class="col">Percentage</div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row border border-danger">
          <div class="col">PG-DAC</div>
          <div class="col-6">Mumbai</div>
          <div class="col">2023</div>
          <div class="col">76</div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row border border-danger">
          <div class="col">Bachelor in Civil Engineering</div>
          <div class="col-6">Pune</div>
          <div class="col">2018</div>
          <div class="col">78</div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row border border-danger">
          <div class="col">Diploma in Civil Engineering</div>
          <div class="col-6">MSBTE</div>
          <div class="col">2015</div>
          <div class="col">75</div>
        </div>
      </div>
      <br />
      <h1 className="bg-primary">Certifications</h1>
      <ul>
        <li>PG-DAC</li>
        <li>Software Testing Course</li>
      </ul>
      <br />
      <h1 className="bg-primary">Software Skills</h1>
      <div className="container-fluid d-flex justify-content-start">
        <img src={simg4} alt="My Image" />
        <ul>
          <li>Software Development</li>
          <li>Language: C, C++, Core JAVA, Adv JAVA, C# and ASP.NET.</li>
          <li>Database: MySQL, NoSQL, MongoDB</li>
          <li>Operating Systems: Windows, Linux</li>
          <li>Web Programming using HTML and Java Script</li>
          <li>Web-basesd Java Programming</li>
        </ul>
        <br />
        <ul>
          <li>Software Testing</li>
          <li>
            Manual testing: Black box Testing, Functional and Non-functional
            Testing, Regression Testing, Retesting, Test Case Design,
            development and execution.
          </li>
          <li>
            Automation Testing: UI Automation testing using selenium with java,
            TestNG, Maven
          </li>
          <li>Automation Framework: TestNG and Cucumber.</li>
          <li>Test Management Tool: Jira</li>
          <li>API Testing with Postman tool</li>
        </ul>
      </div>
      <div className="d-flex justify-content-center ">
        <button onClick={NextPage}>Project</button>
        <button onClick={NextPag}>Personal Info</button>
      </div>
    </div>
  );
}

export default Page1;
