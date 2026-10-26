// CT-PT Chapter 5 — Section 4 (questions)
const OFF = (n) => `OFFICIAL · Sample Exam #${n}`;
const HEALTH = "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–3 are the **official ISTQB CT-PT Sample Exam questions for Chapter 5** — questions #38, #39 and #40, the last three on the paper — reproduced with their official correct answers and rationale. Questions 4–10 are additional items derived strictly from the syllabus text, in the same style and difficulty. Correct options are marked ✔ — cover the green box and self-test first." });

  B.push({ h2: "Part A — The 3 official Chapter 5 questions" });

  B.push({ q: { n: 1, tag: OFF(38), meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["d"],
    stem: "What is the purpose of a load generator tool?",
    opts: [
      "It creates a load on the network to allow testing for collisions",
      "It maintains a load on the user interface to accurately mimic user response time",
      "It feeds data to the dashboard showing how the system is responding to the load",
      "It simulates user behavior according to the operational profiles",
    ],
    why: "**(d) This is what a load generator tool does.** (a) is **a network analysis tool**. (b) **might be a browser testing tool or might not exist**. (c) is **a monitoring tool**. The syllabus definition: **the generator, through an IDE, script editor or tool suite, is able to create and execute multiple client instances that simulate user behavior according to a defined operational profile** — and **the generator creates the load and also collects metrics for later reporting**." } });

  B.push({ q: { n: 2, tag: OFF(39), meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["a"],
    stem: "What is a pay-as-you-go tool?",
    opts: [
      "A tool with a licensing agreement that requires you to pay only for the number of virtual users and instances that you actually use",
      "A server-based tool that provides you with full ownership of the tool for your usage",
      "A monitoring tool that populates the dashboard with pertinent metrics based on what you have paid to monitor",
      "A tool that provides the ability to test from multiple points of presence for load generation",
    ],
    why: "**(a) This is the description of a pay-as-you-go tool. These are often cloud-based tools but not all cloud-based tools are pay-as-you-go.** (b), (c) and (d) **are not correct as these are not descriptions of pay-as-you-go tools** — (b) describes the **traditional seat/site based licence with full ownership**, (c) describes a **monitoring tool**, and (d) describes **points of presence**, a **scalability** consideration." } });

  B.push({ q: { n: 3, tag: OFF(40) + " · K4", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["c"],
    scenario: HEALTH + "\n\nYou have a technical team conducting the performance tests and they are comfortable with programming the performance test scripts for re-usability and maintainability. You are now looking for a tool to use for this testing. You have found one that is compatible with your environment and will be able to generate a load via the protocols in use. The team has looked at it and they are comfortable that they can code in the tool and will be able to create their scripts with little training.\n\nBecause there are many stakeholders for this testing, you have verified that the tool provides excellent monitoring and reporting capabilities. You have verified with the various system administrators that they are comfortable with the tool and happy to use its monitoring capabilities in addition to their own tools during the testing.",
    stem: "What do you still need to verify before selecting this tool?",
    opts: [
      "The project schedule",
      "The availability of a record/playback capability for your testers to use",
      "The ability of the tool to meet your requirements for concurrent virtual users",
      "The ease with which your team can code the required performance scripts",
    ],
    why: "**(c) At this point you know that your testers are able to code what is needed (which eliminates b and d). The project schedule is not really a factor because any tool will take time to acquire and integrate, but the developers can code in it, so that's the main schedule factor. What you need to know is can this tool simulate the necessary number of virtual users and, of course, how much will it cost.** The scenario has already settled **compatibility** (environment and protocols), **understandability** (the team can code with little training) and **monitoring** (excellent capabilities, administrators satisfied). **The only one of the four selection factors left unaddressed is scalability.**" } });

  B.push({ pagebreak: true });
  B.push({ h2: "Part B — 7 additional syllabus-derived questions" });

  // ---- PTFL-5.1.1 ----
  B.push({ q: { n: 4, tag: "Tool separation", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["b"],
    stem: "Which tool provides the control to start and stop the load generators, and aggregates metrics from the various transactions defined within the load instances?",
    opts: ["The load generator", "The load management console", "The monitoring tool", "The log analysis tool"],
    why: "**The load management console.** The syllabus adds that **the console enables reports and graphs from the test executions to be viewed and supports results analysis**. The **load generator** creates the load and collects its own metrics; the **monitoring tool** supervises the SUT; and the **log analysis tool** (from **PTFL-2.3.1**) scans server logs." } });









  B.push({ q: { n: 5, tag: "Licence", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["c"],
    stem: "Which three licence models does the syllabus name for performance test tools?",
    opts: [
      "Perpetual, subscription and freemium",
      "Per-transaction, per-protocol and per-environment",
      "Traditional seat/site based with full ownership, cloud-based pay-as-you-go, and open source",
      "Enterprise, departmental and academic",
    ],
    why: "\"_License models for performance test tools include **the traditional seat/site based license with full ownership**, **a cloud-based pay-as-you-go license model**, and **open source licenses which are free to use in a defined environment or through cloud-based offerings**. **Each model implies a different cost structure and may include ongoing maintenance.**_\"" } });





  B.push({ q: { n: 6, tag: "Application", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["b"],
    scenario: "A tester needs a component that will read the transaction timings produced by twelve running load instances, present them as graphs, and let the test lead halt the run early if errors spike.",
    stem: "Which tool type is being described?",
    opts: ["Load generator", "Load management console", "Monitoring tool", "Log analysis tool"],
    why: "**The load management console** — it **provides the control to start and stop the load generator(s)**, **aggregates metrics from the various transactions that are defined within the load instances used by the generator**, and **enables reports and graphs from the test executions to be viewed and supports results analysis**. The ability to halt or adjust a run mid-flight is also described in **PTFL-4.3.1**: tools **provide a console to enable performance data to be monitored during the test and permit necessary adjustments to be made**." } });





  // ---- PTFL-5.2.1 ----


  B.push({ q: { n: 7, tag: "Recall · factors", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["d"],
    stem: "Which four factors does the syllabus say should be considered when selecting a performance testing tool?",
    opts: [
      "Cost, vendor reputation, support and training",
      "Protocols, licences, scripts and reports",
      "Planning, analysis, execution and reporting",
      "Compatibility, scalability, understandability and monitoring",
    ],
    why: "The four factors are exactly those in (d). **Compatibility** breaks down into **protocols · interfaces to external components · platforms**; **scalability** into **maximum licences · load generation workstation/server configuration · multiple points of presence**; **understandability** is about **the level of technical knowledge needed**; and **monitoring** poses **three questions** about sufficiency, supplementation and correlation to defined transactions." } });











  B.push({ q: { n: 8, tag: "Tricky", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["c"],
    stem: "What advantage does the syllabus attach to monitoring that is a separate program, tool set or whole stack?",
    opts: [
      "It removes the need for a load management console",
      "It guarantees the monitoring will be correlated to defined transactions",
      "It can be used to monitor the production environment when the product is released",
      "It eliminates the probe effect",
    ],
    why: "\"_**When monitoring is a separate program/tools/whole stack then it can be used to monitor production environment when the product is released.**_\" The same idea appears in **§5.1** (monitoring tools **may also be used to monitor a production environment when the product is released**) and in **PTFL-2.3.1** (monitoring tools **monitor system performance on an ongoing basis and alert system administrators**)." } });

  B.push({ q: { n: 9, tag: "K4 · elimination", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["b"],
    scenario: "A team has confirmed that the candidate tool supports every protocol the system uses, integrates with their CI pipeline, runs on their standard platforms, and can simulate three times the peak concurrent users they will need from three points of presence. The tool's own monitoring is thin, but the operations team already runs a full observability stack.",
    stem: "Which of the four selection factors still needs work?",
    opts: [
      "Compatibility",
      "Monitoring — specifically, whether the supplementary tools can be correlated to the defined transactions",
      "Scalability",
      "None; the tool can be selected as is",
    ],
    why: "Compatibility (**protocols, interfaces, platforms**) and scalability (**concurrent user simulations, points of presence**) are both settled. Understandability is not raised. **Monitoring is partly settled** — the second question, **are there other monitoring tools available in the environment that can be used to supplement the monitoring by the tool**, is answered — but the third, **can the monitoring be correlated to the defined transactions**, is not. **All of these questions must be answered.**" } });

  B.push({ q: { n: 10, tag: "K4 · non-factors", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["d"],
    stem: "In the official tool-selection question, why are \"the project schedule\" and \"the availability of a record/playback capability\" rejected?",
    opts: [
      "Because both are covered by the compatibility factor",
      "Because both are covered by the monitoring factor",
      "Because both are licence considerations rather than tool considerations",
      "Because neither is one of the four selection factors — and the rationale notes that any tool will take time to acquire and integrate, while the team can already code, so record/playback is not needed",
    ],
    why: "The official rationale: **at this point you know that your testers are able to code what is needed (which eliminates b and d). The project schedule is not really a factor because any tool will take time to acquire and integrate, but the developers can code in it, so that's the main schedule factor.** The four factors are **compatibility, scalability, understandability and monitoring** — schedule and record/playback are neither." } });

  B.push({ pagebreak: true });
  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: the ISTQB Exam Structure Table gives Chapter 5 **two questions to PTFL-5.1 and one to PTFL-5.2**. Both objectives are guaranteed. Chapter 5 is small but very cheap — three marks that rest on two short lists and one elimination pattern." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "The three tool types, separated by verb — Q1, Q4, Q6", "PTFL-5.1.1", "**One of the two guaranteed PTFL-5.1 marks.** Decided entirely by matching **simulate / control and report / supervise** to the right tool."],
    ["2", "The three licence models, and what pay-as-you-go means — Q2, Q5", "PTFL-5.1.1", "**The other guaranteed PTFL-5.1 mark.** Note that **not all cloud-based tools are pay-as-you-go**."],
    ["3", "The four selection factors and the elimination pattern — Q3, Q7, Q9, Q10", "PTFL-5.2.1", "**1 guaranteed K4 mark**, the last on the paper. Tick off what the scenario settles; the remaining factor is the answer."],
    ["4", "Separate-vs-integrated monitoring, and the compatibility / scalability / understandability detail — Q8", "PTFL-5.2.1", "Supporting detail that turns the elimination from a guess into a certainty."],
  ] } });

  return B;
};
