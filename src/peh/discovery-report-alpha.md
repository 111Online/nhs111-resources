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

# <a id="Alpha"></a>Recommendations for Alpha

According to the [GOV.UK service
manual](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works),
the alpha phase of a project is where we try out different solutions to
the problems we have learnt during discovery. An alpha should spend time
building prototypes and testing multiple ideas, not being afraid to
challenge the way things are done at the moment. Alpha is a chance to
explore new approaches and validate them.

With this approach in mind, we have produced the following
recommendations of what should be tested during the alpha phase. We have
not specified options for how to deliver on these goals, as this
requires further discussion and agreement among stakeholders across the
NHS. The recommendations shouldn't change, but the delivery approach
may.

## Recommendations for alpha

###  Continue to explore how patient encounter history could form part of a national care record

From the discovery, we have learnt that clinicians don't use patient
encounter history in isolation. We believe that holding encounter
information as part of the patient record makes sense long term.
However, we haven't been able to explore the practicalities of this
assertion in the short discovery timescale.

We recommend continuing to liaise with the national shared care record
team to understand their long-term goals, and to seek their views on
where UEC encounters should reside. We need to be mindful of the
technical responsiveness and availability of the shared care record for
some of the call routing and prioritisation requirements in UEC. We also
need to understand how information governance and data sharing will work
within the national shared care record framework.

###  Work closely with the Booking & Referrals and PEM projects to understand and agree on how the projects overlap and support one another

During the discovery, we learnt that the outcome of an encounter is
either a referral to another service, or treatment (including
information or self-care advice) which results in a post-event message
being sent to primary care.

There are two projects already operating in this space which the Patient
Encounter History project needs to be mindful of:

1.  The Booking & Referrals project is looking to standardise the way
    referrals are made between care settings.

2.  The Post Event Messaging project is looking at improvements to how
    patient treatments in other settings are referred pack to the
    primary care record.

How the Patient Encounter History alpha and these two projects
inter-relate needs to be agreed and dependencies reduced to enable rapid
delivery. This may require scope changes or re-prioritisation of
features. These agreements need to take place to ensure that the
projects are joined up and don't result in delivery of siloed
point-solutions into the UEC.

###  Collate more data about encounters from across the UEC nationally in order to analyse how it could be used to improve workflow and alerting

The lack of a central repository for patient encounter information
nationwide has been a major challenge in describing how this data could
be used to improve alerting and call routing. A key goal for alpha
should be to collate encounter information from across the whole of the
UEC landscape.

This will allow us to understand the types of encounters and to validate
the types of repeat caller -- so far, we have identified 4 types, there
may be more. Analysing this data will also allow the alpha team to
explore the clinical risks of call routing and alerting based on
encounter information, and how this may work alongside the current
Pathways triage process.

###  Experiment with how patient encounter history could be visualised to focus the information on the patient rather than the data sources

We have heard from clinicians that not having a consistent view of
encounters across UEC can make diagnosing and treating patients more
difficult, especially with complex cases. If we have collated a broader
set of encounter information, we should experiment with how that
information (and perhaps information from other data sources) could be
used by clinicians to build a patient-centred view.

These experiments can be used to validate our finding that laying out
clinical information based on the patient, rather than the data source
would be beneficial. We would also discover how much of a challenge
making changes to systems that clinicians have invested in learning may
be for a beta phase.

###  Pilot providing patient encounter history across all parts of UEC to understand the benefits it delivers

We discovered that the most significant gaps in encounter information
sharing were in GP Out of Hours, and Emergency Departments. If we are
able to gather encounter information from across UEC and create a means
to view it then providing access to GP OOH and ED and exploring the
benefits that presents should be a key goal of alpha.

###  Explore the viability of extracting existing encounter information from proprietary systems

Some clinical systems already have a rich set of patient encounter
history captured for specific regions and care settings. A national
encounter dataset should extract this information, otherwise clinicians
will be left having to look at two data sources. This is not an
insignificant challenge, and the alpha should explore how this may be
acheived.

###  Research encounter information in other care settings

The NHS Service Standard specifies that teams should:

["Work towards solving a whole problem for users and provide a joined up
experience across all
channels."](https://service-manual.nhs.uk/service-standard/2-and-3-work-towards-solving-a-whole-problem-and-provide-a-joined-up-experience)

With that in mind it should be considered whether the team's scope
should be expanded to look at encounters in other care settings, such as
primary and social care. This would be a start of exploring viability of
what joined-up encounter data for all care settings could look like.

### Define measurable benefits for the PEH service 
In order to prove the viability of the service, the team will define measurable benefits that can be measured in beta and beyond.

{{ pagination({
  "previousUrl": "/nhs111-resources/peh/discovery-report-research#Research",
  "previousPage": "Research",
  "nextUrl": "/nhs111-resources/peh/discovery-report-glossary#Glossary",
  "nextPage": "Glossary"
}) }}