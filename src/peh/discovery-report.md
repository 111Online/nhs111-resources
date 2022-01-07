---
layout: report
title: Patient encounter history discovery report
content_list:
  - text: Summary
    href: /nhs111-resources/peh/discovery-report#Summary
    
    
  - text: Urgent and Emergency Care landscape
    href: /nhs111-resources/peh/discovery-report#UEC-landscape
    
    
  - text: Research
    href: /nhs111-resources/peh/discovery-report#Research
   
    
  - text: Recommendations for Alpha
    href: /peh/discovery-report
    
    
  - text: Supporting information
    href: /peh/discovery-report

---
{% from 'images/macro.njk' import image %}
{% from 'tables/macro.njk' import table %}
{% from 'card/macro.njk' import card %}

# <a id="Summary"></a> Summary

## Executive Summary
In July 2021 we have set out to answer the primary discovery question: 

‘Does having access to encounter information across UEC, lead to better safer patient outcomes’. 

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

# <a id="UEC-landscape"></a>UEC Landscape

Urgent and Emergency Care in England is broken up into individual component services that are commissioned regionally by CCG’s (clinical commissioning groups) resulting in high levels of variance in how the end-to-end service is provided. This makes mapping the service landscape challenging. 

The professional records standards body (PRSB) produced a high-level flow chart in the [2018 report on information sharing requirements in UEC](https://theprsb.org/wp-content/uploads/2018/11/IUC-information-requirements-final-report-V1.0-converted.pdf), commissioned by NHSX. We have used this as a basis to build a high-level view of the UEC service, shown in Figure 1.

There are of course nuances at a local level. Some regions use a single provider for 111 and 999 services, similarly 111 and CAS (clinical assessment service) services are often the same provider. Some regions have embraced integrated urgent care (IUC) and have 111, CAS, and out of hours services delivered as a single entity.

What the model below shows is the breadth of services a patient can encounter during their episode of care. We have discovered that encounter information is captured and available in certain clinical systems, but this information does not follow the patient between service providers or across provider boundaries.

{{ image({
  "src": "../../images/uec_landscape.png",
  "alt": "High level view of UEC landscape",
  "caption":"Figure 1. High level view of UEC landscape"
}) }}

## UEC Data Landscape
Encounter information reflects the federated nature of how UEC services are provided. Some clinical systems provide the means to capture and refer to previous encounters recorded in that part of the service. For example, in some CAS’s a clinician can see all previous encounters a particular patient has had at that CAS. This information doesn’t flow from provider to provider, so a clinician doesn’t have a complete picture of encounters for that patient in UEC.

The repeat caller service (RCS) captures all encounters made nationally into 111 telephony. However, anecdotally less than 50% of patient encounters to UEC start at 111. There is no national picture of encounters in UEC.
As highlighted in Encounter history is a subset of information that is useful for clinical decision-making. clinicians don’t use encounter information in isolation, it’s a supporting set of data alongside clinical information which helps them to build a context for what is happening with that patient. 

Clinicians have reported challenges accessing clinical data sources. It is unclear whether this is a historical problem being reflected from before the COPI notice was introduced, as we didn’t discover it’s impact on data sharing until after interviews had completed. Regardless, data sharing is likely to be a challenge again should the COPI notice end.

There is a national shared care record initiative underway by which the local shared care record initiatives have been funded, there is a target to achieve delivering a local shared care record in every ICS (integrated care system) by September 2021, currently each local shared care record is being developed based on the needs of the local ICS, in future it will be necessary to work out how to join them all up. Figure 2 demonstrates our current understanding of the care record landscape. This is not exhaustive.

{{ image({
  "src": "../../images/care_record_landscape.png",
  "alt": "The care record data landscape as understood by the team",
  "caption":"Figure 2. The care record data landscape as understood by the team"
}) }}

# <a id="Research"></a>Research

## Methodology
User interviews were carried out over an 8 week period (July-August 2021)  using Microsoft Teams and information was analysed using qualitative research methods. We recruited two groups of participants: 
1. Users of the service-people who have used 111 in the last 3 months and have been referred to another UEC service and 
2. Staff working in UEC across the different care settings. 

The first group of 19 participants, consisted of people who have used 111 (telephony or online) in the last 3 months and been referred to another UEC service. This group was sourced by a private sector recruiter. This group is referred to as patients in the subsequent sections of this report. By using a 3rd party recruiter, we were able to specify the demographic range of participants. The requested demographics are shown in Appendix 1. Demographic requirements specified to the recruitment agency. The discussion guide can be found in Appendix 2. Patient Interview Discussion Guide. 
The second group of 40 participants, was sourced from within the NHS. We have spoken to people working across 25 organisations including 111 providers, CASs, OOH (Out of Hours) GPs and EDs. The full list of organisations can be found in Appendix 3. Organisations that took part in user research for PEH Discovery. The participants answered a series of questions about their experience working in UEC, focused on patient information. The discussion guides can be found in Appendix 4. Clinician Interview Discussion Guide.

Table 2 shows a breakdown of interviews by type. Figure 5 shows the distribution of people in UEC roles by geographic area. Please note this doesn’t show patients location.

{{ table({
  panel: false,
  caption: "Table 2. Number of interviews broken by type of participant.",
  firstCellIsHeader: false,
  head: [
    {
      text: "Patients"
    },
    {
      text: "Clinicians"
    },
    {
      text: "Non-Clinicians"
    },
    {
      text: "Non-Clinicians (with clinical background)"
    }
  ],
  rows: [
    [
      {
        text: "19"
      },
      {
        text: "27"
      },
      {
        text: "8"
      },
      {
        text: "5"
      }
    ]
  ]
}) }}

{{ image({
  "src": "../../images/distribution_of_research_participants.png",
  "alt": "Map of England showing regions covered by UEC role interviews. Red areas show where we interviewed at least 1 person from that region.",
  "caption":"Figure 3: Map of England showing regions covered by UEC role interviews. Red areas show where we interviewed at least 1 person from that region."
}) }}

In addition to the interviews, we also created a survey for clinicians. The intention of the survey was to reach a wider range of roles and a greater number of people than we could by interviews alone and therefore supplementing those results. This work is currently ongoing and will be continued during alpha. Where relevant we have referenced preliminary survey results. The survey questions can be found in Appendix 5. Clinician Survey Questions.

## Patient Insights

Patients don’t distinguish between patient encounter history information from any other clinical information about them, therefore the questions asked were focused on peoples’ experiences of information sharing across UEC. Below are our key insights relating to patient encounter history:

### A lack of shared encounter information means patients need to repeat information
Several patients told us that, as they moved through UEC settings, they often had to repeat themselves - including the reason for contacting UEC services and what has been advised in the previous stage of their journey. Overall, this resulted in mild frustration, with many patients indicating that being treated effectively and quickly was their primary concern, even if that meant repeating the information. Some patients speculated that they may be asked multiple times in order for clinicians to hear directly from them, as opposed to relying on previous assessments. 

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">[Did you feel they had more information about you?] “I told them from scratch what had happened.” (P3)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I asked if 111 had contacted UTC about my issue, they said no. I had to explain again, maybe a bit of frustration, but I don't mind explaining myself again as long as I'm treated in a quick time.” (P3)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Having to tell the whole story, I hate that” (P6)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The amount of questions they asked, come on send me the form over the internet I'll do it like that.”  (P6)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Each time I phone I have to repeat it.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[Did the doctor know why you were there?] “Doctors always ask 'tell me what's going on?’ I don't know if they know or if they want to hear from me.” (P10)</p>
  "
}) }}

