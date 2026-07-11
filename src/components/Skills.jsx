import { motion } from "framer-motion";

import {
  FaLinux,
  FaWindows,
  FaServer,
  FaTerminal,
  FaTasks,
  FaClipboardList,
  FaFileContract,
  FaTicketAlt,
  FaSearch,
  FaDatabase,
  FaHeadset
} from "react-icons/fa";
import {
  SiOracle,
  SiMysql,
  SiSplunk,
  SiDynatrace,
  SiApachetomcat
} from "react-icons/si";

const skillBoxes = [
  {
    title: "Operating Systems",
    items: [
      { name: "Linux", icon: FaLinux, color: "#fcc624" },
      { name: "UNIX", icon: FaServer, color: "#8892bf" },
      { name: "Windows", icon: FaWindows, color: "#00a4ef" }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "MSSQL", icon: FaDatabase, color: "#cc2927" },
      { name: "PL/SQL", icon: SiOracle, color: "#f80000" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" }
    ]
  },
  {
    title: "Ticketing / ITSM Tools",
    items: [
      { name: "ServiceNow", icon: FaHeadset, color: "#81b5a1" }
    ]
  },
  {
    title: "Job Scheduling & Batch Monitoring",
    items: [
      { name: "Control-M", icon: FaTasks, color: "#f26522" }
    ]
  },
  {
    title: "Monitoring Tools",
    items: [
      { name: "Splunk", icon: SiSplunk, color: "#000000" },
      { name: "Dynatrace", icon: SiDynatrace, color: "#1496ff" }
    ]
  },
  {
    title: "Application Server",
    items: [
      { name: "Apache Tomcat", icon: SiApachetomcat, color: "#f8dc75" }
    ]
  },
  {
    title: "Remote Access Tools",
    items: [
      { name: "PuTTY", icon: FaTerminal, color: "#60a5fa" }
    ]
  },
  {
    title: "Processes",
    items: [
      { name: "ITIL", icon: FaClipboardList, color: "#38bdf8" },
      { name: "Incident Management", icon: FaTicketAlt, color: "#f87171" },
      { name: "Problem Management", icon: FaSearch, color: "#a78bfa" },
      { name: "Change Management", icon: FaClipboardList, color: "#34d399" },
      { name: "SLA Management", icon: FaFileContract, color: "#fbbf24" },
      { name: "Service Request Management", icon: FaTicketAlt, color: "#f472b6" },
      { name: "RCA", icon: FaSearch, color: "#38bdf8" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-subtitle">Technical Skills</p>
      <h2 className="section-title">The technologies, tools, and platforms I use to support, monitor, and maintain enterprise applications</h2>

      <div className="skills-grid">
        {skillBoxes.map((box) => (
          <motion.div
            key={box.title}
            className="card skill-box"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="skill-box-title">{box.title}</h3>

            <div className="skills-icons-grid">
              {box.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-iconWrap">
                      <Icon size={26} style={{ color: skill.color }} />
                    </div>

                    <div className="skill-name">{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          .skills-grid{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
            margin-bottom: 44px;
          }

          .skill-box{
            padding: 22px 18px;
            border-radius: 18px;
            max-width: 100%;
            overflow: hidden;
          }

          .skill-box-title{
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 16px;
            word-break: break-word;
          }

          .skills-icons-grid{
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;
          }

          .skill-item{
            text-align: center;
            padding: 12px 10px;
            border-radius: 16px;
            border: 1px solid rgba(148,163,184,0.22);
            background: rgba(255,255,255,0.04);
            min-width: 0;
          }

          .skill-iconWrap{
            width: 46px;
            height: 46px;
            margin: 0 auto 8px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            background: rgba(255,255,255,0.06);
          }

          .skill-name{
            font-size: 12.5px;
            font-weight: 700;
            color: var(--text);
            word-break: break-word;
          }

          @media (max-width: 980px){
            .skills-grid{
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 520px){
            .skills-icons-grid{
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
        `}
      </style>
    </section>
  );
}