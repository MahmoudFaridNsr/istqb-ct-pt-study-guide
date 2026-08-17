// CT-PT Chapter 5 — Section 4 (questions)
const OFF = (n) => `OFFICIAL · Sample Exam #${n}`;
const HEALTH = "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–3 are the **official ISTQB CT-PT Sample Exam questions for Chapter 5** — questions #38, #39 and #40, the last three on the paper — reproduced with their official correct answers and rationale. Questions 4–24 are additional items derived strictly from the syllabus text, in the same style and difficulty. Correct options are marked ✔ — cover the green box and self-test first." });

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
  B.push({ h2: "Part B — 21 additional syllabus-derived questions" });

  // ---- PTFL-5.1.1 ----
  B.push({ q: { n: 4, tag: "Tool separation", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["b"],
    stem: "Which tool provides the control to start and stop the load generators, and aggregates metrics from the various transactions defined within the load instances?",
    opts: ["The load generator", "The load management console", "The monitoring tool", "The log analysis tool"],
    why: "**The load management console.** The syllabus adds that **the console enables reports and graphs from the test executions to be viewed and supports results analysis**. The **load generator** creates the load and collects its own metrics; the **monitoring tool** supervises the SUT; and the **log analysis tool** (from **PTFL-2.3.1**) scans server logs." } });

  B.push({ q: { n: 5, tag: "Definition", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["c"],
    stem: "Which components does the syllabus give as typical examples of what a monitoring tool monitors?",
    opts: [
      "Virtual users, scripts and scenarios",
      "Operational profiles and load profiles",
      "Web server queues, system memory and disk space",
      "Protocols, interfaces and platforms",
    ],
    why: "\"_**Typical components which are monitored include web server queues, system memory and disk space.**_\" Monitoring tools **run concurrently with the component or system under test and supervise, record and/or analyze the behavior of the component or system**, and they **can effectively support the root cause analysis of performance degradation**. Option (d) lists the three **compatibility** sub-factors from §5.2." } });

  B.push({ q: { n: 6, tag: "Tricky", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["a"],
    stem: "According to the syllabus, what may monitoring tools be used to monitor besides the system under test?",
    opts: [
      "A production environment when the product is released, and the load generator itself during test execution",
      "Only the network switches between the tiers",
      "Only the database server, since that is where bottlenecks arise",
      "Nothing else — monitors are restricted to the SUT",
    ],
    why: "Both extensions are in the syllabus: monitoring tools **may also be used to monitor a production environment when the product is released**, and **during performance test execution monitors may also be used on the load generator itself**. The second point mirrors **PTFL-4.2.8**: **machines involved in load generation should be monitored too**." } });

  B.push({ q: { n: 7, tag: "Recall · realism", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["d"],
    stem: "What is the stated objective of the load generator when executing performance tests, and what does that imply?",
    opts: [
      "To reach the maximum possible load, which implies running all generators on one machine",
      "To minimise the probe effect, which implies collecting as few metrics as possible",
      "To bypass the UI, which implies protocol-level scripting only",
      "To mimic the real world as much as is practical, which often means user requests coming from various locations are needed, not just from the testing location",
    ],
    why: "\"_When executing performance tests **the objective of the load generator is to mimic the real world as much as is practical**. This often means that **user requests coming from various locations are needed, not just from the testing location**._\" This is the rationale for **multiple points of presence**." } });

  B.push({ q: { n: 8, tag: "Tricky · trade-off", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["b"],
    stem: "What does the syllabus say about environments set up with multiple points of presence?",
    opts: [
      "They eliminate all network-related variability from the results",
      "They distribute where the load is originating from so that it is not all coming from a single network, providing realism — though they can sometimes skew results if intermediate network hops create delays",
      "They are required by all licence models",
      "They remove the need for network emulation on mobile projects",
    ],
    why: "The syllabus gives both halves — the benefit and the caveat — in one sentence pair. Note the contrast with **PTFL-4.2.8**, where **network emulation remains the most viable option for mobile systems due to the variances in the network types that can be used**, while for **global systems** one approach is to **deploy load generators in places where users are located**." } });

  B.push({ q: { n: 9, tag: "Licence", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["c"],
    stem: "Which three licence models does the syllabus name for performance test tools?",
    opts: [
      "Perpetual, subscription and freemium",
      "Per-transaction, per-protocol and per-environment",
      "Traditional seat/site based with full ownership, cloud-based pay-as-you-go, and open source",
      "Enterprise, departmental and academic",
    ],
    why: "\"_License models for performance test tools include **the traditional seat/site based license with full ownership**, **a cloud-based pay-as-you-go license model**, and **open source licenses which are free to use in a defined environment or through cloud-based offerings**. **Each model implies a different cost structure and may include ongoing maintenance.**_\"" } });

  B.push({ q: { n: 10, tag: "Tricky · licence", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["a"],
    stem: "Which statement about pay-as-you-go tools matches the official rationale?",
    opts: [
      "They are often cloud-based tools, but not all cloud-based tools are pay-as-you-go",
      "All cloud-based tools are pay-as-you-go by definition",
      "Pay-as-you-go tools are always open source",
      "Pay-as-you-go tools cannot generate load from multiple points of presence",
    ],
    why: "The official rationale for question #39 states exactly this: **these are often cloud-based tools but not all cloud-based tools are pay-as-you-go**. It is a small distinction, and precisely the kind of qualifier the exam uses to build distractors." } });

  B.push({ q: { n: 11, tag: "Recall", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["d"],
    stem: "What does the syllabus say is true of any tool selected, regardless of licence model?",
    opts: [
      "It will require a dedicated administrator",
      "It will need a cloud-based environment",
      "It will support at least Layers 5 to 7 of the OSI model",
      "Understanding how that tool works, through training and/or self-study, will require time and budget",
    ],
    why: "\"_**What is clear is that for any tool selected, understanding how that tool works (through training and/or self-study) will require time and budget.**_\" This is the bridge to the **understandability** selection factor, where the syllabus warns that the level of technical knowledge needed **is often overlooked and can lead to unskilled testers incorrectly configuring tests, which in turn provide inaccurate results**." } });

  B.push({ q: { n: 12, tag: "Application", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["b"],
    scenario: "A tester needs a component that will read the transaction timings produced by twelve running load instances, present them as graphs, and let the test lead halt the run early if errors spike.",
    stem: "Which tool type is being described?",
    opts: ["Load generator", "Load management console", "Monitoring tool", "Log analysis tool"],
    why: "**The load management console** — it **provides the control to start and stop the load generator(s)**, **aggregates metrics from the various transactions that are defined within the load instances used by the generator**, and **enables reports and graphs from the test executions to be viewed and supports results analysis**. The ability to halt or adjust a run mid-flight is also described in **PTFL-4.3.1**: tools **provide a console to enable performance data to be monitored during the test and permit necessary adjustments to be made**." } });

  B.push({ q: { n: 13, tag: "Application", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["c"],
    scenario: "After a load test shows degraded response times, the team wants to establish which resource ran out first, and then keep the same instrumentation running once the system goes live.",
    stem: "Which tool type serves both needs?",
    opts: ["Load generator", "Load management console", "Monitoring tool", "Script editor"],
    why: "**Monitoring tools** **can effectively support the root cause analysis of performance degradation in a system under test** and **may also be used to monitor a production environment when the product is released**. The **monitoring** selection factor in §5.2 makes the same point from the other direction: **when monitoring is a separate program / tools / whole stack then it can be used to monitor production environment when the product is released**." } });

  B.push({ q: { n: 14, tag: "Recall", meta: "LO: PTFL-5.1.1 (K2) | Syllabus §5.1", correct: ["a"],
    stem: "Through what does the load generator create and execute multiple client instances?",
    opts: [
      "An IDE, script editor or tool suite",
      "The load management console only",
      "A monitoring dashboard",
      "The server's administration interface",
    ],
    why: "\"_The generator, **through an IDE, script editor or tool suite**, is able to **create and execute multiple client instances that simulate user behavior according to a defined operational profile**._\" The same tooling appears in **PTFL-4.2.7**: **a performance script is created using an Integrated Development Environment (IDE) or script editor**." } });

  // ---- PTFL-5.2.1 ----
  B.push({ q: { n: 15, tag: "Framing", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["b"],
    stem: "What framing does the syllabus give for tool selection?",
    opts: [
      "A tool is selected for a project and replaced at each new project",
      "In general a tool is selected for the organization and not only for a project",
      "A tool is selected by the vendor based on the protocols in use",
      "A tool is selected by the system administrators who will monitor production",
    ],
    why: "\"_**In general a tool is selected for the organization and not only for a project.** This means considering the following factors in the organization…_\" This framing opens the **compatibility** factor and explains why **platforms and their versions within an organization** matter, not just the current project's stack." } });

  B.push({ q: { n: 16, tag: "Recall · factors", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["d"],
    stem: "Which four factors does the syllabus say should be considered when selecting a performance testing tool?",
    opts: [
      "Cost, vendor reputation, support and training",
      "Protocols, licences, scripts and reports",
      "Planning, analysis, execution and reporting",
      "Compatibility, scalability, understandability and monitoring",
    ],
    why: "The four factors are exactly those in (d). **Compatibility** breaks down into **protocols · interfaces to external components · platforms**; **scalability** into **maximum licences · load generation workstation/server configuration · multiple points of presence**; **understandability** is about **the level of technical knowledge needed**; and **monitoring** poses **three questions** about sufficiency, supplementation and correlation to defined transactions." } });

  B.push({ q: { n: 17, tag: "Compatibility", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["a"],
    stem: "Under the compatibility factor, what does the syllabus say about interfaces to external components?",
    opts: [
      "Interfaces to software components or other tools may need to be considered as part of the complete integration requirements to meet process or other inter-operability requirements, for example integration in the CI process",
      "External interfaces are always out of scope for tool selection",
      "Only database interfaces matter, since that is where the load lands",
      "Interfaces should be replaced by stubs during tool evaluation",
    ],
    why: "That is the syllabus wording, and **integration in the CI process** is its own example — connecting to **PTFL-3.4.1**, where CI performance testing needs **environments available on demand** and **the ability to select subsets of applicable tests**. Option (d) confuses tool selection with **service virtualization** from **PTFL-4.2.8**." } });

  B.push({ q: { n: 18, tag: "Compatibility", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["c"],
    stem: "Which platforms must the tool be compatible with, according to the syllabus?",
    opts: [
      "Only the platform hosting the system under test",
      "Only the tester's workstation platform",
      "The platforms used to host the tools and the platforms with which the tools interact for monitoring and/or load generation — and their versions",
      "Only cloud platforms, since testing is increasingly cloud-based",
    ],
    why: "\"_**Compatibility with the platforms (and their versions) within an organization is essential.** **This applies to the platforms used to host the tools and the platforms with which the tools interact for monitoring and/or load generation.**_\" Both directions matter, and **versions** are explicitly named." } });

  B.push({ q: { n: 19, tag: "Scalability", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["b"],
    stem: "Which of the following is one of the three considerations the syllabus lists under scalability?",
    opts: [
      "The number of protocols supported by the tool",
      "The ability to generate load from multiple points of presence, for example distributed servers",
      "The level of technical knowledge needed to use the tool",
      "Whether the monitoring can be correlated to defined transactions",
    ],
    why: "Scalability is framed as **the total number of concurrent user simulations the tool can handle**, and includes **the maximum number of licenses required**, **load generation workstation/server configuration requirements**, and **the ability to generate load from multiple points of presence (e.g., distributed servers)**. Option (a) belongs to **compatibility**, (c) to **understandability**, and (d) to **monitoring**." } });

  B.push({ q: { n: 20, tag: "Understandability", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["d"],
    stem: "What consequence does the syllabus attach to overlooking the level of technical knowledge needed to use a tool?",
    opts: [
      "The licence cost will be underestimated",
      "The tool will be incompatible with the CI process",
      "The load generators will not be monitored",
      "It can lead to unskilled testers incorrectly configuring tests, which in turn provide inaccurate results",
    ],
    why: "\"_Another factor to consider is **the level of technical knowledge needed to use the tool**. **This is often overlooked and can lead to unskilled testers incorrectly configuring tests, which in turn provide inaccurate results.**_\" The syllabus adds: **for testing requiring complex scenarios and a high level of programmability and customization, teams should ensure that the tester has the necessary skills, background, and training.**" } });

  B.push({ q: { n: 21, tag: "Monitoring", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["a"],
    stem: "Which of the following is one of the three monitoring questions the syllabus says must be answered?",
    opts: [
      "Can the monitoring be correlated to the defined transactions?",
      "Does the tool support at least three protocol groups?",
      "Is the licence model pay-as-you-go?",
      "Can the tool generate load from at least two points of presence?",
    ],
    why: "The three monitoring questions are: **is the monitoring provided by the tool sufficient?** · **are there other monitoring tools available in the environment that can be used to supplement the monitoring by the tool?** · **can the monitoring be correlated to the defined transactions?** \"_**All of these questions must be answered to determine if the tool will provide the monitoring required by the project.**_\"" } });

  B.push({ q: { n: 22, tag: "Tricky", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["c"],
    stem: "What advantage does the syllabus attach to monitoring that is a separate program, tool set or whole stack?",
    opts: [
      "It removes the need for a load management console",
      "It guarantees the monitoring will be correlated to defined transactions",
      "It can be used to monitor the production environment when the product is released",
      "It eliminates the probe effect",
    ],
    why: "\"_**When monitoring is a separate program/tools/whole stack then it can be used to monitor production environment when the product is released.**_\" The same idea appears in **§5.1** (monitoring tools **may also be used to monitor a production environment when the product is released**) and in **PTFL-2.3.1** (monitoring tools **monitor system performance on an ongoing basis and alert system administrators**)." } });

  B.push({ q: { n: 23, tag: "K4 · elimination", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["b"],
    scenario: "A team has confirmed that the candidate tool supports every protocol the system uses, integrates with their CI pipeline, runs on their standard platforms, and can simulate three times the peak concurrent users they will need from three points of presence. The tool's own monitoring is thin, but the operations team already runs a full observability stack.",
    stem: "Which of the four selection factors still needs work?",
    opts: [
      "Compatibility",
      "Monitoring — specifically, whether the supplementary tools can be correlated to the defined transactions",
      "Scalability",
      "None; the tool can be selected as is",
    ],
    why: "Compatibility (**protocols, interfaces, platforms**) and scalability (**concurrent user simulations, points of presence**) are both settled. Understandability is not raised. **Monitoring is partly settled** — the second question, **are there other monitoring tools available in the environment that can be used to supplement the monitoring by the tool**, is answered — but the third, **can the monitoring be correlated to the defined transactions**, is not. **All of these questions must be answered.**" } });

  B.push({ q: { n: 24, tag: "K4 · non-factors", meta: "LO: PTFL-5.2.1 (K4) | Syllabus §5.2", correct: ["d"],
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
    ["1", "The three tool types, separated by verb — Q1, Q4, Q5, Q6, Q12, Q13, Q14", "PTFL-5.1.1", "**One of the two guaranteed PTFL-5.1 marks.** Decided entirely by matching **simulate / control and report / supervise** to the right tool."],
    ["2", "The three licence models, and what pay-as-you-go means — Q2, Q9, Q10, Q11", "PTFL-5.1.1", "**The other guaranteed PTFL-5.1 mark.** Note that **not all cloud-based tools are pay-as-you-go**."],
    ["3", "The four selection factors and the elimination pattern — Q3, Q16, Q23, Q24", "PTFL-5.2.1", "**1 guaranteed K4 mark**, the last on the paper. Tick off what the scenario settles; the remaining factor is the answer."],
    ["4", "Compatibility, scalability, understandability and monitoring in detail — Q15, Q17–Q22", "PTFL-5.2.1", "Supporting detail that turns the elimination from a guess into a certainty."],
    ["5", "Points of presence — realism and its caveat — Q7, Q8", "PTFL-5.1.1", "Appears in **§5.1**, in the **PTP Test Tools** section, and as a **scalability** consideration — three chances to be tested on it."],
  ] } });

  return B;
};
