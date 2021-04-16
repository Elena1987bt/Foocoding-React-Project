import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__container">
          <div className="about__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7737116.926585947!2d8.441210646692404!3d61.74209176968949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb2396d35f0f1%3A0x22b8eba28dad6f62!2sSweden!5e0!3m2!1sen!2sse!4v1618219117620!5m2!1sen!2sse"
              className="iframe"
              title="iframe"
            />
          </div>
          <div className="about__info">
            <h2> Welcome to our store!</h2>
            <p>
              We're dedicated to giving you the very best of our products, with a focus on
              dependability, customer service and uniqueness. Founded in 2000 by Sara, Shopify has
              become one of the best online stores in Dream city in Sweden.
            </p>
            <p>
              When Sara first started out, her passion for fashion drove her to quit her day job and
              with hard work and inspiration to turn her idea into a booming online store. We now
              serve customers all over the world and are thrilled to be a part of the eco-friendly,
              fair trade wing of the fashion world.
            </p>
            <p>
              We hope you enjoy our products as much as we enjoy offering them to you. If you have
              any questions or comments, please don't hesitate to contact us.
            </p>
            <p>Sincerely, Sara Lacovs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
