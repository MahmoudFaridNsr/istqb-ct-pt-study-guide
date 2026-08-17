// CT-PT Chapter 2 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 2 carries **4 learning objectives** across four sub-chapters (2.1 Typical Metrics Collected in Performance Testing · 2.2 Aggregating Results from Performance Testing · 2.3 Key Sources of Performance Metrics · 2.4 Typical Results of a Performance Test). The official ISTQB Exam Structure Table allocates **4 of the 40 exam questions** to Chapter 2 — **one question per learning objective**, every one **guaranteed**. Recommended teaching time is **55 minutes**, the shortest of any chapter in the syllabus." });
  B.push({ p: "Four marks for 55 minutes of teaching makes Chapter 2 the **second-best return per minute in the syllabus**, behind only Chapter 1. Together, Chapters 1 and 2 are **10 of the 26 points you need to pass**, from **115 minutes** of material — while Chapter 4 asks for **475 minutes** to deliver 20." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.9, 0.7, 9.4, 1.0, 1.0], rows: [
    ["PTFL-2.1.1", "K2", "Understand the typical metrics collected in performance testing.", "**1**", "1"],
    ["PTFL-2.2.1", "K2", "Explain why results from performance testing are aggregated.", "**1**", "1"],
    ["PTFL-2.3.1", "K2", "Understand the key sources of performance metrics.", "**1**", "1"],
    ["PTFL-2.4.1", "K1", "Recall the typical results of a performance test.", "**1**", "1"],
    ["**Chapter 2 total**", "—", "**K1 = 1 · K2 = 3 · K3 = 0 · K4 = 0**", "**4**", "**4**"],
  ] } });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 2 = **4 questions / 4 points** of 40 questions and 40 points. In the official Sample Exam these are questions **#7 to #10**, in exact learning-objective order. **PTFL-2.4.1 is one of only two K1 objectives on the whole paper** (the other is PTFL-1.3.1)." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Chapter 2 is a vocabulary chapter about where numbers come from and what they are for.** Three of the four marks are decided by knowing (a) which **environment category** a metric belongs to, (b) that aggregation exists to give the **big picture and trends** to **business and project stakeholders**, and (c) that **log analysis tools scan server logs and compile metrics** — as opposed to monitoring tools, which watch the system live, and performance test tools, which create the load. Get those three separations right and the chapter is essentially free." } });

  // --- PTFL-2.1.1 ---
  B.push({ h2: "PTFL-2.1.1 (K2) — Typical Metrics Collected in Performance Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the typical metrics collected in performance testing." } });
  B.push({ p: "**Why metrics are needed at all.** \"_Accurate measurements and the metrics which are derived from those measurements are **essential for defining the goals of performance testing and for evaluating the results** of performance testing._\" The syllabus then makes the point negatively, listing **six project risks that apply if performance testing is undertaken without first understanding which measurements and metrics are needed**. Learn these six — they are the most quotable list in the chapter." });
  B.push({ table: { head: ["#", "Project risk if you do not define measurements and metrics first"], widths: [0.8, 13.2], rows: [
    ["1", "It is **unknown if the levels of performance are acceptable to meet operational objectives**."],
    ["2", "The **performance requirements are not defined in measurable terms**."],
    ["3", "It may **not be possible to identify trends that may predict lower levels of performance**."],
    ["4", "The actual results **cannot be evaluated by comparing them to a baseline** set of performance measures that define acceptable and/or unacceptable performance."],
    ["5", "Performance test results are **evaluated based on the subjective opinion of one or more people**."],
    ["6", "The **results provided by a performance test tool are not understood**."],
  ] } });
  B.push({ p: "**Metrics must be defined for a context.** Any metric described in this section **can and should be defined to be meaningful in a particular context**. This is **a matter of performing initial tests and learning which metrics need to be further refined and which need to be added**. The syllabus's own example: **response time** will be in any set of performance metrics, but to be **meaningful and actionable** it must be further defined in terms of **time of day, number of concurrent users, the amount of data being processed** and so forth." });
  B.push({ p: "**The three things metrics vary by.** The metrics collected in a specific performance test will vary based on the **business context** (business processes, customer and user behavior, and stakeholder expectations), the **operational context** (technology and how it is used), and the **test objectives**. The syllabus's illustration is that the metrics for an **international e-commerce website** will differ from those for an **embedded system controlling medical device functionality**." });
  B.push({ box: { kind: "ok", title: "The categorisation that structures the whole objective", body: "**A common way to categorize performance measurements and metrics is to consider the technical environment, business environment, or operational environment in which the assessment of performance is needed.** Every metric in this learning objective belongs to exactly one of those three buckets — and the exam's fastest route is to recognise which bucket a described metric sits in." } });
  B.push({ h3: "Technical environment" });
  B.push({ p: "Performance metrics **vary by the type of the technical environment**. The syllabus lists **nine** environment types: **web-based · mobile · Internet-of-Things (IoT) · desktop client devices · server-side processing · mainframe · databases · networks · the nature of software running in the environment (e.g., embedded)**." });
  B.push({ table: { title: "The eight technical-environment metrics", head: ["Metric", "Syllabus examples"], widths: [4.0, 10.0], rows: [
    ["**Response time**", "Per transaction · per concurrent user · **page load times**"],
    ["**Resource utilization**", "**CPU · memory · network bandwidth · network latency · available disk space · I/O rate · idle and busy threads**"],
    ["**Throughput rate of key transaction**", "The **number of transactions that can be processed in a given period of time**"],
    ["**Batch processing time**", "**Wait times · throughput times · database response times · completion times**"],
    ["**Numbers of errors impacting performance**", "—"],
    ["**Completion time**", "For **creating, reading, updating and deleting data**"],
    ["**Background load on shared resources**", "**Especially in virtualized environments**"],
    ["**Software metrics**", "e.g., **code complexity**"],
  ] } });
  B.push({ box: { kind: "warn", title: "Network latency lives here — and the official question is built on it", body: "**Network latency is listed under resource utilization in the technical environment.** The official Chapter 2 question asks about tracking it, and the answer is that **high latency could indicate a network bandwidth problem that could negatively impact performance**. The three distractors are all worth knowing: **low latency is a good thing**; latency **is** trackable **with the right tools**; and **if there is variability, that needs to be understood as part of the performance tests** — variability is a reason to measure it, not a reason to drop it." } });
  B.push({ h3: "Business environment" });
  B.push({ p: "\"_From the business or functional perspective, performance metrics may include the following_\" — six items. Notice that every one of them is expressed in **units the business already uses**, which is exactly what makes them business metrics." });
  B.push({ table: { head: ["Business metric", "Syllabus example"], widths: [4.4, 9.6], rows: [
    ["**Business process efficiency**", "The **speed of performing an overall business process** including **normal, alternate and exceptional use case flows**"],
    ["**Throughput of data, transactions, and other units of work performed**", "**Orders processed per hour · data rows added per minute**"],
    ["**Service Level Agreement (SLA) compliance or violation rates**", "**SLA violations per unit of time**"],
    ["**Scope of usage**", "**Percentage of global or national users conducting tasks at a given time**"],
    ["**Concurrency of usage**", "The **number of users concurrently performing a task**"],
    ["**Timing of usage**", "The **number of orders processed during peak load times**"],
  ] } });
  B.push({ h3: "Operational environment" });
  B.push({ p: "\"_The operational aspect of performance testing focuses on tasks that are **generally not considered to be user-facing in nature**._\" Three items only — and the phrase **not user-facing** is the discriminator." });
  B.push({ table: { head: ["Operational metric", "Syllabus example"], widths: [4.0, 10.0], rows: [
    ["**Operational processes**", "The time required for **environment start-up, backups, shutdown and resumption times**"],
    ["**System restoration**", "The time required to **restore data from a backup**"],
    ["**Alerts and warnings**", "The time needed for the **system to issue an alert or warning**"],
  ] } });
  B.push({ h3: "Selecting performance metrics" });
  B.push({ p: "**More is not better.** \"_It should be noted that **collecting more metrics than required is not necessarily a good thing**. **Each metric chosen requires a means for consistent collection and reporting.** It is important to **define an obtainable set of metrics that support the performance test objectives**._\" This sentence is echoed almost word for word in **PTFL-4.1.2** (Relevant Metrics in the Performance Test Plan), where the syllabus adds that **taking too many measurements can make analysis difficult as well as negatively impact the application's actual performance**." });
  B.push({ box: { kind: "ok", title: "GQM — Goal-Question-Metric", body: "**The Goal-Question-Metric (GQM) approach is a helpful way to align metrics with performance goals.** The idea is to **first establish the goals, then ask questions to know when the goals have been achieved. Metrics are associated with each question to ensure the answer to the question is measurable.** A fuller description is in **Section 4.3 of the Expert Level Syllabus — Improving the Testing Process**. **Crucially, the syllabus adds a caveat: the GQM approach doesn't always fit the performance testing process — for example, some metrics represent a system's health and are not directly linked to goals.** An option that presents GQM as universally applicable is wrong." } });
  B.push({ p: "**Metrics evolve.** \"_It is important to realize that **after the definition and capture of initial measurements further measurements and metrics may be needed** to understand true performance levels and to determine where corrective actions may be needed._\" This is the same iterative theme as Chapter 1's _experimentation_." });
  B.push({ p: "**Exam focus.** One K2 question, officially about **network latency**: \"_Which of the following is a true statement regarding tracking metrics for network latency during a performance test?_\" Answer: **high latency could indicate a network bandwidth problem that could negatively impact performance**." });
  B.push({ lead: "Related concepts: measurement, metric, baseline, response time, resource utilization, throughput rate, batch processing time, completion time, background load, code complexity, business process efficiency, SLA compliance, scope of usage, concurrency of usage, timing of usage, operational processes, system restoration, alerts and warnings, Goal-Question-Metric (GQM), network latency, network bandwidth." });

  // --- PTFL-2.2.1 ---
  B.push({ h2: "PTFL-2.2.1 (K2) — Aggregating Results from Performance Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Explain why results from performance testing are aggregated." } });
  B.push({ p: "**The purpose sentence.** \"_The purpose of aggregating performance metrics is to be able to **understand and express them in a way that accurately conveys the total picture of system performance**._\" That is the whole objective in one line. Everything else supports it." });
  B.push({ p: "**Why detail alone fails.** \"_When performance metrics are viewed at **only the detailed level**, **drawing the right conclusion may be difficult — especially for business stakeholders**._\" And: \"_For many stakeholders, the main concern is that the **response time** of a system, web site, or other test object is **within acceptable limits**._\"" });
  B.push({ table: { title: "The three things aggregation makes possible", head: ["#", "Once deeper understanding has been achieved, metrics can be aggregated so that…"], widths: [0.8, 13.2], rows: [
    ["1", "**Business and project stakeholders can see the \"big picture\" status of system performance.**"],
    ["2", "**Performance trends can be identified.**"],
    ["3", "**Performance metrics can be reported in an understandable way.**"],
  ] } });
  B.push({ box: { kind: "warn", title: "The order matters — and the exam knows it", body: "The syllabus says aggregation happens **once deeper understanding of the performance metrics has been achieved**. Aggregation is **not** a substitute for understanding the detail; it is what you do **after** you understand it, so that other people can act on it. This is why the correct official answer says aggregation **helps to identify and understand the importance of outliers and to know which ones are interesting versus just test aberrations** — aggregation contextualises outliers rather than hiding them." } });
  B.push({ p: "**Exam focus.** One K2 question: \"_Should performance test results be aggregated?_\" Answer: **yes — this gives a better overall picture of the performance of the system and helps to identify trends**. The three distractors carry a lot of teaching in their official rationale:" });
  B.push({ table: { head: ["Distractor", "Why the official rationale rejects it"], widths: [5.4, 8.6], rows: [
    ["\"Yes, this is the best way to **focus on the outliers**\"", "**Aggregated results will eliminate the information on the outliers.** Aggregation helps you judge **which** outliers matter — it is not a tool for focusing on them."],
    ["\"No, the results should be **analyzed individually so that all variations are understood**\"", "**Aggregation allows you to see the big picture rather than focusing on the individual results which may be due to transient system noise.** And: **it is unlikely to ever reach the point where \"all\" variations are understood.**"],
    ["\"No, the results from each test should be **reported and tracked separately**\"", "**This type of reporting will be too difficult for stakeholders to understand and may focus on the highly unlikely situations.**"],
  ] } });
  B.push({ p: "**Common misunderstanding.** Believing aggregation is only an averaging exercise. The syllabus never equates aggregation with the mean — and **PTFL-4.4.1** warns explicitly that **the average performance is not necessarily indicative of anything other than the mathematical average and can often be skewed by outliers**. Aggregation is about **conveying the total picture**, which is why **visual means of reporting such as dashboards** are named in **PTFL-3.1.1**." });
  B.push({ lead: "Related concepts: aggregation, big picture, trend identification, understandable reporting, outliers, transient system noise, business stakeholders, project stakeholders, dashboards, acceptable limits." });

  // --- PTFL-2.3.1 ---
  B.push({ h2: "PTFL-2.3.1 (K2) — Key Sources of Performance Metrics" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the key sources of performance metrics." } });
  B.push({ p: "**The probe effect.** \"_System performance should be **no more than minimally impacted by the metrics collection effort** (known as the **\"probe effect\"**)._\" This is a named concept and therefore examinable at K1 even though it is not itself a learning objective." });
  B.push({ p: "**Why tools are compulsory here.** \"_In addition, the **volume, accuracy and speed** with which performance metrics must be collected **makes tool usage a requirement**._\" And a warning: \"_While the **combined use of tools is not uncommon**, it can introduce **redundancy in the usage of test tools and other problems** (see Section 4.4)._\"" });
  B.push({ table: { title: "The three key sources — learn what each one does and does not do", head: ["Source", "What it does", "What it is NOT"], widths: [3.0, 6.0, 5.0], rows: [
    ["**Performance test tools**", "**All performance test tools provide measurements and metrics as the result of a test.** Tools vary in the **number of metrics shown**, the **way in which the metrics are shown**, and the **ability for the user to customize the metrics** to a particular situation. Some collect and display metrics in **text format**; more robust tools use a **graphical dashboard format**. Many offer the ability to **export metrics** to facilitate test evaluation and reporting.", "Not a general system monitor, and not a log scanner. These are the tools that **create the load and report on it**."],
    ["**Performance monitoring tools**", "**Often employed to supplement the reporting capabilities of performance test tools.** May be used to **monitor system performance on an ongoing basis** and to **alert system administrators to lowered levels of performance and higher levels of system errors and alerts**. May also be used to **detect and notify in the event of suspicious behavior** (such as **denial of service attacks and distributed denial of service attacks**).", "Not the source of the load. Note that these can run **in production after release** — see **PTFL-5.1.1** and **PTFL-5.2.1**."],
    ["**Log analysis tools**", "**Tools that scan server logs and compile metrics from them.** Some can **create charts to provide a graphical view of the data**.", "Not live monitors, and they do **not** write performance results into the logs — **the system activities during the performance tests are written to the logs**, and the tool reads them afterwards."],
  ] } });
  B.push({ p: "**What is in a server log.** \"_Errors, alerts and warnings are **normally recorded in server logs**._\" The syllabus lists four categories, and knowing them is what makes the log-analysis answer obvious in a stem that mentions any of them." });
  B.push({ table: { head: ["#", "Recorded in server logs"], widths: [0.8, 13.2], rows: [
    ["1", "**High resource usage** — such as **high CPU utilization, high levels of disk storage consumed, and insufficient bandwidth**"],
    ["2", "**Memory errors and warnings**, such as **memory exhaustion**"],
    ["3", "**Deadlocks and multi-threading problems**, especially when performing **database operations**"],
    ["4", "**Database errors**, such as **SQL exceptions and SQL timeouts**"],
  ] } });
  B.push({ p: "**Exam focus.** One K2 question: \"_In what way are log analysis tools helpful for collecting metrics?_\" Answer: **they scan the various server logs and compile metrics for occurrences that were recorded during the test execution**. The official rationale separates all three sources cleanly: the option describing tools that **monitor the systems while the tests are conducted and report on the behavior** is **general system monitoring tools**; the option describing tools that **create the system load and monitor system performance** is **performance testing tools**; and the option claiming the tools **write the performance results to the server logs** is wrong because **the performance test results aren't written to the logs — rather the system activities during the performance tests are written to the logs**." });
  B.push({ lead: "Related concepts: probe effect, tool redundancy, performance test tool, dashboard format, metric export, performance monitoring tool, ongoing monitoring, denial of service, distributed denial of service, log analysis tool, server log, memory exhaustion, deadlock, multi-threading, SQL exception, SQL timeout." });

  // --- PTFL-2.4.1 ---
  B.push({ h2: "PTFL-2.4.1 (K1) — Typical Results of a Performance Test" });
  B.push({ box: { title: "Original syllabus statement", body: "Recall the typical results of a performance test." } });
  B.push({ p: "**The oracle problem.** In functional testing, \"_particularly when **verifying specified functional requirements or functional elements of user stories**, the **expected results usually can be defined clearly** and the test results interpreted to determine if the test passed or failed. For example, **a monthly sales report shows either a correct or an incorrect total**._\"" });
  B.push({ box: { kind: "warn", title: "The sentence this entire objective turns on", body: "\"_Whereas tests that verify functional suitability often benefit from **well-defined test oracles**, **performance testing often lacks this source of information**. Not only are the **stakeholders notoriously bad at articulating performance requirements**, **many business analysts and product owners are bad at eliciting such requirements**. **Testers often receive limited guidance to define the expected test results.**_\" Three separate parties are blamed by name. This is why **PTFL-4.4.1** ends with an official question whose \"correct\" answer is partly \"the requirements were unclear\"." } });
  B.push({ p: "**Raw results mislead.** \"_When evaluating performance test results, it is important to **look at the results closely**. **Initial raw results can be misleading with performance failures being hidden beneath apparently good overall results.**_\" The syllabus's own example is worth memorising verbatim: **resource utilization may be well under 75% for all key potential bottleneck resources, but the throughput or response time of key transactions or use cases are an order-of-magnitude too slow**." });
  B.push({ p: "**What results to look at.** \"_The specific results to evaluate **vary depending on the tests being run**, and often include **those discussed in Section 2.1**._\" In other words, this K1 objective inherits the whole metric catalogue from PTFL-2.1.1 — and, in practice, the failure vocabulary from **PTFL-1.5.1** as well." });
  B.push({ box: { kind: "ok", title: "How the official exam actually tested this K1 objective", body: "The official Chapter 2 K1 question does **not** ask you to list metrics. It asks: \"_Which of the following is a failure that would typically be found by conducting a **spike test**?_\" — and the answer is **the system handles a sudden burst of activity, but can't resume a steady state**. The rationale then places each distractor: **gradual performance degradation is a result of an endurance test**; **inconsistent responses to errors is an example of resource degradation over time**; **performing well for the expected load but failing to scale to a larger load is the result of a scalability test**. **Conclusion: to answer PTFL-2.4.1 you must know the Chapter 1 type definitions cold.** The typical result of a performance test is expressed in the vocabulary of the test type that produced it." } });
  B.push({ p: "**Exam focus.** One **K1** question. Treat it as a **Chapter 1 revision question wearing a Chapter 2 label**: it maps an observed outcome back to the test type that would surface it. Spike → **survives the burst but cannot resume a steady state**. Endurance → **gradual degradation**. Scalability → **fine at expected load, cannot scale further**. Stress → **behaviour at or beyond the limit, including under reduced resources**." });
  B.push({ p: "**Common misunderstanding.** Reading \"typical results\" as \"typical numbers\". The syllabus means **the kinds of outcomes a performance test produces and how to interpret them** — including the warning that a green-looking resource dashboard can sit on top of an order-of-magnitude response-time failure." });
  B.push({ lead: "Related concepts: test oracle, functional suitability, expected results, requirements elicitation, raw results, hidden failures, 75% resource utilization example, order-of-magnitude, spike test outcome, endurance test outcome, scalability test outcome." });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ lead: "Concise, exam-ready notes drawn from the syllabus text. Every item is traceable to Chapter 2 of the CT-PT syllabus (pages 17–22)." });

  B.push({ h2: "2.1 Why metrics are needed" });
  B.push({ ul: [
    "**Accurate measurements and the metrics derived from them are essential for defining the goals of performance testing and for evaluating the results.**",
    "**Performance testing should not be undertaken without first understanding which measurements and metrics are needed.**",
    "**Six project risks if that advice is ignored:** unknown whether performance levels are **acceptable to meet operational objectives** · requirements **not defined in measurable terms** · unable to **identify trends that may predict lower levels of performance** · results **cannot be compared to a baseline** defining acceptable and unacceptable performance · results **evaluated on the subjective opinion of one or more people** · **results provided by a performance test tool are not understood**.",
    "A metric must be **defined to be meaningful in a particular context** — **response time** needs qualifying by **time of day, number of concurrent users, amount of data processed**.",
    "Metrics vary by **business context** (business processes, customer and user behavior, stakeholder expectations), **operational context** (technology and how it is used) and **test objectives**.",
  ] });

  B.push({ h2: "2.2 The three environment categories" });
  B.push({ ul: [
    "**Technical environment** — nine types: **web-based · mobile · IoT · desktop client devices · server-side processing · mainframe · databases · networks · the nature of the software (e.g., embedded)**.",
    "**Technical metrics:** **response time** (per transaction, per concurrent user, page load times) · **resource utilization** (**CPU, memory, network bandwidth, network latency, available disk space, I/O rate, idle and busy threads**) · **throughput rate of key transaction** · **batch processing time** (wait, throughput, database response, completion times) · **numbers of errors impacting performance** · **completion time** (create, read, update, delete) · **background load on shared resources** (especially **virtualized environments**) · **software metrics** (e.g., **code complexity**).",
    "**Business environment metrics:** **business process efficiency** (including **normal, alternate and exceptional use case flows**) · **throughput of data, transactions and units of work** (orders per hour, rows per minute) · **SLA compliance or violation rates** · **scope of usage** (percentage of global or national users at a given time) · **concurrency of usage** · **timing of usage** (orders during peak load times).",
    "**Operational environment metrics** — tasks **generally not user-facing**: **operational processes** (start-up, backups, shutdown, resumption) · **system restoration** (restore from backup) · **alerts and warnings** (time to issue).",
  ] });

  B.push({ h2: "2.3 Selecting metrics" });
  B.push({ ul: [
    "**Collecting more metrics than required is not necessarily a good thing.**",
    "**Each metric chosen requires a means for consistent collection and reporting.**",
    "**Define an obtainable set of metrics that support the performance test objectives.**",
    "**GQM (Goal-Question-Metric):** establish **goals**, ask **questions** to know when the goals have been achieved, associate **metrics** with each question **to ensure the answer is measurable**. Described more fully in the **Expert Level Syllabus — Improving the Testing Process, Section 4.3**.",
    "**GQM does not always fit the performance testing process** — **some metrics represent a system's health and are not directly linked to goals**.",
    "**After the initial measurements, further measurements and metrics may be needed** to understand true performance levels and where corrective actions are needed.",
  ] });

  B.push({ h2: "2.4 Aggregation" });
  B.push({ ul: [
    "**Purpose:** to **understand and express metrics in a way that accurately conveys the total picture of system performance**.",
    "**When metrics are viewed at only the detailed level, drawing the right conclusion may be difficult — especially for business stakeholders.**",
    "**For many stakeholders, the main concern is that response time is within acceptable limits.**",
    "**Aggregation happens once deeper understanding of the metrics has been achieved**, so that: **business and project stakeholders can see the \"big picture\"** · **performance trends can be identified** · **metrics can be reported in an understandable way**.",
    "Aggregation **helps identify and understand the importance of outliers** — which are **interesting** versus **just test aberrations** — rather than being a way to focus on them.",
    "Individual results **may be due to transient system noise**, and **it is unlikely to ever reach the point where \"all\" variations are understood**.",
  ] });

  B.push({ h2: "2.5 Sources of metrics" });
  B.push({ ul: [
    "**Probe effect** — system performance should be **no more than minimally impacted by the metrics collection effort**.",
    "The **volume, accuracy and speed** of collection **makes tool usage a requirement**.",
    "**Combined use of tools is not uncommon**, but can introduce **redundancy in the usage of test tools and other problems**.",
    "**Performance test tools** — all provide measurements and metrics **as the result of a test**; vary in **number of metrics, presentation and customizability**; **text or graphical dashboard**; many can **export metrics**.",
    "**Performance monitoring tools** — **supplement the reporting capabilities of performance test tools**; monitor **on an ongoing basis**; **alert system administrators** to lowered performance and higher error/alert levels; can **detect and notify suspicious behavior** such as **DoS and DDoS attacks**.",
    "**Log analysis tools** — **scan server logs and compile metrics from them**; some **create charts**.",
    "**Server logs record:** **high resource usage** (high CPU, disk storage consumed, insufficient bandwidth) · **memory errors and warnings** (memory exhaustion) · **deadlocks and multi-threading problems**, especially in **database operations** · **database errors** (**SQL exceptions and SQL timeouts**).",
  ] });

  B.push({ h2: "2.6 Typical results" });
  B.push({ ul: [
    "Functional tests **often benefit from well-defined test oracles**; **performance testing often lacks this source of information**.",
    "**Stakeholders are notoriously bad at articulating performance requirements**, and **many business analysts and product owners are bad at eliciting such requirements**.",
    "**Testers often receive limited guidance to define the expected test results.**",
    "**Initial raw results can be misleading, with performance failures hidden beneath apparently good overall results.**",
    "The syllabus example: **resource utilization well under 75% for all key potential bottleneck resources, yet throughput or response time of key transactions an order-of-magnitude too slow**.",
    "**The specific results to evaluate vary depending on the tests being run**, and often include those in **Section 2.1**.",
    "Officially examined by mapping an **observed outcome back to the test type**: **spike** = survives the burst but **cannot resume a steady state** · **endurance** = **gradual degradation** · **scalability** = fine at expected load, **cannot scale to a larger load**.",
  ] });

  B.push({ h2: "2.7 Chapter 2 keyword glossary" });
  B.push({ p: "The syllabus lists only **two keywords** for Chapter 2 — the fewest of any chapter — but several named concepts inside the text are examinable at K1." });
  B.push({ table: { head: ["Term", "Definition to memorise"], widths: [3.4, 10.6], rows: [
    ["**Measurement**", "The raw observed value obtained from the system or the tool. Metrics are **derived from measurements**; both are **essential for defining the goals of performance testing and for evaluating the results**. _(syllabus keyword)_"],
    ["**Metric**", "A defined, context-qualified measure used to evaluate performance — meaningful only when defined for a **particular context** (e.g., response time qualified by **time of day, number of concurrent users, amount of data processed**). _(syllabus keyword)_"],
    ["**Baseline**", "A set of performance measures **defining acceptable and/or unacceptable performance**, against which actual results are compared. Formally defined in **PTFL-4.1.2** as **a set of metrics used to compare current and previously achieved performance measurements**."],
    ["**Probe effect**", "The impact of the **metrics collection effort** on system performance. It should be **no more than minimal**."],
    ["**GQM (Goal-Question-Metric)**", "Establish **goals** → ask **questions** that reveal when the goals are achieved → attach **metrics** so each answer is **measurable**. **Does not always fit performance testing**, because **some metrics represent system health and are not directly linked to goals**."],
    ["**Aggregation**", "Expressing metrics so they **accurately convey the total picture of system performance**, enabling the **big picture**, **trend identification** and **understandable reporting**."],
    ["**Test oracle**", "The source of expected results. **Well-defined oracles benefit functional suitability testing; performance testing often lacks them.**"],
    ["**Log analysis tool**", "A tool that **scans server logs and compiles metrics from them**; some **create charts** for a graphical view."],
    ["**Performance monitoring tool**", "A tool that **supplements the reporting capabilities of performance test tools**, monitors **on an ongoing basis**, and **alerts administrators** to lowered performance, higher errors, and **suspicious behavior such as DoS and DDoS attacks**."],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });

  B.push({ table: { title: "3.1 Which environment does this metric belong to?", head: ["Metric described in a stem", "Category"], widths: [9.4, 4.6], rows: [
    ["Response time per transaction · per concurrent user · **page load time**", "**Technical**"],
    ["**CPU, memory, network bandwidth, network latency, disk space, I/O rate, idle and busy threads**", "**Technical** (resource utilization)"],
    ["**Throughput rate of key transaction** — transactions processed in a given period", "**Technical**"],
    ["**Batch processing time** — wait, throughput, database response, completion times", "**Technical**"],
    ["**Numbers of errors impacting performance**", "**Technical**"],
    ["**Completion time** for **create, read, update, delete**", "**Technical**"],
    ["**Background load on shared resources**, especially in **virtualized environments**", "**Technical**"],
    ["**Software metrics** such as **code complexity**", "**Technical**"],
    ["**Business process efficiency**, including **normal, alternate and exceptional flows**", "**Business**"],
    ["**Orders processed per hour · data rows added per minute**", "**Business** (throughput of units of work)"],
    ["**SLA compliance or violation rates** (violations per unit of time)", "**Business**"],
    ["**Percentage of global or national users conducting tasks at a given time**", "**Business** (scope of usage)"],
    ["**Number of users concurrently performing a task**", "**Business** (concurrency of usage)"],
    ["**Number of orders processed during peak load times**", "**Business** (timing of usage)"],
    ["**Environment start-up, backups, shutdown, resumption times**", "**Operational**"],
    ["**Time required to restore data from a backup**", "**Operational**"],
    ["**Time needed for the system to issue an alert or warning**", "**Operational**"],
  ] } });

  B.push({ box: { kind: "ok", title: "The one-question test for the category", body: "**Is a user or a business person waiting for it?** If a business person measures it in **orders, rows, SLAs, percentages of users** → **business**. If it is **not user-facing at all** — start-up, backup, restore, alerting → **operational**. Everything else — response times, resources, throughput rates, batch times, error counts, code complexity → **technical**." } });

  B.push({ table: { title: "3.2 The three metric sources — separated", head: ["Source", "Creates load?", "Runs during the test?", "Runs in production?", "Reads logs?"], widths: [4.0, 2.4, 2.8, 2.6, 2.2], rows: [
    ["**Performance test tools**", "**Yes**", "Yes", "No", "No"],
    ["**Performance monitoring tools**", "No", "Yes", "**Yes — ongoing, with alerts**", "No"],
    ["**Log analysis tools**", "No", "After / alongside", "Possible", "**Yes**"],
  ] } });

  B.push({ table: { title: "3.3 Server log contents — the recognition list", head: ["If the stem mentions…", "…it is in the server log, so the answer is log analysis"], widths: [6.6, 7.4], rows: [
    ["**High CPU utilization · high disk storage consumed · insufficient bandwidth**", "**High resource usage**"],
    ["**Memory exhaustion**", "**Memory errors and warnings**"],
    ["**Deadlocks · multi-threading problems**, especially in **database operations**", "**Deadlocks and multi-threading problems**"],
    ["**SQL exceptions · SQL timeouts**", "**Database errors**"],
  ] } });

  B.push({ table: { title: "3.4 Aggregation — yes and no, with the official reasoning", head: ["Claim", "Verdict", "Syllabus reasoning"], widths: [5.0, 2.0, 7.0], rows: [
    ["Aggregate to give **a better overall picture and identify trends**", "**✔ Correct**", "Aggregation conveys the **total picture**, enables **big picture status for business and project stakeholders**, **trend identification** and **understandable reporting**"],
    ["Aggregate to **focus on the outliers**", "✘", "**Aggregated results will eliminate the information on the outliers**"],
    ["Do not aggregate — **analyse individually so all variations are understood**", "✘", "Individual results **may be due to transient system noise**, and it is **unlikely to ever reach the point where \"all\" variations are understood**"],
    ["Do not aggregate — **report and track each test separately**", "✘", "**Too difficult for stakeholders to understand** and **may focus on the highly unlikely situations**"],
  ] } });

  B.push({ table: { title: "3.5 Observed outcome → the test type that produced it (the K1 question)", head: ["Observed outcome", "Test type"], widths: [8.4, 5.6], rows: [
    ["The system **handles a sudden burst of activity but cannot resume a steady state**", "**Spike testing**"],
    ["The system's **performance gradually degrades**", "**Endurance testing**"],
    ["The system **performs well for the expected load but cannot scale to a larger load**", "**Scalability testing**"],
    ["The system **provides inconsistent responses to errors** / degrades as resources are consumed", "**Resource degradation over time** — the endurance/leak family"],
    ["The system **fails at or beyond its specified maximum**, or with **reduced resources**", "**Stress testing**"],
    ["**How many users can we support and still meet the objectives?**", "**Capacity testing**"],
  ] } });

  B.push({ table: { title: "3.6 One-line answer to every learning objective", head: ["LO", "If you remember only one sentence"], widths: [2.0, 12.0], rows: [
    ["**PTFL-2.1.1**", "Metrics are categorised as **technical, business or operational**; they vary by **business context, operational context and test objectives**; **more is not better**; **GQM aligns metrics to goals but does not always fit**; and **high network latency could indicate a bandwidth problem**."],
    ["**PTFL-2.2.1**", "Aggregate to **convey the total picture** — giving stakeholders the **big picture**, revealing **trends**, and making results **understandable**. Aggregation **eliminates outlier detail**, so it is not a way to focus on outliers."],
    ["**PTFL-2.3.1**", "**Performance test tools create the load and report**, **monitoring tools watch the system live and in production**, and **log analysis tools scan server logs and compile metrics** — the last is the answer whenever the stem mentions logs."],
    ["**PTFL-2.4.1**", "Performance testing **often lacks a well-defined test oracle** and **raw results can hide failures**; the exam tests this by asking you to name the **test type** that would produce a described outcome."],
  ] } });

  B.push({ box: { kind: "ok", title: "How the four marks are actually won", body: [
    "**PTFL-2.1.1** — put the metric in the right bucket. Ask **who reads this number**: a business person counting **orders, rows, SLA breaches or percentages of users** → **business**; nobody user-facing — **start-up, backup, restore, alerting** → **operational**; an engineer reading **times, resources, throughput rates, batch times, error counts or code complexity** → **technical**. **Network latency is technical**, filed under **resource utilization**, and **high** latency implies **inadequate bandwidth**.",
    "**PTFL-2.2.1** — the aggregation answer always contains **big picture** and **trends**. It never contains **outliers** (aggregation **eliminates** their detail) and never argues for **per-test raw reporting** (**too difficult for stakeholders**, and focused on **highly unlikely situations**).",
    "**PTFL-2.3.1** — match the verb. **Push load in** → performance test tool. **Watch from outside, live and in production, alerting administrators** → monitoring tool. **Read what the system already wrote down** → log analysis tool. Any mention of **SQL timeouts, memory exhaustion, deadlocks or high resource usage** is a server-log signal, so the answer is **log analysis**.",
    "**PTFL-2.4.1** — translate the described symptom into a **Chapter 1 test type** before reading the options: **burst survived but no return to steady state = spike** · **gradual degradation = endurance** · **fine at expected load but cannot grow = scalability** · **failure at or beyond the limit, or with reduced resources = stress**.",
  ] } });

  return B;
};
