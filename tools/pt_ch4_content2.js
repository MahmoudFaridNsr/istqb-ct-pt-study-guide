// CT-PT Chapter 4 — Section 4 (questions)
const OFF = (n) => `OFFICIAL · Sample Exam #${n}`;
const HEALTH = "You are working on a project that tracks health history information for patients across a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals and urgent care facilities. The information should be presented to the requestor within three seconds of request, particularly for patients with critical allergies and preconditions.";
const DOC_VIEW = HEALTH + "\n\nOne of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and that they will normally view 6 patient records for each access. They will print those patient records to be retained in the patient's file at the hospital. They will also enter notes into the database regarding the patient's treatment. For new patients, another user will enter the information into the system.";
const DOC_UPD = HEALTH + "\n\nOne of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and that they will normally update 6 patient records for each access by entering notes into the database regarding the patient's treatment. They will print those patient records to be retained in the patient's file at the hospital. For new patients, another user will enter the information into the system.\n\nThe shifts these doctors work are: 7am – 5pm (day shift), 2pm – midnight (evening shift), 9pm to 7am (night shift). There are 1000 doctors that work the day shift, 1000 that work the evening shift, and 500 that work the night shift. Assuming an even distribution of the system access across a shift…";
const PRESENT_OPTS = [
  "Once configured, the performance test system will require data loading. Once loaded, we will next proceed to running a small set of sample scripts to verify the output. When those succeed we will proceed with the performance test script which ramps up users at a rate of 10 per minute until we reach the target number of concurrent users. This load will then be maintained for 2 hours.",
  "The performance test system will cost $240,000 which will include the hardware and setup. This system will allow us to create a test system that is representative of the production system and will allow us to simulate production-like conditions.",
  "Because the cost of a performance test system is prohibitive, we will conduct the performance testing in the production environment using live data.",
  "The product risks include data contention issues, data access issues, locking issues that will reject concurrent requests, network bandwidth constraints, data seek errors, data seek slowdowns or bottlenecks, and difficulty for the user in processing the returned data.",
];
const PRESENT_WHY_TAIL = "(c) is not correct because **it is incomplete. If testing will be conducted in production, mitigation plans must also be made so that any impact to production is understood.** (d) is not correct because **this is a list of risks but doesn't include a list of how the tests will help mitigate these risks.**";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–20 are the **official ISTQB CT-PT Sample Exam questions for Chapter 4** — questions #18 to #37, covering all thirteen learning objectives — reproduced with their official correct answers and rationale. Questions 21–45 are additional items derived strictly from the syllabus text, in the same style and difficulty. Correct options are marked ✔ — cover the green box and self-test first." });

  B.push({ h2: "Part A — The 20 official Chapter 4 questions" });

  B.push({ q: { n: 1, tag: OFF(18) + " · K4", meta: "LO: PTFL-4.1.1 (K4) | Syllabus §4.1.1", correct: ["b"],
    scenario: HEALTH,
    stem: "Which of the following is a technical objective for performance that could be applicable to this project?",
    opts: [
      "The response time must be within three seconds from the time the request is sent when there are 100 concurrent users making similar requests",
      "The system must be able to scale to 10 million patient records with no degradation in the performance",
      "The system must perform at or above the level of the legacy system when handling a similar load and responding to a similar request",
      "The response time must remain the same when the disaster recovery system is in use rather than the primary system and the switchover must cause no discernable downtime",
    ],
    why: "**(b) Scalability is a technical objective for performance.** (a) is not correct because **this is a user-based objective**. (c) is not correct because **this is also a user-based objective and not a very clear one at that**. (d) is not correct because **this is primarily a robustness test rather than a performance test**. The syllabus distinction: **user-based objectives focus primarily on end-user satisfaction and business goals**, while **technical objectives focus on operational aspects and providing answers to questions regarding a system's ability to scale, or under what conditions degraded performance may become apparent**." } });

  B.push({ q: { n: 2, tag: OFF(19) + " · K4", meta: "LO: PTFL-4.1.2 (K4) | Syllabus §4.1.2", correct: ["a"],
    scenario: HEALTH,
    stem: "You have been asked to write a performance test plan for this project. Which of the following is the information you will need to deal with the most critical performance objective?",
    opts: [
      "Who can access what data and how often will they do it",
      "How is user access authenticated and authorized",
      "Where will the data be stored and how much storage is available",
      "What is the expected use of the data after it has been presented to the user",
    ],
    why: "**(a) Because data retrieval time is critical to the project, you need to know who can access that data (so you can get the user profiles created), what data they will access (so you can be sure you have the right data available) and how often will they access it (so you can set up an operational profile).** (b) is not correct because **this is more related to security than performance testing and is not the most critical performance objective**. (c) is not correct because **the data storage may be something to investigate if the data retrieval proves slow, but we don't need to know it to conduct the tests**. (d) is not correct because **that is after retrieval and the scenario just discusses presenting the information to the requestor**." } });

  B.push({ q: { n: 3, tag: OFF(20) + " · K4", meta: "LO: PTFL-4.1.3 (K4) | Syllabus §4.1.3", correct: ["b"],
    scenario: HEALTH,
    stem: "You have been asked to prepare a presentation for the business stakeholders regarding your plan for performance testing. Which of the following is an example set of information that should be shared with these stakeholders?",
    opts: PRESENT_OPTS,
    why: "**(b) This is information that should be conveyed to the business stakeholders.** It addresses the syllabus factor that **stakeholders must be made aware of the balance between the cost of planned performance tests and how representative the performance testing results will be, compared to production conditions.** (a) is not correct because **this is information that should be shared with the technical stakeholders**. " + PRESENT_WHY_TAIL } });

  B.push({ q: { n: 4, tag: OFF(21) + " · K4", meta: "LO: PTFL-4.1.3 (K4) | Syllabus §4.1.3", correct: ["a"],
    scenario: HEALTH,
    stem: "You have been asked to prepare a presentation for the technical stakeholders regarding your plan for performance testing. Which of the following is an example set of information that should be shared with these stakeholders?",
    opts: PRESENT_OPTS,
    why: "**(a) This is information that should be conveyed to the technical stakeholders because it shows how the tests will be conducted.** It addresses the syllabus factor that **detailed steps in the setup and execution of the performance tests must be explained**. (b) is not correct because **this is information that should be shared with the business stakeholders**. " + PRESENT_WHY_TAIL + " **Note that questions #20 and #21 use an identical option set — the audience in the stem is the only discriminator.**" } });

  B.push({ q: { n: 5, tag: OFF(22), meta: "LO: PTFL-4.2.1 (K2) | Syllabus §4.2.1", correct: ["b"],
    stem: "If your performance test is testing the speed of the response of a web service, which protocol is being used?",
    opts: ["ODBC", "HTTP", "REST", "SMTP"],
    why: "**(b) This is an example of a web protocol.** (a) is **an example of a database protocol**. (c) is **an example of a web service protocol**. (d) is **an example of a network protocol**. **Note the subtlety:** the stem mentions a _web service_, and REST is indeed classified by the syllabus under **Web Service** — but the official answer is **HTTP**, the protocol actually carrying the traffic under test. Answer these from the syllabus's own group labels." } });

  B.push({ q: { n: 6, tag: OFF(23), meta: "LO: PTFL-4.2.1 (K2) | Syllabus §4.2.1", correct: ["a"],
    stem: "If your performance test is testing the speed with which database requests are sent and received, which protocol is being used?",
    opts: ["ODBC", "HTTP", "REST", "SMTP"],
    why: "**(a) This is an example of a database protocol.** (b) is **an example of a web protocol**. (c) is **an example of a web service protocol**. (d) is **an example of a network protocol**. The syllabus also notes that **traditional 2-tier applications built with a client-server model** — GUI client, backend database — **require the use of a protocol such as ODBC to access the database**." } });

  B.push({ q: { n: 7, tag: OFF(24), meta: "LO: PTFL-4.2.2 (K2) | Syllabus §4.2.2", correct: ["b"],
    stem: "If you are testing from the UI and you need to simulate the amount of time it will take a real user to read a prompt and enter data in a field, what should you implement in your test script?",
    opts: ["Wait time", "Think time", "Latency time", "Reading time"],
    why: "**(b) This is referred to as think time.** (a), (c) and (d) **are incorrect** — they are not syllabus terms. The syllabus states that **simulated transactions can include think time to better reflect the timing of a real user taking an action (e.g., pressing the \"SEND\" button)**, and that **the transaction response time plus the think time equals the elapsed time for that transaction**." } });

  B.push({ q: { n: 8, tag: OFF(25), meta: "LO: PTFL-4.2.2 (K2) | Syllabus §4.2.2", correct: ["b"],
    stem: "What is the value of nesting transactions for performance testing?",
    opts: [
      "It supports the concept of parent and child transactions",
      "It allows the tester to measure a series of discrete transactions",
      "It speeds the reporting time for the performance results",
      "It bypasses the network communication time by sending the transaction directly to the server that will process it",
    ],
    why: "**(b) The discrete transactions can be nested together to provide response information for a series of transactions that would normally be performed together while still allowing measurement of the discrete transactions as well.** (a) is not correct because **parent and child transactions may not accomplish anything meaningful in terms of system usage**. (c) is not correct because **it will not affect the reporting time, particularly if the discrete transactions are tracked as well — it may increase reporting time**. (d) is not correct because **this has nothing to do with bypassing network communications**." } });

  B.push({ q: { n: 9, tag: OFF(26) + " · K4", meta: "LO: PTFL-4.2.3 (K4) | Syllabus §4.2.3", correct: ["b"],
    scenario: DOC_VIEW,
    stem: "Given this information, what is missing to construct the operational profile for this user class?",
    opts: [
      "No interviews were conducted to better understand the user class",
      "The number of users across the system for this role is not known",
      "Batch processing of the patient upload information has not been considered",
      "Other system components that may be required (x-ray upload, lab results reporting) have not been considered",
    ],
    why: "**(b) At this point, we need to know how many users of this type will be accessing the system. We know the concurrency because we can take the number of users and the accesses per shift to figure this out.** (a) **is not needed for this instance because we already have the information.** (c) and (d) **are considerations for setting up the load profile but not needed for the operational profile.** The syllabus lists three data items to identify: **user personas and roles · generic tasks · estimated numbers of users for each role/task per unit of time over a given time period** — and it is the third that is missing here." } });

  B.push({ q: { n: 10, tag: OFF(27) + " · K4 calculation", meta: "LO: PTFL-4.2.4 (K4) | Syllabus §4.2.4", correct: ["c"],
    scenario: DOC_UPD,
    stem: "…which of the following is the proper load profile for these doctors?",
    opts: [
      "6250 transaction per hour",
      "Steady ramp-up increasing the transactions by 15,000 per hour starting at 15,000 transactions and ending at 150,000 transactions",
      "Stepped ramp-up with 7 hours at 21,000 transactions, 3 hours at 27,000 transactions, 3 hours at 36,000 transactions, 11 hours at 66,000 transactions",
      "Separate tests for 120,000 transactions per hour and 30,000 transactions per hour",
    ],
    why: "**(c) is correct.** The official calculation: **total transactions should be 2500 doctors × 10 accesses × 6 record updates = 150,000 transactions per day.** Hourly load: **7 hours of 500 doctors = 21,000 transactions · 11 hours of 1000 doctors = 66,000 transactions · 3 hours of 1500 doctors = 27,000 transactions · 3 hours of 2000 doctors = 36,000 transactions.** The doctors-per-hour distribution on a 24-hour clock is **500 at 01:00–06:00, 1000 at 07:00–13:00, 2000 at 14:00–16:00, 1000 at 17:00–20:00, 1500 at 21:00–23:00, and 500 at 24:00**. **The figures in the option are band totals, not hourly rates** — and they sum to **150,000**, which is what confirms the answer." } });

  B.push({ q: { n: 11, tag: OFF(28) + " · K4 calculation", meta: "LO: PTFL-4.2.5 (K4) | Syllabus §4.2.5", correct: ["b"],
    scenario: DOC_UPD,
    stem: "…what is the highest number of concurrent accesses on the system from these doctors?",
    opts: ["1,000", "2,000", "6,000", "12,000"],
    why: "**(b) The highest concurrent usage is when 2000 doctors are working from 2:00–5:00 in the afternoon. Each doctor has only one access per hour according to the question and that access has up to 6 updates.** (a), (c) and (d) are incorrect. **The trap is 12,000** — 2000 doctors × 6 updates — but **concurrency counts simultaneous sessions, not the work performed inside them**. The syllabus defines concurrency as **a measure of the number of simultaneous / parallel threads of execution**." } });

  B.push({ q: { n: 12, tag: OFF(29), meta: "LO: PTFL-4.2.6 (K2) | Syllabus §4.2.6", correct: ["c"],
    stem: "What is one of the advantages to conducting performance tests at the protocol level?",
    opts: [
      "It's the easiest method for manual scripting",
      "It's the best way to evaluate the total user experience",
      "It's scalable because the client is bypassed",
      "It's the best way to handle data correlation",
    ],
    why: "**(c) This is a scalable method because it bypasses the UI so you can run many of these tests at the same time without requiring the client.** (a) is not correct because **this scripting can be quite difficult without using a tool to capture the protocol level communication**. (b) is not correct because **the UI is bypassed**. (d) is not correct because **data correlation is more difficult because the correlation done at the UI is bypassed**. Recall also that **protocol-level scripts measure server and network response time only, while GUI scripts measure end-to-end time**." } });

  B.push({ q: { n: 13, tag: OFF(30), meta: "LO: PTFL-4.2.6 (K2) | Syllabus §4.2.6", correct: ["d"],
    stem: "What is the best method to use for verifying that a performance test script added users to a system?",
    opts: [
      "Check the error output from the script to verify no errors occurred",
      "Manually check via an application to see if the users were created",
      "Use the script to verify through the application that the users were created",
      "Use the script to verify that the users exist in the database",
    ],
    why: "**(d) Scripts should contain their own checks that the process has worked and verifying via the database directly is a more efficient way to do it (and more maintainable) than having the script do the verification through the application (which may also be wrong) as this adds to the maintenance requirements of the script.** (a) is not correct because **no errors doesn't mean that it worked — it could just mean that the error handling is also broken**. (b) is not correct because **this could be a very time-consuming approach**. (c) is not correct because **the application may have a defect that causes it to not find the new users**. The syllabus recommends exactly this: **verify that the script is doing what it is supposed to do using indirect methods — for example, checking the database to verify that the proper information was added**." } });

  B.push({ q: { n: 14, tag: OFF(31) + " · K3", meta: "LO: PTFL-4.2.7 (K3) | Syllabus §4.2.7", correct: ["a"],
    scenario: DOC_VIEW + "\n\nYou have created a performance script that logs in as a doctor (from a list of doctors) and then performs the patient look ups. When you run the script, the login works, but then you are not able to perform the patient look ups. You are getting an error that indicates the user is not known to the system.",
    stem: "What is likely your problem?",
    opts: [
      "The script is not capturing and re-using the system identifier for the user",
      "You cannot use the same user to log in and do the patient look ups because the user has expired",
      "The script needs to pass the login username/password for each transaction",
      "The login information from the previous user is cached by the system and you need to clear the cache before you can log in as a new user",
    ],
    why: "**(a) The problem is most likely with the system identifier that is given to that particular user when they login. When they try to do another transaction, that unique identifier needs to be passed to the system so it can provide access to the transaction.** (b) is not correct because **there is no indication that this is the problem**. (c) is not correct because **the question indicates that the doctor performs multiple lookups per access**. (d) is not correct because **if this were happening, it would log in as the previous user, not error out on the login**. This is **correlation** — and the syllabus states that **incorrect correlation or lack of correlation is the main reason why recorded scripts fail to playback**." } });

  B.push({ q: { n: 15, tag: OFF(32) + " · K3", meta: "LO: PTFL-4.2.7 (K3) | Syllabus §4.2.7", correct: ["c"],
    scenario: "You are testing a sales application for an e-commerce system. You are particularly interested in the response time for when a user enters text to be used to search for an item in the database. You have noticed that the first time you ran the tests it took 5.00 seconds to respond, but subsequent queries with the same data are responding in 0.01 seconds.",
    stem: "What should you have done during your scripting to prevent this issue?",
    opts: [
      "There's no issue, the system is just getting faster",
      "You need to log in each time to ensure that the transaction is performed again",
      "You need to be sure the cache is cleared because the query results are probably being cached",
      "You need to use a different user for each test to avoid the user's information being re-used without being restored",
    ],
    why: "**(c) This is a symptom of caching and can be avoided by either varying the data or by clearing the cache.** (a) is not correct and is **highly unlikely as systems tend to get slower, not faster, unless there is a caching issue**. (b) is not correct because **it's not the user's information that is being re-used but rather the search results**. (d) is not correct **for the same reason**. The syllabus warns that **the data could be completely cached (copied from disk to memory for faster access) and results would be much better than in production (where such data may be read from a disk)**." } });

  B.push({ q: { n: 16, tag: OFF(33), meta: "LO: PTFL-4.2.8 (K2) | Syllabus §4.2.8", correct: ["a"],
    stem: "What happens when the performance test system is not equivalent to the production environment?",
    opts: [
      "Projections become less reliable and risk increases because the results may not be representative",
      "The tests will tend to run more quickly because they are not burdened by production data",
      "The results will be easier to understand because the system can be configured for a particular test",
      "Projects become more reliable because of the targeted focus and this results in risk being reduced",
    ],
    why: "**(a) The less like production the performance testing system is, the less reliable are the results and this increases the risk of making incorrect assumptions.** (b) is not correct — **it could happen, but not necessarily**. (c) is not correct because **there is no reason to think the results would be easier to understand with a different configuration**. (d) is not correct because **the project risk would actually be increased in this case**. The syllabus sentence: **performance is a non-linear function of the environment, so the further the environment is from production standard, the more difficult it becomes to make accurate projections**." } });

  B.push({ q: { n: 17, tag: OFF(34), meta: "LO: PTFL-4.2.8 (K2) | Syllabus §4.2.8", correct: ["b"],
    stem: "What is a concern when using a properly configured load generation tool to build the background load for the performance tests?",
    opts: [
      "The load generated will contain invalid data",
      "The load generator may experience performance problems and will not be able to maintain a steady load",
      "The load generated may affect the production system and the production data",
      "The load generator log reports may be difficult to read, resulting in problems with interpreting the performance results",
    ],
    why: "**(b) A load generator, particularly if you are running multiples on one machine, may slow down enough that it is no longer maintaining the desired load on the system.** (a) and (c) **will not occur if the tool is configured properly**. (d) is not an issue as **the load generator is not usually used to generate the performance results — it just creates the load on the system so the performance tests can be conducted**. The syllabus therefore requires that **machines involved in load generation should be monitored too**." } });

  B.push({ q: { n: 18, tag: OFF(35), meta: "LO: PTFL-4.3.1 (K2) | Syllabus §4.3", correct: ["b"],
    stem: "What is the purpose of having a ramp up period at the beginning of performance tests?",
    opts: [
      "To increase the number of users beyond the desired load",
      "To allow the system to achieve a steady state before taking measurements",
      "To allow the system to achieve an orderly shut down after the tests",
      "To ensure the performance monitoring tools are working",
    ],
    why: "**(b) The system must have started up and achieved a steady state for valid steady state performance metrics to be gathered.** (a) is not correct because **the goal of the ramp up is to get the number of users to the point desired for the test, not to exceed that number**. (c) is not correct because **ramp up is increasing load, not decreasing it getting ready for shut down**. (d) is not correct because **this has nothing to do with ramp up and should be tested before any official tests are started**." } });

  B.push({ q: { n: 19, tag: OFF(36), meta: "LO: PTFL-4.3.1 (K2) | Syllabus §4.3 (with §1.2)", correct: ["c"],
    stem: "What is a method for testing transient states?",
    opts: ["Steady load testing", "Peak and valley testing", "Spike testing", "Scalability testing"],
    why: "**(c) This is achieved with spike tests which force the system to transition between a low load to a high load in a short period of time.** The syllabus states that **it is sometimes important to test transient states, when the system's behavior is changing**, and gives **the concurrent logging of a large number of users** and **spike tests** as the two examples. It also warns that **some standard approaches — such as monitoring averages — may be very misleading** when testing transient states." } });

  B.push({ q: { n: 20, tag: OFF(37) + " · K4", meta: "LO: PTFL-4.4.1 (K4) | Syllabus §4.4", correct: ["c"],
    scenario: HEALTH + "\n\nYou have conducted your tests and have determined the following metrics: **< 3 second response time: 85% of the time · < 5 second response time: 90% of the time · < 10 second response time: 95% of the time · < 60 second response time: 100% of the time.**",
    stem: "Given this information, how should you present the results to the stakeholders?",
    opts: [
      "The test failed, the system is too slow. The requirements should be reviewed to ensure that <3 seconds is required 100% of the time.",
      "85% of the time the performance goal is met, so the system should be accepted based on industry standards.",
      "The response time for 90% of the tests is probably acceptable, but more tuning is needed to bring down the 95% response time.",
      "The response time for 100% of the tests is unacceptable and tuning will be required to bring it down to <3 seconds.",
    ],
    why: "**The answer key gives (c).** The official rationale is unusually discursive and worth reading in full: \"_**A is correct but this is also a problem with the requirements being unclear.** Does it have to be less than 3 seconds 100% of the time? Or is it acceptable if it's 95%? **As stated though, the system has failed the test and the requirements should be revisited.** **C might be a good result if the requirements had been better defined.** Right now, they say that 100% must be less than 3 seconds. Realistically though, **the 90% time should be investigated to see if there are a few outliers that are bringing it down or if it is always at the 5 second mark**. **More tuning should be attempted though because this is a critical system and performance could be life or death impacting.** **B is not correct because the goal didn't state 85% of the time was acceptable. D is not correct because tuning to get to below 3 seconds 100% of the time will probably not be possible.**_\" **The exam-safe reading: report honestly against the stated objective, recommend further tuning, and never invent an acceptance level the requirements did not state.**" } });

  B.push({ pagebreak: true });
  B.push({ h2: "Part B — 25 additional syllabus-derived questions" });

  // ---- 4.1.1 ----


  B.push({ q: { n: 21, tag: "Classification", meta: "LO: PTFL-4.1.1 (K4) | Syllabus §4.1.1", correct: ["d"],
    stem: "Which of the following is best described as a user-based performance objective?",
    opts: [
      "Determining under what conditions degraded performance becomes apparent",
      "Establishing the maximum number of virtual users the load generator can sustain",
      "Confirming the system can scale to twice today's data volume",
      "Ensuring a search returns within two seconds for a customer browsing the catalogue",
    ],
    why: "**User-based objectives focus primarily on end-user satisfaction and business goals** — \"_users are **less concerned about feature types or how a product gets delivered. They just want to be able to do what they need to do.**_\" Options (a) and (c) are **technical objectives** (**conditions of degradation** and **ability to scale**); (b) is a property of the test harness, not an objective for the SUT." } });



  B.push({ q: { n: 22, tag: "Recall", meta: "LO: PTFL-4.1.1 (K4) | Syllabus §4.1.1", correct: ["b"],
    stem: "The syllabus names three key objectives of performance testing. Which of the following is one of them?",
    opts: [
      "Certifying the system as defect-free under load",
      "Finding opportunities for improvement",
      "Replacing functional testing at the system level",
      "Establishing the licence cost of the test tools",
    ],
    why: "\"_**Key objectives of performance testing include identifying potential risks, finding opportunities for improvement, and identifying necessary changes.**_\" Note that none of the three is _proving the system correct_ — consistent with **§2.4**, where **performance testing often lacks a well-defined test oracle**." } });

  // ---- 4.1.2 ----


  B.push({ q: { n: 23, tag: "Tricky · concerns", meta: "LO: PTFL-4.1.2 (K4) | Syllabus §4.1.2", correct: ["b"],
    stem: "In the Acceptance Criteria section of the PTP, how does the syllabus allocate response time, throughput and resource utilization to stakeholder concerns?",
    opts: [
      "Response time is a system concern, throughput is a user concern, resource utilization is a business concern",
      "Response time is a user concern, throughput is a business concern, resource utilization is a system concern",
      "All three are business concerns",
      "All three are technical concerns",
    ],
    why: "\"_**In general, response time is a user concern, throughput is a business concern, and resource utilization is a system concern.**_\" This single sentence connects **PTFL-4.1.1** (user-based versus technical objectives), **PTFL-2.1.1** (technical versus business metrics) and **PTFL-4.4.1** (what to report to whom)." } });

  B.push({ q: { n: 24, tag: "Definition", meta: "LO: PTFL-4.1.2 (K4) | Syllabus §4.1.2", correct: ["a"],
    stem: "How does the syllabus define a baseline in the context of acceptance criteria?",
    opts: [
      "A set of metrics used to compare current and previously achieved performance measurements",
      "The first test executed after the environment is deployed, regardless of its results",
      "The minimum load at which the system is stable",
      "The service level agreed with the customer",
    ],
    why: "\"_A **baseline** is **a set of metrics used to compare current and previously achieved performance measurements**. This enables **particular performance improvements to be demonstrated and/or the achievement of test acceptance criteria to be confirmed**. **It may be necessary to first create the baseline using sanitized data from a database, where possible.**_\" The SLA is listed separately as another thing acceptance criteria relate back to." } });

  B.push({ q: { n: 25, tag: "Tricky · GDPR", meta: "LO: PTFL-4.1.2 (K4) | Syllabus §4.1.2", correct: ["d"],
    stem: "What does the syllabus say about data masking or anonymizing in performance testing?",
    opts: [
      "It is optional and generally improves test realism",
      "It is forbidden in performance testing because it changes the data",
      "It is required only for functional testing",
      "It is mandatory under GDPR for production data containing personally identifiable information — however, in performance testing it adds risk, as the masked data may not have the same data characteristics as seen in real-world use",
    ],
    why: "The syllabus states both halves: masking **is used on production data that contains personally identifiable information, and is mandatory under General Data Protection Regulations (GDPR)**; **however, in performance testing, data masking adds risk to the performance tests as it may not have the same data characteristics as seen in real-world use**. This connects to **§4.2.8**: **the closer the test data is to the production data in size and structure, the more reliable the test results will be**." } });







  // ---- 4.1.3 ----
  B.push({ q: { n: 26, tag: "Audience", meta: "LO: PTFL-4.1.3 (K4) | Syllabus §4.1.3", correct: ["b"],
    stem: "Which of the following does the syllabus say is generally of secondary interest to stakeholders with a business focus?",
    opts: [
      "The connection between product risks and performance test objectives",
      "Technical issues concerning tooling, scripting and load generation",
      "The balance between cost and how representative the results will be",
      "Project risks such as infrastructure requirements and dependencies on key staff",
    ],
    why: "\"_**Technical issues concerning tooling, scripting and load generation are generally of secondary interest**_\" to business-focused stakeholders, who are also **less interested in the distinctions between functional and non-functional quality characteristics**. Options (a), (c) and (d) are all explicitly listed as things that **must be communicated** to that audience." } });



  B.push({ q: { n: 27, tag: "Tricky · incompleteness", meta: "LO: PTFL-4.1.3 (K4) | Syllabus §4.1.3", correct: ["d"],
    stem: "In the official presentation questions, why are both the \"test in production because a test system is prohibitive\" option and the \"here is the list of product risks\" option wrong for either audience?",
    opts: [
      "Because both are too technical for business stakeholders",
      "Because neither mentions cost",
      "Because production testing is never permitted and risk lists are never presented",
      "Because each is incomplete — production testing must be accompanied by mitigation plans so any impact to production is understood, and a risk list must be accompanied by how the tests will help mitigate those risks",
    ],
    why: "This is the official rationale, given identically in both questions: option (c) **is incomplete. If testing will be conducted in production, mitigation plans must also be made so that any impact to production is understood.** Option (d) **is a list of risks but doesn't include a list of how the tests will help mitigate these risks.** Note that the syllabus does permit production testing — **PTFL-4.1.2** says **with some systems the production environment becomes the only viable option**, provided **the specific risks are discussed**." } });



  // ---- 4.2.1 ----


  B.push({ q: { n: 28, tag: "Protocol group", meta: "LO: PTFL-4.2.1 (K2) | Syllabus §4.2.1", correct: ["c"],
    stem: "Under which group does the syllabus list LDAP, POP3, Windows Sockets and CORBA?",
    opts: ["Web Service", "Remote Access", "Network", "SOA"],
    why: "The **Network** group is **DNS · FTP · IMAP · LDAP · POP3 · SMTP · Windows Sockets · CORBA**. **Remote Access** is **Citrix ICA · RTE**; **SOA** is **MQSeries · JSON · WSCL**; **Web Service** is **SOAP · REST**. Learning the group labels is what makes the two official protocol questions automatic." } });



  B.push({ q: { n: 29, tag: "Application", meta: "LO: PTFL-4.2.1 (K2) | Syllabus §4.2.1", correct: ["d"],
    scenario: "The team wants to perform end-to-end testing that emulates user activity from the browser, focusing on the communication and activities of the backend servers rather than the GUI itself.",
    stem: "Which protocol family will be employed, and what is the effect?",
    opts: [
      "ODBC, so the database is exercised directly",
      "SMTP, so message queues are exercised",
      "Citrix ICA, so the remote desktop layer is exercised",
      "A web protocol such as HTTP/HTTPS, so that interaction with the GUI can be bypassed and the tests can focus on the communication and activities of the backend servers",
    ],
    why: "\"_Therefore, if the need is to **perform end-to-end testing emulating user activity from the browser**, **a web protocol such as HTTP/HTTPS will be employed**. In this way, **interaction with the GUI can be bypassed and the tests can focus on the communication and activities of the backend servers**._\" The syllabus contrasts this with **traditional 2-tier client-server applications**, which **require the use of a protocol such as ODBC to access the database**." } });

  // ---- 4.2.2 ----


  B.push({ q: { n: 30, tag: "Formula", meta: "LO: PTFL-4.2.2 (K2) | Syllabus §4.2.2", correct: ["c"],
    stem: "What equals the elapsed time for a simulated transaction?",
    opts: [
      "The transaction response time alone",
      "The think time alone",
      "The transaction response time plus the think time",
      "The transaction response time minus the network latency",
    ],
    why: "\"_**The transaction response time plus the think time equals the elapsed time for that transaction.**_\" The same sum reappears as the denominator of the throughput formula in **§4.2.5**: **system throughput = [number of virtual users] / ([processing time] + [think time])**." } });

  B.push({ q: { n: 31, tag: "Application", meta: "LO: PTFL-4.2.2 (K2) | Syllabus §4.2.2", correct: ["a"],
    scenario: "A tester wants to know the response time of each step in an online ordering system — search for item, add item to cart, pay for item, confirm order — and also the response time of the order process as a whole.",
    stem: "Which technique does the syllabus recommend, and what does it deliver?",
    opts: [
      "Nesting transactions, so that both individual and aggregate activities can be measured in one test",
      "Running four separate tests, one per step, then adding the results",
      "Setting a synchronization point between each step",
      "Removing think time so the steps run consecutively",
    ],
    why: "\"_Transactions **can also be nested so that individual and aggregate activities can be measured**._\" The syllabus uses precisely this ordering example and concludes: **by nesting transactions, both sets of information can be gathered in one test**. Synchronization points serve a different purpose — **ensuring a specific action is invoked concurrently or coordinating work between several scripts** (**§4.2.6**)." } });



  // ---- 4.2.3 ----
  B.push({ q: { n: 32, tag: "Definition", meta: "LO: PTFL-4.2.3 (K4) | Syllabus §4.2.3", correct: ["b"],
    stem: "How does the syllabus define an operational profile?",
    opts: [
      "The number of virtual users applied to the system over time",
      "Distinct patterns of interaction with an application, such as from users or other system components, which may be combined to create a desired load profile",
      "The list of protocols used by the system under test",
      "The set of metrics collected during a test run",
    ],
    why: "\"_Operational profiles **specify distinct patterns of interaction with an application such as from users or other system components**. **Multiple operational profiles may be specified for a given application. They may be combined to create a desired load profile** for achieving particular performance test objectives._\" The PTP section adds that an operational profile provides **a repeatable step-by-step flow through the application for a particular usage of the system**. Option (a) describes the **load profile**." } });

  B.push({ q: { n: 33, tag: "Recall · steps", meta: "LO: PTFL-4.2.3 (K4) | Syllabus §4.2.3", correct: ["c"],
    stem: "What are the three principal steps for identifying operational profiles?",
    opts: [
      "Record, parameterize, correlate",
      "Ramp up, hold steady, ramp down",
      "Identify the data to be gathered; gather the data using one or more sources; evaluate the data to construct the operational profiles",
      "Plan, design, implement",
    ],
    why: "The three steps are exactly as stated in (c). Option (a) is the **script implementation** sequence from **§4.2.7**; option (b) is the **load profile / execution** vocabulary from **§4.2.4** and **§4.3**." } });







  B.push({ q: { n: 34, tag: "Non-user profiles", meta: "LO: PTFL-4.2.3 (K4) | Syllabus §4.2.3", correct: ["c"],
    stem: "For off-line batch processing systems, where does the syllabus say the operational profile focus lies?",
    opts: [
      "On the number of concurrent interactive users",
      "On the GUI response time of the batch monitoring console",
      "Principally on the throughput of the batch processing system and its ability to complete within a given time period, with profiles focusing on the types of processing demanded of the batch processes",
      "On the correlation of session identifiers between batch jobs",
    ],
    why: "The syllabus example is a **stock trading system** whose profiles may include **payment transactions, verifying credentials, and checking compliance of legal conditions for particular types of stock transactions** — **each resulting in different paths being taken through the overall batch process**. It also notes that **the steps outlined for online user-based systems can also be applied in the batch processing context**." } });



  // ---- 4.2.4 ----
  B.push({ q: { n: 35, tag: "Definition", meta: "LO: PTFL-4.2.4 (K4) | Syllabus §4.2.4", correct: ["d"],
    stem: "How does the syllabus define a load profile?",
    opts: [
      "The pattern of interaction of a single user with the application",
      "The set of protocols used to generate load",
      "The list of metrics collected during the test",
      "The activity a component or system being tested may experience in production, consisting of a designated number of instances that will perform the actions of predefined operational profiles over a specified time period",
    ],
    why: "That is the syllabus definition, and it adds: **where the instances are users, the term \"virtual users\" is commonly applied**. The PTP section calls the aggregated result a **scenario**. Option (a) describes an **operational profile**." } });







  B.push({ q: { n: 36, tag: "Calculation", meta: "LO: PTFL-4.2.4 (K4) | Syllabus §4.2.4", correct: ["b"],
    scenario: "A call centre has 300 agents on the early shift and 200 on the late shift. Each agent opens the case system 8 times per 8-hour shift, and each opening produces 5 case updates. The shifts do not overlap.",
    stem: "How many case-update transactions does the system process per day from these agents?",
    opts: ["4,000", "20,000", "2,500", "40,000"],
    why: "Apply the official method: **total agents × accesses per shift × transactions per access**. **(300 + 200) × 8 × 5 = 500 × 40 = 20,000.** The same three-factor multiplication produces the **150,000** figure in the official question (**2500 × 10 × 6**). Always compute the daily total first — it is the check that tells you whether a proposed load profile's bands add up." } });

  B.push({ q: { n: 37, tag: "Tricky · reading options", meta: "LO: PTFL-4.2.4 (K4) | Syllabus §4.2.4", correct: ["c"],
    stem: "In the official load-profile question, the winning option reads \"7 hours at 21,000 transactions, 3 hours at 27,000 transactions, 3 hours at 36,000 transactions, 11 hours at 66,000 transactions\". How should those figures be interpreted?",
    opts: [
      "As hourly rates during each band",
      "As the number of virtual users in each band",
      "As band totals — the total transactions across all the hours in that band, summing to the 150,000 daily total",
      "As percentile response times per band",
    ],
    why: "They are **band totals**. Check: **7 h × 500 doctors × 6 transactions = 21,000** · **11 h × 1000 × 6 = 66,000** · **3 h × 1500 × 6 = 27,000** · **3 h × 2000 × 6 = 36,000**, and **21,000 + 66,000 + 27,000 + 36,000 = 150,000** — the daily total. Reading them as hourly rates makes the arithmetic impossible, which is why this is the most misread question on the paper." } });

  // ---- 4.2.5 ----


  B.push({ q: { n: 38, tag: "Formula", meta: "LO: PTFL-4.2.5 (K4) | Syllabus §4.2.5", correct: ["c"],
    stem: "Which formula does the syllabus give for system throughput?",
    opts: [
      "[number of virtual users] × [think time]",
      "[transactions completed] / [number of virtual users]",
      "[number of virtual users] / ([processing time] + [think time])",
      "[processing time] / [number of virtual users]",
    ],
    why: "\"_**System throughput = [number of virtual users] / ([processing time] + [think time])**_\". The syllabus draws the consequence explicitly: **so when the processing time increases, throughput may significantly decrease even if everything else stays the same**. Note the denominator is the **elapsed time** defined in §4.2.2." } });

  B.push({ q: { n: 39, tag: "Tricky · 60x", meta: "LO: PTFL-4.2.5 (K4) | Syllabus §4.2.5", correct: ["b"],
    stem: "Why does the syllabus say the number of users is not a good measure of load?",
    opts: [
      "Because load testing tools cannot count users accurately",
      "Because without defining operational profiles — what each user is doing and how intensely — the same 500 users can produce a 60x difference in load, and at least a 60x difference in hardware requirements",
      "Because concurrency is always more important than throughput",
      "Because users are never concurrent in practice",
    ],
    why: "The syllabus's own arithmetic: **500 users running short queries each minute give a throughput of 30,000 queries per hour; the same 500 users running one query per hour give 500 queries per hour** — **the same 500 users, but a 60x difference between loads and at least a 60x difference in the hardware requirements for the system**. It notes that user counts are used anyway because **that number is often easier to find** and because **it is the way load testing tools define load**." } });



  B.push({ q: { n: 40, tag: "Tricky · concurrency", meta: "LO: PTFL-4.2.5 (K4) | Syllabus §4.2.5", correct: ["a"],
    stem: "Why does the syllabus say concurrency matters even when throughput is unchanged?",
    opts: [
      "Because concurrency represents the number of parallel sessions, each of which may use its own resources — so the amount of resources used may differ depending on concurrency",
      "Because concurrency determines the protocol used",
      "Because concurrency is the only measure load testing tools support",
      "Because higher concurrency always means higher throughput",
    ],
    why: "\"_**Concurrency is an important measure. It represents the number of parallel sessions, each of which may use its own resources. Even if throughput is the same, the amount of resources used may differ depending on concurrency.**_\" This is why the syllabus insists that **to model operational and load profiles properly, both aspects should be taken into consideration**." } });

  // ---- 4.2.6 ----


  B.push({ q: { n: 41, tag: "Tricky · measurement", meta: "LO: PTFL-4.2.6 (K2) | Syllabus §4.2.6", correct: ["c"],
    stem: "What is the difference in what protocol-level and GUI-level scripts actually measure?",
    opts: [
      "Protocol-level scripts measure end-to-end time; GUI scripts measure server time only",
      "Both measure end-to-end time",
      "In the case of protocol-level scripts it is server and network response time only, while GUI scripts measure end-to-end time — although what exactly is measured depends on the technology used",
      "Neither measures response time; both measure throughput only",
    ],
    why: "That is the syllabus wording. It is also why **§4.3** recommends cross-checking a protocol-level load test by **running several GUI-level (functional) scripts or executing similar operational profiles manually in parallel** — **response times reported during the test should only differ from those measured manually at the GUI level by the time spent on the client side**." } });



  B.push({ q: { n: 42, tag: "Tricky · timers", meta: "LO: PTFL-4.2.6 (K2) | Syllabus §4.2.6", correct: ["d"],
    stem: "What should the timed requests in a performance test script match?",
    opts: [
      "Each individual HTTP request, for maximum granularity",
      "The full duration of the test run",
      "The think time between actions",
      "A meaningful unit of logical work — for example, a business transaction for adding an item to an order or submitting an order",
    ],
    why: "\"_To collect response times, **timers should be added to the script to measure how long a request or a combination of requests takes**. **The timed requests should match a meaningful unit of logical work** — for example, **a business transaction for adding an item to an order or submitting an order**._\" This is the same idea as **transactions** in §4.2.2, and it is what makes **nesting** worthwhile." } });



  // ---- 4.2.7 ----
  B.push({ q: { n: 43, tag: "Definition · K3", meta: "LO: PTFL-4.2.7 (K3) | Syllabus §4.2.7", correct: ["c"],
    stem: "What is correlation in the context of performance test script implementation?",
    opts: [
      "The statistical relationship between two or more measured metrics",
      "Matching the think time to the operational profile",
      "Replacing recorded internal identifiers that define context with variables that can be changed between runs, using values extracted from the request responses",
      "Combining several scripts into one scenario",
    ],
    why: "That is the syllabus definition, with the login-identifier example: **a user identifier that is acquired at login and must be supplied for all subsequent transactions**. The syllabus explicitly warns that **in that context the word correlation has a different meaning than when used in statistics (where it means relationship between two or more things)** — option (a) is the statistical meaning and is a deliberate trap." } });

  B.push({ q: { n: 44, tag: "Tricky · K3", meta: "LO: PTFL-4.2.7 (K3) | Syllabus §4.2.7", correct: ["a"],
    stem: "What does the syllabus identify as the main reason why recorded scripts fail to play back?",
    opts: [
      "Incorrect correlation or lack of correlation",
      "Insufficient think time",
      "Too many virtual users",
      "Use of the wrong protocol group",
    ],
    why: "\"_**Incorrect correlation or lack of correlation is the main reason why recorded scripts fail to playback.**_\" The syllabus notes that **advanced load testing tools may do some correlation automatically, so it may be transparent in some cases — but in more complex cases, manual correlation or adding new correlation rules may be required**. This sentence is the direct source of official question #31." } });

  B.push({ q: { n: 45, tag: "Tricky · two directions", meta: "LO: PTFL-4.2.7 (K3) | Syllabus §4.2.7", correct: ["d"],
    stem: "Running many virtual users with the same user name and the same data can distort results in two opposite directions. What are they?",
    opts: [
      "Both directions make results worse than production",
      "Both directions make results better than production",
      "Caching makes results worse; locking makes them better",
      "Caching can make results much better than production because data is copied from disk to memory; concurrency issues such as data locking can make them much worse because the software waits for the lock to free",
    ],
    why: "The syllabus gives both mechanisms explicitly. **The data could be completely cached (copied from disk to memory for faster access) and results would be much better than in production (where such data may be read from a disk).** And: **using the same users and/or data can also cause concurrency issues (e.g., if data is locked when a user is updating it) and results would be much worse than in production as the software would wait for the lock to free before the next user could lock the data for update.**" } });



  B.push({ pagebreak: true });
  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: Chapter 4 is **half the paper**. Seven objectives carry **two marks each** (14 of the 20) and are mostly **K2 recall**; the remaining six marks come one each from the analytical objectives. The ranking below is by **marks available per unit of study effort**." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Marks", "Why it matters"], widths: [0.9, 5.4, 1.7, 1.1, 4.9], rows: [
    ["1", "Protocol group matching — Q5, Q6, Q28, Q29", "4.2.1", "**2**", "Pure recall from a seven-row table. The cheapest two marks in the chapter."],
    ["2", "Think time and nested transactions — Q7, Q8, Q30, Q31", "4.2.2", "**2**", "Two definitions and one equation: **response time + think time = elapsed time**."],
    ["3", "Ramp-up purpose and transient states — Q18, Q19, and the execution items", "4.3.1", "**2**", "Both answers are single sentences, and one of them reaches back to Chapter 1's **spike testing**."],
    ["4", "Business versus technical audience — Q3, Q4, Q26, Q27", "4.1.3", "**2**", "The **same four options are used twice**. Learn which one belongs to which audience and both marks follow."],
    ["5", "Correlation and caching — Q14, Q15, Q43–Q45", "4.2.7", "**2 (K3)**", "Two named failure modes with two named fixes. The only K3 objective in the syllabus's own numbering."],
    ["6", "Protocol-level scalability and database verification — Q12, Q13, Q41, Q42", "4.2.6", "**2**", "Script structure, what each script type measures, and why you verify via the database."],
    ["7", "Non-production environments and load generator monitoring — Q16, Q17", "4.2.8", "**2**", "**Performance is a non-linear function of the environment**, and **load generators must be monitored too**."],
    ["8", "The K4 arithmetic: operational profile → load profile → concurrency — Q9–Q11, Q32–Q40", "4.2.3–4.2.5", "**3**", "Three marks from one worked scenario. Learn the multiplication and the **band totals** reading."],
    ["9", "Objectives and the PTP — Q1, Q2, Q21–Q25", "4.1.1, 4.1.2", "**2**", "**User-based versus technical**, and the **twelve PTP sections**."],
    ["10", "Reporting percentile results — Q20", "4.4.1", "**1**", "The **90th percentile is the usual goal**; **100% compliance is not recommended**; report honestly and recommend tuning."],
  ] } });

  return B;
};
