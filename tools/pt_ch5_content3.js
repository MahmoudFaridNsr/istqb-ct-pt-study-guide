// CT-PT Chapter 5 — Sections 5 to 7
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ p: "The ISTQB Exam Structure Table gives Chapter 5 **three questions across two objectives** — **two to PTFL-5.1** and **one to PTFL-5.2**. There is **no selectable group**, so both objectives appear on every paper." });
  B.push({ table: { head: ["LO", "K", "Questions", "Points", "Sample Exam #", "Format used officially"], widths: [2.0, 0.8, 1.6, 1.3, 2.0, 6.3], rows: [
    ["PTFL-5.1", "K2", "**2**", "**2**", "#38, #39", "\"What is the **purpose** of a load generator tool?\" and \"What is a **pay-as-you-go** tool?\" — pure definition"],
    ["PTFL-5.2", "**K4**", "**1**", "**1**", "#40", "Scenario — \"what do you **still need to verify** before selecting this tool?\""],
    ["**Chapter 5 total**", "—", "**3**", "**3**", "**#38–#40**", "**The last three questions on the paper · 90 minutes of teaching · 2.0 marks per teaching hour**"],
  ] } });
  B.push({ box: { title: "The arithmetic before you sit the exam", body: "CT-PT is **40 questions worth 40 points in 90 minutes** (**113 minutes** with the 25% non-native-language allowance); the pass mark is **65% = 26 points**. Chapter allocation: **Ch1 = 6 · Ch2 = 4 · Ch3 = 7 · Ch4 = 20 · Ch5 = 3**. Chapter 5 is only **3 marks**, but **two of them rest on two short lists** — three tool types and three licence models — which makes them among the fastest marks on the paper to secure. **Do not skip this chapter simply because it is small.**" } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**A network analysis tool offered as a load generator** — \"_creates a load on the network to allow testing for collisions_\".",
    "**A browser testing tool offered as a load generator** — \"_maintains a load on the user interface to accurately mimic user response time_\"; the official rationale says it **might be a browser testing tool or might not exist**.",
    "**A monitoring tool offered as a load generator** — \"_feeds data to the dashboard showing how the system is responding to the load_\".",
    "**The traditional licence offered as pay-as-you-go** — \"_a server-based tool that provides you with full ownership_\".",
    "**A monitoring tool offered as a licence model** — \"_populates the dashboard with pertinent metrics based on what you have paid to monitor_\".",
    "**Points of presence offered as a licence model** — it is a **scalability** consideration, not a licence.",
    "**\"All cloud-based tools are pay-as-you-go\"** — **they are often cloud-based, but not all cloud-based tools are pay-as-you-go**.",
    "**Project schedule offered as a selection factor** — it is not one of the four, and **any tool will take time to acquire and integrate**.",
    "**Record/playback capability offered as a selection factor** — it is not one of the four, and in the official scenario **the team can already code**.",
    "**A factor the scenario has already settled offered as the outstanding one** — the K4 question is solved by **elimination**, not by picking the most important-sounding factor.",
    "**Monitoring described as \"eliminating the probe effect\"** — the probe effect is a **PTFL-2.3.1** concept and is never eliminated, only kept **no more than minimal**.",
    "**Points of presence described as removing network variability** — they **add realism** but **can sometimes skew results if intermediate network hops create delays**.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["Keyword in the stem", "Points toward"], widths: [7.2, 6.8], rows: [
    ["'simulate user behavior according to a defined operational profile', 'multiple client instances', 'IDE, script editor or tool suite'", "**Load generator** (5.1.1)"],
    ["'start and stop the load generators', 'aggregates metrics from the various transactions', 'reports and graphs', 'supports results analysis'", "**Load management console** (5.1.1)"],
    ["'runs concurrently with the component or system under test', 'supervise, record and/or analyze', 'web server queues, system memory and disk space'", "**Monitoring tool** (5.1.1)"],
    ["'root cause analysis of performance degradation'", "**Monitoring tool** (5.1.1)"],
    ["'monitor a production environment when the product is released'", "**Monitoring tool**, and the **monitoring** selection factor (5.1.1, 5.2.1)"],
    ["'monitors may also be used on the load generator itself'", "**Load generator monitoring** (5.1.1, and PTFL-4.2.8)"],
    ["'mimic the real world as much as is practical', 'requests coming from various locations'", "**Points of presence** (5.1.1)"],
    ["'not all coming from a single network', 'intermediate network hops create delays'", "**Points of presence — benefit and caveat** (5.1.1)"],
    ["'seat/site based license with full ownership'", "**Traditional licence model** (5.1.1)"],
    ["'pay only for the number of virtual users and instances that you actually use'", "**Cloud-based pay-as-you-go** (5.1.1)"],
    ["'free to use in a defined environment or through cloud-based offerings'", "**Open source licence** (5.1.1)"],
    ["'training and/or self-study will require time and budget'", "**The cost of any tool**, and the bridge to **understandability** (5.1.1, 5.2.1)"],
    ["'selected for the organization and not only for a project'", "**The framing of tool selection** (5.2.1)"],
    ["'which protocols a system uses and which of these will be tested'", "**Compatibility — protocols** (5.2.1)"],
    ["'integration in the CI process', 'inter-operability requirements'", "**Compatibility — interfaces to external components** (5.2.1)"],
    ["'platforms (and their versions)', 'platforms used to host the tools'", "**Compatibility — platforms** (5.2.1)"],
    ["'total number of concurrent user simulations', 'maximum number of licenses', 'distributed servers'", "**Scalability** (5.2.1)"],
    ["'level of technical knowledge needed', 'unskilled testers incorrectly configuring tests', 'programmability and customization'", "**Understandability** (5.2.1)"],
    ["'is the monitoring sufficient', 'other monitoring tools to supplement', 'correlated to the defined transactions'", "**Monitoring** (5.2.1)"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**All three tool types produce or handle metrics.** The generator **collects metrics for later reporting**, the console **aggregates** them, and the monitor **records and analyzes** system behaviour. Match the **verb**, not the noun _metrics_.",
    "**Two of the four distractors in the licence question are not licence models at all.** If an option describes what a tool **does** rather than how it is **paid for**, it cannot be the answer.",
    "**The K4 question is an elimination puzzle, not a judgement call.** The scenario deliberately confirms three factors so that the fourth stands out. Read the scenario as a checklist.",
    "**Two plausible-sounding options in the K4 question are not selection factors at all.** **Project schedule** and **record/playback** never appear in §5.2.",
    "**\"Excellent monitoring and reporting\" in a stem settles the monitoring factor.** Do not re-open it because monitoring feels important.",
    "**Points of presence appear in three places** — §5.1, the **PTP Test Tools** section, and the **scalability** factor. Expect the term in any of those contexts.",
    "**Chapter 5 is short, so it is easy to leave until last and then skip.** Three marks for two short lists is the best effort-to-mark ratio available in the final hour of revision.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ul: [
    "Strike any \"load generator\" option that describes **network collision testing**, **UI response mimicry** or **dashboard feeding**.",
    "Strike any \"licence model\" option that describes **what a tool does** rather than **how it is paid for**.",
    "Strike any claim that **all cloud tools are pay-as-you-go**.",
    "Strike any selection-factor option naming something **outside compatibility, scalability, understandability and monitoring**.",
    "Strike any selection-factor option naming something **the scenario has already confirmed**.",
    "Strike any option claiming points of presence **remove** network effects, or that monitoring **eliminates** the probe effect.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ ul: [
    "**Tool-type questions:** find the verb. **Simulates** → generator. **Starts, stops, aggregates, reports** → console. **Supervises, records, analyzes** → monitor.",
    "**Licence questions:** ask **what am I paying for?** A seat or site with ownership · only what I use · nothing at all.",
    "**Selection questions:** run the four-factor checklist over the scenario — **can it work here (compatibility) · can it produce the load (scalability) · can our people drive it (understandability) · will we see enough (monitoring)** — and answer with the one the scenario never mentions.",
    "**If a stem mentions production monitoring after release**, the answer involves **monitoring that is a separate program, tool set or whole stack**.",
  ] });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Skipping Chapter 5 because it is only three marks. **Two of those three marks are pure recall from lists of three** — proportionally excellent value in the last hours of revision.",
    "Confusing the **load generator** with the **load management console** because both are part of the same product in most commercial tools. The syllabus separates them, and so does the exam.",
    "Forgetting that **monitoring tools can run in production after release** — a point the syllabus makes **twice**, in §5.1 and §5.2.",
    "Treating **points of presence** as an unambiguous good. The syllabus attaches a caveat: **intermediate network hops can skew results**.",
    "Learning the four selection factors as a list without practising the **elimination** technique the K4 question demands.",
    "Assuming **cost** is a fifth selection factor. It is not listed as one — although the official rationale does end with **\"and, of course, how much will it cost\"**, cost sits inside the **licence model** discussion in §5.1.",
    "Overlooking that **understanding any tool requires time and budget**, which is both a §5.1 sentence and the reasoning behind **understandability**.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Unpacks to"], widths: [4.4, 9.6], rows: [
    ["**G-C-M** (\"**G**enerate, **C**ontrol, **M**onitor\")", "The three tool types. **G**enerator **creates the load and collects metrics** · **C**onsole **starts and stops, aggregates, reports and supports analysis** · **M**onitor **supervises, records and analyzes the SUT** — and can watch **the generators** and **production**."],
    ["**\"Simulate · Control · Supervise\"**", "The three verbs that decide every tool-type question."],
    ["**S-P-O** (\"**S**eat, **P**ay-as-you-go, **O**pen source\")", "The three licence models: **seat/site with full ownership · cloud-based pay-as-you-go · open source, free in a defined environment or through cloud-based offerings**."],
    ["**\"Often cloud, not always pay-as-you-go\"**", "The qualifier the official rationale adds: **these are often cloud-based tools but not all cloud-based tools are pay-as-you-go**."],
    ["**\"Realism costs hops\"**", "**Multiple points of presence provide realism**, but **can sometimes skew results if intermediate network hops create delays**."],
    ["**C-S-U-M** (\"**C**an it fit, **S**cale, be **U**sed, and be **M**onitored?\")", "The four selection factors: **C**ompatibility (protocols, interfaces, platforms) · **S**calability (licences, generation hardware, points of presence) · **U**nderstandability (technical knowledge, skills and training) · **M**onitoring (sufficient, supplementable, correlatable to transactions)."],
    ["**\"Tick three, answer the fourth\"**", "The K4 technique: the scenario settles three factors; the one it never mentions is the answer. In the official question, that is **scalability**."],
    ["**\"Not a factor: schedule, record/playback\"**", "Two plausible distractors that appear nowhere in §5.2."],
    ["**\"Separate stack watches production\"**", "**When monitoring is a separate program / tools / whole stack then it can be used to monitor production environment when the product is released.**"],
    ["**\"Every tool costs learning\"**", "**For any tool selected, understanding how that tool works (through training and/or self-study) will require time and budget.**"],
  ] } });

  B.push({ h2: "5.9 Chapter 5 mind map" });
  B.push({ p: "**CHAPTER 5 — Tools · 90 minutes · 3 exam marks · K2 = 2, K4 = 1 · both objectives guaranteed**" });
  B.push({ table: { head: ["Branch", "Node (K)", "Everything hanging off it"], widths: [2.4, 3.4, 8.2], rows: [
    ["**5.1** Tool support", "**5.1.1** How tools support performance testing (K2) — **2 marks**",
     "**Load generator** — **through an IDE, script editor or tool suite**, **creates and executes multiple client instances that simulate user behavior according to a defined operational profile**; **creating multiple instances in short periods causes load on the SUT**; **creates the load and also collects metrics for later reporting** · **objective is to mimic the real world as much as is practical**, needing **requests from various locations, not just the testing location**; **multiple points of presence distribute the origin of load so it is not all from a single network**, **providing realism** but able to **skew results if intermediate network hops create delays** · **Load management console** — **controls start and stop of the generators**, **aggregates metrics from the transactions defined within the load instances**, **enables reports and graphs to be viewed and supports results analysis** · **Monitoring tool** — **runs concurrently with the component or system under test and supervises, records and/or analyzes its behavior**; typical components: **web server queues, system memory, disk space**; **supports root cause analysis of performance degradation**; **may monitor a production environment when the product is released**; **during execution, monitors may also be used on the load generator itself** · **Licence models** — **traditional seat/site with full ownership** · **cloud-based pay-as-you-go** (**pay only for the virtual users and instances actually used**; **often cloud-based, but not all cloud tools are pay-as-you-go**) · **open source, free in a defined environment or through cloud-based offerings**; **each implies a different cost structure and may include ongoing maintenance** · **for any tool, understanding how it works through training and/or self-study will require time and budget**"],
    ["**5.2** Tool suitability", "**5.2.1** Evaluate tool suitability in a project scenario (**K4**) — **1 mark**",
     "**In general a tool is selected for the organization and not only for a project** · **Compatibility** — **protocols** (which the system uses and which will be tested, per §4.2.1) · **interfaces to external components** (software components or other tools, for **complete integration requirements** and **inter-operability**, e.g. **integration in the CI process**) · **platforms and their versions**, both **hosting the tools** and **those the tools interact with for monitoring and/or load generation** · **Scalability** — **the total number of concurrent user simulations the tool can handle**, including **maximum number of licenses required**, **load generation workstation/server configuration requirements**, and **the ability to generate load from multiple points of presence (distributed servers)** · **Understandability** — **the level of technical knowledge needed**; **often overlooked**; **unskilled testers incorrectly configuring tests provide inaccurate results**; for **complex scenarios and a high level of programmability and customization**, ensure **the necessary skills, background and training** · **Monitoring** — **is the tool's monitoring sufficient? · are there other monitoring tools in the environment to supplement it? · can the monitoring be correlated to the defined transactions?** **All must be answered.** **When monitoring is a separate program / tools / whole stack it can monitor the production environment when the product is released** · **Exam technique: tick off the factors the scenario has settled; the one it is silent about is the answer**"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the BACK row and recall it from the FRONT. All 30 cards are drawn from Chapter 5 of the CT-PT 2018 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["Name the three types of tool that support performance testing.",
     "**Load generators · load management console · monitoring tool.**"],
    ["Define the load generator.",
     "**Through an IDE, script editor or tool suite, it creates and executes multiple client instances that simulate user behavior according to a defined operational profile.** **Creating multiple instances in short periods of time will cause load on a system under test.** **The generator creates the load and also collects metrics for later reporting.**"],
    ["What is the objective of the load generator when executing performance tests?",
     "**To mimic the real world as much as is practical** — which often means **user requests coming from various locations are needed, not just from the testing location**."],
    ["What do multiple points of presence achieve, and what is the caveat?",
     "They **distribute where the load is originating from so that it is not all coming from a single network**, **providing realism to the test** — **though it can sometimes skew results if intermediate network hops create delays**."],
    ["Define the load management console.",
     "It **provides the control to start and stop the load generator(s)**, **aggregates metrics from the various transactions that are defined within the load instances used by the generator**, and **enables reports and graphs from the test executions to be viewed and supports results analysis**."],
    ["Define the monitoring tool.",
     "It **runs concurrently with the component or system under test and supervises, records and/or analyzes the behavior of the component or system**."],
    ["Which components are typically monitored?",
     "**Web server queues · system memory · disk space.**"],
    ["What two extra roles can monitoring tools play?",
     "They **can effectively support the root cause analysis of performance degradation in a system under test**, and **may also be used to monitor a production environment when the product is released**. **During performance test execution, monitors may also be used on the load generator itself.**"],
    ["Name the three licence models for performance test tools.",
     "**The traditional seat/site based license with full ownership · a cloud-based pay-as-you-go license model · open source licenses which are free to use in a defined environment or through cloud-based offerings.**"],
    ["What does each licence model imply?",
     "**A different cost structure**, and each **may include ongoing maintenance**."],
    ["Define a pay-as-you-go tool.",
     "**A tool with a licensing agreement that requires you to pay only for the number of virtual users and instances that you actually use.** **These are often cloud-based tools, but not all cloud-based tools are pay-as-you-go.**"],
    ["What is true of any tool selected, whatever its licence?",
     "**Understanding how that tool works (through training and/or self-study) will require time and budget.**"],
    ["What framing does the syllabus give for tool selection?",
     "**In general a tool is selected for the organization and not only for a project.**"],
    ["Name the four tool selection factors.",
     "**Compatibility · scalability · understandability · monitoring.**"],
    ["Name the three sub-factors of compatibility.",
     "**Protocols · interfaces to external components · platforms.**"],
    ["What does the protocols sub-factor require?",
     "**Understanding which protocols a system uses and which of these will be tested** — this **will provide necessary information in order to evaluate the appropriate test tool**."],
    ["What does the interfaces sub-factor cover?",
     "**Interfaces to software components or other tools** that **may need to be considered as part of the complete integration requirements to meet process or other inter-operability requirements**, e.g. **integration in the CI process**."],
    ["Which platforms must be considered?",
     "**The platforms (and their versions) within the organization** — both **the platforms used to host the tools** and **the platforms with which the tools interact for monitoring and/or load generation**."],
    ["How is scalability framed, and what three things does it include?",
     "**The total number of concurrent user simulations the tool can handle** — including the **maximum number of licenses required**, the **load generation workstation/server configuration requirements**, and the **ability to generate load from multiple points of presence (e.g., distributed servers)**."],
    ["What is the understandability factor, and what happens if it is overlooked?",
     "**The level of technical knowledge needed to use the tool.** **This is often overlooked and can lead to unskilled testers incorrectly configuring tests, which in turn provide inaccurate results.**"],
    ["What does the syllabus require for complex, highly programmable testing?",
     "**Teams should ensure that the tester has the necessary skills, background, and training.**"],
    ["State the three monitoring questions.",
     "**Is the monitoring provided by the tool sufficient? · Are there other monitoring tools available in the environment that can be used to supplement the monitoring by the tool? · Can the monitoring be correlated to the defined transactions?** **All of these questions must be answered.**"],
    ["What advantage does separate monitoring have?",
     "**When monitoring is a separate program / tools / whole stack then it can be used to monitor production environment when the product is released.**"],
    ["Which tool type does \"creates a load on the network to allow testing for collisions\" describe?",
     "**A network analysis tool** — not a load generator."],
    ["Which tool type does \"feeds data to the dashboard showing how the system is responding to the load\" describe?",
     "**A monitoring tool** — not a load generator."],
    ["Which tool type does \"maintains a load on the user interface to accurately mimic user response time\" describe?",
     "**It might be a browser testing tool or might not exist** — it is not a load generator."],
    ["In the official K4 tool-selection question, which three factors does the scenario already settle?",
     "**Compatibility** (compatible with the environment, generates load via the protocols in use) · **understandability** (the team can code in the tool with little training) · **monitoring** (excellent monitoring and reporting; administrators are comfortable)."],
    ["What is therefore the answer to that question?",
     "**The ability of the tool to meet your requirements for concurrent virtual users** — the **scalability** factor."],
    ["Why is the project schedule rejected as the answer?",
     "**Any tool will take time to acquire and integrate, but the developers can code in it, so that's the main schedule factor** — and schedule is not one of the four selection factors."],
    ["Where else in the syllabus do points of presence appear?",
     "In the **PTP's Test Tools section** (**PTFL-4.1.2**), as **tools to provide load from multiple points within the system architecture**, and as a **scalability** consideration in **§5.2**."],
  ] });

  // ================= SECTION 7 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });

  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ box: { title: "Chapter 5 — Tools", body: "Three tool types support performance testing. The **load generator**, **through an IDE, script editor or tool suite**, **creates and executes multiple client instances that simulate user behavior according to a defined operational profile**, thereby **causing load on the system under test**, and **also collects metrics for later reporting**. Its objective is to **mimic the real world as much as is practical**, which usually means requests must come **from various locations, not just from the testing location** — hence **multiple points of presence**, which **distribute where the load originates so that it is not all coming from a single network**, **adding realism** but capable of **skewing results if intermediate network hops create delays**. The **load management console** **starts and stops the generators**, **aggregates metrics from the transactions defined within the load instances**, and **enables reports and graphs to be viewed in support of results analysis**. **Monitoring tools** **run concurrently with the component or system under test and supervise, record and/or analyze its behavior** — typically **web server queues, system memory and disk space** — **support root cause analysis of performance degradation**, **may monitor the production environment once the product is released**, and **may be pointed at the load generators themselves during execution**. Tools are licensed in three ways: **traditional seat/site with full ownership**, **cloud-based pay-as-you-go** (**pay only for the virtual users and instances actually used** — **often cloud-based, but not all cloud tools are pay-as-you-go**), and **open source, free in a defined environment or through cloud-based offerings**. **Each model implies a different cost structure and may include ongoing maintenance**, and **whichever is chosen, understanding how the tool works through training and/or self-study will require time and budget**. Selection is made **for the organization and not only for a project**, against **four factors**: **compatibility** (**protocols** the system uses and which will be tested · **interfaces to external components** for integration such as **CI** · **platforms and their versions**, both hosting and interacting) · **scalability** (**the total number of concurrent user simulations the tool can handle**, including **licence counts**, **load generation workstation/server configuration** and **multiple points of presence**) · **understandability** (**the level of technical knowledge needed**, **often overlooked**, where **unskilled testers incorrectly configuring tests produce inaccurate results**, and where **complex, programmable, customized testing demands skills, background and training**) · and **monitoring** (**is the tool's monitoring sufficient? · can other tools in the environment supplement it? · can the monitoring be correlated to the defined transactions?** — **all must be answered**, and **separate monitoring can watch production after release**). In the exam, the K4 question is solved by **elimination**: the scenario confirms three factors, and **the one it never mentions is the answer**." } });

  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ ul: [
    "**Load generator** — **creates and executes multiple client instances simulating user behavior according to a defined operational profile**, and **collects metrics for later reporting**.",
    "**Load management console** — **starts and stops the generators**, **aggregates transaction metrics**, **enables reports and graphs** and **supports results analysis**.",
    "**Monitoring tool** — **runs concurrently with the SUT and supervises, records and/or analyzes its behavior**; **supports root cause analysis**; **may monitor production after release**.",
    "**Points of presence** — multiple originating locations so **the load is not all coming from a single network**; **adds realism**, **may skew results through network hops**.",
    "**Traditional licence** — **seat/site based with full ownership**.",
    "**Pay-as-you-go** — **pay only for the number of virtual users and instances that you actually use**; **often cloud-based, but not all cloud tools are pay-as-you-go**.",
    "**Open source licence** — **free to use in a defined environment or through cloud-based offerings**.",
    "**Compatibility** — **protocols · interfaces to external components · platforms (and versions)**.",
    "**Scalability** — **the total number of concurrent user simulations the tool can handle**.",
    "**Understandability** — **the level of technical knowledge needed to use the tool**.",
    "**Monitoring (as a selection factor)** — **sufficient? · supplementable? · correlatable to defined transactions?**",
  ] });

  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ table: { head: ["Priority", "Concept", "LO", "Marks"], widths: [1.6, 9.0, 2.2, 1.2], rows: [
    ["★★★", "The three tool types separated by verb — **simulate · control and report · supervise**", "PTFL-5.1.1", "1"],
    ["★★★", "The three licence models, and the definition of **pay-as-you-go**", "PTFL-5.1.1", "1"],
    ["★★★", "The four selection factors, and the **elimination** technique", "PTFL-5.2.1", "1"],
    ["★★", "**Points of presence** — realism and the network-hop caveat", "PTFL-5.1.1", "—"],
    ["★★", "**Monitoring can run in production after release** — stated twice", "Both", "—"],
    ["★", "The three sub-factors of **compatibility** and the three of **scalability**", "PTFL-5.2.1", "—"],
    ["★", "**Understanding any tool requires time and budget**", "PTFL-5.1.1", "—"],
  ] } });

  B.push({ h2: "7.4 Last-minute revision sheet" });
  B.push({ ul: [
    "**3 of 40 questions · 3 of 40 points · K2 = 2, K4 = 1 · both objectives guaranteed · 90 minutes of teaching.** Sample Exam questions **#38–#40**, the last three on the paper.",
    "**Generator** = **creates the load and collects metrics**, simulating users **according to a defined operational profile**, via an **IDE, script editor or tool suite**.",
    "**Console** = **start and stop · aggregate transaction metrics · reports and graphs · results analysis**.",
    "**Monitor** = **runs concurrently with the SUT, supervises, records and analyzes**; **web server queues, memory, disk space**; **root cause analysis**; **production after release**; **and the load generators themselves**.",
    "**Points of presence** = **realism**, because **requests come from various locations, not just the testing location** — but **network hops can skew results**.",
    "**Licences:** **seat/site with full ownership · cloud pay-as-you-go (pay for what you use; often cloud, not all cloud) · open source (free in a defined environment or via cloud offerings)**. **Each implies a different cost structure and may include ongoing maintenance.**",
    "**Any tool costs learning:** **training and/or self-study will require time and budget**.",
    "**Selection is for the organization, not only the project.**",
    "**Four factors:** **compatibility** (protocols · interfaces including **CI** · platforms and versions) · **scalability** (concurrent user simulations · licence count · generation hardware · **points of presence**) · **understandability** (technical knowledge; **unskilled configuration → inaccurate results**; skills and training for complex work) · **monitoring** (**sufficient? supplementable? correlatable to defined transactions?**).",
    "**K4 technique:** tick off what the scenario has settled; **the unmentioned factor is the answer**. **Project schedule and record/playback are not factors.**",
  ] });

  B.push({ h2: "7.5 Memorization checklist" });
  B.push({ ol: [
    "I can name the two learning objectives and say which one is worth **two marks** and which is **K4**.",
    "I can define all three tool types in syllabus wording.",
    "I can separate them by their verbs — **simulate, control and report, supervise**.",
    "I can name the three components typically monitored.",
    "I can state the two extra roles of monitoring tools — **production after release** and **the load generators themselves**.",
    "I can explain the objective of the load generator and why **points of presence** matter.",
    "I can state the **caveat** attached to points of presence.",
    "I can name the three licence models and define **pay-as-you-go** precisely.",
    "I can state that **not all cloud-based tools are pay-as-you-go**.",
    "I can quote the sentence about **training and/or self-study requiring time and budget**.",
    "I can state that **a tool is selected for the organization and not only for a project**.",
    "I can name the four selection factors.",
    "I can list the three sub-factors of **compatibility** and the three considerations under **scalability**.",
    "I can state the consequence of ignoring **understandability**.",
    "I can recite the three **monitoring** questions.",
    "I can explain how the official K4 question is solved by **elimination**, and why **schedule** and **record/playback** are rejected.",
  ] });

  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ box: { kind: "ok", title: "60-second mental checklist before answering any Chapter 5 question", body: "**1)** Which LO is this — **tool support** or **tool suitability**?  **2)** If it names a tool, find the **verb**: **simulates users** → generator · **starts, stops, aggregates, reports** → console · **supervises, records, analyzes** → monitor.  **3)** If it names a **licence**, ask **what am I paying for** — a seat or site with ownership · only what I use · nothing.  **4)** Reject any \"licence\" option that describes **what a tool does**.  **5)** If it is the **selection scenario**, tick off **compatibility, scalability, understandability, monitoring** against what the stem has already confirmed, and answer with the **one it never mentions**.  **6)** Reject **project schedule** and **record/playback** — neither is a selection factor.  **7)** Remember the qualifiers: **points of presence add realism but can skew results**; **not all cloud tools are pay-as-you-go**; **every tool costs time and budget to learn**.  **8)** If two options survive, choose the one that repeats **syllabus wording**." } });
  B.push({ spacer: 200 });
  B.push({ lead: "Sources: ISTQB® Certified Tester Foundation Level Specialist Syllabus — Performance Testing, Version 2018 (9 December 2018), Chapter 5 and Keywords; ISTQB® CT-PT Sample Exam Questions and Sample Exam Answers, Version 2018 (9 December 2018); ISTQB® Exam Structure Tables v1.16 (CT-PT) and ISTQB® Exam Structures and Rules v1.2. All content is traceable to these references; no external knowledge was used." });

  return B;
};
