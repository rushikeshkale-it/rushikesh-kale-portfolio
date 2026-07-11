import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Application Support Engineer",
    company: "Sofrego Private Limited",
    duration: "Sep 2024 - Present",
    location: "Pune, Maharashtra",

    responsibilities: [
      "Provided L1/L2 production support for enterprise applications, ensuring high availability and SLA compliance.",
      "Monitored and supported Java applications deployed on Apache Tomcat in a Linux production environment.",
      "Scheduled and monitored batch jobs in Control-M, ensuring successful execution and SLA compliance.",
      "Monitored email alerts, system notifications, and ticket queues to identify and resolve production issues within SLA.",
      "Executed SQL queries for data validation and production issue investigation.",
      "Investigated and troubleshot Database, Application Server, and Linux OS related issues.",
      "Coordinated with Development, DBA, Infrastructure, Network, and Business teams to resolve incidents.",
      "Managed Incidents, Service Requests, and Change Requests using ServiceNow.",
      "Used PuTTY for Linux server access and SSMS for SQL query execution and database monitoring.",
      "Performed application monitoring using Dynatrace and log analysis using Splunk.",
      "Automated repetitive operational tasks using Shell Scripting.",
      "Performed Root Cause Analysis (RCA) and implemented permanent fixes.",
      "Created SOPs and Knowledge Base documents for production support."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="edu-container">

        <div className="badge">Experience</div>

        <h2 className="section-title edu-title">
          Professional Experience
        </h2>

        <p className="section-subtitle">
          My Professional Journey
        </p>

        <div className="edu-li-wrap">

          <div className="edu-li-line" />

          {experienceData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="edu-li-row"
            >

              <div className="edu-li-dot" />

              <div className="edu-li-card card">

                <h3 className="edu-li-title">
                  {item.title}
                </h3>

                <p className="edu-li-inst">
                  {item.company}
                </p>

                <div className="edu-li-meta">
                  <span className="edu-li-chip">
                    {item.duration}
                  </span>

                  <span className="edu-li-chip">
                    {item.location}
                  </span>
                </div>

                <ul
                  style={{
                    marginTop: "22px",
                    paddingLeft: "20px",
                    lineHeight: "1.8",
                    color: "var(--text)"
                  }}
                >
                  {item.responsibilities.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "10px"
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}