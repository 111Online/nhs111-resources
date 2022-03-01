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
  "alt": "The shared care record data landscape as understood by the team",
  "caption":"Figure 2. The care record data landscape as understood by the team"
}) }}

{{ pagination({
  "previousUrl": "/nhs111-resources/peh/discovery-report#Summary",
  "previousPage": "Summary",
  "nextUrl": "/nhs111-resources/peh/discovery-report-research#Research",
  "nextPage": "Research"
}) }}