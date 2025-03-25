import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const talks = [
  { 
    title: "We Should All Be Feminists - Chimamanda Ngozi Adichie", 
    url: "https://www.youtube.com/watch?v=hg3umXU_qWc",
    description: "A compelling talk on feminism, gender inequality, and why we should all strive for a world where women are given equal opportunities."
  },
  { 
    title: "Gloria Steinem on Equality", 
    url: "https://www.youtube.com/watch?v=5CffM9k8NRA",
    description: "An inspiring speech by feminist icon Gloria Steinem on the importance of gender equality and how we can achieve it."
  },
  { 
    title: "Malala Yousafzai Nobel Prize Speech", 
    url: "https://www.youtube.com/watch?v=c2DHzlkUI6s",
    description: "Malala shares her journey of advocating for girls' education and the power of standing up against oppression."
  },
  { 
    title: "Michelle Obama's Speech on Women Empowerment", 
    url: "https://www.youtube.com/watch?v=DJZb8nCqjHQ",
    description: "Michelle Obama speaks passionately about the need for women's empowerment and the role education plays in achieving it."
  }
];

const jobCategories = {
  "Technology": [
    { title: "Software Engineer Internship", company: "Google", location: "Remote", url: "https://careers.google.com/" },
    { title: "Data Analyst Intern", company: "Microsoft", location: "Hybrid", url: "https://careers.microsoft.com/" }
  ],
  "Healthcare": [
    { title: "Nursing Internship", company: "Apollo Hospitals", location: "India", url: "https://www.apollohospitals.com/" },
    { title: "Medical Research Assistant", company: "WHO", location: "Global", url: "https://www.who.int/" }
  ]
};

const Home = () => {
  return (
    <div className="container">
      <motion.h1 
        className="header interactive-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Bridging the Gender Gap – Empowering the Girl Child
      </motion.h1>
      
      <div className="section">
        <h2 className="section-title">Inspirational Talks</h2>
        <div className="grid interactive-grid">
          {talks.map((talk, index) => (
            <div key={index} className="card interactive-card">
              <h3>{talk.title}</h3>
              <p>{talk.description}</p>
              <a href={talk.url} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section">
        <h2 className="section-title">Employment Opportunities</h2>
        {Object.entries(jobCategories).map(([category, jobs]) => (
          <div key={category} className="job-category">
            <h3>{category}</h3>
            <div className="grid interactive-grid">
              {jobs.map((job, index) => (
                <div key={index} className="card interactive-card">
                  <h4>{job.title}</h4>
                  <p>{job.company} - {job.location}</p>
                  <a href={job.url} target="_blank" rel="noopener noreferrer">Apply Here</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="button-container">
        <button className="cta-button interactive-button">Join the Movement</button>
      </div>
    </div>
  );
};

export default Home;