"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { Zoom, Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <Zoom triggerOnce cascade damping={0.2}>
        <SectionHeading>About Me</SectionHeading>
      </Zoom>

      <Fade
        direction="up"
        triggerOnce
        delay={500} // milliseconds
        cascade
        damping={0.1}
      >
        <p className="text-gray-700 dark:text-white/80 mt-6 text-justify">
          Full-Stack Software Engineer with 3+ years of experience developing scalable, high-performance
          web and enterprise applications in insurance, fintech, and enterprise domains. Proficient in C#,
          .NET, Python, Node.js, React, TypeScript, and JavaScript, with expertise in designing RESTful APIs,
           implementing microservices, and optimizing backend systems. Skilled in deploying cloud-native
           solutions on AWS and GCP, leveraging Kubernetes, Cloud Functions, and CI/CD pipelines for
           continuous delivery and deployment. Experienced in Agile environments, mentoring junior
           engineers, and driving collaboration across teams. Adept at leveraging AI/ML technologies
           to enhance automation, and data-driven decision-making, while delivering secure, user-focused
           applications that create measurable business impact.
        </p>
      </Fade>
    </section>
  );
}