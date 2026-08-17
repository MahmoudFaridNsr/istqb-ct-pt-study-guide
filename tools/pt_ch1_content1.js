// CT-PT Chapter 1 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 1 carries **5 learning objectives** across five sub-chapters (1.1 Principles of Performance Testing · 1.2 Types of Performance Testing · 1.3 Testing Types in Performance Testing · 1.4 The Concept of Load Generation · 1.5 Common Performance Efficiency Failure Modes and Their Causes). The official ISTQB Exam Structure Table allocates **6 of the 40 exam questions** to Chapter 1 — **6 of the 40 points**. Recommended teaching time is **60 minutes**, which makes this the **highest points-per-hour chapter in the entire syllabus: 6 marks per teaching hour**." });
  B.push({ p: "Only one objective gets two questions — **PTFL-1.2 (types of performance testing)**. Every other objective in the chapter gets exactly one, so **all five objectives are guaranteed to appear**. There is no selectable group and nothing to gamble on: if you learn Chapter 1 completely you bank **6 of the 26 points you need to pass**, from one hour of teaching material." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.9, 0.7, 9.4, 1.0, 1.0], rows: [
    ["PTFL-1.1.1", "K2", "Understand the principles of performance testing.", "**1**", "1"],
    ["PTFL-1.2.1", "K2", "Understand the different types of performance testing.", "**2**", "2"],
    ["PTFL-1.3.1", "K1", "Recall testing types in performance testing.", "**1**", "1"],
    ["PTFL-1.4.1", "K2", "Understand the concept of load generation.", "**1**", "1"],
    ["PTFL-1.5.1", "K2", "Give examples of common failure modes of performance testing and their causes.", "**1**", "1"],
    ["**Chapter 1 total**", "—", "**K1 = 1 · K2 = 5 · K3 = 0 · K4 = 0**", "**6**", "**6**"],
  ] } });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 1 = **6 questions / 6 points** of 40 questions and 40 points. In the official Sample Exam these are questions **#1 to #6**, in exact learning-objective order. The CT-PT exam is **40 questions worth 40 points (1 point per question) in 90 minutes** (**113 minutes** with the 25% non-native-language allowance) and the pass mark is **65% = 26 of 40 points**." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Two of the six marks — a third of the chapter — come from a single table: the eight types of performance testing.** The official sample exam asks the same question twice with the same four options, once for spike testing and once for load testing. If you can map each of the eight types to its one-line syllabus definition, you have those 2 marks in under thirty seconds and you will almost certainly pick up the failure-mode mark too, because failure modes are described in the same vocabulary." } });

  // --- PTFL-1.1.1 ---
  B.push({ h2: "PTFL-1.1.1 (K2) — Principles of Performance Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the principles of performance testing." } });
  B.push({ p: "**Where performance efficiency sits.** Technically, **performance efficiency is categorized in the ISO 25010 Product Quality Model as a non-functional quality characteristic**. That is the sentence to remember: it is **ISO 25010**, it is **product quality**, and it is **non-functional**. The syllabus writes _performance efficiency (or simply \"performance\")_ — the two words are used interchangeably throughout." });
  B.push({ p: "**The three sub-characteristics.** Proper focus and prioritization among them **depends on the risks assessed and the needs of the various stakeholders**. Test results analysis may identify **other areas of risk that need to be addressed**." });
  B.push({ table: { head: ["Sub-characteristic", "Syllabus definition", "Trigger words in a stem"], widths: [2.4, 7.6, 4.0], rows: [
    ["**Time behavior**", "Generally the **most common performance testing objective**. Examines the ability of a component or system to **respond to user or system inputs within a specified time and under specified conditions**. Measurements may vary from the **\"end-to-end\" time** taken by the system to respond to user input, to the **number of CPU cycles** required by a software component to execute a particular task.", "response time · seconds · end-to-end · CPU cycles · latency"],
    ["**Resource utilization**", "If the **availability of system resources is identified as a risk**, the utilization of those resources (e.g., **the allocation of limited RAM**) may be investigated by conducting specific performance tests.", "RAM · CPU · disk · bandwidth · allocation"],
    ["**Capacity**", "If issues of **system behavior at the required capacity limits** of the system (e.g., **numbers of users or volumes of data**) are identified as a risk, performance tests may be conducted to **evaluate the suitability of the system architecture**.", "number of users · data volume · limits · architecture suitability"],
  ] } });
  B.push({ box: { kind: "ok", title: "The sentence that links this LO to Chapter 4", body: "**All three of the above quality sub-characteristics will impact the ability of the system under test (SUT) to scale.** Scalability is not a fourth sub-characteristic — it is the consequence of the other three." } });
  B.push({ p: "**The five principles, in syllabus wording.** The syllabus introduces them with \"_the following performance testing principles are particularly relevant_\". Learn them as five, in this order — the exam has asked which one is _an important principle_, and the correct answer was quoted almost verbatim." });
  B.push({ table: { head: ["#", "Principle (syllabus wording)", "What the exam does with it"], widths: [0.8, 7.4, 5.8], rows: [
    ["1", "Tests must be **aligned to the defined expectations of different stakeholder groups**, in particular **users, system designers and operations staff**.", "The three named groups reappear in **PTFL-4.1.1** (user-based vs technical objectives) and **PTFL-4.1.3** (business vs technology stakeholders)."],
    ["2", "The tests must be **reproducible**. **Statistically identical results (within a specified tolerance) must be obtained by repeating the tests on an unchanged system**.", "**This is the one the official exam picked as \"an important principle\".** Note the two qualifiers: _statistically identical_, and _within a specified tolerance_ — not bit-for-bit identical."],
    ["3", "The tests must **yield results that are both understandable and can be readily compared to stakeholder expectations**.", "Understandability is why results are **aggregated** (**PTFL-2.2.1**) and why **dashboards** are used (**PTFL-3.1.1**, **PTFL-4.4.1**)."],
    ["4", "The tests **can be conducted, where resources allow, either on complete or partial systems or test environments that are representative of the production system**.", "Note the wording: **representative of** production — not production itself. Distractors that demand testing **in** production are wrong (see **PTFL-4.2.8**)."],
    ["5", "The tests must be **practically affordable and executable within the timeframe set by the project**.", "Affordability is why **cost versus representativeness** must be communicated to business stakeholders (**PTFL-4.1.3**)."],
  ] } });
  B.push({ p: "**Performance testing as experimentation.** The syllabus states that performance testing **often takes the form of experimentation, which enables measurement and analysis of specific system parameters to take place**. These may be conducted **iteratively in support of system analysis, design and implementation** to enable **architectural decisions** to be made and to **help shape stakeholder expectations**. This is the root of the iterative theme that runs through Chapters 3 and 4." });
  B.push({ p: "**Scope of the discipline.** Performance testing is **not limited to the web-based domain** where the end user is the focus. It is also relevant to different application domains with a variety of system architectures, such as **classic client-server, distributed and embedded**. It is **often closely integrated with other disciplines such as usability engineering and performance engineering**. Additionally, evaluation of **functional suitability, usability and other quality characteristics under conditions of load** may reveal **load-specific issues** which impact those characteristics." });
  B.push({ p: "**Exam focus.** One K2 question, officially phrased as \"_Which of the following is an important principle in performance testing?_\" with **reproducibility** as the answer. The three distractors are worth knowing individually: _tests should be easy to create and understand_ is wrong **because tests are sometimes quite complex to create**; _tests should be executed in the production environment_ is wrong because tests **generally should not be run in the actual production environment, but rather a representative equivalent**; and _the test results should match the stakeholders' expectations_ is wrong because **the test results may show that the system does not meet expectations**." });
  B.push({ box: { kind: "warn", title: "The trap in principle 3", body: "Principle 3 says results must be **comparable to** stakeholder expectations. A distractor will turn this into results must **match** stakeholder expectations. **A performance test whose results are forced to match expectations is not a test.** Comparable — yes. Matching — no." } });
  B.push({ lead: "Related concepts: performance efficiency, ISO 25010 Product Quality Model, non-functional quality characteristic, time behavior, resource utilization, capacity, scalability, reproducibility, tolerance, representative environment, experimentation, performance engineering, usability engineering, system under test (SUT)." });

  // --- PTFL-1.2.1 ---
  B.push({ h2: "PTFL-1.2.1 (K2) — The Eight Types of Performance Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the different types of performance testing." } });
  B.push({ p: "**This objective is worth 2 of the 40 marks on the paper — the joint-largest single-objective allocation outside Chapter 4.** The syllabus defines eight terms. One (**performance testing**) is the umbrella; the other seven are specific types. Every definition below is the syllabus's own, compressed to the phrase the exam reuses." });
  B.push({ table: { head: ["Type", "Syllabus definition — learn the italicised phrase", "The one word that gives it away"], widths: [2.4, 8.6, 3.0], rows: [
    ["**Performance testing**", "An **umbrella term** including **any kind of testing focused on performance (responsiveness) of the system or component under different volumes of load**.", "_umbrella_"],
    ["**Load testing**", "Focuses on the ability of a system to handle **increasing levels of anticipated realistic loads** resulting from transaction requests generated by **controlled numbers of concurrent users or processes**.", "_anticipated / expected maximum_"],
    ["**Stress testing**", "Focuses on the ability of a system or component to handle **peak loads that are at or beyond the limits of its anticipated or specified workloads**. Also used to evaluate a system's ability to handle **reduced availability of resources** such as accessible computing capacity, available bandwidth, and memory.", "_at or beyond_"],
    ["**Scalability testing**", "Focuses on the ability of a system to meet **future efficiency requirements** which may be **beyond those currently required**. Determines the system's **ability to grow** (e.g., more users, larger amounts of data stored) **without violating the currently specified performance requirements or failing**. Once the limits of scalability are known, **threshold values can be set and monitored in production** to warn of problems about to arise; the production environment may then be **adjusted with appropriate amounts of hardware**.", "_future_"],
    ["**Spike testing**", "Focuses on the ability of a system to **respond correctly to sudden bursts of peak loads and return afterwards to a steady state**.", "_sudden burst · return to steady state_"],
    ["**Endurance testing**", "Focuses on the **stability of the system over a time frame specific to the system's operational context**. Verifies that there are **no resource capacity problems** (e.g., **memory leaks, database connections, thread pools**) that may **eventually degrade performance and/or cause failures at breaking points**.", "_over time_"],
    ["**Concurrency testing**", "Focuses on the impact of situations where **specific actions occur simultaneously** (e.g., when **large numbers of users log in at the same time**). Concurrency issues are **notoriously difficult to find and reproduce**, particularly when the problem occurs in an environment where testing has **little or no control, such as production**.", "_simultaneously / at the same time_"],
    ["**Capacity testing**", "Determines **how many users and/or transactions a given system will support and still meet the stated performance objectives**. These objectives may also be stated with regard to the **data volumes resulting from the transactions**.", "_how many · and still meet_"],
  ] } });
  B.push({ box: { kind: "warn", title: "The four definitions the official exam rotates", body: "The sample exam asks about **spike** and **load** using an **identical set of four options**: (a) _loads gradually increased to reach the expected maximum_ = **load**; (b) _loads at or beyond the expected peak load_ = **stress**; (c) _meet future efficiency requirements_ = **scalability**; (d) _respond to quick and extreme changes in load_ = **spike**. Memorise this quartet as a block. Two of your six Chapter 1 marks live inside it." } });
  B.push({ box: { kind: "warn", title: "Spike vs stress vs concurrency — the three that blur", body: "**Stress** is about the **magnitude** of the load (at or beyond the limit) — and, uniquely, also about **reduced availability of resources**. **Spike** is about the **rate of change** of the load (a sudden burst) **and** about **returning to a steady state afterwards**. **Concurrency** is about **simultaneity of specific actions** — many users doing the **same thing at the same instant**, such as logging in. A stem that says _\"beyond the expected peak\"_ is stress; _\"sudden burst, then recovers\"_ is spike; _\"all at the same time\"_ is concurrency." } });
  B.push({ box: { kind: "ok", title: "Scalability vs capacity — the pair that blur", body: "**Capacity testing answers \"how many?\" for the system as it is today** — how many users and/or transactions will it support **and still meet the stated performance objectives**. **Scalability testing answers \"can it grow?\"** — can it meet **future efficiency requirements beyond those currently required** without violating the **currently specified** performance requirements. Capacity measures the ceiling. Scalability asks whether the ceiling can be raised." } });
  B.push({ p: "**Exam focus.** Two K2 questions, both of the form \"_Which of the following is the best description of X testing?_\". They are pure definition-matching. There is no scenario and no analysis — which is why this objective is the cheapest 2 marks on the paper." });
  B.push({ p: "**Common misunderstanding.** Treating **load testing** as \"any test with load on it\". Load testing specifically targets **anticipated, realistic** load — the load the system is **expected** to see, ramped up to the **expected maximum**. The moment the stem says the load exceeds what is expected, the answer becomes **stress**." });
  B.push({ lead: "Related concepts: performance testing (umbrella), load testing, stress testing, scalability testing, spike testing, endurance testing, concurrency testing, capacity testing, anticipated load, peak load, steady state, memory leak, thread pool, threshold value." });

  // --- PTFL-1.3.1 ---
  B.push({ h2: "PTFL-1.3.1 (K1) — Static and Dynamic Testing Types" });
  B.push({ box: { title: "Original syllabus statement", body: "Recall testing types in performance testing." } });
  B.push({ p: "**This is one of only two K1 objectives on the whole paper** (the other is PTFL-2.4.1). K1 means **remember or recognize** — you are not asked to apply anything, only to know which activity belongs where. The syllabus names exactly two testing types: **static testing** and **dynamic testing**." });
  B.push({ p: "**Why static testing matters more here than elsewhere.** The syllabus is blunt: **static testing activities are often more important for performance testing than for functional suitability testing**. The reason is that **so many critical performance defects are introduced in the architecture and design of the system**. Those defects can be introduced by **misunderstandings or a lack of knowledge by the designers and architects**, or because the **requirements did not adequately capture the response time, throughput, or resource utilization targets, the expected load and usage of the system, or the constraints**." });
  B.push({ table: { title: "The four static testing activities — memorise the list", head: ["#", "Static testing activity for performance"], widths: [0.8, 13.2], rows: [
    ["1", "**Reviews of requirements** with focus on **performance aspects and risks**"],
    ["2", "**Reviews of database schemas, entity-relationship diagrams, metadata, stored procedures and queries**"],
    ["3", "**Reviews of the system and network architecture**"],
    ["4", "**Reviews of critical segments of the system code** (e.g., **complex algorithms**)"],
  ] } });
  B.push({ p: "**Dynamic testing across the test levels.** \"_As the system is built, dynamic performance testing should start as soon as possible._\" The syllabus lists an opportunity at **every one of the five test levels** — and the exam has asked directly which activity belongs at which level. This table is the answer key." });
  B.push({ table: { head: ["Test level", "Dynamic performance testing opportunity (syllabus wording)"], widths: [3.6, 10.4], rows: [
    ["**Unit testing**", "Using **profiling information to determine potential bottlenecks** and **dynamic analysis to evaluate resource utilization**."],
    ["**Component integration testing**", "Across **key use cases and workflows**, especially when **integrating different use case features** or **integrating with the \"backbone\" structure of a workflow**."],
    ["**System testing**", "**Overall end-to-end behaviors under various load conditions.**"],
    ["**System integration testing**", "Especially for **data flows and workflows across key inter-system interfaces**. Here it is **not uncommon for the \"user\" to be another system or machine** (e.g., inputs from sensors and other systems)."],
    ["**Acceptance testing**", "To **build user, customer and operator confidence** in the proper performance of the system and to **fine tune the system under real world conditions** — but **generally not to find performance defects in the system**."],
  ] } });
  B.push({ box: { kind: "warn", title: "Acceptance testing — the qualifier the exam loves", body: "Acceptance testing is **generally not** for finding performance defects. Its purpose is **confidence building and fine tuning**. Any option that has you hunting for defects at acceptance level is wrong for this LO." } });
  B.push({ p: "**Two extra sentences that are examinable.** First: in **higher test levels such as system testing and system integration testing, the use of realistic environments, data and loads are critical for accurate results**. Second: in **Agile and other iterative-incremental lifecycles, teams should incorporate static and dynamic performance testing into early iterations rather than waiting for final iterations** to address performance risks." });
  B.push({ p: "**Custom or new hardware.** If custom or new hardware is part of the system, **early dynamic performance tests can be performed using simulators**. However, it is **good practice to start testing on the actual hardware as soon as possible**, because **simulators often do not adequately capture resource constraints and performance-related behaviors**." });
  B.push({ p: "**Exam focus.** One K1 question. The official version asks which performance testing activity should occur **during unit testing** — the answer is **testing to evaluate resource utilization and potential bottlenecks**. The distractors are all real activities placed at the wrong level: _end-to-end behavior under load_ belongs to **system testing**, _data flows and workflows across interfaces_ belongs to **system integration testing**, and _key use cases and workflows_ belongs to **component integration testing**. The whole question is decided by the table above." });
  B.push({ lead: "Related concepts: static testing, dynamic testing, review, database schema, entity-relationship diagram, stored procedure, profiling, dynamic analysis, bottleneck, unit testing, component integration testing, system testing, system integration testing, acceptance testing, simulator, iterative-incremental lifecycle." });

  // --- PTFL-1.4.1 ---
  B.push({ h2: "PTFL-1.4.1 (K2) — The Concept of Load Generation" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the concept of load generation." } });
  B.push({ p: "**Why load is not just test data.** In order to carry out the types of performance testing in Section 1.2, **representative system loads must be modeled, generated and submitted to the system under test**. Loads are **comparable to the data inputs used for functional test cases**, but differ in **three principal ways** — and the exam expects all three." });
  B.push({ table: { head: ["#", "How a performance test load differs from functional test data"], widths: [0.8, 13.2], rows: [
    ["1", "A performance test load must represent **many user inputs, not just one**."],
    ["2", "A performance test load may require **dedicated hardware and tools** for generation."],
    ["3", "Generation of a performance test load is **dependent on the absence of any functional defects in the system under test** which may impact test execution."],
  ] } });
  B.push({ box: { kind: "ok", title: "The success factor sentence", body: "**The efficient and reliable generation of a specified load is a key success factor when conducting performance tests.** That single sentence is the reason this learning objective exists, and the reason Chapter 5 (Tools) exists." } });
  B.push({ p: "**The four options for load generation.** The syllabus gives four, each with its own trade-off. The exam question for this LO is a **selection** question: given a situation, which generation approach fits?" });
  B.push({ table: { head: ["Option", "When it is adequate", "Its limitations"], widths: [3.0, 5.5, 5.5], rows: [
    ["**Via the user interface**", "When **only a small number of users** are to be represented **and** the required numbers of **software clients are available**. May be used **in conjunction with functional test execution tools**. **May be the most representative approach for end-to-end tests.**", "**Rapidly becomes impractical as the number of users to be simulated increases.** The **stability of the UI is a critical dependency** — **frequent changes can impact the repeatability** of performance tests and **may significantly affect maintenance costs**."],
    ["**Using crowds**", "When a **large number of testers** are available to represent real users, organised so the desired load is generated. Suitable for **applications reachable from anywhere in the world** (e.g., web-based), and may involve **a wide range of different device types and configurations**.", "The load generated will **not be as reproducible and precise as other options** and is **more complex to organize**."],
    ["**Via the API**", "Similar to using the UI for data entry, but uses the **application's API instead of the UI**. **Less sensitive to changes (e.g., delays) in the UI** and allows **transactions to be processed in the same way as they would if entered directly by a user via the UI**. **Dedicated scripts may repeatedly call specific API routines**, enabling **more users to be simulated compared to UI inputs**.", "Bypasses the UI itself, so genuine UI-layer effects are not exercised."],
    ["**Using captured communication protocols**", "Capturing user interaction with the SUT **at the communications protocol level** and then **replaying these scripts** to simulate **potentially very large numbers of users in a repeatable and reliable manner**. This tool-based approach is described in **Sections 4.2.6 and 4.2.7**.", "Requires **correlation and parameterization** of the recorded script (see PTFL-4.2.7) — the main reason recorded scripts fail to play back."],
  ] } });
  B.push({ box: { kind: "warn", title: "API vs protocol level — the distinction that decides the mark", body: "The official rationale spells it out: **the communications protocol level is one level below the API level.** If a stem says _\"the UI is likely to change but the transactions must be processed as if they were created through the UI\"_, the answer is **API**. If the stem emphasises **capture and replay** or **very large numbers of users, repeatably**, the answer is **captured communication protocols**. And a stem about **a large number of testers representing real users** is **crowd testing**, not API — because **those testers would be using the real UI**." } });
  B.push({ p: "**Exam focus.** One K2 question: \"_When is it appropriate to generate load via the application's APIs?_\" Answer: **when the UI is likely to change but the transactions must be processed as if they were created through the UI**. The distractor \"_when only small numbers of test instances are available_\" is wrong precisely because **many test instances can be created with API testing** — the API route is the scalable one relative to the UI." });
  B.push({ lead: "Related concepts: load generation, virtual user, user interface, crowd testing, application programming interface (API), communication protocol, capture and replay, reproducibility, repeatability, maintenance cost, functional defect dependency." });

  // --- PTFL-1.5.1 ---
  B.push({ h2: "PTFL-1.5.1 (K2) — Common Failure Modes and Their Causes" });
  B.push({ box: { title: "Original syllabus statement", body: "Give examples of common failure modes of performance testing and their causes." } });
  B.push({ p: "**The four failure modes.** The syllabus names four, each with its own list of underlying causes. The exam question for this LO works **backwards**: you are given a cause (a memory leak) and asked what you will observe. Learn this table in both directions." });
  B.push({ table: { head: ["Failure mode (what you observe)", "Syllabus description", "Underlying causes"], widths: [3.2, 5.4, 5.4], rows: [
    ["**Slow response under all load levels**", "**Response is unacceptable regardless of load.**", "**Bad database design or implementation · network latency · other background loads.** Such issues **can be identified during functional and usability testing, not just performance testing**, so test analysts should keep an eye open for them and report them."],
    ["**Slow response under moderate-to-heavy load levels**", "Response **degrades unacceptably with moderate-to-heavy load**, **even when such loads are entirely within normal, expected, allowed ranges**.", "**Saturation of one or more resources · varying background loads.**"],
    ["**Degraded response over time**", "Response **degrades gradually or severely over time**.", "**Memory leaks · disk fragmentation · increasing network load over time · growth of the file repository · unexpected database growth.**"],
    ["**Inadequate or graceless error handling under heavy or over-limit load**", "**Response time is acceptable but error handling degrades** at **high and beyond-limit load levels**.", "**Insufficient resource pools · undersized queues and stacks · too rapid time-out settings.**"],
  ] } });
  B.push({ box: { kind: "warn", title: "The four-way discrimination the exam is built on", body: "**Regardless of load → underlying design/latency/background load.**  **Only under heavy load → resource saturation.**  **Worsens over time → memory leak, fragmentation, repository or database growth.**  **Response fine but errors go wrong → pools, queues, stacks, timeouts.** In the official question, a **memory leak** produces **response time degrading over time** — the answer is decided entirely by which column the cause sits in." } });
  B.push({ p: "**The six specific examples.** The syllabus then gives six concrete failures, each closing with a diagnosis sentence. The diagnosis sentence is the examinable part, because it names the sub-characteristic at fault." });
  B.push({ table: { head: ["Specific example", "Syllabus diagnosis"], widths: [8.0, 6.0], rows: [
    ["A **web-based application** providing information about a company's services **does not respond to user requests within seven seconds** (a general industry rule of thumb).", "**The performance efficiency of the system cannot be achieved under specific load conditions.**"],
    ["A system **crashes or is unable to respond** when subjected to a **sudden large number of user requests** (e.g., ticket sales for a major sporting event).", "**The capacity of the system to handle this number of users is inadequate.**"],
    ["System response is **significantly degraded** when users request **large amounts of data** (e.g., a large and important report posted for download).", "**The capacity of the system to handle the generated data volumes is insufficient.**"],
    ["**Batch processing is unable to complete before online processing is needed.**", "**The execution time of the batch processes is insufficient for the time period allowed.**"],
    ["A **real-time system runs out of RAM** when parallel processes generate large demands for dynamic memory which **cannot be released in time**.", "**The RAM is not dimensioned adequately, or requests for RAM are not adequately prioritized.**"],
    ["Real-time component **A**, supplying inputs to component **B**, is **unable to calculate updates at the required rate**; the overall system fails to respond in time and may fail.", "**Code modules in component A must be evaluated and modified (\"performance profiling\") to ensure the required update rates can be achieved.**"],
  ] } });
  B.push({ p: "**Exam focus.** One K2 question: \"_If you have an application that has a memory leak, what is the likely result you will see during performance testing?_\" Answer: **response time will degrade over time** — with the official caveat that **the time length is unknown until you test it**. Every distractor is another row of the failure-mode table, which is why learning the table answers the question by elimination as well as directly." });
  B.push({ p: "**Common misunderstanding.** Assuming that _slow under heavy load_ means the system is broken. The syllabus is precise: this failure mode is defined as degradation **even when such loads are entirely within normal, expected, allowed ranges**. Slowness at loads **beyond** the specified range is a different matter and belongs to **stress testing**." });
  B.push({ lead: "Related concepts: failure mode, memory leak, resource saturation, disk fragmentation, background load, network latency, resource pool, queue, stack, time-out setting, batch processing window, performance profiling, dimensioning, seven-second rule of thumb." });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ lead: "Concise, exam-ready notes drawn from the syllabus text. Every item is traceable to Chapter 1 of the CT-PT syllabus (pages 10–16)." });

  B.push({ h2: "2.1 Performance efficiency" });
  B.push({ ul: [
    "**Performance efficiency (or simply \"performance\")** is categorized in the **ISO 25010 Product Quality Model** as a **non-functional quality characteristic**.",
    "It has **three sub-characteristics**: **time behavior**, **resource utilization** and **capacity**.",
    "**Focus and prioritization among them depends on the risks assessed and the needs of the various stakeholders.** Test results analysis may identify **other areas of risk**.",
    "**All three sub-characteristics impact the ability of the SUT to scale.**",
    "Performance testing **plays a critical role in establishing acceptable quality levels for the end user** and is **often closely integrated with usability engineering and performance engineering**.",
    "Evaluating **functional suitability, usability and other quality characteristics under conditions of load** may reveal **load-specific issues** impacting those characteristics.",
    "Performance testing is **not limited to the web-based domain**: it also applies to **classic client-server, distributed and embedded** architectures.",
    "Performance testing **often takes the form of experimentation**, conducted **iteratively in support of system analysis, design and implementation**, to enable **architectural decisions** and to **shape stakeholder expectations**.",
  ] });

  B.push({ h2: "2.2 The five principles" });
  B.push({ ol: [
    "**Aligned to the defined expectations of different stakeholder groups** — in particular **users, system designers and operations staff**.",
    "**Reproducible** — **statistically identical results within a specified tolerance** when repeated **on an unchanged system**.",
    "**Understandable and readily comparable to stakeholder expectations.**",
    "**Conducted, where resources allow, on complete or partial systems or test environments representative of the production system.**",
    "**Practically affordable and executable within the timeframe set by the project.**",
  ] });

  B.push({ h2: "2.3 The eight types in one line each" });
  B.push({ ul: [
    "**Performance testing** — the **umbrella term** for any testing focused on **performance (responsiveness) under different volumes of load**.",
    "**Load testing** — **increasing levels of anticipated realistic loads** from **controlled numbers of concurrent users or processes**.",
    "**Stress testing** — **peak loads at or beyond the limits** of anticipated or specified workloads; also **reduced availability of resources** (computing capacity, bandwidth, memory).",
    "**Scalability testing** — the ability to meet **future efficiency requirements beyond those currently required**, growing **without violating the currently specified performance requirements or failing**.",
    "**Spike testing** — **sudden bursts of peak loads**, and **returning afterwards to a steady state**.",
    "**Endurance testing** — **stability over a time frame specific to the system's operational context**; catches **memory leaks, database connections, thread pools**.",
    "**Concurrency testing** — the impact of **specific actions occurring simultaneously**; issues are **notoriously difficult to find and reproduce**.",
    "**Capacity testing** — **how many users and/or transactions** the system will support **and still meet the stated performance objectives**.",
  ] });

  B.push({ h2: "2.4 Static and dynamic testing" });
  B.push({ ul: [
    "**Static testing is often more important for performance testing than for functional suitability testing**, because **so many critical performance defects are introduced in the architecture and design**.",
    "Root causes: **misunderstandings or lack of knowledge by designers and architects**, or **requirements that did not adequately capture response time, throughput or resource utilization targets, expected load and usage, or constraints**.",
    "**Four static activities:** reviews of **requirements** (performance aspects and risks) · **database schemas, ERDs, metadata, stored procedures and queries** · **system and network architecture** · **critical segments of the system code** (e.g., complex algorithms).",
    "**Dynamic performance testing should start as soon as possible** as the system is built.",
    "**Unit** → profiling for bottlenecks, dynamic analysis of resource utilization. **Component integration** → key use cases and workflows, feature integration, the workflow backbone. **System** → end-to-end behaviors under various load. **System integration** → data flows and workflows across inter-system interfaces, where the \"user\" may be **another system or machine**. **Acceptance** → **confidence and fine tuning**, generally **not** defect-finding.",
    "In **higher test levels**, **realistic environments, data and loads are critical for accurate results**.",
    "In **Agile and other iterative-incremental lifecycles**, incorporate **static and dynamic performance testing into early iterations**.",
    "**Custom or new hardware:** simulators enable early dynamic tests, but **start on the actual hardware as soon as possible** — **simulators often do not adequately capture resource constraints and performance-related behaviors**.",
  ] });

  B.push({ h2: "2.5 Load generation" });
  B.push({ ul: [
    "Loads must be **modeled, generated and submitted** to the SUT.",
    "**Three differences from functional test data:** many user inputs not just one · may need **dedicated hardware and tools** · depends on the **absence of functional defects** in the SUT.",
    "**The efficient and reliable generation of a specified load is a key success factor.**",
    "**Via the UI** — small numbers of users, clients available; may pair with **functional test execution tools**; **most representative for end-to-end**; but **impractical at scale** and **UI stability is a critical dependency** affecting **repeatability and maintenance cost**.",
    "**Using crowds** — real testers organised to produce the load; good for **globally reachable applications** and **many device types**; but **less reproducible and precise**, and **more complex to organize**.",
    "**Via the API** — **less sensitive to UI changes**, transactions **processed as if entered via the UI**, **dedicated scripts call API routines**, **more users simulated than via UI**.",
    "**Using captured communication protocols** — record at the **protocol level**, replay to simulate **very large numbers of users repeatably and reliably**; the tool-based approach of **Sections 4.2.6 and 4.2.7**.",
    "**The protocol level is one level below the API level.**",
  ] });

  B.push({ h2: "2.6 Failure modes" });
  B.push({ ul: [
    "**Slow response under all load levels** → bad **database design or implementation**, **network latency**, **other background loads**. Findable in **functional and usability testing** too.",
    "**Slow response under moderate-to-heavy load levels** → **saturation of one or more resources**, **varying background loads** — and note it happens **within normal, expected, allowed ranges**.",
    "**Degraded response over time** → **memory leaks**, **disk fragmentation**, **increasing network load over time**, **growth of the file repository**, **unexpected database growth**.",
    "**Inadequate or graceless error handling under heavy or over-limit load** → **insufficient resource pools**, **undersized queues and stacks**, **too rapid time-out settings**.",
    "Specific examples map to a diagnosis: **seven-second web response** → performance efficiency not achieved under specific load; **crash on sudden large numbers of requests** → **capacity for users inadequate**; **degradation on large data requests** → **capacity for data volumes insufficient**; **batch overruns its window** → **execution time insufficient for the time period allowed**; **real-time system out of RAM** → **RAM not dimensioned adequately or requests not prioritized**; **component A too slow for component B** → **performance profiling and modification of code modules in A**.",
  ] });

  B.push({ h2: "2.7 Chapter 1 keyword glossary" });
  B.push({ p: "The syllabus lists **ten keywords** for Chapter 1. All parts of the syllabus are examinable at **K1**, so every keyword below must be recognisable by definition even where no learning objective names it." });
  B.push({ table: { head: ["Keyword", "Definition to memorise"], widths: [3.4, 10.6], rows: [
    ["**Capacity testing**", "Determines **how many users and/or transactions a given system will support and still meet the stated performance objectives**; objectives may also cover **data volumes resulting from the transactions**."],
    ["**Concurrency testing**", "Focuses on the impact of situations where **specific actions occur simultaneously**, e.g., large numbers of users logging in at the same time. Issues are **notoriously difficult to find and reproduce**."],
    ["**Efficiency**", "Short for **performance efficiency** — the **ISO 25010 non-functional product quality characteristic** comprising **time behavior, resource utilization and capacity**."],
    ["**Endurance testing**", "Focuses on the **stability of the system over a time frame specific to the system's operational context**, verifying there are **no resource capacity problems** that may eventually **degrade performance or cause failures at breaking points**."],
    ["**Load generation**", "The **modeling, generation and submission of representative system loads** to the SUT. Four options: **UI · crowds · API · captured communication protocols**."],
    ["**Load testing**", "Focuses on the ability of a system to handle **increasing levels of anticipated realistic loads** from **controlled numbers of concurrent users or processes**."],
    ["**Performance testing**", "**Umbrella term** for **any kind of testing focused on performance (responsiveness) of the system or component under different volumes of load**."],
    ["**Scalability testing**", "Focuses on the ability of a system to meet **future efficiency requirements** which may be **beyond those currently required**, without **violating the currently specified performance requirements or failing**."],
    ["**Spike testing**", "Focuses on the ability of a system to **respond correctly to sudden bursts of peak loads and return afterwards to a steady state**."],
    ["**Stress testing**", "Focuses on the ability to handle **peak loads at or beyond the limits of anticipated or specified workloads**, and to handle **reduced availability of resources**."],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });

  B.push({ table: { title: "3.1 The eight types — the table that is worth 2 marks", head: ["Type", "Load shape", "Question it answers", "Signature phrase"], widths: [2.3, 3.3, 4.0, 4.4], rows: [
    ["**Performance testing**", "Any", "Is the system responsive under load?", "**umbrella term · responsiveness · different volumes of load**"],
    ["**Load testing**", "Ramping up to the expected maximum", "Does it cope with the load we expect?", "**increasing levels of anticipated realistic loads**"],
    ["**Stress testing**", "At or beyond the limit; or resources removed", "What happens past the limit?", "**at or beyond the limits · reduced availability of resources**"],
    ["**Scalability testing**", "Growing beyond today's requirement", "Can it grow?", "**future efficiency requirements · beyond those currently required**"],
    ["**Spike testing**", "A sudden burst, then back down", "Does it survive a shock and recover?", "**sudden bursts of peak loads · return afterwards to a steady state**"],
    ["**Endurance testing**", "Constant, for a long time", "Does it stay stable?", "**stability over a time frame · no resource capacity problems**"],
    ["**Concurrency testing**", "Many identical actions at one instant", "What breaks when everyone acts at once?", "**specific actions occur simultaneously**"],
    ["**Capacity testing**", "Increasing until the objective breaks", "How many, exactly?", "**how many users and/or transactions · and still meet the stated performance objectives**"],
  ] } });

  B.push({ box: { kind: "ok", title: "The four-option block used by the official exam", body: "**(a)** loads **gradually increased to reach the expected maximum** → **LOAD**.  **(b)** loads **at or beyond the expected peak load** → **STRESS**.  **(c)** **meet future efficiency requirements** → **SCALABILITY**.  **(d)** **respond to quick and extreme changes in load** → **SPIKE**. Learn these four as one unit and both PTFL-1.2 marks are automatic." } });

  B.push({ table: { title: "3.2 Reverse lookup — symptom to type", head: ["A stem that says…", "…is asking about"], widths: [8.0, 6.0], rows: [
    ["\"gradually increased\", \"expected maximum\", \"anticipated realistic\"", "**Load testing**"],
    ["\"at or beyond\", \"exceeds the specified workload\", \"reduced bandwidth or memory\"", "**Stress testing**"],
    ["\"future\", \"grow\", \"more users later\", \"larger amounts of data stored\"", "**Scalability testing**"],
    ["\"sudden burst\", \"quick and extreme change\", \"returns to a steady state\", \"transient state\"", "**Spike testing**"],
    ["\"over a long period\", \"memory leak\", \"thread pool\", \"gradual degradation\", \"breaking point\"", "**Endurance testing**"],
    ["\"at the same time\", \"simultaneously\", \"all log in at once\", \"hard to reproduce\"", "**Concurrency testing**"],
    ["\"how many users\", \"how many transactions\", \"and still meet the objectives\"", "**Capacity testing**"],
  ] } });

  B.push({ table: { title: "3.3 Static versus dynamic — the K1 answer key", head: ["Activity", "Type", "Level"], widths: [8.2, 2.4, 3.4], rows: [
    ["Review of **requirements** for **performance aspects and risks**", "**Static**", "Any / early"],
    ["Review of **database schemas, ERDs, metadata, stored procedures, queries**", "**Static**", "Any / early"],
    ["Review of the **system and network architecture**", "**Static**", "Any / early"],
    ["Review of **critical segments of the system code** (complex algorithms)", "**Static**", "Any / early"],
    ["**Profiling** for potential bottlenecks; **dynamic analysis** of resource utilization", "**Dynamic**", "**Unit testing**"],
    ["**Key use cases and workflows**; integrating features or the workflow **backbone**", "**Dynamic**", "**Component integration testing**"],
    ["**End-to-end behaviors under various load conditions**", "**Dynamic**", "**System testing**"],
    ["**Data flows and workflows across key inter-system interfaces** (the \"user\" may be another system)", "**Dynamic**", "**System integration testing**"],
    ["**Building user, customer and operator confidence**; **fine tuning under real world conditions**", "**Dynamic**", "**Acceptance testing**"],
  ] } });

  B.push({ table: { title: "3.4 Load generation — the selection grid", head: ["Approach", "Choose it when", "Reject it when"], widths: [3.0, 5.5, 5.5], rows: [
    ["**User interface**", "Few users · clients available · **end-to-end representativeness** matters · pairing with **functional test execution tools**", "Many users needed · the **UI changes frequently** (repeatability and maintenance cost)"],
    ["**Crowds**", "**Many real testers** available · application **reachable from anywhere** · **many device types and configurations** wanted", "**Reproducibility and precision** are required · organising effort is a constraint"],
    ["**API**", "**The UI is likely to change** but transactions must be processed **as if entered via the UI** · more users needed than the UI allows", "The test must exercise the **UI layer itself**"],
    ["**Captured communication protocols**", "**Very large numbers of users**, **repeatable and reliable** · tool-based recording and replay", "Correlation/parameterization effort is unaffordable (see PTFL-4.2.7)"],
  ] } });

  B.push({ table: { title: "3.5 Failure modes — cause to symptom, and back", head: ["If the cause is…", "…the symptom is", "Failure mode"], widths: [5.4, 4.6, 4.0], rows: [
    ["Bad **database design or implementation**; **network latency**; **other background loads**", "Unacceptable response **at every load level**", "**Slow response under all load levels**"],
    ["**Saturation of one or more resources**; **varying background loads**", "Response degrades **within normal, expected ranges**", "**Slow response under moderate-to-heavy load**"],
    ["**Memory leaks**; **disk fragmentation**; **increasing network load**; **file repository growth**; **unexpected database growth**", "Response degrades **gradually or severely over time**", "**Degraded response over time**"],
    ["**Insufficient resource pools**; **undersized queues and stacks**; **too rapid time-out settings**", "Response time **acceptable** but **error handling degrades**", "**Inadequate or graceless error handling**"],
  ] } });

  B.push({ table: { title: "3.6 One-line answer to every learning objective", head: ["LO", "If you remember only one sentence"], widths: [2.0, 12.0], rows: [
    ["**PTFL-1.1.1**", "Performance efficiency is an **ISO 25010 non-functional characteristic** with **time behavior, resource utilization and capacity**; of the five principles the exam picks **reproducibility — statistically identical results within a specified tolerance on an unchanged system**."],
    ["**PTFL-1.2.1**", "Eight types; the exam rotates four — **load = anticipated maximum · stress = at or beyond · scalability = future · spike = sudden burst then steady state**."],
    ["**PTFL-1.3.1**", "**Static** = four kinds of review, and it matters **more** here than in functional testing because defects come from **architecture and design**. **Dynamic** = one opportunity per test level, and **unit testing means profiling and resource utilization**."],
    ["**PTFL-1.4.1**", "Four ways to generate load; **API when the UI will change but transactions must behave as if entered via the UI**, and the **protocol level is one level below the API level**."],
    ["**PTFL-1.5.1**", "Four failure modes discriminated by **when** they appear: **always · only under load · over time · only in the error handling** — a **memory leak** is always **over time**."],
  ] } });

  return B;
};
