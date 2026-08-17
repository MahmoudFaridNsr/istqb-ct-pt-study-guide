# Prerequisites — what to know before CT-PT stops hurting

## The formal requirement

**The Foundation Level Core certificate shall be obtained before taking the Foundation Level
Performance Testing certification exam.** That is the syllabus's own entry requirement, and it is
enforced by the exam providers.

Everything below is the *informal* prerequisite: the background that makes the syllabus read as
sense rather than as vocabulary. None of it is examined directly. All of it makes Chapter 4 —
**half the paper** — dramatically easier.

---

## 1. What you need from Foundation Level Core

The CT-PT syllabus assumes these without re-explaining them:

| Concept | Where CT-PT relies on it |
| --- | --- |
| **The ISTQB test process** — planning, monitoring and control, analysis, design, implementation, execution, completion | **PTFL-3.1.1** is *entirely* this process seen through a performance lens, and is worth **2 marks** |
| **Test levels** — component, component integration, system, system integration, acceptance | **PTFL-1.3.1** maps a dynamic activity to each level (**1 mark**), and **PTFL-3.4.1** repeats them in the sequential lifecycle |
| **Static versus dynamic testing** | **PTFL-1.3.1**, and the argument in **PTFL-3.3.1** that a technical review predicts what dynamic testing only reveals late |
| **Risk-based testing** — likelihood and impact | **PTFL-3.3.1** (K4) evaluates risk **in terms of likelihood and impact using clearly defined criteria** |
| **Test basis, test conditions, test cases, test procedures** | **PTFL-3.1.1** distinguishes design (**modular test cases**) from implementation (**ordered into procedures**) |
| **Test plan, test summary report, exit criteria** | **PTFL-4.1.2** (the PTP) and **PTFL-4.4.1** (reporting) |
| **Sequential and iterative-incremental lifecycles, CI** | **PTFL-3.4.1**, worth a **K4 mark** |

If any of those feel shaky, re-read the relevant Foundation Level chapter before starting here. It
is cheaper than learning it twice.

---

## 2. Vocabulary that CT-PT uses without defining

The syllabus assumes a working technical vocabulary. These are the terms that appear in questions
and are *not* explained in the syllabus text:

### Systems and architecture

| Term | What you need to know |
| --- | --- |
| **Tier** | A layer of a system with a distinct role — presentation, application, database. A **multi-tier system** runs each on its own server |
| **Load balancer** | A component distributing requests across several servers. Named in the PTP's **System Configuration** section, and as a client-server risk |
| **Virtual machine / hypervisor** | Several logical computers sharing one physical machine. The basis of the **virtualized systems** risk profile |
| **IaaS / SaaS** | Infrastructure-as-a-Service (you rent machines) versus Software-as-a-Service (you rent a running service). **PTFL-4.2.8** chooses between them |
| **Stub** | A stand-in for a component that is unavailable. **PTFL-4.2.8** calls the practice **service virtualization** |

### Performance vocabulary

| Term | What you need to know |
| --- | --- |
| **Response time** | How long the system takes to answer. Measured **min, max, average and percentile** |
| **Percentile (90th)** | The value below which 90% of measurements fall. **The syllabus's usual reporting goal** |
| **Throughput** | Work completed per unit of time. The syllabus distinguishes **system throughput** (transactions) from **network throughput** (bits) |
| **Concurrency** | How many things are happening at the same instant. **Not** the same as throughput |
| **Latency** | Delay in the network. Listed by the syllabus under **resource utilization** |
| **Bottleneck** | The one resource that limits everything else |
| **Saturation** | A resource running at its limit, so extra load produces queueing rather than work |
| **Memory leak** | Memory allocated and never released. Causes **degraded response over time** |
| **Thread / thread pool** | Units of parallel execution, and the fixed set a server keeps. Exhaustion causes failures under load |
| **Cache** | Data kept in fast storage after first use. **The reason a repeated query gets suspiciously fast** |
| **Lock / contention** | Two operations wanting the same data. **The reason a badly parameterized test looks slower than production** |

