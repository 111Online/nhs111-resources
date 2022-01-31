---
layout: report
title: Patient encounter history discovery report
content_list:
  - text: Summary
    href: /nhs111-resources/peh/discovery-report#Summary
    
    
  - text: Urgent and Emergency Care landscape
    href: /nhs111-resources/peh/discovery-report-UEClandscape#UEC-landscape
    
    
  - text: Research
    href: /nhs111-resources/peh/discovery-report-research#Research
   
    
  - text: Recommendations for Alpha
    href: /nhs111-resources/peh/discovery-report-alpha#Alpha
    
  - text: Glossary
    href: /nhs111-resources/peh/discovery-report-glossary#Glossary

  - text: Supporting information
    href: /nhs111-resources/peh/discovery-report-appendix#SupportingInfo

---
{% from 'images/macro.njk' import image %}
{% from 'tables/macro.njk' import table %}
{% from 'card/macro.njk' import card %}
{% from 'pagination/macro.njk' import pagination %}

# <a id="Summary"></a> Summary

## Executive Summary
In July 2021 we have set out to answer the primary discovery question: 

‘Does having access to encounter information across UEC, lead to better safer patient outcomes?’ 

The answer is yes it does, in a number of UEC settings encounter information is already captured (most notably 111 and CAS). The majority of clinicians have said that having patient encounter information would be valuable. 

Whilst patient encounter history information is valuable, currently encounters are captured in multiple systems and not in a consistent way across UEC care settings, forcing clinicians to have to piece together information in their heads. Similarly, very little encounter information sharing happens across providers, systems and regions. The largest gaps of information sharing are in GP Out of Hours and Emergency Departments (EDs), capturing and providing encounter information in these care settings would be beneficial, as not having Patient Encounter History means that crucial information about patients might be missed.

Therefore, we believe that having Patient Encounter History available could lead to safer patient outcomes. There are multiple use cases, when Patient Encounter History would be, according to clinicians, especially useful: 
- Recognising worsening conditions
- Caring for patients with complex care needs
- Patients attending UEC outside their usual area
- Patients unable or unwilling to provide medical history 
- For the creation of care plans

Importantly, we have learnt that, where available, clinicians do not use patient encounter history information in isolation. Instead, it is a tool that they use alongside other clinical information to build a picture of what is happening with the patient. We believe that strategically it makes sense for encounters from all care settings to become part of the patients care record. 

Information needs to be delivered with content design in mind. It is important for clinicians to be able to see the pertinent information quickly. Many reported that information overload is as bad as having no information.

Another important insight is that encounters have three main outcomes, the patient is provided with information, the patient is referred to another service, or the patient is treated (including giving medical advice). There are existing projects looking at information flows for referrals, and when treatment is given (PEM) and consideration should be given as to what this means for alpha delivery.

Due to the fragmented nature of encounter information in UEC it has not been possible to prove that encounter information can be used to improve risk stratification, however we have made insights into the types of repeat calls UEC receives, and that the current repeat caller service’s scope is not wide enough to give a true reflection of repeat callers. We recommend that gathering information from across all UEC care settings and provider regions should be a key goal of alpha, in order to explore how this data could be used to improve alerting and routing.

The team recommend that patient encounter history moves into an alpha phase and carry out  what we believe to be the key experiments and information which need to be gathered during this phase.


## Purpose of this document
This document has the following aims:
- To document the research findings from the discovery.
- To answer the discovery goal: "Does having access to all patient encounters within UEC (urgent and emergency care) lead to; improved clinical decision making and better, safer patient outcomes?"
- To document future challenges, constraints and considerations.
- To provide recommendations for what to do should the project move into an alpha phase.

## Background
NHS Digital have been commissioned by NHSX to explore the question:
*Does having access to encounter information across UEC, lead to better safer patient outcomes?*

The project aimed to explore the following benefits:
- There is a benefit to getting more care settings to update encounter history (the ability to update patient encounter history)
- There is a benefit of more care settings being able to view encounter history (the ability to view patient encounter history)
- There is a requirement for improved risk stratification (the ability to route patients and reduce triage based on previous encounters)

A small team was formed to answer these questions in an 8-week discovery running from 12th July 2021 to 3rd September 2021.

Previous research in 2018 explored ‘Extending contact history and post event messaging’. We reviewed the research to ensure we factored in what had already been discovered, this report reinforces and expands on the work done then.

{{ pagination({
  "nextUrl": "/nhs111-resources/peh/discovery-report-UEClandscape#UEC-landscape",
  "nextPage": "UEC Landscape"
}) }}