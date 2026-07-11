export default function About() {
  return (
    <section id="about">
      <p className="section-subtitle">About me</p>
      <h2 className="section-title">A Quick Introduction</h2>

      <div className="card about-card">
        <p className="about-text">
I work as an Application Support Engineer in the banking domain. My role involves monitoring applications, resolving production issues, and focus on keeping systems stable and available. I have experience with SQL, Linux, Control-M, ServiceNow, Dynatrace, and Splunk. I like learning new technologies and improving my technical skills. My goal is to deliver reliable support and contribute to business success.        </p>

      
     
      </div>

      <style>
        {`
          .about-card{
            max-width: 980px;
            margin: 0 auto;
          }

          .about-text{
            font-size: 17px;
            color: var(--text);
            margin-bottom: 16px;
            line-height: 1.8;
          }

          .about-text-last{
            margin-bottom: 0;
          }

          @media (max-width: 900px){
            .about-card{
              max-width: 100%;
            }
            .about-text{
              font-size: 16px;
            }
          }

          @media (max-width: 600px){
            .about-text{
              font-size: 15px;
              text-align: left;
            }
          }
        `}
      </style>
    </section>
  );
}