### Patients aren’t always able to share their information

Similarly, we also heard of occasions where patients struggled to share their information, and having to repeat themselves became difficult, painful or distressing. In those scenarios, clearly better access to previous encounters would allow clinicians to make clinical judgements without the need to ask the patient quite so many questions. Patients have mentioned the following instances when sharing encounter information was difficult to share:
-	Feeling too unwell or distressed to be able to share information effectively 
-	Sharing information when caring for a family member with mental health issues, who is getting agitated 

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“They don't know how hard it is to explain my history when I'm gasping for air.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I didn't want to go through the pain [of explaining their condition] again so we cancelled our holiday and went home to see GP.” (P6)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I just remember thinking please don't make me talk too much longer. My head is banging, and I feel sick, and I just want to put my head down. And so, I kind of had the urgency of wanting to get off the phone.” (P19)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I say to my GP and Hospitals, why don't you have all this, why do I have to repeat myself? They shrug their shoulders, and they think I'm making a joke but I'm serious.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“It's just terrifying to think I could be coming in unconscious, and they don't know the makeup of my body.” (P10)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[caring for someone with mental health issues] “it's difficult to get it across, especially when my mum is there, she is stressing” (P14)</p>
  "
}) }}

## Patients expect clinicians to have access to their information

Patients indicated that they thought that clinical information would be shared throughout the NHS, especially those that had had fewer interactions. Patients view the NHS as a single organisation and so assume data is shared. When we asked in more detail about data sharing, feedback became more nuanced, some people fed back that they wouldn’t expect all roles to be allowed to see their information.

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“You would expect any NHS org to have the same records? Everything is online it should be easy to see?” (P3)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I would expect 111 to have it to, they're in the NHS.” (P3)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I honestly don't see what's wrong with them having my medical history.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Regardless of where you go, they should be able to see my whole health record.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I would expect them to have all the information, it's on the record it would be easily accessible in this country.” (P3)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Yes, I expect it's on the computer somewhere?” (P1)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Why is it not shared? NHS is one organisation.” (P6)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I know they don't as my cardiologist doesn't know about my lungs.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[Did they know you had called 111?] “I don't think they knew; they just had the receptionist details.” (P3)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[Different roles] “Should only be made aware of the information that is relevant“ (P18)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Receptionists shouldn't know but doctors and nurses should” (P9)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Different jobs in different roles would see different” (P13)</p>
  "
}) }}


  
  