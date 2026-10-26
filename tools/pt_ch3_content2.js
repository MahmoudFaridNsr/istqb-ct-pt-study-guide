// CT-PT Chapter 3 — Section 4 (questions)
const OFF = (n) => `OFFICIAL · Sample Exam #${n}`;
const HEALTH = "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–7 are the **official ISTQB CT-PT Sample Exam questions for Chapter 3** — questions #11 to #17 — reproduced with their official correct answers and rationale. Questions 8–20 are additional items derived strictly from the syllabus text, in the same style and difficulty. Correct options are marked ✔ — cover the green box and self-test first." });

  B.push({ h2: "Part A — The 7 official Chapter 3 questions" });

  B.push({ q: { n: 1, tag: OFF(11), meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["a"],
    stem: "When applying the principal performance testing activities, when should risk identification and analysis occur?",
    opts: ["Test planning", "Test analysis and design", "Test implementation and execution", "Test closure"],
    why: "**(a) Risk identification and analysis is done at the test planning stage. This information is then used for the analysis and design of the tests.** (b), (c) and (d) are incorrect because **this is too late in the process**. The syllabus places this explicitly: \"_**During test planning, risk identification and risk analysis activities are completed** and relevant information is updated in any test planning documentation (e.g., test plan, level test plan)._\"" } });

  B.push({ q: { n: 2, tag: OFF(12), meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["c"],
    stem: "When applying the principal performance testing activities, when should the test cases be ordered into performance test procedures?",
    opts: ["Test planning", "Test analysis and design", "Test implementation and execution", "Test closure"],
    why: "**(c) This should occur during the test implementation and execution activities.** (a) and (b) are incorrect because **this is when the test cases are planned and designed**. (d) is incorrect because **this is too late**. The syllabus wording is: \"_In the **implementation phase**, **performance test cases are ordered into performance test procedures**. These performance test procedures should **reflect the steps normally taken by the user** and other functional activities that are to be covered during performance testing._\"" } });

  B.push({ q: { n: 3, tag: OFF(13) + " · multiple selection", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["b"],
    scenario: "Consider the following technical environments: **1.** Single computer · **2.** Multi-tier system · **3.** Distributed · **4.** Virtualized · **5.** Dynamic/Cloud-based · **6.** Client/Server and Browser-based · **7.** Mobile · **8.** Embedded · **9.** Mainframe",
    stem: "Which of these is most likely to have a performance risk due to connectivity issues?",
    opts: ["2, 3", "7, 8", "5, 6, 7, 9", "2, 4, 5, 8"],
    why: "**(b) 7 and 8 — mobile and embedded.** The official rationale: **mobile and embedded environments are particularly prone to connectivity issues, particularly when embedded software is used in the IoT devices**. (a) and (d) are incorrect because **these environments are not prone to connection dropping**. (c) is incorrect because **other than #7, the other environments are not prone to connection dropping**. The syllabus text supports this directly: mobile applications face **limited and variable resources and connectivity**, and embedded real-time systems have **many of the risks of mobile devices, including (increasingly) connectivity-related issues since these devices are connected to the Internet**." } });

  B.push({ q: { n: 4, tag: OFF(14) + " · multiple selection", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["d"],
    scenario: "Consider the following technical environments: **1.** Virtualized · **2.** Dynamic/Cloud-based · **3.** Client/Server and Browser-based · **4.** Mobile · **5.** Embedded · **6.** Mainframe",
    stem: "Which of these is most likely to have a performance risk due to memory leaks?",
    opts: ["1, 2, 3, 6", "2, 3, 4, 5", "1, 2, 4, 6", "1, 3, 4, 5"],
    why: "**(d) 1, 3, 4, 5 — virtualized, client/server and browser-based, mobile, embedded.** The official rationale gives a reason per environment: **the virtualized environment uses shared resources across different applications, including memory**. **The dynamic/cloud-based environment is designed to dynamically scale, so while memory leaks may occur, they are less of a risk because the environment will scale to compensate.** **Client/Server and browser-based environments are prone to memory leaks, particularly since a lot of this code is written in C and C++.** **Mobile environments are prone to leakage and are particularly at risk due to the limited available memory. The same is true of the embedded environments (and these also tend to be written in languages that have less protection against leaks).** **Mainframes tend to run older code, often written in the higher level languages that provide their own memory management.**" } });

  B.push({ q: { n: 5, tag: OFF(15), meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["a"],
    stem: "If performance testing is being conducted for software that is written in C++, what do you need to monitor that wouldn't be a concern if the software was written in Python?",
    opts: ["Memory use", "Network latency", "Connectivity", "Batch processing"],
    why: "**(a) C and C++ require the programmer to do their own memory management, which sometimes results in memory leaks (where memory is allocated, but not de-allocated).** (b), (c) and (d) **would have the same issues regardless of the language used.** The syllabus supports this in its closing paragraph on non-architectural technical decisions: **memory leaks are more common with languages that allow direct heap memory management, such as C and C++**." } });

  B.push({ q: { n: 6, tag: OFF(16) + " · K4 scenario", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["d"],
    scenario: HEALTH,
    stem: "Given this information, when is the best time in the project to analyze and assess the performance risks?",
    opts: [
      "During the requirements phase and again just prior to executing the performance tests",
      "After design but prior to coding",
      "During system testing and again prior to the performance tests",
      "Repeatedly throughout the requirements, development and performance testing",
    ],
    why: "**(d) Since performance is critical, the risks must be analyzed as early as possible and then repeatedly as the system is assembled since risks may change both in impact and likelihood.** (a) is not correct because **it ignores looking at the risks during development**. (b) is not correct because **it leaves out the requirements and development and at the completion of development**. (c) is not correct because **it leaves out the requirements and development options for analysis**. The syllabus principle: the risk analysis process must be **started early and repeated regularly**, with **an iterative approach to performance risk identification, assessment, mitigation, and management throughout the software development lifecycle**." } });

  B.push({ q: { n: 7, tag: OFF(17) + " · K4 scenario", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["c"],
    scenario: HEALTH,
    stem: "What is the best way to address the performance testing for the response time?",
    opts: [
      "Test from the UI with the full data set loaded to ensure the response time will be adequate when the database is loaded",
      "Test via the web services at the API level to ensure access to the data is fast enough without having the testing complicated by the UI",
      "Conduct a technical review of the database implementation and conduct a performance test from the UI with the full database loaded",
      "Conduct a network assessment to ensure there are no latency issues between the database server and the web servers, then test with a network scanner to ensure no collisions are occurring that might cause performance delays",
    ],
    why: "**(c) The best way to do the testing is to first do a technical analysis because this can be done at design time. Once implemented, full testing will be needed to verify that the solution does indeed deliver the performance required.** (a) is not correct because **this leaves out the static testing**. (b) is not correct because **this would bypass any issues that might occur at the UI end and doesn't consider the database loading**. (d) is not correct because **the network is less likely an issue regarding the data handling for such a large amount of data**. **The answer pattern: pair an early static review with a later dynamic test.**" } });

  B.push({ pagebreak: true });
  B.push({ h2: "Part B — 13 additional syllabus-derived questions" });

  // ---- PTFL-3.1.1 ----


  B.push({ q: { n: 8, tag: "Activity mapping", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["c"],
    stem: "During which activity are the required type(s) of performance test — for example load, stress or scalability — decided?",
    opts: ["Test planning", "Test design", "Test analysis", "Test implementation"],
    why: "**Test analysis.** \"_Specific test conditions are identified such as **load levels, timing conditions, and transactions to be tested**. **The required type(s) of performance test (e.g., load, stress, scalability) are then decided.**_\" Test analysis is also where the **test basis** — performance requirements, test objectives, **SLAs**, **IT architecture**, **process models** — is analysed, possibly with the support of **spreadsheets or capacity planning tools**." } });

  B.push({ q: { n: 9, tag: "Activity mapping", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["a"],
    stem: "Which activity includes defining control measures to provide action plans should the infrastructure fail to generate the desired loads?",
    opts: ["Test monitoring and control", "Test planning", "Test execution", "Test completion"],
    why: "**Test monitoring and control.** The syllabus lists four such control measures: **increasing the load generation capacity if the infrastructure does not generate the desired loads as planned** · **changed, new or replaced hardware** · **changes to network components** · **changes to software implementation**. It also states that **the performance test objectives are evaluated to check for exit criteria achievement** in this activity." } });







  B.push({ q: { n: 10, tag: "Tricky", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["a"],
    stem: "Which statement best captures the syllabus's description of the nature of performance testing?",
    opts: [
      "It is iterative — information from one test corrects or optimizes application and system parameters, and the next iteration shows the results of the modifications, until test objectives are reached",
      "It is a single pass conducted once the system is complete",
      "It is a strictly sequential process that cannot revisit earlier activities",
      "It concludes when the first set of measurements is captured",
    ],
    why: "\"_Performance testing is **iterative in nature**. **Each test provides valuable insights** into application and system performance. The information gathered from one test is used to **correct or optimize application and system parameters**. The next test iteration will then **show the results of modifications**, and so on **until test objectives are reached**._\" This echoes Chapter 1's description of performance testing as **experimentation** conducted **iteratively**." } });

  // ---- PTFL-3.2.1 ----
  B.push({ q: { n: 11, tag: "Architecture risk", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["c"],
    stem: "Which performance risks does the syllabus associate specifically with virtualized systems?",
    opts: [
      "Poor or non-scalable database design and network bottlenecks",
      "Firewalls, packet inspection and server load balancing",
      "Excessive load on the hardware across all the virtual machines, and improper configuration of the host virtual machine resulting in inadequate resources",
      "Unexpected loads arriving through newly exposed APIs and web services",
    ],
    why: "Those two are the only risks the syllabus names as **arising specifically from virtualization**. (a) belongs to **multi-tier systems**, (b) to **client-server systems**, and (d) to **mainframe applications**. Note the link back to **PTFL-2.1.1**, where **background load on shared resources** is called out as **especially relevant in virtualized environments**." } });







  B.push({ q: { n: 12, tag: "Tricky · contrast", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["c"],
    stem: "How does the syllabus distinguish embedded real-time systems from mobile devices in terms of performance risk?",
    opts: [
      "Embedded systems are never connected to the Internet, so connectivity is not a risk",
      "Embedded systems have unlimited memory compared with mobile devices",
      "They share many risks including connectivity, but the diminished performance of a mobile video game is usually not a safety hazard, while such slowdowns in a vehicle braking system could prove catastrophic",
      "Embedded systems are exempt from resource utilization risks because they are purpose-built",
    ],
    why: "The syllabus says embedded real-time systems **often have many of the risks of mobile devices, including (increasingly) connectivity-related issues since these devices are connected to the Internet**, and then draws the distinction in exactly the terms of option (c). Examples given of embedded real-time systems are **cars (entertainment systems and intelligent braking systems), elevators, traffic signals and HVAC systems**." } });



  B.push({ q: { n: 13, tag: "Tricky · combination", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["d"],
    stem: "What does the syllabus say about applications that incorporate more than one of the nine architectures?",
    opts: [
      "Only the risks of the dominant architecture apply",
      "The risks cancel each other out when architectures are combined",
      "Combined architectures are outside the scope of performance testing",
      "All relevant risks will apply — and with IoT and mobile it is possible that all architectures are present in some form and thus all risks can apply",
    ],
    why: "\"_Note that **any particular application or system may incorporate two or more of the architectures listed above**, which means that **all relevant risks will apply to that application or system**. In fact, given the **Internet of Things and the explosion of mobile applications** — two areas where **extreme levels of interaction and connection is the rule** — **it is possible that all architectures are present in some form in an application, and thus all risks can apply**._\"" } });





  B.push({ q: { n: 14, tag: "Tricky · distributed", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["b"],
    stem: "What distinguishes a distributed system from a multi-tier system in the syllabus's treatment, and what extra risk follows?",
    opts: [
      "Distributed systems run on a single server; the extra risk is disk fragmentation",
      "The various servers may change dynamically; the extra risk is critical workflows or dataflows to, from, or through unreliable or unpredictable remote servers, especially with periodic connection problems or intermittent intense load",
      "Distributed systems are always virtualized; the extra risk is host misconfiguration",
      "Distributed systems are always cloud-based; the extra risk is self-scaling misconfiguration",
    ],
    why: "\"_These are systems of systems, **similar to a multi-tier architecture, but the various servers may change dynamically** — such as an e-commerce system that accesses **different inventory databases depending on the geographic location of the person placing the order**. **In addition to the risks associated with multi-tier architectures**, this architecture can experience performance problems due to **critical workflows or dataflows to, from, or through unreliable or unpredictable remote servers**, especially when such servers suffer **periodic connection problems or intermittent periods of intense load**._\"" } });

  // ---- PTFL-3.3.1 ----
  B.push({ q: { n: 15, tag: "K4 · process", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["c"],
    stem: "In the syllabus's four-step process for performance-related product quality risks, what happens at step 2?",
    opts: [
      "Risks are identified, focusing on time behavior, resource utilization and capacity",
      "Mitigation actions are taken based on the nature of the risk item and the level of risk",
      "Risks are assessed, ensuring the relevant architecture categories are addressed, and the overall level of risk is evaluated in terms of likelihood and impact using clearly defined criteria",
      "Risks are managed on an ongoing basis to ensure adequate mitigation prior to release",
    ],
    why: "The four steps are **identify → assess → mitigate → manage**, and step 2 is exactly as stated in (c). Note the explicit cross-reference: assessment must ensure **the relevant architecture categories (see Section 3.2) are addressed** — so **PTFL-3.2.1 knowledge is a prerequisite for the K4 question**." } });



  B.push({ q: { n: 16, tag: "K4 · residual risk", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["d"],
    scenario: "At the end of a performance test campaign, the test manager reports to the steering group: \"Yes, it's still possible for customers to experience long delays during check out.\"",
    stem: "Why does the syllabus consider this an inadequate statement of residual risk, and what would be better?",
    opts: [
      "It is inadequate because residual risk should never be reported to business stakeholders",
      "It is inadequate because performance risks can be eliminated completely with enough mitigation",
      "It is adequate as stated; no improvement is required",
      "It gives no idea of what amount of risk mitigation has occurred or of the level of risk that remains — providing clear insight into the percentage of customers likely to experience delays equal to or exceeding certain thresholds would help people understand the status",
    ],
    why: "This is the syllabus's own worked contrast, quoted almost verbatim. It follows from the principle that **performance-related risks can never be avoided completely** — **some risk of performance-related production failure will always exist** — so the risk management process **must include providing a realistic and specific evaluation of the residual level of risk to the business and technical stakeholders involved**." } });



  B.push({ q: { n: 17, tag: "K4 · static prediction", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["c"],
    scenario: "A system will handle large volumes of data via a relational database. The team is concerned about the slow performance of many-to-many joins caused by poor database design.",
    stem: "According to the syllabus, when would this problem typically reveal itself, and how could it be predicted earlier?",
    opts: [
      "It reveals itself during unit testing and can be predicted by profiling",
      "It reveals itself only in production and cannot be predicted",
      "It may only reveal itself during dynamic testing with large-scale test datasets such as those used during system test, but a careful technical review including experienced database engineers can predict the problems prior to database implementation",
      "It reveals itself during acceptance testing and can be predicted by crowd testing",
    ],
    why: "This is the syllabus's own worked example, and it is the reasoning that produces the official answer to question #17 — **pair an early static review with a later dynamic test**. The syllabus adds: **after such a review, in an iterative approach, risks are identified and assessed again**." } });



  // ---- PTFL-3.4.1 ----
  B.push({ q: { n: 18, tag: "K4 · sequential", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["b"],
    stem: "In a sequential development model, what does the syllabus describe as ideal practice for performance testing?",
    opts: [
      "Scheduling all performance testing into a dedicated phase after system integration testing",
      "Including performance criteria as part of the acceptance criteria defined at the outset of the project, with performance testing activities conducted throughout the lifecycle",
      "Deferring performance criteria until the acceptance testing phase, when user needs are best understood",
      "Contracting performance testing to the vendor under a supplier/acquirer model",
    ],
    why: "\"_The **ideal practice** of performance testing in sequential development models is to **include performance criteria as a part of the acceptance criteria which are defined at the outset of a project**. Reinforcing the lifecycle view of testing, **performance testing activities should be conducted throughout the software development lifecycle**. As the project progresses, **each successive performance test activity should be based on items defined in the prior activities**._\"" } });





  B.push({ q: { n: 19, tag: "Recall · Agile", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["a"],
    stem: "In Agile methodologies, where does the syllabus say the specific performance criteria are described?",
    opts: [
      "In the acceptance criteria associated with \"non-functional\" user stories",
      "In the performance test plan only, never in user stories",
      "In the definition of done for the release",
      "In the contract between vendor and customer",
    ],
    why: "\"_**User stories often form the basis of performance requirements in Agile methodologies**, with the **specific performance criteria described in the associated acceptance criteria**. These are referred to as **\"non-functional\" user stories**._\" Option (d) describes the **customized vendor-developed software** case under the **supplier/acquirer** model." } });

  B.push({ q: { n: 20, tag: "K4 · COTS", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["b"],
    scenario: "An organisation is buying a commercial off-the-shelf application rather than developing it, and asks who is responsible for confirming that it performs adequately.",
    stem: "What does the syllabus say?",
    opts: [
      "The vendor has sole responsibility, since they developed the product",
      "The customer has sole responsibility to test the performance of the product in a realistic test environment prior to deployment",
      "Responsibility is shared equally and defined by the contract",
      "No performance testing is required for COTS products",
    ],
    why: "\"_In the case of **COTS applications**, **the customer has sole responsibility to test the performance of the product in a realistic test environment prior to deployment**._\" Contrast with **customized vendor-developed software**, where **performance requirements and associated acceptance criteria should be specified as part of the contract between the vendor and customer** — and with the general rule that **regardless of the source of the application, it is often the responsibility of the customer to validate that the performance meets their requirements**." } });

  B.push({ pagebreak: true });
  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: the ISTQB Exam Structure Table gives Chapter 3 **seven questions across four objectives**, with **PTFL-3.2 receiving three** and **PTFL-3.1 receiving two**. The two K4 objectives get one each but are the first analysis questions on the paper." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "The nine architectures and their named risks — especially **connectivity** and **memory leaks** — Q3, Q4, Q5, Q11–Q14", "PTFL-3.2.1", "**3 guaranteed marks — 43% of the chapter.** Two of the three are multiple-selection items decided by one table."],
    ["2", "Which of the seven activities owns a named task — Q1, Q2, Q8–Q10", "PTFL-3.1.1", "**2 guaranteed marks.** Both official questions name a task and ask for the activity; **planning owns risk analysis, implementation owns procedures**."],
    ["3", "When to analyse and assess performance risks across the lifecycle — Q6, Q15–Q17", "PTFL-3.3.1", "**1 guaranteed K4 mark.** The answer spans **the whole lifecycle**; every distractor omits a phase."],
    ["4", "Choosing the right combination of activities for a project — Q7, Q18–Q20", "PTFL-3.4.1", "**1 guaranteed K4 mark.** The winning pattern is **early static review plus later dynamic test**."],
    ["5", "The non-architectural technical decisions — **C/C++ heap management**, relational vs non-relational, recursive vs iterative — Q5", "PTFL-3.2.1", "One of the three PTFL-3.2 marks was officially spent here, not on an architecture list at all."],
  ] } });

  return B;
};
