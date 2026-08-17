// CT-PT Chapter 2 — Sections 5 to 7
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ p: "The ISTQB Exam Structure Table for CT-PT gives Chapter 2 **one question per learning objective** — there is no selectable group here, so **all four objectives appear on every paper**." });
  B.push({ table: { head: ["LO", "K", "Questions", "Points", "Sample Exam #", "Format used officially"], widths: [2.0, 0.8, 1.6, 1.3, 2.0, 6.3], rows: [
    ["PTFL-2.1", "K2", "**1**", "**1**", "#7", "\"Which is a **true statement** regarding tracking metrics for **network latency**?\""],
    ["PTFL-2.2", "K2", "**1**", "**1**", "#8", "\"**Should** performance test results be aggregated?\" — two Yes and two No options"],
    ["PTFL-2.3", "K2", "**1**", "**1**", "#9", "\"**In what way** are log analysis tools helpful?\" — separates all three sources at once"],
    ["PTFL-2.4", "**K1**", "**1**", "**1**", "#10", "\"Which is a failure typically found by conducting a **spike test**?\" — answered from Chapter 1"],
    ["**Chapter 2 total**", "—", "**4**", "**4**", "**#7–#10**", "**10% of the paper, for 55 minutes of teaching — the shortest chapter in the syllabus**"],
  ] } });
  B.push({ box: { title: "The arithmetic before you sit the exam", body: "CT-PT is **40 questions worth 40 points in 90 minutes** (**113 minutes** with the 25% non-native-language allowance); the pass mark is **65% = 26 points**. Chapter allocation: **Ch1 = 6 · Ch2 = 4 · Ch3 = 7 · Ch4 = 20 · Ch5 = 3**. Chapter 2 is **4 guaranteed marks for 55 minutes** — **4.4 marks per teaching hour**, second only to Chapter 1's 6.0. **Chapters 1 and 2 together are 10 of the 26 points you need, from under two hours of material.**" } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**\"Low latency could indicate a bandwidth problem\"** — inverted. **Low latency is a good thing**; **high** latency suggests **inadequate bandwidth**.",
    "**\"Network latency is too difficult to track and should be excluded\"** — it **is trackable with the right tools**.",
    "**\"Network latency is too variable to be useful\"** — **if there is variability, that needs to be understood as part of the performance tests**.",
    "**\"Aggregate in order to focus on the outliers\"** — **aggregated results eliminate the information on the outliers**.",
    "**\"Do not aggregate, so that all variations are understood\"** — **it is unlikely to ever reach the point where \"all\" variations are understood**, and individual results **may be due to transient system noise**.",
    "**\"Report each test separately\"** — **too difficult for stakeholders to understand** and **may focus on the highly unlikely situations**.",
    "**Monitoring tools described as log scanners** — monitoring tools watch the running system; **log analysis tools scan server logs and compile metrics**.",
    "**Performance test tools described as monitors** — they **create the system load** and report on it.",
    "**\"Log analysis tools write the performance results to the server logs\"** — they do not. **The system activities during the performance tests are written to the logs**, and the tool reads them.",
    "**GQM presented as universal** — the syllabus explicitly says it **doesn't always fit**, because **some metrics represent a system's health and are not directly linked to goals**.",
    "**\"Collect every available metric\"** — **collecting more metrics than required is not necessarily a good thing**; each one needs **consistent collection and reporting**.",
    "**Endurance and spike outcomes swapped** — **gradual degradation is endurance**; **cannot resume a steady state after a burst is spike**.",
    "**Scalability outcome offered for a spike question** — \"performs well at expected load but can't scale\" is the **scalability** result.",
    "**\"Resource utilization under 75% means the test passed\"** — the syllabus uses exactly this figure to show that **failures can hide beneath apparently good overall results**.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["Keyword in the stem", "Points toward"], widths: [7.2, 6.8], rows: [
    ["'page load times', 'per concurrent user', 'per transaction'", "**Response time** — technical environment (PTFL-2.1.1)"],
    ["'CPU', 'memory', 'network bandwidth', 'network latency', 'available disk space', 'I/O rate', 'idle and busy threads'", "**Resource utilization** — technical environment (PTFL-2.1.1)"],
    ["'transactions processed in a given period of time'", "**Throughput rate of key transaction** — technical (PTFL-2.1.1)"],
    ["'wait times', 'completion times', 'database response times' in a batch context", "**Batch processing time** — technical (PTFL-2.1.1)"],
    ["'code complexity'", "**Software metrics** — technical (PTFL-2.1.1)"],
    ["'especially in virtualized environments'", "**Background load on shared resources** — technical (PTFL-2.1.1)"],
    ["'orders processed per hour', 'data rows added per minute'", "**Throughput of units of work** — business (PTFL-2.1.1)"],
    ["'SLA violations per unit of time'", "**SLA compliance or violation rates** — business (PTFL-2.1.1)"],
    ["'percentage of global or national users at a given time'", "**Scope of usage** — business (PTFL-2.1.1)"],
    ["'number of users concurrently performing a task'", "**Concurrency of usage** — business (PTFL-2.1.1)"],
    ["'number of orders processed during peak load times'", "**Timing of usage** — business (PTFL-2.1.1)"],
    ["'normal, alternate and exceptional use case flows'", "**Business process efficiency** — business (PTFL-2.1.1)"],
    ["'start-up', 'backups', 'shutdown', 'resumption'", "**Operational processes** — operational (PTFL-2.1.1)"],
    ["'restore data from a backup'", "**System restoration** — operational (PTFL-2.1.1)"],
    ["'time needed to issue an alert or warning'", "**Alerts and warnings** — operational (PTFL-2.1.1)"],
    ["'establish the goals, then ask questions, then attach metrics'", "**GQM** — and remember it **does not always fit** (PTFL-2.1.1)"],
    ["'big picture', 'trends', 'reported in an understandable way'", "**Why results are aggregated** (PTFL-2.2.1)"],
    ["'transient system noise', 'test aberrations'", "Why **individual results** mislead — aggregation (PTFL-2.2.1)"],
    ["'no more than minimally impacted by the metrics collection effort'", "**Probe effect** (PTFL-2.3.1)"],
    ["'creates the load and collects metrics as the result of a test'", "**Performance test tool** (PTFL-2.3.1)"],
    ["'ongoing basis', 'alerts system administrators', 'denial of service'", "**Performance monitoring tool** (PTFL-2.3.1)"],
    ["'scan the server logs and compile metrics', 'create charts from log data'", "**Log analysis tool** (PTFL-2.3.1)"],
    ["'SQL exceptions', 'SQL timeouts', 'memory exhaustion', 'deadlocks'", "**Server log contents** → log analysis (PTFL-2.3.1)"],
    ["'well-defined test oracles', 'limited guidance to define expected results'", "**Typical results of a performance test** (PTFL-2.4.1)"],
    ["'under 75% resource utilization', 'order-of-magnitude too slow'", "**Raw results can be misleading** (PTFL-2.4.1)"],
    ["'sudden burst but cannot resume a steady state'", "**Spike test** outcome (PTFL-2.4.1)"],
    ["'gradually degrades'", "**Endurance test** outcome (PTFL-2.4.1)"],
    ["'fine at expected load, cannot scale to a larger load'", "**Scalability test** outcome (PTFL-2.4.1)"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**The K1 question is not a Chapter 2 question in disguise — it is a Chapter 1 question in disguise.** PTFL-2.4.1 was officially examined by asking which failure a **spike test** would find. Revise the eight types before you revise §2.4.",
    "**Two Yes options and two No options.** The aggregation question offers two of each. Do not stop reading at the first \"Yes\" — the second one (**focus on the outliers**) is wrong for a specific, stated reason.",
    "**All three tool types can produce metrics.** The question is never \"which one gives metrics\" but **\"in what way\"**. Match the verb: **create load** → performance test tool. **Watch live, alert administrators** → monitoring tool. **Scan logs, compile, chart** → log analysis tool.",
    "**Network latency is a resource-utilization metric.** It is not filed under a network heading of its own, and it belongs to the **technical** environment.",
    "**\"More metrics\" is never the right answer.** Every place the syllabus discusses metric selection, it argues for **fewer, well-chosen, obtainable** metrics.",
    "**GQM always carries a caveat.** If an option states GQM without the qualification, check whether a better option exists.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ul: [
    "Strike any option that says **low** latency indicates a problem, or that a metric should be **dropped because it is variable or hard to track**.",
    "Strike any aggregation option that claims aggregation **preserves or highlights outlier detail**.",
    "Strike any aggregation option that argues for **raw, per-test reporting to stakeholders**.",
    "Strike any tool option that gives a tool a job belonging to one of the other two — especially **writing results into logs**.",
    "Strike any metric-selection option that recommends **collecting everything available**.",
    "Strike any option presenting **GQM as always applicable**.",
    "Strike any \"typical result\" option whose **outcome does not match the test type named in the stem** — burst-and-cannot-recover is spike, gradual is endurance, cannot-grow is scalability.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ ul: [
    "**Metric classification:** ask **who reads this number?** A business person counting orders, users or SLA breaches → **business**. Nobody user-facing — start-up, backup, restore, alerting → **operational**. An engineer reading times, resources, throughput rates or code metrics → **technical**.",
    "**Source questions:** ask **what is the tool doing to the system?** Pushing load in → **test tool**. Watching from outside, now and in production → **monitoring tool**. Reading what the system already wrote down → **log analysis tool**.",
    "**Aggregation questions:** the answer is always the one that mentions **the big picture and trends**, and never the one that mentions **outliers** or **individual results**.",
    "**Typical-result questions:** translate the described symptom into a Chapter 1 type before you look at the options.",
  ] });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Skipping Chapter 2 because it is short. It is **4 guaranteed marks for 55 minutes** — proportionally the second-cheapest chapter on the paper.",
    "Learning the metric lists as one long list instead of as **three labelled buckets**. The exam tests the bucket, not the list.",
    "Assuming aggregation means **averaging**. The syllabus never says that, and **PTFL-4.4.1** warns that **the average can often be skewed by outliers**.",
    "Confusing **performance monitoring tools** with **log analysis tools** because both \"look at\" the system. One watches it live; the other reads what it wrote.",
    "Ignoring the **probe effect** because it is not a learning objective — **all parts of the syllabus are examinable at K1**.",
    "Treating **PTFL-2.4.1** as a list-recall objective. It is a **recognition-of-outcome** objective, and it borrows Chapter 1's vocabulary.",
    "Forgetting that the syllabus blames **three** parties for weak performance requirements — **stakeholders, business analysts and product owners** — and that this is the root of the **PTFL-4.4.1** reporting question.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Unpacks to"], widths: [4.4, 9.6], rows: [
    ["**T-B-O** (\"**T**ech, **B**usiness, **O**ps\")", "The three metric categories. **T** = times, resources, throughput rates, batch, errors, completion, background load, code complexity. **B** = orders, rows, SLAs, percentages of users, concurrency and timing of usage, business process efficiency. **O** = start-up, backup, shutdown, resumption, restore, alerting — **not user-facing**."],
    ["**\"Six risks of measuring nothing\"**", "Unknown acceptability · not measurable · no trends · no baseline comparison · subjective opinion · tool output not understood."],
    ["**G-Q-M**", "**G**oals first → **Q**uestions that reveal achievement → **M**etrics that make each answer measurable. **Caveat: system-health metrics are not directly linked to goals.**"],
    ["**\"Big picture, trends, understandable\"**", "The three benefits of aggregation, in syllabus order. If an option does not contain one of these three ideas, it is not the aggregation answer."],
    ["**\"Aggregate erases outliers\"**", "The one-line reason the \"focus on the outliers\" distractor fails."],
    ["**P-M-L** (\"**P**ush, **M**onitor, **L**og\")", "The three sources: performance test tools **P**ush the load · monitoring tools **M**onitor live and in production · log analysis tools read the **L**ogs."],
    ["**\"Probe lightly\"**", "**Probe effect** — metrics collection should impact system performance **no more than minimally**."],
    ["**\"Logs hold R-M-D-D\"**", "Server logs record **R**esource usage (CPU, disk, bandwidth) · **M**emory errors (exhaustion) · **D**eadlocks and multi-threading · **D**atabase errors (SQL exceptions and timeouts)."],
    ["**\"No oracle, no comfort\"**", "Performance testing **often lacks well-defined test oracles**; **stakeholders, business analysts and product owners** all struggle with performance requirements; **testers receive limited guidance**."],
    ["**\"75% and still failing\"**", "Resource utilization **well under 75%** can sit on top of throughput or response times that are **an order-of-magnitude too slow**. Raw results mislead."],
    ["**S-E-S** (\"**S**pike, **E**ndurance, **S**calability\")", "The three outcomes the K1 question rotates: **S**pike = burst survived but **no return to steady state** · **E**ndurance = **gradual degradation** · **S**calability = **fine now, cannot grow**."],
  ] } });

  B.push({ h2: "5.9 Chapter 2 mind map" });
  B.push({ p: "**CHAPTER 2 — Performance Measurement Fundamentals · 55 minutes · 4 exam marks · K1 = 1, K2 = 3 · all objectives guaranteed**" });
  B.push({ table: { head: ["Branch", "Node (K)", "Everything hanging off it"], widths: [2.4, 3.4, 8.2], rows: [
    ["**2.1** Typical metrics", "**2.1.1** Typical metrics collected (K2) — **1 mark**",
     "**Measurements and metrics are essential for defining goals and evaluating results** · **six risks** of not defining them first (**unknown acceptability · not measurable · no predictive trends · no baseline comparison · subjective opinion · tool output not understood**) · metrics must be **context-defined** (response time needs **time of day, concurrent users, data volume**) · vary by **business context, operational context, test objectives** · **three categories**: **technical** (nine environment types: **web, mobile, IoT, desktop client, server-side, mainframe, databases, networks, embedded**; eight metrics: **response time · resource utilization (CPU, memory, bandwidth, latency, disk, I/O, threads) · throughput rate of key transaction · batch processing time · numbers of errors · completion time (CRUD) · background load on shared resources (virtualized) · software metrics (code complexity)**), **business** (**process efficiency · throughput of units of work · SLA compliance/violation rates · scope of usage · concurrency of usage · timing of usage**), **operational** (**not user-facing**: **operational processes · system restoration · alerts and warnings**) · **selection**: **more is not necessarily better**, each metric needs **consistent collection and reporting**, define an **obtainable set supporting the objectives**, **GQM** aligns metrics to goals **but does not always fit** · **further metrics may be needed after the initial capture**"],
    ["**2.2** Aggregation", "**2.2.1** Why results are aggregated (K2) — **1 mark**",
     "**Purpose: understand and express metrics in a way that accurately conveys the total picture of system performance** · at **only the detailed level, drawing the right conclusion may be difficult — especially for business stakeholders** · for many stakeholders the main concern is **response time within acceptable limits** · aggregate **once deeper understanding has been achieved**, so that **business and project stakeholders see the big picture**, **trends can be identified**, and **metrics are reported understandably** · **aggregation eliminates outlier information**, so it is **not** a way to focus on outliers — it helps judge **which outliers are interesting versus test aberrations** · individual results **may be due to transient system noise**"],
    ["**2.3** Sources", "**2.3.1** Key sources of performance metrics (K2) — **1 mark**",
     "**Probe effect** — collection should impact performance **no more than minimally** · **volume, accuracy and speed make tool usage a requirement** · **combined tool use can introduce redundancy and other problems** · **performance test tools** (**all provide metrics as the result of a test**; vary in **number, presentation, customizability**; **text or dashboard**; **export**) · **performance monitoring tools** (**supplement test-tool reporting**; **ongoing monitoring**; **alert administrators to lowered performance and higher errors**; **detect DoS and DDoS**) · **log analysis tools** (**scan server logs and compile metrics**; some **create charts**) · **server logs record**: **high resource usage** (CPU, disk storage, insufficient bandwidth) · **memory errors** (exhaustion) · **deadlocks and multi-threading**, especially in **database operations** · **database errors** (**SQL exceptions and timeouts**)"],
    ["**2.4** Typical results", "**2.4.1** Typical results of a performance test (**K1**) — **1 mark**",
     "Functional testing **often benefits from well-defined test oracles**; **performance testing often lacks this source of information** · **stakeholders are notoriously bad at articulating performance requirements**; **many business analysts and product owners are bad at eliciting them**; **testers receive limited guidance** · **initial raw results can be misleading, with failures hidden beneath apparently good overall results** — e.g. **resource utilization well under 75% while throughput or response time is an order-of-magnitude too slow** · **the specific results to evaluate vary depending on the tests being run** and include those in §2.1 · officially tested by mapping outcome → type: **spike = burst survived, cannot resume steady state** · **endurance = gradual degradation** · **scalability = fine at expected load, cannot grow**"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the BACK row and recall it from the FRONT. All 35 cards are drawn from Chapter 2 of the CT-PT 2018 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["Why are accurate measurements and metrics essential?",
     "They are **essential for defining the goals of performance testing and for evaluating the results** of performance testing."],
    ["Name three of the six project risks of not defining measurements and metrics first.",
     "Any three of: **unknown whether performance levels are acceptable to meet operational objectives** · **requirements not defined in measurable terms** · **cannot identify trends that predict lower performance** · **cannot compare results to a baseline** · **results evaluated on subjective opinion** · **tool-provided results not understood**."],
    ["How must the response time metric be further defined to be meaningful and actionable?",
     "In terms of **time of day, number of concurrent users, the amount of data being processed** and so forth."],
    ["The metrics collected vary based on which three things?",
     "**Business context** (business processes, customer and user behavior, stakeholder expectations) · **operational context** (technology and how it is used) · **test objectives**."],
    ["Name the three categories used to organise performance measurements and metrics.",
     "**Technical environment · business environment · operational environment.**"],
    ["List the nine technical environment types.",
     "**Web-based · mobile · Internet-of-Things (IoT) · desktop client devices · server-side processing · mainframe · databases · networks · the nature of the software running in the environment (e.g., embedded).**"],
    ["List the eight technical environment metrics.",
     "**Response time · resource utilization · throughput rate of key transaction · batch processing time · numbers of errors impacting performance · completion time · background load on shared resources · software metrics.**"],
    ["Which examples does the syllabus give for resource utilization?",
     "**CPU · memory · network bandwidth · network latency · available disk space · I/O rate · idle and busy threads.**"],
    ["Which technical metric is called out as especially relevant in virtualized environments?",
     "**Background load on shared resources.**"],
    ["Give the syllabus example of a software metric.",
     "**Code complexity.**"],
    ["List the six business environment metrics.",
     "**Business process efficiency · throughput of data, transactions and other units of work · SLA compliance or violation rates · scope of usage · concurrency of usage · timing of usage.**"],
    ["Give the syllabus example for 'scope of usage'.",
     "**Percentage of global or national users conducting tasks at a given time.**"],
    ["What characterises the operational environment category?",
     "It focuses on **tasks that are generally not considered to be user-facing in nature**."],
    ["List the three operational environment metrics.",
     "**Operational processes** (environment start-up, backups, shutdown and resumption times) · **system restoration** (time to restore data from a backup) · **alerts and warnings** (time for the system to issue an alert or warning)."],
    ["Why is collecting more metrics than required not necessarily a good thing?",
     "**Each metric chosen requires a means for consistent collection and reporting.** Define **an obtainable set of metrics that support the performance test objectives**."],
    ["Describe the GQM approach.",
     "**First establish the goals, then ask questions to know when the goals have been achieved. Metrics are associated with each question to ensure the answer to the question is measurable.**"],
    ["State the syllabus caveat about GQM.",
     "**It doesn't always fit the performance testing process** — for example, **some metrics represent a system's health and are not directly linked to goals**."],
    ["What is the purpose of aggregating performance metrics?",
     "To **understand and express them in a way that accurately conveys the total picture of system performance**."],
    ["Why is viewing metrics only at the detailed level a problem?",
     "**Drawing the right conclusion may be difficult — especially for business stakeholders.**"],
    ["What is the main concern for many stakeholders?",
     "That the **response time** of a system, web site or other test object is **within acceptable limits**."],
    ["When can metrics be aggregated?",
     "**Once deeper understanding of the performance metrics has been achieved.**"],
    ["Name the three things aggregation makes possible.",
     "**Business and project stakeholders can see the \"big picture\" status** · **performance trends can be identified** · **performance metrics can be reported in an understandable way**."],
    ["What does aggregation do to outlier information?",
     "**It eliminates it** — which is why 'aggregate in order to focus on the outliers' is a wrong answer. Aggregation helps judge **which outliers are interesting versus just test aberrations**."],
    ["What is the probe effect?",
     "System performance should be **no more than minimally impacted by the metrics collection effort**."],
    ["Why does the syllabus say tool usage is a requirement?",
     "Because of the **volume, accuracy and speed** with which performance metrics must be collected."],
    ["What risk comes with the combined use of tools?",
     "It can introduce **redundancy in the usage of test tools and other problems**."],
    ["Name the three key sources of performance metrics.",
     "**Performance test tools · performance monitoring tools · log analysis tools.**"],
    ["How do performance test tools vary from one another?",
     "In the **number of metrics shown**, the **way the metrics are shown**, and the **ability for the user to customize the metrics** to a particular situation. Some use **text**, more robust tools a **graphical dashboard**; many can **export metrics**."],
    ["What extra roles do performance monitoring tools play?",
     "They **supplement the reporting capabilities of performance test tools**, **monitor system performance on an ongoing basis**, **alert system administrators** to lowered performance and higher errors and alerts, and can **detect and notify suspicious behavior such as DoS and DDoS attacks**."],
    ["What do log analysis tools do?",
     "They **scan server logs and compile metrics from them**; some can **create charts to provide a graphical view of the data**."],
    ["List the four things normally recorded in server logs.",
     "**High resource usage** (high CPU utilization, high disk storage consumed, insufficient bandwidth) · **memory errors and warnings** (memory exhaustion) · **deadlocks and multi-threading problems**, especially during database operations · **database errors** (SQL exceptions and SQL timeouts)."],
    ["Contrast test oracles in functional and performance testing.",
     "Functional suitability tests **often benefit from well-defined test oracles**; **performance testing often lacks this source of information**."],
    ["Who does the syllabus blame for weak performance requirements?",
     "**Stakeholders are notoriously bad at articulating performance requirements**, and **many business analysts and product owners are bad at eliciting such requirements** — so **testers often receive limited guidance to define the expected test results**."],
    ["Give the syllabus's example of misleading raw results.",
     "**Resource utilization may be well under 75% for all key potential bottleneck resources, but the throughput or response time of key transactions or use cases are an order-of-magnitude too slow.**"],
    ["Map three observed outcomes to their test types.",
     "**Handles a sudden burst but cannot resume a steady state → spike.** **Performance gradually degrades → endurance.** **Fine at the expected load but cannot scale to a larger load → scalability.**"],
  ] });

  // ================= SECTION 7 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });

  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ box: { title: "Chapter 2 — Performance Measurement Fundamentals", body: "**Measurements and the metrics derived from them are essential for defining the goals of performance testing and for evaluating its results**, and the syllabus lists **six project risks** of skipping that definition: **acceptability unknown**, **requirements not measurable**, **no predictive trends**, **no baseline to compare against**, **evaluation by subjective opinion**, and **tool output that is not understood**. Every metric must be **defined for a context** — **response time** means nothing until it is qualified by **time of day, number of concurrent users and the amount of data processed** — and the set chosen varies with **business context, operational context and test objectives**. Metrics are organised into **three environments**. The **technical** environment spans nine system types from **web to embedded**, and eight metrics: **response time · resource utilization** (CPU, memory, bandwidth, **network latency**, disk space, I/O rate, idle and busy threads) **· throughput rate of key transaction · batch processing time · numbers of errors · completion time for CRUD · background load on shared resources** (especially **virtualized**) **· software metrics** such as **code complexity**. The **business** environment is anything the business already counts: **process efficiency, throughput of units of work, SLA compliance or violation rates, scope of usage, concurrency of usage, timing of usage**. The **operational** environment is what is **not user-facing**: **start-up, backup, shutdown and resumption times, restoration from backup, and the time to issue alerts**. On selection, the syllabus is firm — **collecting more metrics than required is not necessarily a good thing**, because **each metric needs consistent collection and reporting**; **GQM** (goals → questions → metrics) helps align metrics to goals but **does not always fit**, since **some metrics represent system health and are not linked to goals**. Results are **aggregated** in order to **convey the total picture**, because detail alone makes conclusions **difficult, especially for business stakeholders**; aggregation delivers the **big picture, trend identification and understandable reporting**, and it **eliminates outlier detail** — so it is not a technique for studying outliers. Metrics come from **three sources**, and the exam separates them by verb: **performance test tools create the load and report on it**, **monitoring tools watch the system live and can run in production, alerting administrators and detecting DoS and DDoS attacks**, and **log analysis tools scan server logs and compile metrics** — logs holding **high resource usage, memory exhaustion, deadlocks and multi-threading problems, and SQL exceptions and timeouts**. Collection itself must be light: the **probe effect** means system performance should be **no more than minimally impacted**. Finally, performance testing **often lacks the well-defined test oracles that functional testing enjoys** — **stakeholders, business analysts and product owners** all struggle to articulate or elicit performance requirements — and **raw results mislead**: the syllabus's example has **resource utilization under 75%** hiding response times that are **an order-of-magnitude too slow**." } });

  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ ul: [
    "**Measurement / metric** — measurements are raw; **metrics are derived from measurements** and are meaningful only when **defined for a particular context**.",
    "**Baseline** — a set of performance measures **defining acceptable and/or unacceptable performance** against which results are compared.",
    "**Technical environment metrics** — **response time · resource utilization · throughput rate of key transaction · batch processing time · numbers of errors · completion time · background load on shared resources · software metrics**.",
    "**Business environment metrics** — **business process efficiency · throughput of units of work · SLA compliance or violation rates · scope of usage · concurrency of usage · timing of usage**.",
    "**Operational environment metrics** — **operational processes · system restoration · alerts and warnings**; **generally not user-facing**.",
    "**GQM** — **goals → questions → metrics**, so that each answer is **measurable**; **does not always fit** performance testing.",
    "**Aggregation** — expressing metrics so they **accurately convey the total picture of system performance**.",
    "**Probe effect** — the metrics collection effort should impact system performance **no more than minimally**.",
    "**Performance test tool / monitoring tool / log analysis tool** — **creates the load and reports** / **watches live and in production, alerts administrators** / **scans server logs and compiles metrics**.",
    "**Test oracle** — the source of expected results; **performance testing often lacks one**.",
  ] });

  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ table: { head: ["Priority", "Concept", "LO", "Marks"], widths: [1.6, 9.0, 2.2, 1.2], rows: [
    ["★★★", "Classifying any metric as **technical, business or operational** — and knowing **network latency** is technical / resource utilization", "PTFL-2.1.1", "1"],
    ["★★★", "The three sources separated by verb: **create load · watch live · scan logs**", "PTFL-2.3.1", "1"],
    ["★★★", "The three benefits of aggregation, and the fact that aggregation **eliminates outlier detail**", "PTFL-2.2.1", "1"],
    ["★★★", "Mapping an observed outcome back to its **test type** (spike · endurance · scalability)", "PTFL-2.4.1", "1"],
    ["★★", "The four categories of server-log content", "PTFL-2.3.1", "—"],
    ["★★", "**GQM** with its caveat, and **more metrics is not better**", "PTFL-2.1.1", "—"],
    ["★", "The six project risks of not defining metrics first", "PTFL-2.1.1", "—"],
    ["★", "The **75% / order-of-magnitude** example of misleading raw results", "PTFL-2.4.1", "—"],
  ] } });

  B.push({ h2: "7.4 Last-minute revision sheet" });
  B.push({ ul: [
    "**4 of 40 questions · 4 of 40 points · K1 = 1, K2 = 3 · all guaranteed · 55 minutes of teaching.** Sample Exam questions **#7–#10**.",
    "**Three metric categories:** **technical** (times, resources, throughput rates, batch, errors, CRUD completion, background load, code complexity) · **business** (orders per hour, rows per minute, SLA violations, percentage of users, concurrency and timing of usage, process efficiency) · **operational** (**not user-facing**: start-up, backup, shutdown, resumption, restore, alerting).",
    "**Network latency = resource utilization = technical.** **High** latency suggests **inadequate bandwidth**; **low** latency is **good**.",
    "**Metrics vary by business context, operational context and test objectives.** **More is not better** — each needs **consistent collection and reporting**.",
    "**GQM:** goals → questions → metrics. **Does not always fit** — **system-health metrics are not directly linked to goals**.",
    "**Aggregate to convey the total picture:** **big picture for business and project stakeholders · trends · understandable reporting**. Aggregation **eliminates outlier information**.",
    "**Three sources:** **test tools create the load**, **monitoring tools watch live and in production (alerts, DoS/DDoS)**, **log analysis tools scan server logs and compile metrics (some chart them)**.",
    "**Server logs hold:** high resource usage · memory exhaustion · deadlocks and multi-threading · **SQL exceptions and timeouts**.",
    "**Probe effect:** collection should impact performance **no more than minimally**.",
    "**Performance testing often lacks well-defined test oracles.** **Raw results mislead** — **under 75% utilization** can hide response times **an order-of-magnitude too slow**.",
    "**Outcome → type:** burst survived but **no return to steady state** = **spike** · **gradual degradation** = **endurance** · **cannot grow beyond expected load** = **scalability**.",
  ] });

  B.push({ h2: "7.5 Memorization checklist" });
  B.push({ ol: [
    "I can name the four learning objectives and say which one is **K1**.",
    "I can recite the six project risks of not defining measurements and metrics first.",
    "I can name the three things metrics vary by.",
    "I can name the three environment categories and place any metric into one.",
    "I can list the nine technical environment types and the eight technical metrics.",
    "I can say where **network latency** sits and what **high** latency implies.",
    "I can list the six business metrics and the three operational metrics.",
    "I can explain why **collecting more metrics than required is not necessarily a good thing**.",
    "I can describe **GQM** and state its caveat.",
    "I can state the purpose of aggregation and its three benefits.",
    "I can explain what aggregation does to **outlier information**, and why two of the four official options fail.",
    "I can define the **probe effect** and say why tool usage is a requirement.",
    "I can separate the three metric sources by what each one does.",
    "I can list the four categories of server-log content.",
    "I can state why performance testing **often lacks a test oracle**, and name the three parties the syllabus blames.",
    "I can quote the **75% / order-of-magnitude** example.",
    "I can map spike, endurance and scalability outcomes without hesitating.",
  ] });

  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ box: { kind: "ok", title: "60-second mental checklist before answering any Chapter 2 question", body: "**1)** Which LO is this? (metrics · aggregation · sources · typical results)  **2)** If it is a **metric** question, ask **who reads this number** — business person, nobody user-facing, or engineer — and classify accordingly.  **3)** If it is an **aggregation** question, look for **big picture** and **trends**; reject anything about **outliers** or **individual results**.  **4)** If it is a **source** question, match the verb: **push load** = test tool · **watch live and in production** = monitoring tool · **read the logs** = log analysis tool.  **5)** If it is a **typical result** question, name the **Chapter 1 test type** first, then pick the matching option.  **6)** Watch for inverted claims — **low latency is good**, **variability is a reason to measure not to skip**, **GQM does not always fit**.  **7)** If two options survive, choose the one that repeats **syllabus wording**." } });
  B.push({ spacer: 200 });
  B.push({ lead: "Sources: ISTQB® Certified Tester Foundation Level Specialist Syllabus — Performance Testing, Version 2018 (9 December 2018), Chapter 2 and Keywords; ISTQB® CT-PT Sample Exam Questions and Sample Exam Answers, Version 2018 (9 December 2018); ISTQB® Exam Structure Tables v1.16 (CT-PT) and ISTQB® Exam Structures and Rules v1.2. All content is traceable to these references; no external knowledge was used." });

  return B;
};
