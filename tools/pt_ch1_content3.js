// CT-PT Chapter 1 — Sections 5 to 7
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ p: "The ISTQB Exam Structure Table for CT-PT allocates Chapter 1 **six questions**. Only **PTFL-1.2** receives two; the rest receive one each. There is **no selectable group**, so **all five objectives appear on every paper**." });
  B.push({ table: { head: ["LO", "K", "Questions", "Points", "Sample Exam #", "Format used officially"], widths: [2.0, 0.8, 1.6, 1.3, 2.0, 6.3], rows: [
    ["PTFL-1.1", "K2", "**1**", "**1**", "#1", "\"Which of the following is **an important principle**\" — one true statement among three near-misses"],
    ["PTFL-1.2", "K2", "**2**", "**2**", "#2, #3", "\"Which is the **best description** of X testing?\" — asked twice with an **identical option set**"],
    ["PTFL-1.3", "**K1**", "**1**", "**1**", "#4", "\"Which activity should occur **during unit testing**?\" — level mapping"],
    ["PTFL-1.4", "K2", "**1**", "**1**", "#5", "\"**When is it appropriate** to generate load via the API?\" — situation selection"],
    ["PTFL-1.5", "K2", "**1**", "**1**", "#6", "Cause given, symptom asked — \"what is the **likely result** you will see?\""],
    ["**Chapter 1 total**", "—", "**6**", "**6**", "**#1–#6**", "**15% of the paper, for 60 minutes of teaching — the best return per minute in the syllabus**"],
  ] } });
  B.push({ box: { title: "The arithmetic before you sit the exam", body: "CT-PT is **40 questions worth 40 points (one point each) in 90 minutes** (**113 minutes** with the 25% non-native-language allowance); the pass mark is **65% = 26 points**. Chapter allocation: **Ch1 = 6 · Ch2 = 4 · Ch3 = 7 · Ch4 = 20 · Ch5 = 3**. Teaching time: **Ch1 = 60 min · Ch2 = 55 · Ch3 = 195 · Ch4 = 475 · Ch5 = 90**. Chapter 1 gives **6 marks per teaching hour**; Chapter 4 gives **2.5**. Chapters 1 and 2 together are **10 of the 26 points you need**, from **115 minutes** of material." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**\"Tests should be easy to create and understand\"** offered as a principle — the syllabus says results must be **understandable**, and explicitly notes that **tests are sometimes quite complex to create**.",
    "**\"Tests should be executed in the production environment for accuracy\"** — tests should run in an environment **representative of** production. Only **PTFL-4.1.2** admits production as a last resort, **and only with the specific risks discussed**.",
    "**\"Results should match stakeholder expectations\"** — they must be **readily comparable to** expectations. A result that fails expectations is still a valid result.",
    "**Load and stress swapped.** _Gradually increased to the expected maximum_ is **load**; _at or beyond the expected peak_ is **stress**.",
    "**Spike and stress swapped.** Spike is about the **speed of change** and the **return to a steady state**; stress is about the **magnitude** and about **reduced resources**.",
    "**Scalability described as \"current\" capability** — scalability is always about **future efficiency requirements beyond those currently required**. \"How many can we take today\" is **capacity**.",
    "**Endurance described as \"long test\"** without the resource angle — endurance exists to catch **memory leaks, database connections and thread pools** that **degrade performance or cause failures at breaking points**.",
    "**Right activity, wrong test level.** Every distractor in the official K1 question is a genuine syllabus activity placed one level away from where it belongs.",
    "**Acceptance testing described as defect hunting** — it is **generally not** for finding performance defects.",
    "**Crowd testing described as API testing** — crowd testers **use the real UI**.",
    "**\"Small numbers of test instances\"** offered as a reason to use the API — the opposite is true: **many test instances can be created with API testing**.",
    "**Memory leak mapped to \"consistently slow\"** — a leak is always **degradation over time**.",
    "**\"Slow only under heavy load\"** offered for a memory leak — that is **resource saturation**, a different mode.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["Keyword in the stem", "Points toward"], widths: [7.2, 6.8], rows: [
    ["'time behavior', 'respond within a specified time', 'CPU cycles', 'end-to-end time'", "**Time behavior** sub-characteristic (PTFL-1.1.1)"],
    ["'allocation of limited RAM', 'availability of system resources'", "**Resource utilization** sub-characteristic (PTFL-1.1.1)"],
    ["'numbers of users or volumes of data', 'capacity limits', 'suitability of the system architecture'", "**Capacity** sub-characteristic (PTFL-1.1.1)"],
    ["'statistically identical', 'within a specified tolerance', 'unchanged system'", "**Reproducibility** principle (PTFL-1.1.1)"],
    ["'users, system designers and operations staff'", "The **stakeholder alignment** principle (PTFL-1.1.1)"],
    ["'gradually increased', 'anticipated realistic loads', 'expected maximum'", "**Load testing** (PTFL-1.2.1)"],
    ["'at or beyond the limits', 'reduced availability of resources', 'bandwidth and memory'", "**Stress testing** (PTFL-1.2.1)"],
    ["'future efficiency requirements', 'grow', 'threshold values monitored in production'", "**Scalability testing** (PTFL-1.2.1)"],
    ["'sudden bursts', 'quick and extreme changes', 'return afterwards to a steady state'", "**Spike testing** (PTFL-1.2.1)"],
    ["'stability over a time frame', 'memory leaks, database connections, thread pools', 'breaking points'", "**Endurance testing** (PTFL-1.2.1)"],
    ["'occur simultaneously', 'log in at the same time', 'difficult to find and reproduce'", "**Concurrency testing** (PTFL-1.2.1)"],
    ["'how many users and/or transactions', 'and still meet the stated performance objectives'", "**Capacity testing** (PTFL-1.2.1)"],
    ["'reviews of', 'database schemas', 'entity-relationship diagrams', 'stored procedures', 'network architecture', 'complex algorithms'", "**Static testing** (PTFL-1.3.1)"],
    ["'profiling', 'dynamic analysis', 'resource utilization', 'potential bottlenecks'", "Dynamic testing at **unit** level (PTFL-1.3.1)"],
    ["'key use cases and workflows', 'backbone structure of a workflow'", "Dynamic testing at **component integration** level (PTFL-1.3.1)"],
    ["'end-to-end behaviors under various load conditions'", "Dynamic testing at **system** level (PTFL-1.3.1)"],
    ["'data flows and workflows across interfaces', 'the user is another system or machine', 'sensor inputs'", "Dynamic testing at **system integration** level (PTFL-1.3.1)"],
    ["'build confidence', 'fine tune under real world conditions'", "Dynamic testing at **acceptance** level (PTFL-1.3.1)"],
    ["'simulators', 'custom or new hardware'", "Start early on simulators, **move to actual hardware as soon as possible** (PTFL-1.3.1)"],
    ["'a large number of testers who represent real users'", "**Crowd** load generation (PTFL-1.4.1)"],
    ["'the UI is likely to change', 'processed as if entered via the UI'", "**API** load generation (PTFL-1.4.1)"],
    ["'capture at the communications protocol level', 'replay', 'very large numbers of users repeatably'", "**Captured communication protocols** (PTFL-1.4.1)"],
    ["'unacceptable regardless of load'", "**Slow response under all load levels** — bad DB design, latency, background load (PTFL-1.5.1)"],
    ["'degrades within normal expected ranges'", "**Slow under moderate-to-heavy load** — resource saturation (PTFL-1.5.1)"],
    ["'memory leak', 'disk fragmentation', 'unexpected database growth', 'file repository growth'", "**Degraded response over time** (PTFL-1.5.1)"],
    ["'error handling degrades', 'insufficient pools', 'undersized queues and stacks', 'too rapid time-outs'", "**Inadequate or graceless error handling** (PTFL-1.5.1)"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**The same four options appear twice.** Sample Exam #2 and #3 share an identical option set. Do not assume the second question must have a different answer letter — read the type being asked about, not the option text you already recognise.",
    "**\"Best description\" means one is exactly right.** These are definition questions, not judgement calls. If two options feel close, one of them is the definition of a **different type on the same list**.",
    "**K1 does not mean easy.** PTFL-1.3.1 is K1, but the question requires you to hold **five test levels and their activities** in memory simultaneously. Recall is only easy if the table is memorised.",
    "**Watch the qualifier words in principles.** _Comparable to_, _representative of_, _statistically identical_, _within a specified tolerance_, _where resources allow_. Distractors are built by deleting or hardening exactly these qualifiers.",
    "**A cause can produce more than one plausible symptom in real life — but only one in the syllabus.** Answer from the table, not from field experience.",
    "**Scalability is not a sub-characteristic.** It is what all three sub-characteristics **impact**. An option that lists four sub-characteristics is wrong on its face.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ul: [
    "Strike any principle statement that requires testing **in** production, or that requires results to **match** expectations.",
    "Strike any type definition that mentions **the expected maximum** unless the question asks about **load**.",
    "Strike any type definition that mentions **future** unless the question asks about **scalability**.",
    "Strike any type definition mentioning a **return to steady state** unless the question asks about **spike**.",
    "Strike any level-mapping option that puts **end-to-end under load** anywhere but **system testing**, or **profiling** anywhere but **unit testing**.",
    "Strike any load-generation option that describes **real testers on the real UI** when the question asks about the **API**.",
    "Strike any failure-mode option whose **timing** does not match the cause: leaks are **over time**, saturation is **under load**, design and latency are **always**, pools and timeouts affect **error handling**.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ ul: [
    "**Type questions:** ask only two things — **how big is the load?** and **how fast does it change?** Big and steady → load or stress (expected vs beyond). Fast and sharp → spike. Simultaneous and identical → concurrency. Long → endurance. Counting → capacity. Future → scalability.",
    "**Level questions:** work bottom-up. Unit → **inside one component** (profiling). Component integration → **between components** (use cases, workflows). System → **the whole system end-to-end**. System integration → **between systems**. Acceptance → **confidence, not defects**.",
    "**Load generation questions:** ask **how many users** and **is the UI stable?** Few users and stable UI → UI. Many users and changing UI → API. Very many users, repeatable → protocol capture. Many real people, many devices → crowds.",
    "**Failure mode questions:** ask **when does it hurt?** Always · only when busy · progressively · only when things go wrong. Those four answers are the four modes.",
  ] });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Skimming Chapter 1 because it is \"just the basics\". It is **6 of the 26 points you need**, for **60 minutes of teaching** — proportionally the richest chapter in the syllabus.",
    "Learning the eight types as prose instead of as a **table with one signature phrase each**. The exam gives you four definitions and asks which is which; prose does not survive that.",
    "Ignoring **concurrency testing** and **capacity testing** because they did not appear in the sample exam. Both are examinable and both are easy to confuse with their neighbours.",
    "Forgetting that **PTFL-1.2 is worth two marks**, and budgeting study time as if all five objectives were equal.",
    "Confusing **performance testing** (the umbrella) with **load testing** (one type under it).",
    "Treating the **failure modes** as engineering intuition rather than as a fixed four-row table with fixed causes.",
    "Missing that **static testing matters more here than in functional testing** — a fact the exam can ask about directly.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Unpacks to"], widths: [4.4, 9.6], rows: [
    ["**T-R-C** (\"**TRaCk** performance\")", "The three ISO 25010 performance efficiency sub-characteristics: **T**ime behavior · **R**esource utilization · **C**apacity. And remember: **all three impact scalability**, which is **not** a fourth."],
    ["**A-R-U-R-A** (\"**A RURAl** principle\")", "The five principles: **A**ligned to stakeholder expectations · **R**eproducible · **U**nderstandable and comparable · **R**epresentative environments (complete or partial) · **A**ffordable within the project timeframe."],
    ["**\"Expected · Beyond · Future · Sudden\"**", "The four-option block the exam reuses: **load** = up to the expected maximum · **stress** = at or beyond · **scalability** = future · **spike** = sudden change."],
    ["**\"Long, Loud, Lots\"**", "**Long** = endurance (over time) · **Loud** = concurrency (everyone at once) · **Lots** = capacity (how many, exactly)."],
    ["**\"Review the four Rs\"**", "Static testing = reviews of **R**equirements · **R**elational design (schemas, ERDs, metadata, stored procedures, queries) · **A**rchitecture (system and network) · **C**ode (critical segments, complex algorithms)."],
    ["**U-C-S-S-A** (\"**U C** the **S**ystem **S**tep by step to **A**cceptance\")", "The dynamic ladder: **U**nit (profiling, resource utilization) · **C**omponent integration (use cases, workflows, backbone) · **S**ystem (end-to-end under load) · **S**ystem integration (inter-system data flows) · **A**cceptance (confidence and fine tuning, not defects)."],
    ["**U-C-A-P** (\"**U** **CAP**ture the load\")", "The four load-generation options: **U**ser interface · **C**rowds · **A**PI · **P**rotocol capture. Ordered by increasing scale and decreasing UI realism."],
    ["**\"One below\"**", "**The communications protocol level is one level below the API level.** This single sentence answers the API-versus-protocol distractor every time."],
    ["**A-M-T-E** (\"**A M**emory **T**hat **E**rodes\")", "The four failure modes by timing: **A**lways slow · **M**oderate-to-heavy load slow · **T**ime-degraded · **E**rror handling fails. A memory leak is always the **T**."],
    ["**\"Leak = later\"**", "Memory leak → **degraded response over time**. Never _consistently slow_, never _only under heavy load_."],
  ] } });

  B.push({ h2: "5.9 Chapter 1 mind map" });
  B.push({ p: "**CHAPTER 1 — Basic Concepts · 60 minutes · 6 exam marks · K1 = 1, K2 = 5 · all objectives guaranteed**" });
  B.push({ table: { head: ["Branch", "Node (K)", "Everything hanging off it"], widths: [2.4, 3.4, 8.2], rows: [
    ["**1.1** Principles", "**1.1.1** Principles of performance testing (K2) — **1 mark**",
     "**Performance efficiency** = **ISO 25010 non-functional product quality characteristic** · **time behavior** (most common objective; end-to-end time down to **CPU cycles**) · **resource utilization** (e.g., **allocation of limited RAM**) · **capacity** (**numbers of users or volumes of data**; **suitability of the system architecture**) · **all three impact the ability to scale** · **five principles**: aligned to **users, system designers, operations staff** · **reproducible** (statistically identical within a specified tolerance, unchanged system) · **understandable and comparable** · **complete or partial systems or representative environments** · **affordable and within the project timeframe** · performance testing as **experimentation** shaping **architectural decisions** and **stakeholder expectations** · applies to **client-server, distributed, embedded**, not just web"],
    ["**1.2** Types", "**1.2.1** Types of performance testing (K2) — **2 marks**",
     "**Performance testing** = umbrella (**responsiveness under different volumes of load**) · **load** = **increasing levels of anticipated realistic loads**, controlled numbers of concurrent users or processes · **stress** = **at or beyond the limits**, plus **reduced availability of resources** · **scalability** = **future efficiency requirements beyond those currently required**, grow **without violating current requirements**, then **threshold values monitored in production** and **hardware adjusted** · **spike** = **sudden bursts** and **return to a steady state** · **endurance** = **stability over a time frame specific to the operational context**; **memory leaks, database connections, thread pools**; **breaking points** · **concurrency** = **specific actions occurring simultaneously**; **notoriously difficult to find and reproduce** · **capacity** = **how many users and/or transactions** while **still meeting the stated performance objectives**, including **data volumes**"],
    ["**1.3** Testing types", "**1.3.1** Static and dynamic (**K1**) — **1 mark**",
     "**Static matters more here than in functional testing** because **critical performance defects are introduced in architecture and design** — from **designer/architect misunderstanding** or **requirements that missed response time, throughput, resource utilization targets, expected load and usage, or constraints** · **four reviews**: requirements · **database schemas, ERDs, metadata, stored procedures, queries** · **system and network architecture** · **critical code segments (complex algorithms)** · **dynamic starts as soon as possible**: **unit** = profiling for bottlenecks + dynamic analysis of resource utilization · **component integration** = key use cases and workflows, feature integration, the **backbone** · **system** = **end-to-end under various load** · **system integration** = **inter-system data flows**, the \"user\" may be **another system or machine** · **acceptance** = **confidence and fine tuning**, **generally not defect finding** · higher levels need **realistic environments, data and loads** · **Agile: put static and dynamic into early iterations** · **simulators early, real hardware as soon as possible**"],
    ["**1.4** Load generation", "**1.4.1** The concept of load generation (K2) — **1 mark**",
     "Loads are **modeled, generated and submitted** · **three differences from functional data**: **many inputs not one** · **may need dedicated hardware and tools** · **depends on the absence of functional defects** · **efficient and reliable generation is a key success factor** · **UI** (few users, clients available, **most representative for end-to-end**, but **impractical at scale** and **UI stability is a critical dependency** affecting **repeatability and maintenance cost**) · **crowds** (real testers, **anywhere in the world**, **many device types**, but **less reproducible and precise**, **more complex to organize**) · **API** (**less sensitive to UI changes**, **processed as if entered via the UI**, **more users than UI**) · **captured protocols** (**very large numbers of users, repeatable and reliable**; see §4.2.6 and §4.2.7) · **the protocol level is one level below the API level**"],
    ["**1.5** Failure modes", "**1.5.1** Common failure modes and causes (K2) — **1 mark**",
     "**Slow under all load levels** → **bad database design or implementation, network latency, other background loads**; also findable in **functional and usability testing** · **slow under moderate-to-heavy load** → **saturation of one or more resources, varying background loads**, and it happens **within normal expected allowed ranges** · **degraded over time** → **memory leaks, disk fragmentation, increasing network load, file repository growth, unexpected database growth** · **inadequate or graceless error handling** → **insufficient resource pools, undersized queues and stacks, too rapid time-out settings** · **six specific examples** with diagnoses: **seven-second web response** · **crash on sudden requests = capacity for users inadequate** · **large data requests = capacity for data volumes insufficient** · **batch overrun = execution time insufficient for the period allowed** · **real-time RAM exhaustion = RAM not dimensioned adequately or requests not prioritized** · **component A too slow for B = performance profiling and modification of code modules**"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the BACK row and recall it from the FRONT. All 45 cards are drawn from Chapter 1 of the CT-PT 2018 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["In which standard's product quality model is performance efficiency categorized, and as what?",
     "**ISO 25010**, as a **non-functional quality characteristic**."],
    ["Name the three sub-characteristics of performance efficiency.",
     "**Time behavior · resource utilization · capacity.**"],
    ["Which sub-characteristic is 'generally the most common performance testing objective'?",
     "**Time behavior** — the ability to **respond to user or system inputs within a specified time and under specified conditions**."],
    ["How wide can time-behavior measurements range?",
     "From the **\"end-to-end\" time** taken by the system to respond to user input, down to the **number of CPU cycles** required by a software component to execute a particular task."],
    ["When is resource utilization investigated?",
     "If the **availability of system resources is identified as a risk** — e.g., the **allocation of limited RAM**."],
    ["When is capacity investigated, and what does it evaluate?",
     "If **system behavior at the required capacity limits** (e.g., **numbers of users or volumes of data**) is identified as a risk. It evaluates the **suitability of the system architecture**."],
    ["Is scalability a fourth sub-characteristic?",
     "**No.** **All three** sub-characteristics **impact the ability of the SUT to scale**."],
    ["State the reproducibility principle in syllabus wording.",
     "**Statistically identical results (within a specified tolerance) must be obtained by repeating the tests on an unchanged system.**"],
    ["Which three stakeholder groups does principle 1 name?",
     "**Users, system designers and operations staff.**"],
    ["What must test results be, according to principle 3?",
     "**Both understandable and readily comparable to stakeholder expectations** — comparable, not matching."],
    ["Where may performance tests be conducted, according to principle 4?",
     "**Where resources allow**, on **complete or partial systems**, or **test environments representative of the production system**."],
    ["What does principle 5 require?",
     "The tests must be **practically affordable and executable within the timeframe set by the project**."],
    ["What form does performance testing often take, and to what end?",
     "**Experimentation** — enabling **measurement and analysis of specific system parameters**, conducted **iteratively in support of system analysis, design and implementation**, to enable **architectural decisions** and to **shape stakeholder expectations**."],
    ["Which architectures besides web-based does the syllabus name?",
     "**Classic client-server, distributed and embedded.**"],
    ["Which two disciplines is performance testing often closely integrated with?",
     "**Usability engineering** and **performance engineering**."],
    ["Define performance testing (the umbrella term).",
     "An **umbrella term** including **any kind of testing focused on performance (responsiveness) of the system or component under different volumes of load**."],
    ["Define load testing.",
     "Focuses on the ability of a system to handle **increasing levels of anticipated realistic loads** resulting from transaction requests generated by **controlled numbers of concurrent users or processes**."],
    ["Define stress testing — both halves.",
     "Focuses on handling **peak loads at or beyond the limits of anticipated or specified workloads**; **also** used to evaluate the ability to handle **reduced availability of resources** such as **accessible computing capacity, available bandwidth and memory**."],
    ["Define scalability testing.",
     "Focuses on the ability to meet **future efficiency requirements which may be beyond those currently required** — the ability to **grow** (more users, larger data) **without violating the currently specified performance requirements or failing**."],
    ["What becomes possible once the limits of scalability are known?",
     "**Threshold values can be set and monitored in production** to warn of problems about to arise, and the **production environment may be adjusted with appropriate amounts of hardware**."],
    ["Define spike testing.",
     "Focuses on the ability to **respond correctly to sudden bursts of peak loads and return afterwards to a steady state**."],
    ["Define endurance testing, and name the three resource problems it targets.",
     "Focuses on **stability over a time frame specific to the system's operational context**. It verifies there are no **resource capacity problems** — **memory leaks, database connections, thread pools** — that may **eventually degrade performance and/or cause failures at breaking points**."],
    ["Define concurrency testing, and state its stated difficulty.",
     "Focuses on the impact of situations where **specific actions occur simultaneously** (e.g., many users logging in at once). Concurrency issues are **notoriously difficult to find and reproduce**, particularly where testing has **little or no control, such as production**."],
    ["Define capacity testing.",
     "Determines **how many users and/or transactions a given system will support and still meet the stated performance objectives** — objectives may also cover **data volumes resulting from the transactions**."],
    ["Capacity versus scalability in one line.",
     "**Capacity measures today's ceiling; scalability asks whether the ceiling can be raised.**"],
    ["Which two testing types does §1.3 name?",
     "**Static testing** and **dynamic testing**."],
    ["Why is static testing often more important for performance testing than for functional suitability testing?",
     "Because **so many critical performance defects are introduced in the architecture and design of the system**."],
    ["Name two sources of those architecture and design defects.",
     "**Misunderstandings or a lack of knowledge by the designers and architects**; and **requirements that did not adequately capture response time, throughput or resource utilization targets, the expected load and usage, or the constraints**."],
    ["List the four static testing activities for performance.",
     "Reviews of **requirements** (performance aspects and risks) · **database schemas, entity-relationship diagrams, metadata, stored procedures and queries** · the **system and network architecture** · **critical segments of the system code** (e.g., complex algorithms)."],
    ["What dynamic performance testing happens during unit testing?",
     "Using **profiling information to determine potential bottlenecks** and **dynamic analysis to evaluate resource utilization**."],
    ["What happens at component integration testing?",
     "Testing across **key use cases and workflows**, especially when **integrating different use case features** or **integrating with the \"backbone\" structure of a workflow**."],
    ["What happens at system testing?",
     "Testing of **overall end-to-end behaviors under various load conditions**."],
    ["What happens at system integration testing, and who is the 'user'?",
     "Testing of **data flows and workflows across key inter-system interfaces**. It is **not uncommon for the \"user\" to be another system or machine** (e.g., sensor inputs)."],
    ["What is the purpose of performance testing at acceptance testing?",
     "To **build user, customer and operator confidence** and to **fine tune the system under real world conditions** — **generally not to find performance defects**."],
    ["What is critical at higher test levels?",
     "The use of **realistic environments, data and loads** — critical for accurate results."],
    ["What should Agile and iterative-incremental teams do?",
     "**Incorporate static and dynamic performance testing into early iterations** rather than waiting for final iterations."],
    ["What is the advice on simulators for custom or new hardware?",
     "Early dynamic tests **can use simulators**, but **start testing on the actual hardware as soon as possible** — simulators **often do not adequately capture resource constraints and performance-related behaviors**."],
    ["Name the three ways a performance test load differs from functional test data.",
     "It must represent **many user inputs, not just one**; it **may require dedicated hardware and tools**; and its generation **depends on the absence of any functional defects in the SUT**."],
    ["What is 'a key success factor when conducting performance tests'?",
     "**The efficient and reliable generation of a specified load.**"],
    ["Name the four load generation options.",
     "Via the **user interface** · using **crowds** · via the **API** · using **captured communication protocols**."],
    ["Why is UI-based load generation risky beyond small numbers?",
     "It **rapidly becomes impractical as user numbers increase**, and the **stability of the UI is a critical dependency** — **frequent changes impact repeatability and may significantly affect maintenance costs**."],
    ["When is API-based load generation the right answer?",
     "When the **UI is likely to change** but the **transactions must be processed as if they were created through the UI**. It is **less sensitive to UI changes** and allows **more users to be simulated** than UI input."],
    ["How does the API level relate to the communications protocol level?",
     "**The communications protocol level is one level below the API level.**"],
    ["List the four common performance efficiency failure modes.",
     "**Slow response under all load levels · slow response under moderate-to-heavy load levels · degraded response over time · inadequate or graceless error handling under heavy or over-limit load.**"],
    ["A memory leak produces which failure mode, and which other causes share it?",
     "**Degraded response over time** — shared with **disk fragmentation, increasing network load over time, growth of the file repository and unexpected database growth**."],
  ] });

  // ================= SECTION 7 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });

  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ box: { title: "Chapter 1 — Basic Concepts", body: "**Performance efficiency** is an **ISO 25010 non-functional product quality characteristic** with three sub-characteristics — **time behavior** (the most common objective, measured from **end-to-end response** down to **CPU cycles**), **resource utilization** (investigated when **resource availability is a risk**, e.g. **limited RAM**) and **capacity** (investigated when **behavior at capacity limits** is a risk, evaluating the **suitability of the system architecture**). **All three impact the ability of the SUT to scale.** Five principles govern the work: tests **aligned to the expectations of users, system designers and operations staff**; **reproducible**, giving **statistically identical results within a specified tolerance on an unchanged system**; **understandable and readily comparable to stakeholder expectations**; conducted **where resources allow on complete or partial systems or representative environments**; and **practically affordable within the project timeframe**. Performance testing is **experimentation**, run **iteratively** to inform **architectural decisions** and **shape stakeholder expectations**, and it applies well beyond the web — to **client-server, distributed and embedded** systems. **Eight types** are defined: **performance testing** (umbrella) · **load** (**anticipated realistic loads to the expected maximum**) · **stress** (**at or beyond the limits**, plus **reduced resources**) · **scalability** (**future efficiency requirements**, then **production thresholds and hardware adjustment**) · **spike** (**sudden bursts, then back to steady state**) · **endurance** (**stability over time**; **memory leaks, database connections, thread pools**) · **concurrency** (**simultaneous actions**; **notoriously hard to reproduce**) · **capacity** (**how many, while still meeting objectives**). **Static testing matters more here than in functional testing**, because **critical performance defects come from architecture and design** — hence four review activities covering **requirements, database design, system and network architecture, and critical code**. **Dynamic testing starts as soon as possible**, with one opportunity per level: **unit = profiling and resource utilization**, **component integration = use cases and workflows**, **system = end-to-end under load**, **system integration = inter-system data flows** (where the user may be **another machine**), **acceptance = confidence and fine tuning, not defect finding**. Load must be **modeled, generated and submitted**; it differs from functional data by needing **many inputs**, possibly **dedicated hardware and tools**, and **a functionally defect-free SUT**. Four generation options trade scale against realism — **UI · crowds · API · captured protocols** — and **the protocol level sits one level below the API level**. Finally, four **failure modes** are discriminated purely by **when** they appear: **always** (design, latency, background load) · **only under moderate-to-heavy load** (resource saturation) · **progressively over time** (**memory leaks**, fragmentation, repository and database growth) · **only in the error handling** (**insufficient pools, undersized queues and stacks, too rapid time-outs**)." } });

  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ ul: [
    "**Performance efficiency** — the **ISO 25010 non-functional product quality characteristic** comprising **time behavior, resource utilization and capacity**.",
    "**Load testing** — **increasing levels of anticipated realistic loads** from **controlled numbers of concurrent users or processes**.",
    "**Stress testing** — **peak loads at or beyond the limits of anticipated or specified workloads**, and **reduced availability of resources**.",
    "**Scalability testing** — meeting **future efficiency requirements beyond those currently required**, without **violating the currently specified performance requirements or failing**.",
    "**Spike testing** — responding correctly to **sudden bursts of peak loads** and **returning afterwards to a steady state**.",
    "**Endurance testing** — **stability over a time frame specific to the system's operational context**; no **resource capacity problems** causing **failures at breaking points**.",
    "**Concurrency testing** — the impact of **specific actions occurring simultaneously**.",
    "**Capacity testing** — **how many users and/or transactions** the system supports **while still meeting the stated performance objectives**.",
    "**Static testing (for performance)** — reviews of **requirements, database design artefacts, system and network architecture, and critical code segments**.",
    "**Load generation** — the **modeling, generation and submission of representative system loads** to the SUT.",
  ] });

  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ table: { head: ["Priority", "Concept", "LO", "Marks"], widths: [1.6, 9.0, 2.2, 1.2], rows: [
    ["★★★", "The eight types, each with its signature phrase — especially the **load / stress / scalability / spike** quartet", "PTFL-1.2.1", "**2**"],
    ["★★★", "Which dynamic activity belongs at which of the five test levels", "PTFL-1.3.1", "1"],
    ["★★★", "The four failure modes discriminated by **when** they appear, plus their causes", "PTFL-1.5.1", "1"],
    ["★★", "The four load generation options; **API vs protocol level**; crowds use the **real UI**", "PTFL-1.4.1", "1"],
    ["★★", "The five principles, with their exact qualifiers — especially **reproducibility**", "PTFL-1.1.1", "1"],
    ["★★", "The three sub-characteristics and the fact that **scalability is not one of them**", "PTFL-1.1.1", "—"],
    ["★", "The four static review activities", "PTFL-1.3.1", "—"],
    ["★", "The six specific failure examples and their one-line diagnoses", "PTFL-1.5.1", "—"],
  ] } });

  B.push({ h2: "7.4 Last-minute revision sheet" });
  B.push({ ul: [
    "**6 of 40 questions · 6 of 40 points · K1 = 1, K2 = 5 · all objectives guaranteed · 60 minutes of teaching.** Sample Exam questions **#1–#6**. **PTFL-1.2 is the only two-mark objective.**",
    "**Performance efficiency = ISO 25010, non-functional.** Sub-characteristics: **time behavior · resource utilization · capacity**. **All three impact scalability.**",
    "**Principles:** aligned to **users / system designers / operations staff** · **reproducible (statistically identical, specified tolerance, unchanged system)** · **understandable and comparable** · **complete or partial systems or representative environments, where resources allow** · **affordable within the project timeframe**.",
    "**Types:** load = **expected maximum** · stress = **at or beyond**, plus **reduced resources** · scalability = **future** · spike = **sudden burst, return to steady state** · endurance = **over time**, leaks and pools · concurrency = **simultaneously** · capacity = **how many, still meeting objectives** · performance testing = **umbrella**.",
    "**Static:** requirements · **database schemas, ERDs, metadata, stored procedures, queries** · **system and network architecture** · **critical code segments**. It matters **more** here than in functional testing.",
    "**Dynamic ladder:** unit = **profiling, resource utilization** · component integration = **use cases, workflows, backbone** · system = **end-to-end under load** · system integration = **inter-system data flows, user may be a machine** · acceptance = **confidence and fine tuning, not defect finding**.",
    "**Load generation:** UI (**few users, most representative end-to-end, UI stability is a critical dependency**) · crowds (**real testers, many devices, less reproducible and precise, complex to organize**) · API (**UI likely to change, transactions as if via UI, more users than UI**) · captured protocols (**very large numbers, repeatable and reliable**). **Protocol is one level below API.**",
    "**Failure modes by timing:** always = **design, latency, background load** · under load = **resource saturation** · over time = **memory leak, fragmentation, repository and database growth** · error handling = **pools, queues, stacks, time-outs**.",
    "**Agile:** static and dynamic performance testing belong in **early iterations**. **Simulators early, real hardware as soon as possible.**",
  ] });

  B.push({ h2: "7.5 Memorization checklist" });
  B.push({ ol: [
    "I can name the five learning objectives and say which one is worth **two** marks and which one is **K1**.",
    "I can name the standard, the model and the characteristic type for performance efficiency.",
    "I can define all three sub-characteristics and explain why scalability is not a fourth.",
    "I can recite the five principles with their qualifiers.",
    "I can define all eight types in one line each and identify each from a description.",
    "I can reproduce the four-option block the official exam uses for load and spike.",
    "I can separate **capacity** from **scalability**, and **spike** from **stress**, and **concurrency** from both.",
    "I can list the four static review activities.",
    "I can state the dynamic performance testing opportunity at each of the five test levels.",
    "I can state why acceptance-level performance testing is **not** for finding defects.",
    "I can name the four load generation options with one advantage and one limitation each.",
    "I can state that the **communications protocol level is one level below the API level**.",
    "I can list the four failure modes and give at least two causes for each.",
    "I can map a **memory leak** to its failure mode without hesitating.",
    "I can give the syllabus diagnosis for at least four of the six specific failure examples.",
  ] });

  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ box: { kind: "ok", title: "60-second mental checklist before answering any Chapter 1 question", body: "**1)** Which LO is this? (principles · types · static-dynamic · load generation · failure modes)  **2)** If it is a **type** question, find the two decisive words: **how big** is the load and **how fast** does it change.  **3)** If it is a **level** question, place the activity on the ladder **unit → component integration → system → system integration → acceptance**.  **4)** If it is a **load generation** question, ask **how many users** and **is the UI stable** — and remember crowds use the **real UI** and protocol sits **below** API.  **5)** If it is a **failure mode** question, ask **when does it hurt**: always · only under load · progressively · only in the error handling.  **6)** Check the qualifiers — **comparable to** not matching, **representative of** production not production itself, **statistically identical within a tolerance** not bit-identical.  **7)** If two options survive, choose the one that repeats **syllabus wording**." } });
  B.push({ spacer: 200 });
  B.push({ lead: "Sources: ISTQB® Certified Tester Foundation Level Specialist Syllabus — Performance Testing, Version 2018 (9 December 2018), Chapter 1 and Keywords; ISTQB® CT-PT Sample Exam Questions and Sample Exam Answers, Version 2018 (9 December 2018); ISTQB® Exam Structure Tables v1.16 (CT-PT) and ISTQB® Exam Structures and Rules v1.2. All content is traceable to these references; no external knowledge was used." });

  return B;
};
