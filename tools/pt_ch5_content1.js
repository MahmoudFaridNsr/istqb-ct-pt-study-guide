// CT-PT Chapter 5 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 5 carries **2 learning objectives** across two sub-chapters (5.1 Tool Support · 5.2 Tool Suitability). The official ISTQB Exam Structure Table allocates **3 of the 40 exam questions** to Chapter 5 — **3 of the 40 points**. Recommended teaching time is **90 minutes**." });
  B.push({ p: "**PTFL-5.1 is worth two of those three marks**, and it is pure **K2** recall from a three-row table. **PTFL-5.2 is the last of the nine K4 questions on the paper**, and it is a scenario question that works by **elimination**: you are told what has already been verified and asked what is still outstanding." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.9, 0.7, 9.4, 1.0, 1.0], rows: [
    ["PTFL-5.1.1", "K2", "Understand how tools support performance testing.", "**2**", "2"],
    ["PTFL-5.2.1", "**K4**", "Evaluate the suitability of performance testing tools in a given project scenario.", "**1**", "1"],
    ["**Chapter 5 total**", "—", "**K1 = 0 · K2 = 2 · K3 = 0 · K4 = 1**", "**3**", "**3**"],
  ] } });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 5 = **3 questions / 3 points** of 40 questions and 40 points. In the official Sample Exam these are questions **#38, #39 and #40** — the last three on the paper. **Question #40 is the final K4 item and reuses the regional health-records scenario** from Chapters 3 and 4. At **2.0 marks per teaching hour** Chapter 5 has the **second-lowest return in the syllabus**, ahead only of Chapter 3." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Two of the three marks come from separating three tool types and three licence models.** **Load generators create the load and collect metrics. The load management console starts and stops the generators, aggregates metrics and produces reports and graphs. Monitoring tools run concurrently with the SUT and supervise, record and analyze its behavior.** The licence models are **traditional seat/site with full ownership · cloud-based pay-as-you-go · open source**. Learn those two lists and you have taken **two-thirds of the chapter** in fifteen minutes." } });

  // --- PTFL-5.1.1 ---
  B.push({ h2: "PTFL-5.1.1 (K2) — Tool Support for Performance Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand how tools support performance testing." } });
  B.push({ p: "**The syllabus names three types of tool** that support performance testing. Both PTFL-5.1 marks in the official exam are decided by knowing what each one does — one question defines the **load generator**, the other defines a **licence model**." });
  B.push({ table: { title: "The three tool types", head: ["Tool type", "What the syllabus says it does"], widths: [3.2, 10.8], rows: [
    ["**Load generator**", "**The generator, through an IDE, script editor or tool suite, is able to create and execute multiple client instances that simulate user behavior according to a defined operational profile.** **Creating multiple instances in short periods of time will cause load on a system under test.** **The generator creates the load and also collects metrics for later reporting.**"],
    ["**Load management console**", "**Provides the control to start and stop the load generator(s).** **The console also aggregates metrics from the various transactions that are defined within the load instances used by the generator.** **The console enables reports and graphs from the test executions to be viewed and supports results analysis.**"],
    ["**Monitoring tool**", "**Monitoring tools run concurrently with the component or system under test and supervise, record and/or analyze the behavior of the component or system.** **Typical components which are monitored include web server queues, system memory and disk space.** **Monitoring tools can effectively support the root cause analysis of performance degradation in a system under test and may also be used to monitor a production environment when the product is released.** **During performance test execution monitors may also be used on the load generator itself.**"],
  ] } });
  B.push({ box: { kind: "ok", title: "Points of presence — the realism sentence", body: "\"_When executing performance tests **the objective of the load generator is to mimic the real world as much as is practical**. This often means that **user requests coming from various locations are needed, not just from the testing location**. **Environments that are set up with multiple points of presence will distribute where the load is originating from so that it is not all coming from a single network.** **This provides realism to the test, though it can sometimes skew results if intermediate network hops create delays.**_\"  Note the balanced ending: points of presence add realism **but can skew results**. The same term appears in the PTP's **Test Tools** section (**PTFL-4.1.2**) and in the **scalability** selection factor below." } });
  B.push({ box: { kind: "warn", title: "Monitors watch the generators too", body: "\"_**During performance test execution monitors may also be used on the load generator itself.**_\" This is the Chapter 5 counterpart of the **PTFL-4.2.8** requirement that **machines involved in load generation should be monitored too**, so that **the load is not left unmaintained because one of the load generators is running slowly**." } });
  B.push({ h3: "Licence models" });
  B.push({ p: "\"_**License models for performance test tools include the traditional seat/site based license with full ownership, a cloud-based pay-as-you-go license model, and open source licenses which are free to use in a defined environment or through cloud-based offerings.** **Each model implies a different cost structure and may include ongoing maintenance.**_\"" });
  B.push({ table: { head: ["Licence model", "Syllabus description"], widths: [4.0, 10.0], rows: [
    ["**Traditional seat / site based**", "**With full ownership.**"],
    ["**Cloud-based pay-as-you-go**", "**You pay only for what you use.** The official exam definition: **a tool with a licensing agreement that requires you to pay only for the number of virtual users and instances that you actually use.**"],
    ["**Open source**", "**Free to use in a defined environment or through cloud-based offerings.**"],
  ] } });
  B.push({ box: { kind: "ok", title: "The closing sentence — easy to skip, easy to examine", body: "\"_**What is clear is that for any tool selected, understanding how that tool works (through training and/or self-study) will require time and budget.**_\" No licence model removes that cost. This connects directly to the **understandability** selection factor in **PTFL-5.2.1**." } });
  B.push({ box: { kind: "warn", title: "The two official questions", body: "**#38 — the purpose of a load generator tool → it simulates user behavior according to the operational profiles.** The official rationale places every distractor: **creating a load on the network to allow testing for collisions is a network analysis tool**; **maintaining a load on the user interface to accurately mimic user response time might be a browser testing tool or might not exist**; and **feeding data to the dashboard showing how the system is responding to the load is a monitoring tool**.  **#39 — what is a pay-as-you-go tool? → a tool with a licensing agreement that requires you to pay only for the number of virtual users and instances that you actually use.** The rationale adds a distinction worth memorising: **these are often cloud-based tools but not all cloud-based tools are pay-as-you-go**. The distractors describe **a server-based tool with full ownership** (the traditional model), **a monitoring tool**, and **multiple points of presence** — all real concepts, none of them a licence model." } });
  B.push({ lead: "Related concepts: load generator, IDE, script editor, tool suite, client instances, operational profile simulation, metric collection, load management console, start and stop control, metric aggregation, reports and graphs, results analysis, monitoring tool, web server queues, system memory, disk space, root cause analysis, production monitoring, points of presence, network hops, seat/site licence, full ownership, cloud-based pay-as-you-go, open source licence, cost structure, ongoing maintenance, training and self-study." });

  // --- PTFL-5.2.1 ---
  B.push({ h2: "PTFL-5.2.1 (K4) — Tool Suitability" });
  B.push({ box: { title: "Original syllabus statement", body: "Evaluate the suitability of performance testing tools in a given project scenario." } });
  B.push({ p: "**Four factors, and the first is a set of three.** \"_The following factors should be considered when selecting a performance testing tool_\": **compatibility · scalability · understandability · monitoring**." });
  B.push({ box: { kind: "ok", title: "The organisational framing", body: "\"_**In general a tool is selected for the organization and not only for a project.**_\" This sentence opens the compatibility factor and quietly explains all four: you are choosing something that must fit **an organisation's protocols, interfaces, platforms, load volumes, skill levels and monitoring stack** — not just today's project." } });
  B.push({ table: { title: "Factor 1 — Compatibility (three sub-factors)", head: ["Sub-factor", "What the syllabus requires"], widths: [3.0, 11.0], rows: [
    ["**Protocols**", "**As described in §4.2.1, protocols are a very important aspect to performance tool selection.** **Understanding which protocols a system uses and which of these will be tested will provide necessary information in order to evaluate the appropriate test tool.**"],
    ["**Interfaces to external components**", "**Interfaces to software components or other tools may need to be considered as part of the complete integration requirements to meet process or other inter-operability requirements** (e.g., **integration in the CI process**)."],
    ["**Platforms**", "**Compatibility with the platforms (and their versions) within an organization is essential.** **This applies to the platforms used to host the tools and the platforms with which the tools interact for monitoring and/or load generation.**"],
  ] } });
  B.push({ table: { title: "Factor 2 — Scalability (three considerations)", head: ["Consideration", "What the syllabus requires"], widths: [4.6, 9.4], rows: [
    ["**Maximum number of licenses required**", "Part of **the total number of concurrent user simulations the tool can handle** — the framing question for the whole factor."],
    ["**Load generation workstation / server configuration requirements**", "What hardware the tool needs in order to produce the required load."],
    ["**Ability to generate load from multiple points of presence**", "e.g., **distributed servers** — the same realism concern raised in §5.1."],
  ] } });
  B.push({ box: { kind: "warn", title: "Scalability is what the official K4 question turns on", body: "The scenario tells you that **the tool is compatible with the environment**, that it **can generate load via the protocols in use**, that the team **can code in it with little training**, and that **monitoring and reporting are excellent and the administrators are happy with them**. **Compatibility, understandability and monitoring are therefore all satisfied.** What remains is **scalability** — **the ability of the tool to meet your requirements for concurrent virtual users**. The official rationale adds: **the project schedule is not really a factor because any tool will take time to acquire and integrate, but the developers can code in it, so that's the main schedule factor. What you need to know is can this tool simulate the necessary number of virtual users and, of course, how much will it cost.**" } });
  B.push({ table: { title: "Factor 3 — Understandability", head: ["Requirement", "Consequence of ignoring it"], widths: [6.0, 8.0], rows: [
    ["**The level of technical knowledge needed to use the tool.**", "**This is often overlooked and can lead to unskilled testers incorrectly configuring tests, which in turn provide inaccurate results.**"],
    ["**For testing requiring complex scenarios and a high level of programmability and customization, teams should ensure that the tester has the necessary skills, background, and training.**", "Without this, the sophistication the tool offers cannot be used — and, per §5.1, **understanding how any tool works will require time and budget**."],
  ] } });
  B.push({ table: { title: "Factor 4 — Monitoring (three questions to answer)", head: ["#", "Question the syllabus poses"], widths: [0.8, 13.2], rows: [
    ["1", "**Is the monitoring provided by the tool sufficient?**"],
    ["2", "**Are there other monitoring tools available in the environment that can be used to supplement the monitoring by the tool?**"],
    ["3", "**Can the monitoring be correlated to the defined transactions?**"],
  ] } });
  B.push({ p: "\"_**All of these questions must be answered to determine if the tool will provide the monitoring required by the project.**_\" And the chapter's closing sentence: \"_**When monitoring is a separate program / tools / whole stack then it can be used to monitor production environment when the product is released.**_\"" });
  B.push({ box: { kind: "ok", title: "The K4 answer pattern for PTFL-5.2.1", body: "**Read the scenario as a checklist and tick off the four factors.** Whatever the stem has already established — compatibility with the environment, protocol coverage, team skill, monitoring quality and administrator buy-in — is **not** the answer. **The factor the stem is silent about is the answer.** In the official question everything except **scalability** is covered, so the outstanding question is **can the tool simulate the required number of concurrent virtual users**. Note also that the rationale explicitly dismisses **the project schedule** and **record/playback capability** as decisive factors: neither is one of the four." } });
  B.push({ lead: "Related concepts: tool selection for the organization, compatibility, protocols, interfaces to external components, inter-operability, Continuous Integration integration, platforms and versions, tool hosting platform, scalability, concurrent user simulations, licence count, load generation workstation configuration, multiple points of presence, distributed servers, understandability, technical knowledge, unskilled configuration, inaccurate results, programmability and customization, skills and training, monitoring sufficiency, supplementary monitoring tools, correlation to defined transactions, production monitoring after release." });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ lead: "Concise, exam-ready notes drawn from the syllabus text. Every item is traceable to Chapter 5 of the CT-PT syllabus (pages 55–57)." });

  B.push({ h2: "2.1 The three tool types" });
  B.push({ ul: [
    "**Load generator** — **through an IDE, script editor or tool suite**, it **creates and executes multiple client instances that simulate user behavior according to a defined operational profile**. **Creating multiple instances in short periods of time will cause load on a SUT.** **It creates the load and also collects metrics for later reporting.**",
    "**Load management console** — **provides the control to start and stop the load generator(s)**, **aggregates metrics from the various transactions defined within the load instances used by the generator**, and **enables reports and graphs from the test executions to be viewed and supports results analysis**.",
    "**Monitoring tool** — **runs concurrently with the component or system under test and supervises, records and/or analyzes its behavior**. **Typical monitored components: web server queues, system memory and disk space.** **Supports root cause analysis of performance degradation** and **may be used to monitor a production environment when the product is released**. **During execution, monitors may also be used on the load generator itself.**",
  ] });

  B.push({ h2: "2.2 Points of presence" });
  B.push({ ul: [
    "**The objective of the load generator is to mimic the real world as much as is practical.**",
    "This often means **user requests coming from various locations are needed, not just from the testing location**.",
    "**Environments set up with multiple points of presence distribute where the load is originating from so that it is not all coming from a single network.**",
    "**This provides realism to the test, though it can sometimes skew results if intermediate network hops create delays.**",
    "Points of presence appear again in the **PTP Test Tools section** (**PTFL-4.1.2**) and as a **scalability** selection factor (**PTFL-5.2.1**).",
  ] });

  B.push({ h2: "2.3 Licence models" });
  B.push({ ul: [
    "**Traditional seat / site based license with full ownership.**",
    "**Cloud-based pay-as-you-go license model** — officially defined as **paying only for the number of virtual users and instances that you actually use**. **These are often cloud-based tools, but not all cloud-based tools are pay-as-you-go.**",
    "**Open source licenses which are free to use in a defined environment or through cloud-based offerings.**",
    "**Each model implies a different cost structure and may include ongoing maintenance.**",
    "**For any tool selected, understanding how that tool works (through training and/or self-study) will require time and budget.**",
  ] });

  B.push({ h2: "2.4 The four selection factors" });
  B.push({ ul: [
    "**In general a tool is selected for the organization and not only for a project.**",
    "**Compatibility** — **protocols** (which the system uses and which will be tested) · **interfaces to external components** (software components or other tools, for **integration requirements** such as **the CI process**) · **platforms** (**and their versions**, both for **hosting the tools** and for **the platforms the tools interact with for monitoring and/or load generation**).",
    "**Scalability** — **the total number of concurrent user simulations the tool can handle**, including the **maximum number of licenses required**, the **load generation workstation/server configuration requirements**, and the **ability to generate load from multiple points of presence (e.g., distributed servers)**.",
    "**Understandability** — **the level of technical knowledge needed to use the tool**. **Often overlooked**, and **can lead to unskilled testers incorrectly configuring tests, which in turn provide inaccurate results**. For **complex scenarios and a high level of programmability and customization**, ensure **the tester has the necessary skills, background, and training**.",
    "**Monitoring** — **is the tool's monitoring sufficient?** · **are there other monitoring tools available in the environment to supplement it?** · **can the monitoring be correlated to the defined transactions?** **All of these questions must be answered.** **When monitoring is a separate program / tools / whole stack then it can be used to monitor production environment when the product is released.**",
  ] });

  B.push({ h2: "2.5 Chapter 5 keyword glossary" });
  B.push({ p: "The syllabus lists **four keywords** for Chapter 5. All are examinable at **K1**." });
  B.push({ table: { head: ["Keyword", "Definition to memorise"], widths: [3.4, 10.6], rows: [
    ["**Load generator**", "A tool that, **through an IDE, script editor or tool suite, creates and executes multiple client instances simulating user behavior according to a defined operational profile**, thereby **causing load on the system under test**, and that **also collects metrics for later reporting**."],
    ["**Load management**", "The function of the **load management console**: **starting and stopping the load generator(s)**, **aggregating metrics from the transactions defined within the load instances**, and **enabling reports and graphs to be viewed in support of results analysis**."],
    ["**Monitoring tool**", "A tool that **runs concurrently with the component or system under test and supervises, records and/or analyzes its behavior** — typically **web server queues, system memory and disk space** — supporting **root cause analysis** and, when separate, **production monitoring after release**."],
    ["**Performance testing tool**", "The general category. Per **PTFL-2.3.1**, **all performance test tools provide measurements and metrics as the result of a test**, varying in **the number of metrics shown, the way they are shown, and the ability to customize them**, with **text or graphical dashboard** output and often an **export** capability."],
    ["**Points of presence**", "Multiple originating locations for generated load, so **the load is not all coming from a single network** — **providing realism**, but able to **skew results if intermediate network hops create delays**."],
    ["**Pay-as-you-go**", "A **cloud-based licence model** requiring you to **pay only for the number of virtual users and instances that you actually use**. **Often cloud-based, but not all cloud-based tools are pay-as-you-go.**"],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });

  B.push({ table: { title: "3.1 The three tool types — separated by verb", head: ["Tool", "Creates load?", "Controls the run?", "Aggregates metrics?", "Watches the SUT?", "Runs in production?"], widths: [3.4, 2.1, 2.2, 2.3, 2.1, 1.9], rows: [
    ["**Load generator**", "**Yes**", "No", "Collects its own", "No", "No"],
    ["**Load management console**", "No", "**Yes — start and stop**", "**Yes**", "No", "No"],
    ["**Monitoring tool**", "No", "No", "Records and analyzes", "**Yes**", "**Yes, when the product is released**"],
  ] } });

  B.push({ box: { kind: "ok", title: "The three-verb test", body: "**Simulates users → load generator.** **Starts, stops and reports → load management console.** **Supervises, records and analyzes the system's behavior → monitoring tool.** Every Chapter 5 tool question is decided by matching the verb in the stem to one of those three." } });

  B.push({ table: { title: "3.2 What each official distractor actually described", head: ["Distractor in question #38", "What it really is"], widths: [8.4, 5.6], rows: [
    ["\"It creates a load on the network to allow testing for collisions\"", "**A network analysis tool**"],
    ["\"It maintains a load on the user interface to accurately mimic user response time\"", "**Might be a browser testing tool, or might not exist**"],
    ["\"It feeds data to the dashboard showing how the system is responding to the load\"", "**A monitoring tool**"],
    ["**\"It simulates user behavior according to the operational profiles\"**", "**✔ The load generator**"],
  ] } });

  B.push({ table: { title: "3.3 Licence models and their distractors", head: ["Description", "What it is"], widths: [8.4, 5.6], rows: [
    ["**Pay only for the number of virtual users and instances that you actually use**", "**✔ Pay-as-you-go (cloud-based)**"],
    ["A server-based tool providing **full ownership** for your usage", "**Traditional seat / site based licence**"],
    ["**Free to use in a defined environment or through cloud-based offerings**", "**Open source licence**"],
    ["A monitoring tool that **populates the dashboard with pertinent metrics based on what you have paid to monitor**", "**Not a licence model — a monitoring tool**"],
    ["A tool providing **the ability to test from multiple points of presence**", "**Not a licence model — a scalability consideration**"],
  ] } });

  B.push({ table: { title: "3.4 The four selection factors as a checklist", head: ["Factor", "Ask", "Sub-points"], widths: [2.6, 5.4, 6.0], rows: [
    ["**Compatibility**", "**Will it work here at all?**", "**Protocols** the system uses and which will be tested · **interfaces to external components** for integration (e.g., **CI**) · **platforms and their versions**, both **hosting** and **interacting**"],
    ["**Scalability**", "**Can it produce the load we need?**", "**Total concurrent user simulations** · **maximum number of licenses** · **load generation workstation/server configuration requirements** · **multiple points of presence (distributed servers)**"],
    ["**Understandability**", "**Can our people use it correctly?**", "**Level of technical knowledge needed** · **often overlooked** · **unskilled testers incorrectly configuring tests provide inaccurate results** · for **complex, programmable, customized** testing, ensure **skills, background and training**"],
    ["**Monitoring**", "**Will we see what we need to see?**", "**Is the tool's monitoring sufficient?** · **can other tools in the environment supplement it?** · **can monitoring be correlated to the defined transactions?** · **separate monitoring can watch production after release**"],
  ] } });

  B.push({ box: { kind: "warn", title: "How the K4 question is solved", body: "**Tick off what the stem has already established, and answer with what it has not.** Official question #40 confirms **compatibility** (\"compatible with your environment and will be able to generate a load via the protocols in use\"), **understandability** (\"they can code in the tool and will be able to create their scripts with little training\") and **monitoring** (\"excellent monitoring and reporting capabilities… the administrators are comfortable with the tool\"). **Only scalability is unaddressed**, so the answer is **the ability of the tool to meet your requirements for concurrent virtual users**. **The project schedule** and **record/playback capability** are not among the four factors and are explicitly dismissed by the rationale." } });

  B.push({ table: { title: "3.5 Cross-chapter links you can be tested on", head: ["Chapter 5 idea", "Where it also appears"], widths: [5.4, 8.6], rows: [
    ["**Monitoring tools can watch production after release**", "**PTFL-2.3.1** — monitoring tools **monitor system performance on an ongoing basis** and **alert system administrators**, including **DoS and DDoS detection**"],
    ["**All performance test tools provide metrics as the result of a test**", "**PTFL-2.3.1** — tools vary in **number of metrics, presentation and customizability**; **text or dashboard**; often **exportable**"],
    ["**Points of presence**", "**PTFL-4.1.2** — the PTP's **Test Tools** section lists **tools to provide load from multiple points within the system architecture (points of presence)**"],
    ["**Monitors used on the load generator itself**", "**PTFL-4.2.8** — **machines involved in load generation should be monitored too**, to avoid the load **not being maintained because one generator is running slowly**"],
    ["**Protocol compatibility**", "**PTFL-4.2.1** — the **seven protocol groups** and the **OSI Layer 5–7** framing"],
    ["**The console during execution**", "**PTFL-4.3.1** — tools **provide a console to enable performance data to be monitored during the test and permit necessary adjustments**"],
    ["**Integration in the CI process**", "**PTFL-3.4.1** — CI performance testing needs **on-demand environments** and **the ability to select subsets of applicable tests**"],
    ["**Understanding a tool requires time and budget**", "**PTFL-5.2.1** — the **understandability** factor, and the reason **unskilled configuration produces inaccurate results**"],
  ] } });

  B.push({ table: { title: "3.6 One-line answer to every learning objective", head: ["LO", "If you remember only one sentence"], widths: [2.0, 12.0], rows: [
    ["**PTFL-5.1.1**", "**Generators simulate users and collect metrics · the console starts, stops, aggregates and reports · monitors watch the SUT (and the generators, and production after release)** — and the licence models are **seat/site with full ownership, cloud pay-as-you-go, and open source**."],
    ["**PTFL-5.2.1**", "**Compatibility, scalability, understandability, monitoring** — tick off what the scenario has already settled, and the **remaining factor is the answer**."],
  ] } });

  return B;
};
