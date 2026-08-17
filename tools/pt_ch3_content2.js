// CT-PT Chapter 3 — Section 4 (questions)
const OFF = (n) => `OFFICIAL · Sample Exam #${n}`;
const HEALTH = "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–7 are the **official ISTQB CT-PT Sample Exam questions for Chapter 3** — questions #11 to #17 — reproduced with their official correct answers and rationale. Questions 8–35 are additional items derived strictly from the syllabus text, in the same style and difficulty. Correct options are marked ✔ — cover the green box and self-test first." });

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
  B.push({ h2: "Part B — 28 additional syllabus-derived questions" });

  // ---- PTFL-3.1.1 ----
  B.push({ q: { n: 8, tag: "Recall", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["b"],
    stem: "Why does the syllabus say test planning is particularly important for performance testing?",
    opts: [
      "Because the test plan is a contractual deliverable in most projects",
      "Because of the need for the allocation of test environments, test data, tools and human resources",
      "Because performance test cases cannot be designed without a plan",
      "Because exit criteria are evaluated during planning",
    ],
    why: "\"_Test planning is **particularly important for performance testing due to the need for the allocation of test environments, test data, tools and human resources**. In addition, **this is the activity in which the scope of performance testing is established**._\" Option (d) belongs to **test monitoring and control**, where **the performance test objectives are evaluated to check for exit criteria achievement**." } });

  B.push({ q: { n: 9, tag: "Activity mapping", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["c"],
    stem: "During which activity are the required type(s) of performance test — for example load, stress or scalability — decided?",
    opts: ["Test planning", "Test design", "Test analysis", "Test implementation"],
    why: "**Test analysis.** \"_Specific test conditions are identified such as **load levels, timing conditions, and transactions to be tested**. **The required type(s) of performance test (e.g., load, stress, scalability) are then decided.**_\" Test analysis is also where the **test basis** — performance requirements, test objectives, **SLAs**, **IT architecture**, **process models** — is analysed, possibly with the support of **spreadsheets or capacity planning tools**." } });

  B.push({ q: { n: 10, tag: "Activity mapping", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["a"],
    stem: "Which activity includes defining control measures to provide action plans should the infrastructure fail to generate the desired loads?",
    opts: ["Test monitoring and control", "Test planning", "Test execution", "Test completion"],
    why: "**Test monitoring and control.** The syllabus lists four such control measures: **increasing the load generation capacity if the infrastructure does not generate the desired loads as planned** · **changed, new or replaced hardware** · **changes to network components** · **changes to software implementation**. It also states that **the performance test objectives are evaluated to check for exit criteria achievement** in this activity." } });

  B.push({ q: { n: 11, tag: "Recall", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["d"],
    stem: "How does the syllabus say performance test cases are generally created during test design?",
    opts: [
      "As a single end-to-end script per business process",
      "As recorded protocol traces without parameterization",
      "As one test case per operational profile, never combined",
      "In modular form, so that they may be used as the building blocks of larger, more complex performance tests",
    ],
    why: "\"_Performance test cases are designed. These are **generally created in modular form** so that they may be used as the **building blocks of larger, more complex performance tests** (see section 4.2)._\" Modularity is what later allows **scripts for separate operational profiles to be combined into a scenario implementing the whole load profile** (**PTFL-4.2.7**)." } });

  B.push({ q: { n: 12, tag: "Recall", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["b"],
    stem: "Because performance testing is typically data-driven, what process is needed during test implementation?",
    opts: [
      "A process to anonymise all production data before every run",
      "A process to establish test data that is representative of actual production data in volume and type so that production use can be simulated",
      "A process to generate synthetic data only, so no production data is ever used",
      "A process to archive test data at the point of test closure",
    ],
    why: "\"_Since performance testing is **typically data-driven**, a process is needed to **establish test data that is representative of actual production data in volume and type so that production use can be simulated**._\" Test implementation also covers **establishing and/or resetting the test environment before each test execution**. Archiving testware belongs to **test completion**." } });

  B.push({ q: { n: 13, tag: "Recall", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["c"],
    stem: "At the point of test closure, what happens to the testware?",
    opts: [
      "It is deleted to prevent reuse of obsolete scripts",
      "It is handed to the vendor under the supplier/acquirer model",
      "Designed tests, test tool assets, test data and other testware are archived or passed on to other testers for later use during system maintenance activities",
      "It is converted into non-functional user stories for the next release",
    ],
    why: "\"_At the close of a defined period of performance testing, a **point of test closure** may be reached where **designed tests, test tool assets (test cases and test procedures), test data and other testware are archived or passed on to other testers for later use during system maintenance activities**._\" This sits within **test completion**, alongside the **test summary report**, **aggregated metrics** and **dashboards**." } });

  B.push({ q: { n: 14, tag: "Tricky", meta: "LO: PTFL-3.1.1 (K2) | Syllabus §3.1", correct: ["a"],
    stem: "Which statement best captures the syllabus's description of the nature of performance testing?",
    opts: [
      "It is iterative — information from one test corrects or optimizes application and system parameters, and the next iteration shows the results of the modifications, until test objectives are reached",
      "It is a single pass conducted once the system is complete",
      "It is a strictly sequential process that cannot revisit earlier activities",
      "It concludes when the first set of measurements is captured",
    ],
    why: "\"_Performance testing is **iterative in nature**. **Each test provides valuable insights** into application and system performance. The information gathered from one test is used to **correct or optimize application and system parameters**. The next test iteration will then **show the results of modifications**, and so on **until test objectives are reached**._\" This echoes Chapter 1's description of performance testing as **experimentation** conducted **iteratively**." } });

  // ---- PTFL-3.2.1 ----
  B.push({ q: { n: 15, tag: "Architecture risk", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["c"],
    stem: "Which performance risks does the syllabus associate specifically with virtualized systems?",
    opts: [
      "Poor or non-scalable database design and network bottlenecks",
      "Firewalls, packet inspection and server load balancing",
      "Excessive load on the hardware across all the virtual machines, and improper configuration of the host virtual machine resulting in inadequate resources",
      "Unexpected loads arriving through newly exposed APIs and web services",
    ],
    why: "Those two are the only risks the syllabus names as **arising specifically from virtualization**. (a) belongs to **multi-tier systems**, (b) to **client-server systems**, and (d) to **mainframe applications**. Note the link back to **PTFL-2.1.1**, where **background load on shared resources** is called out as **especially relevant in virtualized environments**." } });

  B.push({ q: { n: 16, tag: "Architecture risk", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["b"],
    stem: "What performance risk does the syllabus associate with dynamic / cloud-based systems?",
    opts: [
      "They cannot scale beyond a fixed hardware ceiling",
      "Failures to properly configure the self-scaling features during initial setup or subsequent updates",
      "They are the most prone of all architectures to memory leaks",
      "They cannot be monitored in production",
    ],
    why: "Dynamic/cloud-based systems **offer the ability to scale on demand** and are **typically distributed and virtualized multi-tier systems, albeit with self-scaling features designed specifically to mitigate some of the performance risks associated with those architectures**. **However, there are risks associated with failures to properly configure these features during initial setup or subsequent updates.** On memory leaks, the official rationale is the opposite of (c): they are **less of a risk because the environment will scale to compensate**." } });

  B.push({ q: { n: 17, tag: "Architecture risk", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["d"],
    stem: "Which risks does the syllabus name for client-server systems, over and above the single-computer risks that apply to the client-side code?",
    opts: [
      "Battery life, charge state and device temperature",
      "Disk fragmentation and operating system mismanagement",
      "Unexpected loads from newly exposed APIs",
      "Connection speed and reliability issues, network congestion at the client connection point such as public Wi-Fi, and potential problems due to firewalls, packet inspection and server load balancing",
    ],
    why: "The syllabus states that **since there is code running on the client, the single computer risks apply to that code, while the server-side issues mentioned above apply as well**, and then adds **connection speed and reliability issues, network congestion at the client connection point (e.g., public Wi-Fi), and potential problems due to firewalls, packet inspection and server load balancing**. (a) belongs to **mobile applications**; (b) to **single computer systems**; (c) to **mainframe applications**." } });

  B.push({ q: { n: 18, tag: "Architecture risk", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["a"],
    stem: "Which factors does the syllabus list as affecting the limited and variable resources and connectivity available on a mobile device?",
    opts: [
      "Location, battery life, charge state, available memory on the device and temperature",
      "Firewall configuration, packet inspection and load balancing",
      "Disk fragmentation and background security software",
      "Host virtual machine configuration and hardware oversubscription",
    ],
    why: "The syllabus lists exactly these five. It adds that for apps using **device sensors or radios such as accelerometers or Bluetooth**, **slow dataflows from those sources could create problems**, and that **mobile applications often have heavy interactions with other local mobile apps and remote web services, any of which can potentially become a performance efficiency bottleneck**." } });

  B.push({ q: { n: 19, tag: "Tricky · contrast", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["c"],
    stem: "How does the syllabus distinguish embedded real-time systems from mobile devices in terms of performance risk?",
    opts: [
      "Embedded systems are never connected to the Internet, so connectivity is not a risk",
      "Embedded systems have unlimited memory compared with mobile devices",
      "They share many risks including connectivity, but the diminished performance of a mobile video game is usually not a safety hazard, while such slowdowns in a vehicle braking system could prove catastrophic",
      "Embedded systems are exempt from resource utilization risks because they are purpose-built",
    ],
    why: "The syllabus says embedded real-time systems **often have many of the risks of mobile devices, including (increasingly) connectivity-related issues since these devices are connected to the Internet**, and then draws the distinction in exactly the terms of option (c). Examples given of embedded real-time systems are **cars (entertainment systems and intelligent braking systems), elevators, traffic signals and HVAC systems**." } });

  B.push({ q: { n: 20, tag: "Architecture risk", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["b"],
    stem: "What does the syllabus identify as the modern performance risk for mainframe applications?",
    opts: [
      "They cannot process batch workloads within a nightly window",
      "Many are now accessible via APIs, web services, or through their database, which can result in unexpected loads that affect throughput of established applications",
      "They are the architecture most prone to memory leaks",
      "They cannot be virtualized",
    ],
    why: "\"_**Most are quite predictable and fast when used as originally designed**, but **many of these are now accessible via APIs, web services, or through their database, which can result in unexpected loads that affect throughput of established applications**._\" On memory leaks, the official rationale excludes mainframes: **mainframes tend to run older code, often written in the higher level languages that provide their own memory management**." } });

  B.push({ q: { n: 21, tag: "Tricky · combination", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["d"],
    stem: "What does the syllabus say about applications that incorporate more than one of the nine architectures?",
    opts: [
      "Only the risks of the dominant architecture apply",
      "The risks cancel each other out when architectures are combined",
      "Combined architectures are outside the scope of performance testing",
      "All relevant risks will apply — and with IoT and mobile it is possible that all architectures are present in some form and thus all risks can apply",
    ],
    why: "\"_Note that **any particular application or system may incorporate two or more of the architectures listed above**, which means that **all relevant risks will apply to that application or system**. In fact, given the **Internet of Things and the explosion of mobile applications** — two areas where **extreme levels of interaction and connection is the rule** — **it is possible that all architectures are present in some form in an application, and thus all risks can apply**._\"" } });

  B.push({ q: { n: 22, tag: "Non-architectural risk", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["c"],
    stem: "Besides architecture, which other technical decisions does the syllabus say influence and create performance risks?",
    opts: [
      "Choice of test tool vendor and licence model",
      "Choice of test level and test type",
      "Direct heap memory management in languages such as C and C++, relational versus non-relational databases, and the choice of a recursive as opposed to an iterative algorithm",
      "Choice of operational profile and load profile",
    ],
    why: "The syllabus gives these three examples and notes that such decisions **extend all the way down to the design of individual functions or methods**. It closes with a caution: **as a tester, the ability to know about or even influence such decisions will vary, depending on the roles and responsibilities of testers within the organization and software development lifecycle**." } });

  B.push({ q: { n: 23, tag: "Architecture risk", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["a"],
    stem: "Which architecture does the syllabus define as running entirely on one non-virtualized computer, and what two categories of risk does it name for it?",
    opts: [
      "Single computer systems; excessive resource consumption, and inefficient implementation of algorithms that do not make use of available resources",
      "Client-server systems; connection speed and firewall interference",
      "Multi-tier systems; database design and network bottlenecks",
      "Virtualized systems; hardware oversubscription and host misconfiguration",
    ],
    why: "**Single computer systems** \"_run **entirely on one non-virtualized computer**_\". Performance can degrade due to **excessive resource consumption including memory leaks, background activities such as security software, slow storage subsystems (e.g., low-speed external devices or disk fragmentation), and operating system mismanagement**; and due to **inefficient implementation of algorithms which do not make use of available resources (e.g., main memory) and as a result execute slower than required**." } });

  B.push({ q: { n: 24, tag: "Tricky · distributed", meta: "LO: PTFL-3.2.1 (K2) | Syllabus §3.2", correct: ["b"],
    stem: "What distinguishes a distributed system from a multi-tier system in the syllabus's treatment, and what extra risk follows?",
    opts: [
      "Distributed systems run on a single server; the extra risk is disk fragmentation",
      "The various servers may change dynamically; the extra risk is critical workflows or dataflows to, from, or through unreliable or unpredictable remote servers, especially with periodic connection problems or intermittent intense load",
      "Distributed systems are always virtualized; the extra risk is host misconfiguration",
      "Distributed systems are always cloud-based; the extra risk is self-scaling misconfiguration",
    ],
    why: "\"_These are systems of systems, **similar to a multi-tier architecture, but the various servers may change dynamically** — such as an e-commerce system that accesses **different inventory databases depending on the geographic location of the person placing the order**. **In addition to the risks associated with multi-tier architectures**, this architecture can experience performance problems due to **critical workflows or dataflows to, from, or through unreliable or unpredictable remote servers**, especially when such servers suffer **periodic connection problems or intermittent periods of intense load**._\"" } });

  // ---- PTFL-3.3.1 ----
  B.push({ q: { n: 25, tag: "K4 · process", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["c"],
    stem: "In the syllabus's four-step process for performance-related product quality risks, what happens at step 2?",
    opts: [
      "Risks are identified, focusing on time behavior, resource utilization and capacity",
      "Mitigation actions are taken based on the nature of the risk item and the level of risk",
      "Risks are assessed, ensuring the relevant architecture categories are addressed, and the overall level of risk is evaluated in terms of likelihood and impact using clearly defined criteria",
      "Risks are managed on an ongoing basis to ensure adequate mitigation prior to release",
    ],
    why: "The four steps are **identify → assess → mitigate → manage**, and step 2 is exactly as stated in (c). Note the explicit cross-reference: assessment must ensure **the relevant architecture categories (see Section 3.2) are addressed** — so **PTFL-3.2.1 knowledge is a prerequisite for the K4 question**." } });

  B.push({ q: { n: 26, tag: "K4 · stakeholders", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["a"],
    stem: "According to the syllabus, what must business stakeholders appreciate about performance risk?",
    opts: [
      "That intended usage, business-, societal- or safety-criticality, potential financial and/or reputational damage, and civil or criminal legal liability create risks and influence the impact of failures",
      "That architecture, design and implementation decisions influence the likelihood of defects",
      "That performance testing should be conducted only in production",
      "That residual risk can be eliminated entirely with sufficient mitigation",
    ],
    why: "The syllabus splits the two groups precisely: **business stakeholders must appreciate that intended usage, business-, societal-, or safety-criticality, potential financial and/or reputational damage, civil or criminal legal liability and similar factors affect risk from a business perspective, creating risks and influencing the impact of failures**, while **technical stakeholders must appreciate that architecture, design, and implementation decisions affect performance risks from a technical perspective, creating risks and influencing the likelihood of defects**. **Business = impact. Technical = likelihood.**" } });

  B.push({ q: { n: 27, tag: "K4 · residual risk", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["d"],
    scenario: "At the end of a performance test campaign, the test manager reports to the steering group: \"Yes, it's still possible for customers to experience long delays during check out.\"",
    stem: "Why does the syllabus consider this an inadequate statement of residual risk, and what would be better?",
    opts: [
      "It is inadequate because residual risk should never be reported to business stakeholders",
      "It is inadequate because performance risks can be eliminated completely with enough mitigation",
      "It is adequate as stated; no improvement is required",
      "It gives no idea of what amount of risk mitigation has occurred or of the level of risk that remains — providing clear insight into the percentage of customers likely to experience delays equal to or exceeding certain thresholds would help people understand the status",
    ],
    why: "This is the syllabus's own worked contrast, quoted almost verbatim. It follows from the principle that **performance-related risks can never be avoided completely** — **some risk of performance-related production failure will always exist** — so the risk management process **must include providing a realistic and specific evaluation of the residual level of risk to the business and technical stakeholders involved**." } });

  B.push({ q: { n: 28, tag: "K4 · early mitigation", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["b"],
    scenario: "On a new product, the expected number of transactions and simultaneous users genuinely cannot be specified early in the project.",
    stem: "What does the syllabus recommend?",
    opts: [
      "Defer all performance risk analysis until the numbers are known",
      "Ensure design and architecture decisions allow for highly variable scalability, for example on-demand cloud-based computing resources, so that early risk mitigation decisions can be made",
      "Test in production, since only real usage will reveal the numbers",
      "Set arbitrary targets and treat them as contractual acceptance criteria",
    ],
    why: "\"_When critical performance-related decisions such as **the expected number of transactions or simultaneous users cannot be specified early in the project**, it is important that **design and architecture decisions allow for highly variable scalability (e.g., on-demand cloud-based computing resources)**. **This enables early risk mitigation decisions to be made.**_\" It is a direct illustration of the principle that **risk mitigation and management must span and influence the entire software development process, not just dynamic testing**." } });

  B.push({ q: { n: 29, tag: "K4 · static prediction", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["c"],
    scenario: "A system will handle large volumes of data via a relational database. The team is concerned about the slow performance of many-to-many joins caused by poor database design.",
    stem: "According to the syllabus, when would this problem typically reveal itself, and how could it be predicted earlier?",
    opts: [
      "It reveals itself during unit testing and can be predicted by profiling",
      "It reveals itself only in production and cannot be predicted",
      "It may only reveal itself during dynamic testing with large-scale test datasets such as those used during system test, but a careful technical review including experienced database engineers can predict the problems prior to database implementation",
      "It reveals itself during acceptance testing and can be predicted by crowd testing",
    ],
    why: "This is the syllabus's own worked example, and it is the reasoning that produces the official answer to question #17 — **pair an early static review with a later dynamic test**. The syllabus adds: **after such a review, in an iterative approach, risks are identified and assessed again**." } });

  B.push({ q: { n: 30, tag: "K4 · timing", meta: "LO: PTFL-3.3.1 (K4) | Syllabus §3.3", correct: ["a"],
    stem: "What does the syllabus warn testers against, when it comes to the timing of performance risk work?",
    opts: [
      "Relying entirely on performance testing conducted towards the end of the system test level and system integration test level",
      "Beginning risk analysis before the architecture has been chosen",
      "Involving business stakeholders in technical risk assessment",
      "Repeating the risk analysis more than once per release",
    ],
    why: "\"_For performance-related risks, it is especially important that **the risk analysis process be started early and is repeated regularly**. In other words, **the tester should avoid relying entirely on performance testing conducted towards the end of the system test level and system integration test level**._\" The syllabus notes that **larger and more complex systems of systems projects** have met **unfortunate surprises** for precisely this reason." } });

  // ---- PTFL-3.4.1 ----
  B.push({ q: { n: 31, tag: "K4 · sequential", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["b"],
    stem: "In a sequential development model, what does the syllabus describe as ideal practice for performance testing?",
    opts: [
      "Scheduling all performance testing into a dedicated phase after system integration testing",
      "Including performance criteria as part of the acceptance criteria defined at the outset of the project, with performance testing activities conducted throughout the lifecycle",
      "Deferring performance criteria until the acceptance testing phase, when user needs are best understood",
      "Contracting performance testing to the vendor under a supplier/acquirer model",
    ],
    why: "\"_The **ideal practice** of performance testing in sequential development models is to **include performance criteria as a part of the acceptance criteria which are defined at the outset of a project**. Reinforcing the lifecycle view of testing, **performance testing activities should be conducted throughout the software development lifecycle**. As the project progresses, **each successive performance test activity should be based on items defined in the prior activities**._\"" } });

  B.push({ q: { n: 32, tag: "Recall · sequential", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["d"],
    stem: "At which sequential phase does the syllabus permit system interfaces to be simulated, and under what condition?",
    opts: [
      "Component integration testing, provided the simulator is built by the same team",
      "Acceptance testing, provided the customer agrees",
      "System integration testing, provided the whole system is otherwise representative",
      "System testing, provided the simulated interfaces give a true representation of performance",
    ],
    why: "At **System Testing**: \"_Conduct performance testing at the system level, which includes **hardware, software, procedures and data that are representative of the production environment**. **System interfaces may be simulated provided that they give a true representation of performance.**_\" At **System Integration Testing** the requirement is stricter: **conduct performance testing with the entire system which is representative of the production environment**." } });

  B.push({ q: { n: 33, tag: "Recall · CI", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["c"],
    stem: "What does the syllabus give as the main objective of performance tests included in Continuous Integration?",
    opts: [
      "To determine the maximum capacity of the production environment",
      "To replace the specialist team's more extensive performance testing",
      "To ensure a change does not negatively impact performance",
      "To validate the operational profiles used in the load profile",
    ],
    why: "\"_**The main objective of performance tests as part of CI is to ensure a change does not negatively impact performance.** Depending on the changes made for any given build, **new performance tests may be required**._\" The syllabus also notes that CI performance tests **may be a subset of more extensive performance tests that are conducted by a specialist team at other times during an iteration**, because of **the short timeframe available for CI tests** — so (b) is explicitly wrong." } });

  B.push({ q: { n: 34, tag: "Recall · Agile", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["a"],
    stem: "In Agile methodologies, where does the syllabus say the specific performance criteria are described?",
    opts: [
      "In the acceptance criteria associated with \"non-functional\" user stories",
      "In the performance test plan only, never in user stories",
      "In the definition of done for the release",
      "In the contract between vendor and customer",
    ],
    why: "\"_**User stories often form the basis of performance requirements in Agile methodologies**, with the **specific performance criteria described in the associated acceptance criteria**. These are referred to as **\"non-functional\" user stories**._\" Option (d) describes the **customized vendor-developed software** case under the **supplier/acquirer** model." } });

  B.push({ q: { n: 35, tag: "K4 · COTS", meta: "LO: PTFL-3.4.1 (K4) | Syllabus §3.4", correct: ["b"],
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
    ["1", "The nine architectures and their named risks — especially **connectivity** and **memory leaks** — Q3, Q4, Q5, Q15–Q24", "PTFL-3.2.1", "**3 guaranteed marks — 43% of the chapter.** Two of the three are multiple-selection items decided by one table."],
    ["2", "Which of the seven activities owns a named task — Q1, Q2, Q8–Q14", "PTFL-3.1.1", "**2 guaranteed marks.** Both official questions name a task and ask for the activity; **planning owns risk analysis, implementation owns procedures**."],
    ["3", "When to analyse and assess performance risks across the lifecycle — Q6, Q25–Q30", "PTFL-3.3.1", "**1 guaranteed K4 mark.** The answer spans **the whole lifecycle**; every distractor omits a phase."],
    ["4", "Choosing the right combination of activities for a project — Q7, Q31–Q35", "PTFL-3.4.1", "**1 guaranteed K4 mark.** The winning pattern is **early static review plus later dynamic test**."],
    ["5", "The non-architectural technical decisions — **C/C++ heap management**, relational vs non-relational, recursive vs iterative — Q5, Q22", "PTFL-3.2.1", "One of the three PTFL-3.2 marks was officially spent here, not on an architecture list at all."],
  ] } });

  return B;
};
