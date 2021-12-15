---
title: Non-Functional Requirements
date: 2021-12-15
publishdate: 2021-12-15
draft: false
description: Want to what non-functional requirements in software architecture are? Maybe these article can help you.
tags:
  - NFR
  - Non-Functional Requirements
  - Agile
  - Software Architecture
  - Software Quality
  - Project Management
  - Requirements Engineering
---
Every now and then I stumble upon projects, which do not have a defined set of Non Functional Requirements (NFRs in the following) or teams who
do not even know about the bits and pieces. Therefore I thought it a good idea to refresh and collect my knowledge and write down my current
state of mind about NFRs.

<!-- more -->
<figure>
    <img src="/src/img/nfr_process.png" alt="Drawing symbolizing the process of defining Non-Functional Requirements" title="Defining Non-Functional Requirements">
</figure>


## What are Non-Functional Requirements in software architecture?

Non-Functional Requirements (NFRs) are the properties of a software, that sit outside of specific features or functionalities that typically
dictate how a system should behave.

To understand the difference between functional and non-functional requirements, it can be useful to view what a system does, and how well it
does it.

Other terms for non-functional requirements are "qualities", "quality goals", "non-behavioral requirements", or "technical requirements". These
are sometimes called the "-ilities", from attributes like stability and portability. Qualities can be divided into two main categories:

* Execution qualities, such as safety, security and usability
* Evolution qualities, such as testability, maintainability, extensibility and scalability


## NFR Frameworks

NFRs, the "soft goals" of a system, are often hard to grasp and express but have a significant impact on the global qualities and user acceptance
of a software system. These could be usability, performance, security and flexibility in a given system. To help teams with pinpointing those
qualities, there exist multiple frameworks and ISO standard, for example [ISO 9126](https://en.wikipedia.org/wiki/ISO/IEC_9126) or its successor
ISO 25010, [SNAP](https://en.wikipedia.org/wiki/SNAP_Points) or [Goal Modelling](https://en.wikipedia.org/wiki/Goal_modeling) to mention only a
few.


## Attributes or Qualities of a Software System

<table class="rwd-table">
    <thead>
        <tr>
            <th>ISO 9126 Quality Criterias</th>
            <th>ISO 25010 Maintainability Model</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-th="ISO 9126 Quality Criterias">
                <img src="/src/img/ISO_9126_quality.png" alt="Chart displaying the ISO 9126 cycle" title="ISO 9126" class="width__75">
            </td>
            <td data-th="ISO 25010 Maintainability Model">
                 <img src="/src/img/ISO_25010_Maintainability_Model.png" alt="Chart displaying the ISO 25010 Maintainability Model" title="ISO 25010 Maintainability Model" class="width__75">
            </td>
        </tr>
    </tbody>
</table>

There are many possibilities to define NFRs for a system and you can really go overboard when defining them. Like functional requirements, also
NFRs must be quantified for transparency and testability. A good starting point may be to start with four basic areas and refine them step by
step:

* Usability - characteristics such as aesthetics and consistency in the user interface.
* Reliability - characteristics such as availability (the amount of system "up time"), accuracy of system calculations, and the system's ability
  to recover from failure.
* Performance - characteristics such as throughput, response time, recovery time, start-up time, and shutdown time.
* Supportability - characteristics such as testability, adaptability, maintainability, compatibility, configurability, installability,
  scalability, and localizability.

Following criteria may also help to further define specific NFRs:
* Context and Boundaries – When a NFR lacks a bounded context it may lead to significant additional work.
* Independent – NFRs should be independent of each other. Thus they can be evaluated and tested individually and the non-fulfillment of one
  does not lead to the non-fulfillment of the other.
* Testable – NFRs must be objective, measurable, and testable


## Sources

1. [ISO/IEC 25010:2011 Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - System and software quality models](https://www.iso.org/standard/35733.html)
2. [Götz, Rolf; Scharnweber, Heiko: "IVENA: Integriertes Vorgehen zur Erhebung nichtfunktionaler Anforderungen"](https://www.pst.ifi.lmu.de/Lehre/WS0102/architektur/VL1/Ivena.pdf)
3. [Web Archive - IBM on Furps+](https://web.archive.org/web/20201112020231/http://www.ibm.com/developerworks/rational/library/4706.html#N100A7)
4. [Scaled Agile Framework on NFR](https://www.scaledagileframework.com/nonfunctional-requirements/)
5. [Wikipedia on Non-functional requirements](https://en.wikipedia.org/wiki/Non-functional_requirement)