### Protocols and the network

You do **not** need to be able to implement any of these. You need to know **which group each one
belongs to**, because that is exactly what two exam questions ask:

| Group | Protocols |
| --- | --- |
| **Database** | ODBC, JDBC |
| **Web** | HTTP, HTTPS, HTML |
| **Web Service** | SOAP, REST |
| **Network** | DNS, FTP, IMAP, LDAP, POP3, SMTP, Windows Sockets, CORBA |
| **Mobile** | TruClient, SMP, MMS |
| **Remote Access** | Citrix ICA, RTE |
| **SOA** | MQSeries, JSON, WSCL |

You should also know, in outline, what the **OSI model** is — seven layers, from physical at Layer 1
to application at Layer 7 — because the syllabus says performance testing works mostly at
**Layers 5 to 7**.

---

## 3. The arithmetic you need

There is exactly **one formula** in the syllabus:

```
System throughput = [number of virtual users] / ([processing time] + [think time])
```

Everything else is multiplication and division. The K4 calculation questions need only:

- **people × actions each × transactions per action** to get a total
- **actions ÷ hours** to get a rate
- the ability to notice that **overlapping shifts add up** hour by hour
- the discipline to **check that the parts sum to the whole**

If you can do a shift-overlap table on paper, you can do the CT-PT calculations. No statistics, no
queueing maths, no percentile computation is required — the syllabus mentions **closed and open
systems** as queueing-theory concepts but asks you only to recognise the definitions.

---

## 4. Hands-on experience that pays off

None of this is examined, but each hour spent here saves several in Chapter 4:

1. **Record and replay one script in any load tool.** JMeter, k6, Gatling — any of them. The moment
   you watch a recorded script fail on the second run because a session identifier was hard-coded,
   **correlation** stops being a word and becomes a memory. That is worth **2 K3 marks**.
2. **Run the same script twice and watch the second run get faster.** That is **caching**, and it is
   another official question.
3. **Set a think time, then remove it, and watch the throughput change.** That is the formula made
   visible.
4. **Watch a system's CPU while you load it.** The moment response times rise while CPU sits at 95%
   is exactly what **PTFL-4.4.1** means by *identifying correlation between metrics*.
5. **Look at a server log during a load test.** High resource usage, memory warnings, deadlocks, SQL
   timeouts — the four things **PTFL-2.3.1** says logs contain.

You do not need a real system. A local web application and a free tool are enough.

---

## 5. What you do **not** need

- **Any specific commercial tool.** The syllabus names tool *categories* and *licence models*, never
  a required product.
- **Programming ability.** **PTFL-4.2.6** says scripts *may* be programmed, and the exam asks about
  the consequences, not the code.
- **Statistics.** *Statistical quality control techniques* is listed as one of seven analysis
  techniques; you are never asked to perform one.
- **Capacity planning maths.** Capacity planning tools are mentioned once, as a support for test
  analysis.
- **Network engineering.** You need to know that latency and bandwidth matter, not how to configure
  a router.

---

## 6. Self-check before you start Chapter 4

Answer these without looking anything up. If more than two are uncomfortable, spend an evening on
this file first.

1. What is the difference between **throughput** and **concurrency**?
2. What does a **90th percentile response time of 2 seconds** actually tell a user?
3. Why does a **memory leak** show up as degradation **over time** rather than under load?
4. What does **ODBC** talk to? What does **SMTP** do?
5. If a recorded script logs in successfully and then fails on every subsequent request, what is the
   most likely cause?
6. Why would running 500 virtual users all as the same user, with the same search term, give
   misleading results — **in two opposite directions**?
7. What is the difference between a **test case** and a **test procedure**?
8. In risk terms, what does **impact** mean and what does **likelihood** mean?
