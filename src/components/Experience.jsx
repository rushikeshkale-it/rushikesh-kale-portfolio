import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Application Support Engineer",
    company: "DevionX Technologies",
    duration: "Jan 2025 - Oct 2026",
    location: "Mumbai, Maharashtra",

responsibilities: [
  "Provided L1 production support to clients on a 24x7 basis, ensuring application availability and operational stability.",
  "Monitored email alerts, notification emails, and ticket queues, acknowledging incidents based on priority.",
  "Monitored and troubleshot batch jobs in Control-M to ensure successful execution.",
  "Executed DDL and DML statements in SQL Server to investigate and resolve production issues.",
  "Resolved application-related queries and issues using the ServiceNow ticketing system.",
  "Participated in daily cross-functional team meetings and weekly client calls.",
  "Applied ITIL concepts, including Incident Management, Change Management, and Deployment processes.",
  "Managed incidents and user service requests within defined SLA timelines.",
  "Monitored ETL processes and database replication to ensure smooth data flow.",
  "Ensured continuous application availability and operational stability through proactive monitoring.",
  "Collaborated with development teams to resolve application issues and support deployments.",
  "Identified and implemented performance improvements for applications and database queries."
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
