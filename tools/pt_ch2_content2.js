// CT-PT Chapter 2 — Section 4 (questions)
const OFF = (n) => `OFFICIAL · Sample Exam #${n}`;

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–4 are the **official ISTQB CT-PT Sample Exam questions for Chapter 2** — questions #7 to #10, one per learning objective — reproduced with their official correct answers and rationale. Questions 5–13 are additional items derived strictly from the syllabus text, in the same style and difficulty. Correct options are marked ✔ — cover the green box and self-test first." });

  B.push({ h2: "Part A — The 4 official Chapter 2 questions" });

  B.push({ q: { n: 1, tag: OFF(7), meta: "LO: PTFL-2.1.1 (K2) | Syllabus §2.1.2", correct: ["a"],
    stem: "Which of the following is a true statement regarding tracking metrics for network latency during a performance test?",
    opts: [
      "High latency could indicate a network bandwidth problem that could negatively impact performance",
      "Low latency could indicate a network bandwidth problem that could negatively impact performance",
      "Network latency is difficult to track and should not be included in the performance metrics",
      "Network latency is too variable to be useful during performance tuning",
    ],
    why: "**(a) A high latency means that there are delays occurring in the network which may be due to inadequate bandwidth.** (b) is not true because **low latency is a good thing**. (c) is not true because **this is trackable with the right tools**. (d) is not true because **if there is variability, that needs to be understood as part of the performance tests**. Network latency is listed by the syllabus under **resource utilization** in the **technical environment** metric group." } });

  B.push({ q: { n: 2, tag: OFF(8), meta: "LO: PTFL-2.2.1 (K2) | Syllabus §2.2", correct: ["a"],
    stem: "Should performance test results be aggregated?",
    opts: [
      "Yes, this gives a better overall picture of the performance of the system and helps to identify trends",
      "Yes, this is the best way to focus on the outliers in the performance metrics",
      "No, the results should be analyzed individually so that all variations are understood",
      "No, the results from each test should be reported and tracked separately",
    ],
    why: "**(a) Aggregated results help to provide the big picture and to observe consistent trends. Aggregating the results helps to identify and understand the importance of outliers and to know which ones are interesting vs just test aberrations.** (b) is not correct because **aggregated results will eliminate the information on the outliers**. (c) is not correct because **aggregation allows you to see the big picture rather than focusing on the individual results which may be due to transient system noise** — and **it is unlikely to ever reach the point where \"all\" variations are understood**. (d) is not correct because **this type of reporting will be too difficult for stakeholders to understand and may focus on the highly unlikely situations**." } });

  B.push({ q: { n: 3, tag: OFF(9), meta: "LO: PTFL-2.3.1 (K2) | Syllabus §2.3", correct: ["c"],
    stem: "In what way are log analysis tools helpful for collecting metrics?",
    opts: [
      "They monitor the systems while the performance tests are conducted and report on the behavior during the tests",
      "They create the system load and monitor the system performance",
      "They scan the various server logs and compile metrics for occurrences that were recorded during the test execution",
      "They write the performance results to the server logs for later manual analysis",
    ],
    why: "**(c) The log analysis tools scan the server logs for particular error types (high usage, memory errors, etc.) and report on those.** (a) is not correct as **these are general system monitoring tools**. (b) is not correct as **these are performance testing tools**. (d) is not correct because **the performance test results aren't written to the logs, rather the system activities during the performance tests are written to the logs**. The three key sources are **performance test tools, performance monitoring tools and log analysis tools** — this question separates all three at once." } });

  B.push({ q: { n: 4, tag: OFF(10) + " · K1", meta: "LO: PTFL-2.4.1 (K1) | Syllabus §2.4 (with §1.2)", correct: ["c"],
    stem: "Which of the following is a failure that would typically be found by conducting a spike test?",
    opts: [
      "The system performance gradually degrades",
      "The system provides inconsistent responses to errors",
      "The system handles a sudden burst of activity, but can't resume a steady state",
      "The system performs well for the expected load, but can't scale to a larger load",
    ],
    why: "**(c) This is a description of a failure that has resulted from a spike test** — spike testing focuses on the ability to **respond correctly to sudden bursts of peak loads and return afterwards to a steady state**, so the failure is the inability to **resume** that steady state. (a) is not correct as **this is a result of an endurance test**. (b) is not correct because **this is an example of resource degradation over time**. (d) is not correct because **this is the result of a scalability test**. **Note carefully:** this is the Chapter 2 K1 question, yet it is answered entirely from the **Chapter 1 type definitions**." } });

  B.push({ pagebreak: true });
  B.push({ h2: "Part B — 9 additional syllabus-derived questions" });

  // ---- PTFL-2.1.1 ----








  B.push({ q: { n: 5, tag: "Classification", meta: "LO: PTFL-2.1.1 (K2) | Syllabus §2.1.2", correct: ["c"],
    scenario: "The team is measuring how long the environment takes to start up, how long a nightly backup takes, and how quickly the system issues a warning when a threshold is crossed.",
    stem: "Which category do these metrics belong to, and what characterises that category?",
    opts: [
      "Technical environment — they concern hardware resources",
      "Business environment — they affect service availability for customers",
      "Operational environment — they focus on tasks generally not considered to be user-facing in nature",
      "Software metrics — they measure code and configuration quality",
    ],
    why: "The syllabus defines the operational aspect as focusing on **tasks that are generally not considered to be user-facing in nature**, and lists exactly three: **operational processes** (**environment start-up, backups, shutdown and resumption times**), **system restoration** (**time required to restore data from a backup**) and **alerts and warnings** (**the time needed for the system to issue an alert or warning**)." } });





  B.push({ q: { n: 6, tag: "Tricky · GQM", meta: "LO: PTFL-2.1.1 (K2) | Syllabus §2.1.3", correct: ["b"],
    stem: "Which statement about the Goal-Question-Metric (GQM) approach matches the syllabus?",
    opts: [
      "GQM guarantees that every performance metric can be traced to a goal",
      "GQM aligns metrics with performance goals, but does not always fit the performance testing process — some metrics represent a system's health and are not directly linked to goals",
      "GQM replaces the need for a baseline",
      "GQM is mandatory for defining performance test objectives",
    ],
    why: "The syllabus presents GQM as **a helpful way to align metrics with performance goals** — **establish the goals, then ask questions to know when the goals have been achieved, then associate metrics with each question to ensure the answer is measurable** — and immediately qualifies it: **the GQM approach doesn't always fit the performance testing process. For example, some metrics represent a system's health and are not directly linked to goals.** Any option presenting GQM as universal or mandatory is wrong." } });

  B.push({ q: { n: 7, tag: "Tricky", meta: "LO: PTFL-2.1.1 (K2) | Syllabus §2.1.3", correct: ["c"],
    stem: "Why does the syllabus warn against collecting more metrics than required?",
    opts: [
      "Because performance test tools cannot export more than a fixed number of metrics",
      "Because additional metrics invalidate the baseline",
      "Because each metric chosen requires a means for consistent collection and reporting, and an obtainable set that supports the test objectives should be defined instead",
      "Because the exam structure table limits the number of metrics per objective",
    ],
    why: "\"_**Collecting more metrics than required is not necessarily a good thing.** **Each metric chosen requires a means for consistent collection and reporting.** It is important to **define an obtainable set of metrics that support the performance test objectives**._\" The same principle returns in **PTFL-4.1.2**, which adds that **taking too many measurements can make analysis difficult as well as negatively impact the application's actual performance** — the **probe effect** in practice." } });





  // ---- PTFL-2.2.1 ----






  B.push({ q: { n: 8, tag: "Tricky · outliers", meta: "LO: PTFL-2.2.1 (K2) | Syllabus §2.2", correct: ["d"],
    stem: "What effect does aggregation have on outlier information, and why does that matter for the exam?",
    opts: [
      "It amplifies outliers, which is why aggregation is the best way to study them",
      "It has no effect on outliers at all",
      "It converts outliers into trends automatically",
      "It eliminates the information on the outliers — so \"aggregate in order to focus on the outliers\" is an incorrect answer",
    ],
    why: "The official rationale for the aggregation question states that **aggregated results will eliminate the information on the outliers**, which is precisely why the distractor \"_this is the best way to focus on the outliers_\" is wrong. Aggregation's value with respect to outliers is to help you judge **which ones are interesting versus just test aberrations** — a judgement made from the aggregate context, not from the aggregate itself." } });

  B.push({ q: { n: 9, tag: "Application", meta: "LO: PTFL-2.2.1 (K2) | Syllabus §2.2", correct: ["b"],
    scenario: "A test manager proposes presenting every individual transaction timing from a two-hour load test directly to the executive sponsor, arguing that no information should be lost.",
    stem: "What is the strongest syllabus-based objection?",
    opts: [
      "Individual timings breach the probe effect constraint",
      "When metrics are viewed at only the detailed level, drawing the right conclusion may be difficult — especially for business stakeholders — and individual results may be due to transient system noise",
      "Executive sponsors are not stakeholders in performance testing",
      "The test summary report may only contain aggregated data by regulation",
    ],
    why: "The syllabus states that **when performance metrics are viewed at only the detailed level, drawing the right conclusion may be difficult — especially for business stakeholders**, and the official rationale adds that individual results **may be due to transient system noise**. For **many stakeholders, the main concern is that the response time is within acceptable limits** — which is exactly what an aggregate conveys and a raw dump does not." } });

  // ---- PTFL-2.3.1 ----
  B.push({ q: { n: 10, tag: "Recall", meta: "LO: PTFL-2.3.1 (K2) | Syllabus §2.3", correct: ["c"],
    stem: "What is the \"probe effect\"?",
    opts: [
      "The distortion caused by running load generators on the same machine as the SUT",
      "The tendency of monitoring tools to raise false alerts under load",
      "The impact of the metrics collection effort on system performance, which should be no more than minimal",
      "The delay between a system event and its appearance in the server log",
    ],
    why: "\"_System performance should be **no more than minimally impacted by the metrics collection effort** (known as the **\"probe effect\"**)._\" Option (a) describes a real risk from **PTFL-4.2.8** (load generators must themselves be monitored), but that is not the probe effect as defined here." } });









  B.push({ q: { n: 11, tag: "Application", meta: "LO: PTFL-2.3.1 (K2) | Syllabus §2.3", correct: ["c"],
    scenario: "After a load test, the team wants to know how many SQL timeouts and memory-exhaustion warnings the application servers produced during the run, and to see them charted.",
    stem: "Which source of performance metrics is being used?",
    opts: ["Performance test tools", "Performance monitoring tools", "Log analysis tools", "The load management console"],
    why: "**Log analysis tools** **scan server logs and compile metrics from them**, and **some of these tools can create charts to provide a graphical view of the data**. **SQL timeouts** fall under **database errors** and **memory exhaustion** under **memory errors and warnings** — both explicitly named as server-log contents. The **load management console** is a **Chapter 5** tool type that starts and stops load generators and aggregates transaction metrics." } });

  // ---- PTFL-2.4.1 ----


  B.push({ q: { n: 12, tag: "Tricky · raw results", meta: "LO: PTFL-2.4.1 (K1) | Syllabus §2.4", correct: ["d"],
    scenario: "A test report shows resource utilization well under 75% for all key potential bottleneck resources.",
    stem: "What warning does the syllabus attach to a result like this?",
    opts: [
      "It confirms the system has passed the performance test",
      "It means the load generators were misconfigured",
      "It means the probe effect was too high",
      "Initial raw results can be misleading, with performance failures hidden beneath apparently good overall results — the throughput or response time of key transactions may still be an order-of-magnitude too slow",
    ],
    why: "This is the syllabus's own worked example, given almost verbatim: **resource utilization may be well under 75% for all key potential bottleneck resources, but the throughput or response time of key transactions or use cases are an order-of-magnitude too slow**. It is the single most quotable sentence in §2.4 and the reason the objective exists." } });

  B.push({ q: { n: 13, tag: "Type mapping", meta: "LO: PTFL-2.4.1 (K1) | Syllabus §2.4 (with §1.2)", correct: ["b"],
    stem: "A system performs acceptably at its expected load, but the team finds it cannot be grown to serve a substantially larger user base without breaching current response-time requirements. Which test type produced this result?",
    opts: ["Endurance testing", "Scalability testing", "Spike testing", "Concurrency testing"],
    why: "**Scalability testing** — the ability to meet **future efficiency requirements which may be beyond those currently required**, growing **without violating the currently specified performance requirements or failing**. The official Chapter 2 K1 question uses exactly this distractor: \"_the system performs well for the expected load, but can't scale to a larger load_\" is identified in the rationale as **the result of a scalability test**." } });



  B.push({ pagebreak: true });
  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: the ISTQB Exam Structure Table gives Chapter 2 **exactly one question per learning objective**, so unlike Chapter 1 there is no uncertainty about coverage — all four appear. The ranking below therefore reflects **how much work each mark takes**, not how likely it is." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Classifying a metric as technical, business or operational — and knowing where **network latency** lives — Q1, Q5", "PTFL-2.1.1", "**1 guaranteed mark**, and the largest body of material in the chapter. The classification skill also feeds **PTFL-4.1.2**'s metrics table."],
    ["2", "Separating the three metric sources; what is in a **server log** — Q3, Q10, Q11", "PTFL-2.3.1", "**1 guaranteed mark**, decided by three clean definitions. The official question separates all three sources in a single item."],
    ["3", "Why results are aggregated, and what aggregation does to outliers — Q2, Q8, Q9", "PTFL-2.2.1", "**1 guaranteed mark.** Both \"No\" options and one \"Yes\" option are wrong for reasons worth memorising."],
    ["4", "Mapping an observed outcome back to the test type that produced it — Q4, Q12, Q13", "PTFL-2.4.1", "**1 guaranteed mark** at **K1**, but answered from **Chapter 1**. Study it alongside the eight types, not separately."],
    ["5", "**GQM** and its caveat, plus the project risks of not defining metrics first — Q6, Q7", "PTFL-2.1.1", "Supporting knowledge that turns the classification question from a guess into a certainty."],
  ] } });

  return B;
};
