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

# <a id="Glossary"></a>Glossary of terms

{{ table({
  panel: false,
  caption: "Glossary of terms",
  firstCellIsHeader: false,
  head: [
    {
      text: "Term/Abbreviation"
    },
    {
      text: "What it stands for"
    }
  ],
  rows: [
    [
      {
        text: "PEH"
      },
      {
        text: "Patient Encounter History"
      }
    ],
    [
      {
        text: "Episode of care"
      },
      {
        text: "A patients journey from access point (for example 111 services, GP out of hours, Unheralded arrivals at ED/UTC) to end point (treatment or sign posting)"
      }
    ],
    [
      {
        text: "Encounter"
      },
      {
        text: "The patient interaction at a given point in the journey (for example talking to a CAS clinician) An episode of care can have many encounters."
      }
    ],
    [
      {
        text: "CAS"
      },
      {
        text: "Clinical Assessment Service"
      }
    ],
    [
      {
        text: "PEM"
      },
      {
        text: "Post Event Message, a message that is sent back to the primary care record on completion of an episode of care. There is also a PEM project looking at improving the referral."
      }
    ],
    [
      {
        text: "Booking and Referrals project"
      },
      {
        text: "A project exploring standardising the protocol for sending bookings and referrals across all care sectors."
      }
    ],
    [
      {
        text: "ITK"
      },
      {
        text: "Interoperability Toolkit, a current referral standard used to send referrals between services in most of UEC."
      }
    ],   
    [
      {
        text: "Disposition"
      },
      {
        text: "An indication of the urgency of the patient's condition, and sometimes suspected condition. The outcome of a triage."
      }
    ],
    [
      {
        text: "Pathways"
      },
      {
        text: "The triage system used in 111 services to get a patient to a disposition."
      }
    ],
    [
      {
        text: "DOS"
      },
      {
        text: "Directory of Services, a directory of available services to refer a patient to for treatment based on their disposition from pathways."
      }
    ],
    [
      {
        text: "Dx code"
      },
      {
        text: "Disposition codes in pathways to classify the patient."
      }
    ],
    [
      {
        text: "RCS"
      },
      {
        text: "Repeat caller service, a service that flags to 111 call handlers that a patient has called 3 times or more in the last 96 hours."
      }
    ],
    [
      {
        text: "IUC"
      },
      {
        text: "Integrated Urgent Care"
      }
    ],
    [
      {
        text: "CCG"
      },
      {
        text: "Clinical Commissioning Groups, commission most of the hospital and community NHS services in the local areas for which they are responsible. They commission UEC services for their area."
      }
    ],
    [
      {
        text: "ICS"
      },
      {
        text: "Integrated Care system, new partnerships between the organisations that meet health and care needs across an area, to coordinate services and to plan in a way that improves population health and reduces inequalities between different groups."
      }
    ]
  ]
}) }}

{{ pagination({
  "previousUrl": "/nhs111-resources/peh/discovery-report-alpha#Alpha",
  "previousPage": "Recommendations for Alpha",
  "nextUrl": "/nhs111-resources/peh/discovery-report-appendix#SupportingInfo",
  "nextPage": "Supporting information"
}) }}