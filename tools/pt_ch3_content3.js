// CT-PT Chapter 3 — Sections 5 to 7
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ p: "The ISTQB Exam Structure Table for CT-PT allocates Chapter 3 **seven questions**. **PTFL-3.2 receives three** and **PTFL-3.1 receives two**; the two **K4** objectives receive one each. There is **no selectable group**, so all four objectives appear on every paper." });
  B.push({ table: { head: ["LO", "K", "Questions", "Points", "Sample Exam #", "Format used officially"], widths: [2.0, 0.8, 1.6, 1.3, 2.2, 6.1], rows: [
    ["PTFL-3.1", "K2", "**2**", "**2**", "#11, #12", "\"**When** should <task> occur?\" — name the activity that owns a task"],
    ["PTFL-3.2", "K2", "**3**", "**3**", "#13, #14, #15", "Two **multiple-selection** items (\"which of these environments…\") plus one **language** question"],
    ["PTFL-3.3", "**K4**", "**1**", "**1**", "#16", "Scenario — \"**when** is the best time to analyze and assess the performance risks?\""],
    ["PTFL-3.4", "**K4**", "**1**", "**1**", "#17", "Scenario — \"what is the **best way** to address the performance testing for the response time?\""],
    ["**Chapter 3 total**", "—", "**7**", "**7**", "**#11–#17**", "**17.5% of the paper · the first two K4 questions · 195 minutes of teaching**"],
  ] } });
  B.push({ box: { title: "The arithmetic before you sit the exam", body: "CT-PT is **40 questions worth 40 points in 90 minutes** (**113 minutes** with the 25% non-native-language allowance); the pass mark is **65% = 26 points**. Chapter allocation: **Ch1 = 6 · Ch2 = 4 · Ch3 = 7 · Ch4 = 20 · Ch5 = 3**. Chapter 3 delivers **7 marks for 195 minutes** — **2.2 marks per teaching hour**, the **lowest ratio in the syllabus**. Do not over-invest here at the expense of Chapter 4, which is worth nearly three times as much." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Risk identification placed in test analysis.** It belongs to **test planning**; **test analysis** analyses the **test basis** and decides **load levels, timing conditions, transactions and the type of performance test**.",
    "**Ordering test cases into procedures placed in test design.** Design creates **modular test cases**; **implementation orders them into procedures**.",
    "**Distributed or multi-tier offered for a connectivity question.** The official rationale is blunt: **these environments are not prone to connection dropping**. Connectivity means **mobile and embedded**.",
    "**Dynamic/cloud-based included in a memory-leak list.** Leaks may occur, but **the environment will scale to compensate**, so it is **less of a risk**.",
    "**Mainframe included in a memory-leak list.** **Older code, often written in higher level languages that provide their own memory management.**",
    "**Network latency or connectivity offered as the C++ versus Python difference.** They **would have the same issues regardless of the language used**. The answer is **memory use**.",
    "**A risk-timing option that names only some phases.** The K4 answer spans **requirements, development and performance testing** — **repeatedly**.",
    "**A single-technique answer to the K4 lifecycle question.** UI-only **leaves out the static testing**; API-only **bypasses UI issues and ignores database loading**; network-only is wrong because **the network is less likely an issue for such a large amount of data**.",
    "**Residual risk stated qualitatively.** \"**It's still possible for customers to experience long delays**\" **gives no idea of what amount of risk mitigation has occurred or of the level of risk that remains**.",
    "**Simulation permitted at the wrong level.** **System testing** allows simulated interfaces **provided that they give a true representation of performance**; **system integration testing** requires **the entire system**.",
    "**CI performance tests described as replacing the specialist team's tests.** They are a **subset**, because of **the short timeframe available for CI tests**.",
    "**The vendor made responsible for COTS performance.** For **COTS**, **the customer has sole responsibility to test the performance of the product in a realistic test environment prior to deployment**.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["Keyword in the stem", "Points toward"], widths: [7.2, 6.8], rows: [
    ["'risk identification', 'risk analysis', 'scope of performance testing', 'allocation of environments, data, tools and human resources'", "**Test planning** (PTFL-3.1.1)"],
    ["'control measures', 'action plans', 'exit criteria achievement', 'increasing the load generation capacity'", "**Test monitoring and control** (PTFL-3.1.1)"],
    ["'test basis', 'SLAs', 'IT architecture', 'process models', 'load levels, timing conditions and transactions', 'capacity planning tools'", "**Test analysis** (PTFL-3.1.1)"],
    ["'modular form', 'building blocks of larger, more complex performance tests'", "**Test design** (PTFL-3.1.1)"],
    ["'ordered into performance test procedures', 'resetting the test environment', 'data-driven', 'representative of actual production data in volume and type'", "**Test implementation** (PTFL-3.1.1)"],
    ["'conducted, often by using performance test tools', 'defects are reported'", "**Test execution** (PTFL-3.1.1)"],
    ["'test summary report', 'architects, managers, product owners', 'dashboards', 'archived or passed on', 'point of test closure'", "**Test completion** (PTFL-3.1.1)"],
    ["'entirely on one non-virtualized computer', 'background activities such as security software', 'disk fragmentation', 'operating system mismanagement'", "**Single computer systems** (PTFL-3.2.1)"],
    ["'database server, application server, presentation server', 'non-scalable database design', 'network bottlenecks'", "**Multi-tier systems** (PTFL-3.2.1)"],
    ["'servers may change dynamically', 'unreliable or unpredictable remote servers', 'geographic location'", "**Distributed systems** (PTFL-3.2.1)"],
    ["'physical hardware hosts multiple virtual computers', 'host virtual machine', 'excessive load across all the virtual machines'", "**Virtualized systems** (PTFL-3.2.1)"],
    ["'scale on demand', 'self-scaling features', 'initial setup or subsequent updates'", "**Dynamic / cloud-based systems** (PTFL-3.2.1)"],
    ["'public Wi-Fi', 'firewalls', 'packet inspection', 'server load balancing'", "**Client-server systems** (PTFL-3.2.1)"],
    ["'battery life', 'charge state', 'temperature', 'accelerometers', 'Bluetooth'", "**Mobile applications** (PTFL-3.2.1)"],
    ["'elevators', 'traffic signals', 'HVAC', 'intelligent braking systems', 'catastrophic'", "**Embedded real-time systems** (PTFL-3.2.1)"],
    ["'decades-old', 'data center', 'now accessible via APIs, web services, or through their database'", "**Mainframe applications** (PTFL-3.2.1)"],
    ["'C and C++', 'direct heap memory management', 'allocated but not de-allocated'", "**Memory use monitoring** — the non-architectural risk (PTFL-3.2.1)"],
    ["'likelihood and impact', 'clearly defined criteria', 'adequately mitigated prior to release'", "**The four-step risk process** (PTFL-3.3.1)"],
    ["'financial and/or reputational damage', 'civil or criminal legal liability', 'safety-criticality'", "**Business stakeholders — impact** (PTFL-3.3.1)"],
    ["'architecture, design, and implementation decisions'", "**Technical stakeholders — likelihood** (PTFL-3.3.1)"],
    ["'many-to-many joins', 'experienced database engineers', 'prior to database implementation'", "**Static review predicts what dynamic testing would only reveal late** (PTFL-3.3.1)"],
    ["'percentage of customers likely to experience delays equal to or exceeding certain thresholds'", "**Residual risk stated well** (PTFL-3.3.1)"],
    ["'acceptance criteria defined at the outset', 'each successive activity based on prior activities'", "**Sequential ideal practice** (PTFL-3.4.1)"],
    ["'interfaces may be simulated provided they give a true representation of performance'", "**System testing** (PTFL-3.4.1)"],
    ["'available on demand, such as a cloud-based performance test environment', 'subset of more extensive tests', 'ensure a change does not negatively impact performance'", "**CI concerns** (PTFL-3.4.1)"],
    ["'non-functional user stories', 'tuning of algorithms', 'dedicated iteration for performance testing'", "**Iterative lifecycle activities** (PTFL-3.4.1)"],
    ["'COTS', 'sole responsibility', 'realistic test environment prior to deployment'", "**Supplier/acquirer models** (PTFL-3.4.1)"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**Multiple-selection questions are decided by exclusions, not inclusions.** For the memory-leak item, the fastest route is to strike **dynamic/cloud-based** (**scales to compensate**) and **mainframe** (**higher level languages with their own memory management**). What remains is the answer.",
    "**Two activities are offered as one option.** \"Test analysis and design\" and \"test implementation and execution\" appear as single options. Read them as pairs and decide whether the task belongs to **either** half.",
    "**The K4 questions share a scenario with Chapter 4.** Questions #16 and #17 use the **health-records** scenario that returns for **#18–#21, #26–#28, #31 and #37**. Read it once, carefully, and note the two hard facts: **millions of records** and **three seconds, particularly for critical allergies and preconditions**.",
    "**\"Best way\" questions reward combinations.** In a K4 lifecycle question, an answer naming **one technique** is usually incomplete against one naming **a static review plus a dynamic test**.",
    "**Do not assume every architecture carries every risk.** The syllabus is specific about which risks it names for which architecture, and the official rationales are equally specific about the exclusions.",
    "**Chapter 3 is the worst points-per-hour chapter.** Budget accordingly: learn the architecture grid and the activity map thoroughly, and read the lifecycle sections once carefully rather than three times.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ul: [
    "Strike any option that puts **risk identification** anywhere but **test planning**, or **procedure ordering** anywhere but **implementation**.",
    "Strike any connectivity list that includes anything other than **mobile** and **embedded**.",
    "Strike any memory-leak list that includes **dynamic/cloud-based** or **mainframe**.",
    "Strike any language-comparison option that names something **the same in both languages** — latency, connectivity, batch processing.",
    "Strike any risk-timing option that **omits a lifecycle phase**.",
    "Strike any lifecycle-approach option that offers **only dynamic testing** when an option offering **static plus dynamic** exists.",
    "Strike any residual-risk statement without **numbers or thresholds**.",
    "Strike any option making the **vendor** responsible for validating **COTS** performance.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ ul: [
    "**Activity questions:** ask **what is being produced?** A plan and a risk list → **planning**. A decision about test types and conditions → **analysis**. A modular test case → **design**. An ordered procedure and a reset environment → **implementation**. A running test and a defect report → **execution**. A summary report and archived testware → **completion**. An action plan for a hardware change → **monitoring and control**.",
    "**Architecture questions:** ask **where does the code run and what does it depend on?** On one box → single computer. On several servers with fixed roles → multi-tier. On servers that change → distributed. On shared hardware → virtualized. On elastic infrastructure → cloud. Across a network to a client with its own code → client-server. On a battery → mobile. In a machine that could hurt someone → embedded. In a data center, decades old, now exposed via APIs → mainframe.",
    "**K4 risk-timing questions:** the correct option almost always contains the word **repeatedly** or spans **requirements through testing**.",
    "**K4 approach questions:** look for the option that does **something early and cheap** (a review) **and something late and thorough** (a full-data test).",
  ] });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Studying the seven activities as definitions rather than as **task ownership**. The exam never asks what test planning is; it asks **which activity a named task belongs to**.",
    "Learning the nine architectures as descriptions without their **named risks**. Both official multiple-selection questions are pure risk-attribution.",
    "Forgetting the **non-architectural** risks — **C/C++ heap management**, **relational versus non-relational**, **recursive versus iterative** — even though one of the three PTFL-3.2 marks was spent there.",
    "Treating the K4 questions as harder versions of K2 questions. They are **scenario questions**, and their answers turn on **breadth** (all phases) and **combination** (static plus dynamic), not on obscure facts.",
    "Confusing **impact** and **likelihood** ownership. **Business stakeholders influence impact; technical stakeholders influence likelihood.**",
    "Over-investing in Chapter 3. At **2.2 marks per teaching hour**, it has the **lowest return in the syllabus** — learn it well, but not at Chapter 4's expense.",
    "Missing that **test monitoring and control** is where **exit criteria** are evaluated, not test completion.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Unpacks to"], widths: [4.4, 9.6], rows: [
    ["**P-M-A-D-I-E-C** (\"**P**lan, **M**onitor, **A**nalyse, **D**esign, **I**mplement, **E**xecute, **C**lose\")", "The seven principal activities in ISTQB test-process order. Ownership: **P** owns risk analysis and scope · **M** owns control measures and exit criteria · **A** owns the test basis, test conditions and test type · **D** owns modular test cases · **I** owns procedures, environment reset and production-like data · **E** owns the run and the defects · **C** owns the summary report, aggregation, dashboards and archiving."],
    ["**\"Plan the risk, implement the procedure\"**", "The two official PTFL-3.1 answers in one phrase."],
    ["**S-M-D-V-C-C-M-E-M**", "The nine architectures in syllabus order: **S**ingle computer · **M**ulti-tier · **D**istributed · **V**irtualized · **C**loud/dynamic · **C**lient-server · **M**obile · **E**mbedded · **M**ainframe."],
    ["**\"Mobiles and machines lose signal\"**", "**Connectivity risk = mobile + embedded.** Nothing else."],
    ["**\"Leaks where memory is shared, small, or hand-managed\"**", "**Memory-leak risk = virtualized (shared) + mobile (small) + client-server and embedded (C/C++, hand-managed).** Excluded: **cloud** (scales to compensate) and **mainframe** (managed memory)."],
    ["**\"C counts, Python doesn't\"**", "**C and C++ allow direct heap memory management**, so **memory use** must be monitored. Latency, connectivity and batch processing are language-independent."],
    ["**I-A-M-M** (\"**I A**ssess, **M**itigate, **M**anage\")", "The four risk steps: **I**dentify (time behavior, resource utilization, capacity) · **A**ssess (architecture categories; likelihood and impact; clearly defined criteria) · **M**itigate (nature of the item, level of risk) · **M**anage (ongoing, adequately mitigated **prior to release**)."],
    ["**\"Business brings impact, technical brings likelihood\"**", "The stakeholder split in **PTFL-3.3.1**, and the reason both groups are mandatory."],
    ["**\"Early and often, because risks move\"**", "The K4 answer pattern: **started early and repeated regularly**, because **risks may change both in impact and likelihood**."],
    ["**\"Review first, then load\"**", "The K4 approach pattern: **a technical review at design time** plus **a full-data performance test after implementation**."],
    ["**\"Verify four, conduct four, validate one\"**", "The nine sequential phases: **verify** at concept, requirements, analysis and design, and coding · **conduct** at component, component integration, system and system integration · **validate** at acceptance."],
    ["**\"Cloud, subset, no-regression, slices\"**", "The four CI concerns: **on-demand cloud environment** · **which tests to automate (a subset)** · **tests whose objective is that a change does not negatively impact performance** · **executing on portions of the system with selectable subsets**."],
  ] } });

  B.push({ h2: "5.9 Chapter 3 mind map" });
  B.push({ p: "**CHAPTER 3 — Performance Testing in the Software Lifecycle · 195 minutes · 7 exam marks · K2 = 5, K4 = 2 · all objectives guaranteed**" });
  B.push({ table: { head: ["Branch", "Node (K)", "Everything hanging off it"], widths: [2.4, 3.4, 8.2], rows: [
    ["**3.1** Principal activities", "**3.1.1** Principal performance testing activities (K2) — **2 marks**",
     "**Iterative in nature** — each test's insights **correct or optimize parameters** until **test objectives are reached** · **aligns with the ISTQB test process** · **test planning** (**allocation of environments, data, tools, human resources**; **scope established**; **risk identification and analysis completed**; risks revisited) · **test monitoring and control** (**control measures / action plans** for **load generation capacity, hardware, network components, software implementation**; **exit criteria achievement**) · **test analysis** (**test basis**: requirements, objectives, **SLAs**, **IT architecture**, process models; **spreadsheets or capacity planning tools**; **load levels, timing conditions, transactions**; **the type of performance test is decided**) · **test design** (**modular** cases as **building blocks**) · **test implementation** (**ordered into procedures**; **environment reset before each execution**; **production-representative data in volume and type**) · **test execution** (conducted **often using performance test tools**; **defects reported**) · **test completion** (**test summary report** to **architects, managers, product owners**; **aggregated metrics**; **dashboards**; **test closure** archives **tests, tool assets, data and testware** for **maintenance**) · **ongoing at all test levels**"],
    ["**3.2** Architecture risks", "**3.2.1** Categories of performance risks for different architectures (K2) — **3 marks**",
     "**Performance varies by architecture, application and host environment**; **no complete list is possible** · **single computer** (**excessive resource consumption**: memory leaks, **background security software**, slow storage, **disk fragmentation**, **OS mismanagement**; **inefficient algorithms not using available resources**) · **multi-tier** (**poor or non-scalable database design**, **network bottlenecks**, **inadequate bandwidth or capacity on any single server**) · **distributed** (**servers change dynamically**; **unreliable or unpredictable remote servers**, **periodic connection problems**, **intermittent intense load**) · **virtualized** (**excessive load across all VMs**; **improper host VM configuration**) · **dynamic/cloud** (**self-scaling mitigates**, but **misconfiguration at setup or update**) · **client-server** (client code carries single-computer risks; **connection speed and reliability**, **public Wi-Fi congestion**, **firewalls, packet inspection, load balancing**) · **mobile** (**location, battery life, charge state, memory, temperature**; **accelerometers, Bluetooth**; **heavy interaction with local apps and remote web services**) · **embedded real-time** (**cars, elevators, traffic signals, HVAC**; **connectivity via IoT**; **slowdowns can be catastrophic**) · **mainframe** (**predictable as designed**, but **APIs, web services and database access bring unexpected loads**) · **architectures combine — all relevant risks apply** · **non-architectural risks**: **C/C++ heap management**, **relational vs non-relational**, **recursive vs iterative**"],
    ["**3.3** Risks across the SDLC", "**3.3.1** Analyze performance risks across the lifecycle (**K4**) — **1 mark**",
     "**Four steps**: **identify** (time behavior, resource utilization, capacity) → **assess** (**relevant architecture categories**; **likelihood and impact**; **clearly defined criteria**) → **mitigate** (**nature of the risk item and the level of risk**) → **manage** (**ongoing**, **adequately mitigated prior to release**) · **both business and technical stakeholders**: business must appreciate **intended usage, business/societal/safety criticality, financial and reputational damage, civil or criminal legal liability** → **impact**; technical must appreciate **requirements, architecture, design and implementation decisions** → **likelihood** · **appropriate formality and rigor** · **started early, repeated regularly** · **do not rely on late system and system integration testing** · **many-to-many joins** example: **only revealed in dynamic testing with large datasets**, but **predictable by technical review with experienced database engineers** · **mitigation spans the entire development process** — e.g. **design for highly variable scalability (on-demand cloud) when volumes cannot be specified early** · **residual risk always exists** and must be **realistic and specific** — **percentage of customers exceeding thresholds**, not \"it's still possible\""],
    ["**3.4** Lifecycle activities", "**3.4.1** Determine appropriate activities per lifecycle phase (**K4**) — **1 mark**",
     "**Sequential** — ideal practice: **performance criteria as acceptance criteria at the outset**, activities **throughout the lifecycle**, each **based on prior activities** · nine phases: **concept** (goals as acceptance criteria) · **requirements** (defined and representing stakeholder needs) · **analysis and design** (design reflects requirements) · **coding** (code efficient, reflects requirements and design) · **component** · **component integration** · **system** (**hardware, software, procedures and data representative of production**; **interfaces may be simulated if they give a true representation of performance**) · **system integration** (**entire system, representative of production**) · **acceptance** (**validate against originally stated user needs and acceptance criteria**) · **iterative/incremental** — first iteration or a **dedicated performance iteration**; **execution may be by a separate team** · **CI**: objective is **regression and build stability**; four extra concerns — **on-demand cloud environment**, **which tests to automate (a subset, short timeframe, specialist team elsewhere)**, **tests to ensure a change does not negatively impact performance**, **execution on portions with selectable subsets** · **seven iterative activities**: **release planning · iteration planning · user story creation (non-functional stories) · design of performance tests · coding (algorithm tuning) · testing/evaluation (possibly a dedicated iteration) · delivery (monitor in production)** · **COTS / supplier-acquirer**: testing needed **from both perspectives**; **the customer usually validates**; **contract** for customized vendor software; **sole customer responsibility** for COTS, **in a realistic test environment prior to deployment**"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the BACK row and recall it from the FRONT. All 45 cards are drawn from Chapter 3 of the CT-PT 2018 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["Describe the iterative nature of performance testing.",
     "**Each test provides valuable insights**; information from one test is used to **correct or optimize application and system parameters**; the next iteration **shows the results of modifications**, and so on **until test objectives are reached**."],
    ["Which process do performance testing activities align with?",
     "**The ISTQB test process.**"],
    ["Why is test planning particularly important for performance testing?",
     "Because of the need for the **allocation of test environments, test data, tools and human resources**. It is also where **the scope of performance testing is established**."],
    ["Which activity completes risk identification and risk analysis?",
     "**Test planning.** Relevant information is updated in test planning documentation (e.g., **test plan, level test plan**), and **risks, risk levels and risk status are modified** as conditions change."],
    ["Name the four control measures listed under test monitoring and control.",
     "**Increasing the load generation capacity** if the infrastructure does not generate the desired loads · **changed, new or replaced hardware** · **changes to network components** · **changes to software implementation**."],
    ["Where are the performance test objectives evaluated for exit criteria achievement?",
     "**Test monitoring and control.**"],
    ["What does test analysis analyse, and what does it decide?",
     "It analyses **performance requirements, test objectives, SLAs, IT architecture, process models and other test basis items** — possibly using **spreadsheets or capacity planning tools** — and identifies **load levels, timing conditions and transactions to be tested**. **The required type(s) of performance test are then decided.**"],
    ["How are performance test cases generally created during test design?",
     "**In modular form**, so they can be used as the **building blocks of larger, more complex performance tests**."],
    ["What happens during test implementation?",
     "**Performance test cases are ordered into performance test procedures** reflecting **the steps normally taken by the user**; the **test environment is established and/or reset before each execution**; and **test data representative of actual production data in volume and type** is established."],
    ["What is produced at test completion, and for whom?",
     "A **test summary report** for stakeholders such as **architects, managers and product owners**, with results **expressed through metrics which are often aggregated**, and often presented via **dashboards**."],
    ["What is the point of test closure?",
     "The stage where **designed tests, test tool assets (test cases and test procedures), test data and other testware are archived or passed on to other testers for later use during system maintenance activities**."],
    ["At which test levels is performance testing performed?",
     "It is an **ongoing activity performed at multiple times and at all test levels — component, integration, system, system integration and acceptance testing**."],
    ["Define a single computer system and name its two risk categories.",
     "A system or application that runs **entirely on one non-virtualized computer**. Risks: **excessive resource consumption** (memory leaks, **background activities such as security software**, slow storage subsystems, **disk fragmentation**, **operating system mismanagement**) and **inefficient implementation of algorithms** that **do not make use of available resources** and so **execute slower than required**."],
    ["Name the multi-tier system risks.",
     "**Poor or non-scalable database design · network bottlenecks · inadequate bandwidth or capacity on any single server** — plus **all the single-computer risks per server**."],
    ["What distinguishes a distributed system, and what extra risk does it carry?",
     "**The various servers may change dynamically** (e.g., **different inventory databases depending on geographic location**). Extra risk: **critical workflows or dataflows to, from, or through unreliable or unpredictable remote servers**, especially with **periodic connection problems or intermittent periods of intense load**."],
    ["Name the two virtualization-specific risks.",
     "**Excessive load on the hardware across all the virtual machines**, and **improper configuration of the host virtual machine resulting in inadequate resources**."],
    ["What risk do dynamic / cloud-based systems carry despite their self-scaling features?",
     "**Failures to properly configure these features during initial setup or subsequent updates.**"],
    ["Name the client-server risks beyond the single-computer risks of client-side code.",
     "**Connection speed and reliability issues · network congestion at the client connection point (e.g., public Wi-Fi) · potential problems due to firewalls, packet inspection and server load balancing.**"],
    ["Which five factors affect the limited and variable resources and connectivity of a mobile device?",
     "**Location · battery life · charge state · available memory on the device · temperature.**"],
    ["What extra mobile risks arise from sensors and integrations?",
     "**Slow dataflows** from **device sensors or radios such as accelerometers or Bluetooth**, and **heavy interactions with other local mobile apps and remote web services**, any of which can become a **performance efficiency bottleneck**."],
    ["How do embedded real-time systems differ from mobile in risk consequence?",
     "They share many risks including **connectivity**, but **the diminished performance of a mobile video game is usually not a safety hazard, while such slowdowns in a vehicle braking system could prove catastrophic**."],
    ["Give three examples of embedded real-time systems from the syllabus.",
     "Any three of: **cars (entertainment systems and intelligent braking systems) · elevators · traffic signals · HVAC systems**."],
    ["What is the modern performance risk for mainframe applications?",
     "**Many are now accessible via APIs, web services, or through their database, which can result in unexpected loads that affect throughput of established applications.**"],
    ["Which environments are most likely to have connectivity risk?",
     "**Mobile and embedded** — **particularly when embedded software is used in IoT devices**."],
    ["Which environments are most likely to have memory-leak risk, and which two are excluded?",
     "**Virtualized · client/server and browser-based · mobile · embedded.** Excluded: **dynamic/cloud-based** (**the environment will scale to compensate**) and **mainframe** (**older code in higher level languages that provide their own memory management**)."],
    ["What must you monitor for C++ that you would not for Python, and why?",
     "**Memory use** — **C and C++ require the programmer to do their own memory management, which sometimes results in memory leaks (where memory is allocated, but not de-allocated)**."],
    ["Name the three non-architectural technical decisions that create performance risk.",
     "**Languages allowing direct heap memory management (C, C++)** · **relational versus non-relational databases** · **the choice of a recursive as opposed to an iterative algorithm**."],
    ["What happens when an application incorporates two or more architectures?",
     "**All relevant risks will apply.** With **IoT and mobile**, **it is possible that all architectures are present in some form and thus all risks can apply**."],
    ["List the four steps of the performance risk process.",
     "**1 Identify** risks to product quality (time behavior, resource utilization, capacity) · **2 Assess**, addressing the relevant architecture categories and evaluating **likelihood and impact using clearly defined criteria** · **3 Mitigate** based on the **nature of the risk item and the level of risk** · **4 Manage on an ongoing basis** to ensure risks are **adequately mitigated prior to release**."],
    ["What must business stakeholders appreciate?",
     "That **intended usage, business-, societal-, or safety-criticality, potential financial and/or reputational damage, civil or criminal legal liability** and similar factors **create risks and influence the impact of failures**."],
    ["What must technical stakeholders appreciate?",
     "That **architecture, design, and implementation decisions affect performance risks from a technical perspective, creating risks and influencing the likelihood of defects**."],
    ["What is the syllabus's guidance on the timing of performance risk analysis?",
     "It must be **started early and repeated regularly**; **the tester should avoid relying entirely on performance testing conducted towards the end of the system test level and system integration test level**."],
    ["Give the many-to-many join example.",
     "**Slow performance of many-to-many joins due to poor database design may only reveal itself during dynamic testing with large-scale test datasets, such as those used during system test. However, a careful technical review that includes experienced database engineers can predict the problems prior to database implementation.**"],
    ["What should be done when transaction volumes or simultaneous-user counts cannot be specified early?",
     "**Design and architecture decisions should allow for highly variable scalability (e.g., on-demand cloud-based computing resources)**, which **enables early risk mitigation decisions to be made**."],
    ["How should residual risk be communicated?",
     "As a **realistic and specific evaluation** — e.g., **the percentage of customers likely to experience delays equal to or exceeding certain thresholds**, not \"**yes, it's still possible for customers to experience long delays**\"."],
    ["What is ideal practice for performance testing in sequential models?",
     "**Include performance criteria as part of the acceptance criteria which are defined at the outset of a project**, and **conduct performance testing activities throughout the software development lifecycle**, each activity **based on items defined in the prior activities**."],
    ["What are the performance activities at the concept and requirements phases?",
     "**Concept: verify that system performance goals are defined as acceptance criteria for the project.** **Requirements: verify that performance requirements are defined and represent stakeholder needs correctly.**"],
    ["What is permitted at system testing that is not permitted at system integration testing?",
     "At **system testing**, **system interfaces may be simulated provided that they give a true representation of performance**. At **system integration testing**, performance testing is conducted **with the entire system which is representative of the production environment**."],
    ["What is the activity at acceptance testing, and which verb does the syllabus use?",
     "**Validate** that **system performance meets the originally stated user needs and acceptance criteria**."],
    ["How can performance testing be organised in iterative and incremental models?",
     "**As part of the first iteration, or as an iteration dedicated entirely to performance testing** — and **execution may be performed by a separate team tasked with performance testing**."],
    ["What is the most common objective of testing in CI, and what is the objective of CI performance tests?",
     "CI's most common objective is **regression testing and ensuring each build is stable**. The main objective of **CI performance tests** is **to ensure a change does not negatively impact performance**."],
    ["List the four additional CI concerns for performance testing.",
     "**Setup of the performance test environment** (often needs an **on-demand, cloud-based** environment) · **determining which performance tests to automate** (a **subset**, given the **short timeframe**) · **creating the tests** (**new tests may be required** depending on the build's changes) · **executing on portions of the application or system** (needs **rapid testing** and **selectable subsets**)."],
    ["Name the seven iterative lifecycle activities.",
     "**Release planning · iteration planning · user story creation · design of performance tests · coding/implementation · testing/evaluation · delivery.**"],
    ["What are \"non-functional\" user stories?",
     "User stories that **form the basis of performance requirements in Agile methodologies**, with the **specific performance criteria described in the associated acceptance criteria**."],
    ["Who is responsible for performance in COTS and supplier/acquirer models?",
     "**Regardless of the source, it is often the responsibility of the customer to validate that the performance meets their requirements.** For **customized vendor-developed software**, criteria **should be specified as part of the contract**. For **COTS**, **the customer has sole responsibility to test the performance of the product in a realistic test environment prior to deployment**."],
  ] });

  // ================= SECTION 7 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });

  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ box: { title: "Chapter 3 — Performance Testing in the Software Lifecycle", body: "**Performance testing is iterative**: each test's insights **correct or optimize application and system parameters** until **test objectives are reached**, and its activities **align with the ISTQB test process**. **Test planning** — particularly important because of the **allocation of environments, data, tools and human resources** — is where **the scope is established** and where **risk identification and analysis are completed**. **Test monitoring and control** defines **action plans** for load-generation shortfalls, hardware, network and software changes, and **evaluates exit criteria**. **Test analysis** works from the **test basis** — requirements, objectives, **SLAs**, **IT architecture**, process models — to identify **load levels, timing conditions and transactions**, and **decides the type of performance test**. **Test design** produces **modular** cases as **building blocks**; **test implementation** orders them into **procedures**, **resets the environment** and establishes **production-representative data**; **test execution** runs and reports; **test completion** issues the **test summary report** with **aggregated metrics** and **dashboards**, and **archives testware at test closure**. Nine **architectures** each carry named risks: **single computer** (excessive resource consumption, inefficient algorithms) · **multi-tier** (database design, network bottlenecks, server capacity) · **distributed** (**unreliable remote servers**, dynamic server membership) · **virtualized** (**load across all VMs**, host misconfiguration) · **dynamic/cloud** (**self-scaling misconfiguration**) · **client-server** (**connection speed, public Wi-Fi, firewalls, packet inspection, load balancing**) · **mobile** (**location, battery, charge state, memory, temperature**, sensors, app and web-service interactions) · **embedded real-time** (mobile risks, but **catastrophic** rather than annoying) · **mainframe** (**newly exposed via APIs, web services and the database**). **Connectivity risk means mobile and embedded**; **memory-leak risk means virtualized, client-server, mobile and embedded** — cloud **scales to compensate** and mainframes use **managed-memory languages**. Risk is not only architectural: **C and C++ allow direct heap memory management**, **relational and non-relational databases behave differently**, and even **recursive versus iterative algorithms** matter. Across the lifecycle, the process is **identify → assess → mitigate → manage**, with **business stakeholders influencing impact** and **technical stakeholders influencing likelihood**; it must be **started early and repeated regularly**, because **risks change in both impact and likelihood** — the **many-to-many join** example shows a defect that surfaces only at **system test** yet is **predictable by technical review**. **Residual risk always remains** and must be given **thresholds and percentages**, not reassurance. Finally, lifecycle models shape the work: **sequential** has **nine phases — verify four, conduct four, validate one**, with **simulation permitted only at system testing**; **iterative** adds **seven activities** and **four CI concerns**, with performance criteria carried in **non-functional user stories**; and **COTS** places **sole responsibility on the customer** to test **in a realistic test environment prior to deployment**." } });

  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ ul: [
    "**Test planning** — establishes the **scope**, allocates **environments, data, tools and human resources**, and completes **risk identification and analysis**.",
    "**Test monitoring and control** — defines **control measures / action plans** and evaluates **exit criteria achievement**.",
    "**Test analysis** — analyses the **test basis**, identifies **test conditions** (load levels, timing conditions, transactions) and **decides the performance test type**.",
    "**Test implementation** — orders test cases into **procedures**, **resets the environment**, establishes **production-representative test data**.",
    "**Test completion** — **test summary report**, **aggregated metrics**, **dashboards**, **testware archived at the point of test closure**.",
    "**Connectivity-risk architectures** — **mobile** and **embedded**.",
    "**Memory-leak-risk architectures** — **virtualized**, **client-server and browser-based**, **mobile**, **embedded**.",
    "**The four-step risk process** — **identify · assess · mitigate · manage**.",
    "**Residual risk** — always exists; must be a **realistic and specific evaluation**, ideally **percentages against thresholds**.",
    "**Non-functional user story** — an Agile story whose **performance criteria live in its acceptance criteria**.",
  ] });

  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ table: { head: ["Priority", "Concept", "LO", "Marks"], widths: [1.6, 9.0, 2.2, 1.2], rows: [
    ["★★★", "The nine architectures with their **named** risks, plus the **connectivity** and **memory-leak** groupings", "PTFL-3.2.1", "**3**"],
    ["★★★", "Which of the seven activities owns which task — especially **planning owns risk, implementation owns procedures**", "PTFL-3.1.1", "**2**"],
    ["★★★", "The K4 timing answer: **repeatedly throughout requirements, development and performance testing**", "PTFL-3.3.1", "1"],
    ["★★★", "The K4 approach answer: **technical review plus full-data performance test**", "PTFL-3.4.1", "1"],
    ["★★", "The **C/C++ versus Python** memory-management distinction", "PTFL-3.2.1", "—"],
    ["★★", "**Business = impact · technical = likelihood**", "PTFL-3.3.1", "—"],
    ["★★", "The nine sequential phases — **verify, conduct, validate** — and where **simulation** is allowed", "PTFL-3.4.1", "—"],
    ["★", "The four CI concerns and the seven iterative activities", "PTFL-3.4.1", "—"],
    ["★", "COTS: **sole customer responsibility, realistic environment, prior to deployment**", "PTFL-3.4.1", "—"],
  ] } });

  B.push({ h2: "7.4 Last-minute revision sheet" });
  B.push({ ul: [
    "**7 of 40 questions · 7 of 40 points · K2 = 5, K4 = 2 · all guaranteed · 195 minutes of teaching.** Sample Exam questions **#11–#17**. **PTFL-3.2 is worth 3; PTFL-3.1 is worth 2.**",
    "**Activity ownership:** planning = **risk + scope + resources** · monitoring and control = **action plans + exit criteria** · analysis = **test basis + conditions + test type** · design = **modular cases** · implementation = **procedures + environment reset + production-like data** · execution = **run + defects** · completion = **summary report + aggregation + dashboards + archiving**.",
    "**Connectivity → mobile, embedded.** **Memory leaks → virtualized, client-server, mobile, embedded.** **Not cloud** (scales to compensate), **not mainframe** (managed-memory languages).",
    "**C/C++ → monitor memory use.** Latency, connectivity and batch processing are the same in any language.",
    "**Risk process:** identify (**time behavior, resource utilization, capacity**) → assess (**architecture categories; likelihood and impact; clearly defined criteria**) → mitigate (**nature and level**) → manage (**ongoing, prior to release**).",
    "**Business stakeholders → impact. Technical stakeholders → likelihood.**",
    "**Start early, repeat regularly.** Risks **change in both impact and likelihood**. Do not rely on **late system and system integration testing**.",
    "**Residual risk:** give **percentages against thresholds**, not \"it's still possible\".",
    "**Sequential:** verify at **concept, requirements, analysis and design, coding**; conduct at **component, component integration, system, system integration**; **validate** at **acceptance**. **Simulated interfaces are allowed only at system testing, and only if they give a true representation of performance.**",
    "**CI concerns:** **on-demand cloud environment · a subset of tests · tests that prove a change does not degrade performance · execution on portions with selectable subsets.**",
    "**COTS:** **the customer has sole responsibility**, **in a realistic test environment**, **prior to deployment**.",
  ] });

  B.push({ h2: "7.5 Memorization checklist" });
  B.push({ ol: [
    "I can name the four learning objectives and say which two are **K4** and which one is worth **three marks**.",
    "I can name the seven principal activities and the tasks each one owns.",
    "I can say which activity completes **risk identification and analysis** and which one **orders test cases into procedures**.",
    "I can list the nine architectures in syllabus order.",
    "I can give at least two named risks for each architecture.",
    "I can state which architectures carry **connectivity** risk and which carry **memory-leak** risk, with the reason for each exclusion.",
    "I can explain what must be monitored for **C++** that need not be for **Python**, and why.",
    "I can name the three **non-architectural** technical decisions that create performance risk.",
    "I can recite the **four-step** risk process with the content of each step.",
    "I can state which stakeholder group influences **impact** and which influences **likelihood**.",
    "I can quote the guidance on **timing** — started early, repeated regularly — and explain **why risks are re-assessed**.",
    "I can give the **many-to-many join** example and explain what it proves about static testing.",
    "I can state how **residual risk** should and should not be communicated.",
    "I can list the **nine sequential phases** with the correct verb for each.",
    "I can say where **simulated interfaces** are permitted and under what condition.",
    "I can list the **four CI concerns** and the **seven iterative activities**.",
    "I can state the responsibility split for **customized vendor software** and for **COTS**.",
  ] });

  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ box: { kind: "ok", title: "60-second mental checklist before answering any Chapter 3 question", body: "**1)** Which LO is this? (activities · architecture risks · risk across the lifecycle · lifecycle activities)  **2)** If it names a **task** and asks **when**, map it to one of the seven activities — **risk to planning, procedures to implementation, exit criteria to monitoring and control**.  **3)** If it lists **numbered environments**, work by **exclusion**: strike cloud and mainframe for memory leaks; strike everything but mobile and embedded for connectivity.  **4)** If it compares **languages**, ask whether the concern is language-dependent — only **memory management** is.  **5)** If it asks **when to analyse risk**, choose the option that spans **the whole lifecycle** and says **repeatedly**.  **6)** If it asks the **best way** to address a performance concern, choose the option pairing an **early static review** with a **later dynamic test**.  **7)** Check qualifiers — **representative of production**, **a true representation of performance**, **prior to deployment**, **prior to release**.  **8)** If two options survive, choose the one that repeats **syllabus wording**." } });
  B.push({ spacer: 200 });
  B.push({ lead: "Sources: ISTQB® Certified Tester Foundation Level Specialist Syllabus — Performance Testing, Version 2018 (9 December 2018), Chapter 3 and Keywords; ISTQB® CT-PT Sample Exam Questions and Sample Exam Answers, Version 2018 (9 December 2018); ISTQB® Exam Structure Tables v1.16 (CT-PT) and ISTQB® Exam Structures and Rules v1.2. All content is traceable to these references; no external knowledge was used." });

  return B;
};
