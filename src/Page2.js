import { Link, useNavigate } from "react-router-dom";
import ecom1 from "./ecom1.jpg";
import ecom2 from "./ecom2.png";
import img5 from "./img5.jpg";

function Page2() {
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
      <br />
      <h2 className="bg-primary">Projects</h2>
      <br />
      <h4 className="bg-success d-flex justify-content-center">
        Software Development Project
      </h4>
      <br />
      <div class="container-fluid  d-flex justify-content-around ">
        <img src={ecom1} alt="My Image" />
        <img src={ecom2} alt="My Image" />
      </div>
      <h4>Ecommerce Software</h4>
      <ul>
        <li>Team size: 6</li>
        <li>Front End: Java</li>
        <li>Back End: MYSQL</li>
        <br />
        <li>
          Project description :The business-to-consumer aspect of product
          commerce (e-commerce) is the most visible business use of the World
          Wide Web. The primary goal of an e-commerce site is to sell goods
          online. This project deals with developing an e-commerce website for
          Online Product Sale. It provides the user with a catalog of different
          product available for purchase in the store. In order to facilitate
          online purchase a shopping cart is provided to the user. The system is
          implemented using a 3-tier approach, with a backend database, a middle
          tier of Microsoft Internet Information Services (IIS) and PHP, and a
          web browser as the front end client. In order to develop an e-commerce
          website, a number of Technologies must be studied and understood.
          These include multi-tiered architecture, server and client side
          scripting techniques, implementation technologies such as PHP(OOP),
          JQUERY, BOOTSTRAP, HTML5, relational databases (such as MySQLi,
          Access). This is a project with the objective to develop a basic
          website where a consumer is provided with a shopping cart application
          and also to know about the technologies used to develop such an
          application. This document will discuss each of the underlying
          technologies to create and implement an e-commerce website.
        </li>
      </ul>
      <div class="d-flex justify-content-around">
        <p>
          <a
            href="https://github.com/jitmahajan/Actitime_Cucumber_Project"
            class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            project Code Link
          </a>
        </p>
      </div>
      <br />
      <h4 className="bg-success d-flex justify-content-center">
        Software Testing Project
      </h4>
      <h4>Ecommerce Software</h4>
      <br />
      <div className="container-fluid d-flex justify-content-start">
        <img src={img5} alt="My Image" />
        <br />
        <ul>
          <li>Team size: 5</li>
          <li>Process-Agile-Scrum</li>
          <li>Bug reporting tool : Jira</li>
          <li>
            Test cases writing techniques : Black Box technique (BVA, EP,etc)
          </li>
          <br />
        </ul>
      </div>
      <br />
      <p>
        Project description : This application is the the one-stop solution to
        cater to the needs of customers and shopping though our websites. A
        sophisticated and easy-to-use shopping cart control panel is available,
        with a “Search anything” feature. In addition to that I worked on many
        modules/features like Home page,Search feature with different -different
        categories, product page,Product detail page,cart,email so on. And we
        are using agile environment with 2 weeks of sprint cycle.We use JIRA
        tool to accomodate all the requirements and testing activities. I have
        experience on Functional, Automation, Regression, Smoke, Sanity, Web
        accessibility, Web Analytics, Mobile Testing.In my previous project I
        have worked on Automation testing where we have used Selenium with java
        and TestNG Cucumber framework for BDD approach. We have used Page object
        model where we have separated our test cases with page objects, and we
        performed testing on the same. For build management tool we are using
        Maven for version controlling we are using Git and for automating our
        jobs for nightly run or any schedule we are using Jenkins.
      </p>
      <div class="d-flex justify-content-around">
        <p>
          <a
            href="https://github.com/jitmahajan/Actitime_Cucumber_Project"
            class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            project Code Link
          </a>
        </p>
      </div>
      <br />
    </div>
  );
}

export default Page2;
