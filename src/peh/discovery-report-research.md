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

### Patients expect clinicians to have access to their information

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

### Health needs trump privacy concerns
The vast majority of patients expressed that their health needs were greater than any concerns they had about data privacy. 
It is important to note, that at the time of the interviews (and shortly before) there was significant media coverage regarding the health records being shared for research and planning. This might have potentially skewed patients views during interviews, however concerns around privacy and data sharing were rare.

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

### Patients expect clinicians to have access to their information

Patients indicated that they thought that clinical information would be shared throughout the NHS, especially those that had had fewer interactions. Patients view the NHS as a single organisation and so assume data is shared. When we asked in more detail about data sharing, feedback became more nuanced, some people fed back that they wouldn’t expect all roles to be allowed to see their information.

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“I would be very happy with NHS knowing my medical history.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“[if clinicians could view your history, how would you feel?] “This person knows me, that gives me confidence.”  (P6)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“They should see a level of information relevant to the job” (P6)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[If clinicians could view your history, how would you feel?] “Wouldn't make much difference to me as long as I got the treatment I needed.” (P1)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I feel the doctors need a full picture of what is going on” (P10)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“It's just terrifying to think I could be coming in unconscious, and they don't know the makeup of my body” (P10)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Don’t mind info being shared as long as it's not sold.” (P1)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“It should be shared as long as it's not sold.” (P3)</p>
  "
}) }}
  
### Patients with complex needs have had to use information sharing workarounds

One patient with complex care needs was being treated at three different hospitals for long term conditions. Lack of data sharing between those organisations had led them to:
-	Producing a homemade card listing medical history and medicines 
-	Paying for a 3rd party service, which allows medical professionals to access their medical history in case of an emergency  

We discovered similar initiatives from organisations such as MENCAP. [The patient passport intitiative](https://www.mencap.org.uk/advice-and-support/health/health-guides) allows patients with complex care needs to share their information easily when physically moving between care settings. Whilst the patient passport is an effective and cheap solution, it fixes the symptom of poor information sharing in the UEC, not the root cause.
Some clinicians also provided evidence of how passports are provided by patients 

-	"Some patients are really very good. Especially patients with learning disabilities, I've noticed that they come now with a passport, they call it, and they bring it with them." (C9 - Operational officer)
In another example, lack of data sharing between care settings meant that a patient has been repeatedly refused a prescription. This resulted in them having to complain multiple times before the issue was resolved causing delays in care of a child. 
-	[it was] “frustrating, they keep suspending her asthma medication.” (P20)

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“Charing Cross for my heart, Royal Marsden for my cancer, St Georges for my lung infection, Croydon University Hospital is nearest A&E.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I'm on 12-13 medications, there is no way to remember that.” (P2)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I carry a card in my bag with my history. (…) I give them a card with it all on, they say your very organised, I say well I have to be.” (P2)</p>
  "
}) }}

### Patients struggle with information overload when receiving advice

Some clinicians said that patients often struggle to recall or remember what information has been given to them during their episode of care. This is important, because in the absence of patient encounter history, clinicians often rely on patients to share details of previous investigations and outcomes within that episode of care. We have learned that in some cases patients with impaired cognitive abilities or mental health issues have struggled with information overload.

{{ card({
  "heading": "Direct quotes from clinicians",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">[patients recalling the encounter] (…) “depends on the patient’s understanding and how well things were explained to them in a way that made sense and that they can recall” (C28 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“[relying on patients for info] “I think the challenge would be patients that don't have cognitive ability, so dementia, Alzheimer's patients, patients with complex mental health, brain injuries (...) we rely heavily on the patients disclosing that information.” (C15 - CAS Clinician)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[it's useful to see PEH because] “Because you know what patients are like sometimes and their truth is a little bit different.” (C37 - Nurse OOH & MIU)</p>
  "
}) }}

One patient has said that they struggled to take in what has been shared with, because they felt too unwell. 

{{ card({
  "heading": "Direct quote from patient",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“You know when you've got a head cold and you can see people talking and you can hear what they're saying but you don't hear a word that they say it was very much like that. I could hear he was talking and what he was saying sounded sensible, but none of it is making sense. I had to ask him to go back and repeat what you were saying because I was just like I can't comprehend what you're talking about.” (P19)</p>
  "
}) }}

### Patients want to be reassured they are in the right place

Some patients expressed concern about “wasting NHS time” and being seen as a burden. Those patients felt more confident when they were reassured by the clinicians that they did the right thing or were in the right place. We believe that encounter data can be used by clinicians to provide this reassurance.

{{ card({
  "heading": "Direct quotes from patients",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“I think it's reassuring they reconfirmed my information.” (P4)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“It's good, you have the reassurance that you are not wasting peoples time.” (P8)</p>
  "
}) }}

{{ card({
  "heading": "Direct quotes from clinicians",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“Having the context and bit more story of what's gone on the GP practice can give you extra reassurance to the patient” (C29 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“(…) talking to why they called up and all of that information we would have already received. So, we'll you know, comfort the person by saying we already know this. (...) because they get very agitated.” (C37 - NURSE (OOH & MIU)</p>
  "
}) }}


## UEC role insights

There are a number of roles within UEC care settings that have slightly different information needs Table 3 attempts to provide a breakdown of encounter information needs by role:

{{ table({
  panel: false,
  caption: "Table 3. UEC roles and Patient Encounter History information needs.",
  firstCellIsHeader: true,
  head: [
    {
      text: "Role"
    },
    {
      text: "Encounter information needs"
    }
  ],
  rows: [
    [
      {
        text: "111 health adviser"
      },
      {
        text: "Encounter information is not generally used other than if a patient is flagged as a repeat caller. Sometimes encounter information is used to identify a frequent caller and to work with clinicians and others to create a health care plan for that patient."
      }
    ],
    [
      {
        text: "111 / CAS Clinician"
      },
      {
        text: "Clinicians want to be able to scan encounters to assess whether there is any relevant information related to their current disposition, and to build a picture of what's happening with the patient."
      }
    ],
    [
      {
        text: "GP Out of Hours"
      },
      {
        text: "GPs want to be able to see the primary care records in order to view primary care encounters."
      }
    ],
    [
      {
        text: "ED Clinician"
      },
      {
        text: "ED Clinicians want to see presenting complaint, outcome from previous consultations, and any advice given to the patient. Some have mentioned acuity score would also be useful."
      }
    ]
  ]
}) }}

### Most clinicians said that having patient encounter history information would be valuable
Nearly all clinicians that we spoke to said that being able to see a patient’s encounters would be valuable. 

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“The need for a national solution is imperative.” (C34 - MEDICAL LEAD) </p>
  <hr>
  <p class=\"nhsuk-card__description\">[PEH example] “Yes, very helpful. From the experience I have for years in the urgent care service, this is really useful.” (C21 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[Would PEH be useful?] “It would be. It would be amazing to have. That would be so powerful to be able to see that whole patient journey.” (C24 - GP OOH)</p>  
  <hr>
  <p class=\"nhsuk-card__description\">[PEH] “(…) that bit is the missing link, really, so I would say it would be helpful to us” (C6 - CAS MANAGER)</p>  
  <hr>
  <p class=\"nhsuk-card__description\">[problem to be solved] “there are absolutely many use cases as to why patient's encounter information is important, across the whole sector.” (C4 - DIGITAL LEAD)</p>  
  <hr>
  <p class=\"nhsuk-card__description\">“It would be useful to see if somebody's been seen recently. I think it would be also useful for us just to see how patients often just bob around from service to service (…).” (C26 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“He rang 111, ideally they had the information of the discharge from ED. They would know that he'd been to hospital.” (C32 - ED CONSULTANT)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The encounter history is very much relevant when you've got a person that's ringing multiple times over a short period of time.” (C13 - COO)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“it is useful to see the disposition of where the patient is reached, as well. So that would be Yeah, that would be extremely, that is extremely helpful, because then you could kind of pose back to the patient and say, Oh, I see yesterday, you saw an out of hours GP, what was the outcome if…” (C15 - CAS CLINICIAN)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The health and Social Care Committee and the Select Committee in 2013 produced report which said that basically we're flying blind. The phrase was we're flying blind in urgent mode. And until we get better data then we're going to be.” (TH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Having that information [PEH} will facilitate patient safety” (MA)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The risk is reduced as a patient if you're informing each service of what's happened previously and also that you've been given as the patient. All of the information. In order to do that because patients are aware only of as much as you tell them and show them because there will be things going on that you've written down and perhaps tests that you perform that they don't understand the implications of.” (GE)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I'm very much an advocate for the more information you have, actually, the better you can make a clinical decision.” (HB) </p>
  <hr>
  <p class=\"nhsuk-card__description\">“In the context of my type of organisation, you can have a patient where it becomes extremely useful, in terms of managing risk and managing patient outcomes and expectations.” (CON)  </p>
  <hr>
  <p class=\"nhsuk-card__description\">“As a clinician, you will do things on the basis of your information that you've got, the knowledge that you have, and the experience that you have. And the presentation of the person in front of you. And you will sit there and go, right, okay, with an X% of clinical certainty, I will make this judgement.' But you don't know that's necessarily the right thing because as the triage continues onto the next person that might have a greater clinical expertise on that specific thing.” (DH)</p>
  "
}) }}

### Encounter history is a subset of information that is useful for clinical decision-making
Clinicians told us that they use (or would use) encounter information to help them quickly build a picture of what is happening with that patient. They would scan the information before calling a patient back or make a judgement whether to use it or not based on the acuity of the call. 

Encounter information isn’t used in isolation, it’s a part of the information they use to build a picture of what is happening with the patient. It is very much a tool in their toolbox to help them build context about the patient, work out what is going on, and work out what to do next. Clinicians told us that preferably they would want to be able to see all encounters not just UEC ones, and to be able to make the choice themselves about what is pertinent and what is not.

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“A patient who's repeatedly presenting over a short period of time with a condition that's getting worse, then clearly we need to know about that.” (C14 - HEALTH ADVISOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“It's useful to see the disposition of where the patient has reached, as well. So that would be extremely helpful, because then you could pose back to the patient and say, 'Oh, I see yesterday, you saw an out of hours GP, what was the outcome?” (C15 - CAS CLINICIAN)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“You've obviously got an instant view of what you would have in the GP surgery in terms of a summary of they've got heart disease. So, we've got all of that. You've got all the medication and you can build a picture of them in your mind as to what sort of things are relevant and important and understand what they're talking about today. In the context a little bit more about in the context of them as a whole.”  - (C33 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The bit that will be helpful [that the] current presenting complaint is part of something that's been going on for a few days, it would then be relevant to have the additional information.” - (C33 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The risk is reduced if you're informing each service of what's happened previously.” (C25 - PATHWAYS)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[would PEH be useful?] “It would be. It would be amazing to have. That would be so powerful to be able to see that whole patient journey.” (C24 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[PEH] “it's really important for some cases. We miss things all the time” (C32 – ED CONSULTANT)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[PEH] “But at the moment we don't know that they've come from 111 and it'd be really good if we had that as an understanding for learning if we knew the source of every referral, I think that'll be really important.” (C32 – ED CONSULTANT)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[PEH] “It would help in the clinical decision-making. It would help. It would help you to stratify that patient correctly in terms of acuity. That would help them to go to the right place and not A&E hopefully.” (C20 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Four or five of my patients on Monday were unable to communicate any kind of history to me.” (C3 - CLINICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Three or four clinicians may have been involved in that patient, but they all may have picked out one bit of key information within what's written that brings the jigsaw together.” (C3 - CLINICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Crossover between those [primary/secondary] you need a data set that is less bound to or is not bound to those particular areas. You need to capture that activity because a lot of the activity that is going on, which is valuable, is not happening in traditional environment.” (C27 – ED CONSULTANT)</p>
  "
}) }}

###  Clinicians don't need to see everything about the previous encounter

Clinicians told us they don't want to see lots of information about
previous encounters. Clinicians want to know:

-   Date/time of the encounter
-   What did the last clinician diagnose?
-   What did the clinician do?
-   Why have they sent the patient to me (if referred)?
-   Clinician role

Many clinicians said that they don't have time to wade through lots of
information, and that too much information was as bad as not enough. The
information needed to be easy to read, clear and concise.

#### Direct quotes

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“You need to know what was done” (C20 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Headline problem would be useful for each encounter; Outcome of previous encounters would be helpful; Narrative but that would be a lot of reading; Physiological parameters would be useful; Why the person before did what they did; Knowing the skillset of the person who has seen them”  (C1 - CLINICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“What we want to know in A&E is we want to know why are they sending this patient to us? What is the concern?” (C32 -- ED CONSULTANT)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[Would you want to know who made the assessment, in terms of the role?] “I think, yes” (C20 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Something that's missed a lot is what was the actual diagnosis made” (C20 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The reason for contacting the service, presenting complaint and what happened to them. If there's an examination, I need to know in that examination what are the parameters and if there's any referral to another specialty, what specialty, what was the referral for? If the case was closed, what was the diagnosis and what was the management?” (C21 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“What I do want to know is why the person that saw them before did what they did.” (C1 - CLINICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Knowing the outcome of the previous encounters would be helpful, so if they had a prescription, if they were directed to a certain service, so that you know if people are turning up in the wrong place.” (C1 - CLINICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Too much information is as bad as too little.” (C20 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“What I'm cautious of is mandating, You must check this. That then puts a massive brake on productivity. Because people find enough ways to slow their productivity down asit is without us putting in one massive excuse to read through large amounts of information.” (C6 - CAS MANAGER)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[info clinicians want] “It's a quick browse of knowing what the main problems are. Nobody wants to go through their whole life history, there's no time for it. And especially in our time pressured environment, all you need to know is there anything specific related to the complaint they've called for.” (C22 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“There's a risk that putting too much information on there either will make it unwieldy, and people won't read it or it'll kind of colour that judgment when they're speaking to the patient at that time.” (C36 - GP OOH)</p>
  "
}) }}

###  Building a picture of what has happened to a patient currently requires piecing together information from multiple sources

Clinical systems tend to group information by data source, rather than by scenario, this means clinicians have to look in multiple tabs to piece information about the patient together. Often information is
repeated in different data sources rather than compiled into a singularview. In the case of encounters, primary care encounters are separate from UEC encounters (where available) because they originate from
different data sources.

This makes it difficult to piece together a view of what is going on in a time critical environment. It's further evidence of the problem of disparate patient records. Figure 7 shows this problem, primary care
encounters are a tab in GP connect; 111 and CAS encounters are in the 'Previous Encounters' tab. Clinicians have to flip between the two to build a picture of what is going on with that patient.

Sometimes the primary care record is only available to clinicians from the primary care system (SystmOne and EMIS for example). Clinicians then have to flip between primary care and UEC systems to piece together what
is happening to the patient.

The primary care record seems to be very much the de facto standard for getting patient information, and indeed it has the capability to store encounters, however information about previous encounters from UEC, in
the form of a Post Event Messages, are generally stored as attachments in the primary care record rather than written into the encounter section.


{{ image({
  "src": "../../images/UECSystem.png",
  "alt": "Figure 4. Screenshot of a UEC clinical system. Primary care encounters are a tab within GP Connect, 111/CAS encounters are in the Previous encounters tab, forcing clinicians to flip between them to build an overall picture of what encounters a patient may have had.",
  "caption":"Figure 4. Screenshot of a UEC clinical system. Primary care encounters are a tab within GP Connect, 111/CAS encounters are in the Previous encounters tab, forcing clinicians to flip between them to build an overall picture of what encounters a patient may have had."
}) }}


{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“There are too many tools that provide the same information.” (C2 - 111 MANAGER)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“You could go back through previous encounters with 111 or OOHs, it's a bit cumbersome, it takes a while to come up.”  (C26 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[why would you take the full history if it is available on the record?] “Because it's not always easy to find. It doesn't take too long to ask the questions, and you know then you've got the most up to date and accurate information.” (C25 - PATHWAYS)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Don't have the whole picture, if they phone about leg swelling yesterday and phone about chest pain today can\'t see whole picture.” (C15 -- CAS CLINICIAN)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The other thing I'll do is phone, we can go on SystmOne. It's quite tricky, but you can look at some of their primary care information. And then I'll almost always try and contact next of kin, but as we know, sometimes the phone number isn't right.” (C3 - CLINICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“What I would like is if it's more reliable so that you don't have to waste time trying to get things to work when you just hope it would work automatically” (C28 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“If UEC only had 1 IT system that would be bliss, wouldn't it as then you would know where they were but unfortunately, we work in multi systems. The APIs aren't the best.” (C20 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“What I find frustrating is that we have a separate Adastra open for the face-to-face appointments and a separate one for the phone calls. I can't look into the Adastra where they might have information recorded from having been seen face to face by one of my colleagues the day before.” (C28 - GP OOH)</p>
  <hr>
  "
}) }}

###  Clinicians tell us information overload is a challenge in UEC systems

Similar to the previous point, clinicians find that the way data is
formatted and provided to them in clinical systems is sometimes
difficult to read and make sense of. The systems and how records are
formatted, don't currently provide clinicians with a narrative of what
is happening to a patient. This requires them to learn to navigate the
systems.

Because clinical systems are complex, we have anecdotally heard examples
of where doctors won\'t come and work for a particular supplier because
they use a different clinical system to the one, they are used to. The
implication being that clinical systems are so complex to learn that
clinicians become invested in the ones they have put the energy into learning.

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "
  <p class=\"nhsuk-card__description\">“in a high-pressure clinic, you have to scan notes quickly, looking for words and phrases.” (C29 - GP OOH)  </p>
  <hr>
  <p class=\"nhsuk-card__description\">“Problem headings are supposed to be the diagnosis - not everyone thinks like that.” (C29 - GP OOH) </p>
  <hr>
  <p class=\"nhsuk-card__description\">“111 encounter- from the ITK message you can see the list of questions they have gone through; it\'s difficult to read but you can see where they have answered the question.” (C5 - SERVICE MANAGER)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[about patient records] “the summaries are not always easy to navigate and don't always have the correct and most up-to-date information on them.” (C25 - PATHWAYS) </p>
  <hr>
  <p class=\"nhsuk-card__description\">“The tricky thing is sometimes the most valuable information is the narrative, but because that's unstructured, free text, it's very difficult to make anything out of it and it's a lot of reading.” (C1 - CLINICAL DIRECTOR) </p>
  <hr>
  <p class=\"nhsuk-card__description\">“Sometimes there is a very useful information written in free text.” (C28 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The referrals from 111, it's double dutch, it doesn't really make any sense, it doesn't help you in anyway at all.” (C33 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[pathways referral] “It's not written in a way that tells me a story.” (C33 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“People have switched off to the information from 111 because it's just got no usage” (C32 - ED CONSULTANT) </p>
  "
}) }}

###  An encounter has three possible outcomes; information is given, a referral, or treatment 

As reflected in the high-level process view in Figure 1, an encounter
has three outcomes.

1.  The patient is given information that is not treatment related (i.e., doesn't result in a PEM).

2.  The patient is referred to another service.

3.  The patient is treated (including giving advice/information).

In some scenarios both referral and treatment outcomes can be used, for
example, a patient may be booked into see their GP the next day and
advised to take paracetamol in the meantime.

Patient encounter history is currently contained within referral or
treatment notes. The way that this information is stored varies from
system to system, provider to provider and service to service. For
example, primary care currently stores primary care encounters in the GP
record, however, encounters from UEC are captured as attachments within
the GP record.

###  Some clinical systems already provide the means to capture encounter information

In regions where 111 and CAS services were from the same provider, the
encounters in those settings could be seen by all clinicians. However,
encounter information did not always flow between care settings. For
example, if GP Out of Hours was from a different provider, even if they
used the same system, they would be unable to see encounters from the
other provider\'s instance. Similarly encounter information sharing into
Hospital systems was highlighted as a problem.

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“If someone has contacted another provider and it hasn't been sent to us we can't see it.” (C26 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“But we could only see the ones [patient encounter] that related to our service.” (C26 - MEDICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I think we now do get previous encounters with that are with ourselves on calls that the received from 111.” (C24 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“GP out of hours type systems do give you that encounter history of stuff within their organisation.” (C1 - CLINICAL DIRECTOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“You could go and look in the folder and then that would give you all the list of the previous encounters they had at the urgent care centre.” (C25 - PATHWAYS)</p>
  <hr>
  <p class=\"nhsuk-card__description\">[PEH information at MIU] “They can actually go into Adastra and can look at previous contacts, but because they use Adastra through the hospital license rather than through the out of hours license, you can't actually look at previous contacts between the two.” (C30 - UC CLINICAL LEAD)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Because they might have gone to different places, so now it
    > wasn't all joined up.” (C25 - PATHWAYS)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Even if 2 organisations are on Adastra, the data across might not be shared.” (C13 - COO)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Cleo shows number of times the patient has contacted the service. But it doesn't show you an accumulation across urgent care landscape.” (C29 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Symphony is actually made by EMIS, but it doesn't connect with EMIS web in any meaningful way at all.” (C33 - MEDICAL DIRECTOR)</p>
  "
}) }}

###  Encounter information does not consistently follow the patient through their episode of care

Whilst some regions are attempting to make encounter information more
widely available, usually through integrated urgent care (IUC) or shared
care record initiatives, often encounter information does not flow at a
system level. Most significantly to and from GP out of hours and
Emergency Departments.

We heard examples of where information about the patient, including
their history, was verbally described over a telephone to a receptionist
when referring a patient to an ED from GP out of hours. We also heard a
patient was given a letter to take with them to ED. In those scenarios
that data is then lost. This makes building a picture of what is going
on with a patient more difficult, time-consuming and frustrating for the
patient.

We didn't hear of any examples of where encounter information was
available across UEC provider boundaries, creating problems in high
demand overflow periods. This only compounds the problem of demand as
lack of access to that information makes calls longer.


{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">[referral to A&E, patient traveling themselves] “I would phone the hospital and request; can I send this patient to A&E or arrange with them another location where they might get seen?” (C28 - GP OOH)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“I'm often relying on them patients to remember, oh, I had that inhaler and it worked much better. I have no details of that so it just would make me better, it would make me more efficient and more patient-centered” (C31 - GP OOH) </p>
  <hr>
  <p class=\"nhsuk-card__description\">“Most challenging thing is when we can\'t see the encounter from other 111 providers.” (C15 - CAS Clinician)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“However, if 111 user is routed to another provider, that interaction can\'t be seen.” (C2 - 111 MANAGER)</p>
  "
}) }}

###  Beyond changing the priority of calls, patient encounter information is not used regularly by health advisors

Health advisors told us that they do use encounter history to consider
changing the priority of the disposition based on the RCS flag being
triggered. Because health advisors aren't clinicians, they very much
rely on following pathways to get a patient to a disposition. There are
also time and demand pressures which mean that they do not have time to
look at encounter information.

Some health advisors told us they had access to 111 telephony encounter
information and sometimes used it in order to highlight the need for a
long-term care plan to be developed for patients.

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">“We don't have time and it\'s not encouraged to delve too deeply.” (C14 - HEALTH ADVISOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Every call is triaged. Whether they're a well-known repeat caller it doesn't matter. They would still be triaged through the system.” (C10 - PATHWAYS)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“The history doesn't necessarily matter, if a patient says they're in pain the cause isn't important we need to refer the patient to care.” (C14 - HEALTH ADVISOR)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“We are a signposting service. So, if the symptoms and what they're describing and explaining to us suggests they need a referral, then we're not going to be a barrier to that.” (C14 - HEALTH ADVISOR) </p>
  <hr>
  <p class=\"nhsuk-card__description\">[Repeat Caller Service] “if they called a third time it would have to go to a clinician, because it was too risky to continue when they're calling constantly like that.” (C10 - PATHWAYS)</p>
  <hr>
  <p class=\"nhsuk-card__description\">“Very easy to see previous encounters within the same service” (C14 - HEALTH ADVISOR) </p>
  "
}) }}

### RCS only captures Encounters that originate at 111 telephony

This is important because not all episodes of care start at 111
telephony, this means that patients who have started their episode of
care elsewhere may be deteriorating and will not trigger RCS. However,
introducing more encounter data into RCS may end up with even higher
volumes of false positive alerts.

We haven't been able to build an entirely accurate picture of how much
of an issue this is, due to the fragmented state of encounter data
across UEC, but anecdotally we have heard that less than 50% of
encounters start at 111. Tables 4 and 5, suggests that 92% of
encounters in UTC and 51% of encounters in ED were unheralded:

{{ table({
  panel: false,
  caption: "Table 4. Breakdown of ED encounters nationally from Jan 2020 to
December 2020",
  firstCellIsHeader: true,
  head: [
    {
      text: "ED"
    },
    {
      text: "of the total"
    },
    {
      text: "% of the total"
    }
  ],
  rows: [
    [
      {
        text: "walk-in"
      },
      {
        text: "6,763,724"
      },
      {
        text: "51%"
      }
    ],
    [
      {
        text: "999 referral"
      },
      {
        text: "5,003,169"
      },
      {
        text: "38%"
      }
    ],
    [
      {
        text: "111 referral"
      },
      {
        text: "1,489,336"
      },
      {
        text: "11%"
      }
    ]
  ]
}) }}

{{ table({
  panel: false,
  caption: "Table 5. Breakdown of UTC encounters nationally from January 2020 to
December 2020",
  firstCellIsHeader: true,
  head: [
    {
      text: "ED"
    },
    {
      text: "of the total"
    },
    {
      text: "% of the total"
    }
  ],
  rows: [
    [
      {
        text: "walk-in"
      },
      {
        text: "5,063,933"
      },
      {
        text: "92%"
      }
    ],
    [
      {
        text: "111 referral"
      },
      {
        text: "446,021"
      },
      {
        text: "8%"
      }
    ]
  ]
}) }}


Similarly encounters captured in the primary care record aren't
reflected in RCS.

There is a desire to improve the way encounter information is captured
and used to drive call routing and risk profiling of patients. This
requires firstly gathering encounter data from across all of the UEC,
and secondly across regional boundaries in order to build a more
accurate picture of encounters and outcomes.


###  There appears to be four categories of repeat caller and RCS doesn't distinguish between them

Whilst we haven't been able to identify the makeup of encounters across
UEC, we have been able to classify the types of repeat calls. The
categories are:

-   patient is getting worse (the original intent of RCS)

-   patient has an underlying motive (drug-seeking behavior, loneliness
    etc., these types of callers are often referred to as frequent
    callers.)

-   patient's needs are not being met

-   patient has been told to ring 111 to book a routine appointment
    (e.g., dressing changes)

Breaking down RCS information into these categories will go some way
towards defining whether other categories also exist, and whether the
repeat caller trigger should be activated or not for all scenarios.

{{ card({
  "heading": "Direct quotes",
  "headingLevel": "3",
  "descriptionHtml": "
  <p class=\"nhsuk-card__description\">“Frequent callers are different to a repeat caller. Frequent callers are patients that might be high intensity users of all services and therefore we might convene a multidisciplinary team meeting and involve the patient in deciding boundaries about accessing services.” (C14 - HEALTH ADVISOR) </p>
  <hr>
  <p class=\"nhsuk-card__description\">“If someone is ringing repeatedly, either you're not meeting their needs; It's getting worse; or they've got some other underlying thing going on.” (C33 - MEDICAL DIRECTOR) </p>
  <hr>
  <p class=\"nhsuk-card__description\">“Sometimes it's mental health that triggers repeated calls, sometimes it's your frequent user, people who are mis-using the service. Sometimes it\'s being triggered by people needing to use 111 as the access point to book into a service that they have to use on a daily basis.” (C1 - CLINICAL DIRECTOR)*</p>
  "
}) }}

## Hypotheses

At the start of the discovery, we proposed several working hypotheses aligned with the discovery goal. This was to help steer our exploration within the complex environment of urgent and emergency care across
regions, organisations, and roles. 

The discovery research was conducted using qualitative methods. This meant that providing a quantative analysis of each hypothesis was not always possible or practical.

### 1) We believe encounter data will lead to patients being seen by the appropriate clinician faster, leading to safer outcomes. 

The team feels confident that this is **true**.

This has been a recurring theme during clinician interviews. 

- "I think as a system we need to know because we need to be able to reduce touchpoints and then and learn, you know where it went wrong for that patient, why couldn't they get to the right place the first time?" (C32 - ED CONSULTANT)
- "When someone wants access to urgent care, you want to reduce their number of NHS touchpoints until they get treated at the right place by the right person." (C20 - MEDICAL DIRECTOR)
- “Information doesn't get shared between those services to the point where sort of key bits of support that could be put in is missed, the opportunity to put them in is messed up because you can't see that they've had multiple contacts." (C35 - ED Consultant)
- “From the moment they enter into the system to the moment they exit it, they can touch about 6 different providers whether that's a clinical assessment service, out of hours, GP, acute trust community, 111, 999, whatever. And invariably, they're not all the same provider either. (...) trying to sew that data up so that we can start to track both from an analysis point of view but also from a clinical point of view a patient's journey thought that whole piece.” (C4 - DIGITAL LEAD)

We have created a list of patient information that was named as most important for clinical decision-making. TODO See Appendix 6. Patient information that is most important for clinical decision-making in UEC settings. 
This has been divided into the most important and additional information. 

Further research into criticality will be run in alpha. 
- “And actually, previous episodes of care are really important. You need to understand that they've already spoken to other people or had previous examinations, or you know, parental concern has been such that they've felt the need to try and get healthcare and seek medical attention in other ways.” (C25 - PATHWAYS)

We were not able to build call times comparison between regions. This will be explored in alpha.

### 1a) We believe encounter data will allow clinicians to identify patients with potential worsening symptoms or deterioration in a given condition.

We believe this to be **partially true**. 

Whilst patient encounter history has been recognised as an important source of information about patients’ conditions, most clinicians report that they would use it in conjunction with other data sources, such as primary care records. Patient encounter history has been recognised as a tool which can help identify worsening conditions. 
- [PEH] "So, that bit is the missing link, really, so I would say it would be helpful to us..." (C6 - CAS MANAGER)
- [recognising a worsening condition] ''very difficult to unless the patient discloses it themselves'' (C15 - CAS CLINICIAN)
- [OOH GPs are] “encouraged to be more worried or have a higher level of suspicion of risk if we can see the patient is presenting multiple times within the same illness episode.” (C28 - GP OOH)
- “In respect of perhaps a patient who's repeatedly presenting over a short period of time with a condition that's getting worse, then clearly, we need to know about that.” (C14 - HEALTH ADVISOR)


### 1b) We believe encounter data will provide clinicians with improved information to allow them to make informed clinical decisions allowing them to consult and treat more patients without the need for onwards referral. 

We believe this is **partially true**. 

Clinicians want to see patient encounter history, along with other patient information, to help them make correct, safe decisions and reduce the number of patient touchpoints. 
- [suggested solution] "so we could see those patterns of contacting behaviour, but then as a clinician I'd want to be able to access the clinical information relevant to those contact points that allows me to support my decision" (C35 - ED Consultant)
- "I think for my personal perspective there's too much churn in the system. We've got too many contacts it's useless." (C20 - Medical Director)
- “It's really helpful to know what’s previous. Not just a what attempts they have made, but what previous diagnosed, questions have been asked and what previous diagnosis and what previous management plans (...) to inform what you're doing currently with the patient.” (C25 - PATHWAYS)
We are looking to explore the referral numbers during alpha. 


### 2) We believe that information needs to be well structured in order to be useful, pertinent and not adversely slow down patient encounters. 

We believe this to be **true**.

Clinicians want structured data, with the most important information easy to view, without lots of scrolling and scanning. Many have reported information overload and lack of structure as challenges with current systems. 
- "Structured data is what we need” (C4 - DIGITAL LEAD)
- [Pathways referral] “it’s not written in a way that tells me a story.” (C33 - MEDICAL DIRECTOR)
- “The tricky thing is sometimes the most valuable information is the narrative, but because that's unstructured, free text, it's very difficult to make anything of and it's a lot of reading” (C1 - CLINICAL DIRECTOR)
- "I mean there's a downside to SystmOne, which is that use of templates make the entry is very, very large, and certainly when you know our template you know makes an entry in system once and very often go off screen. So, you already scrolling up.” (C36 - GP OOH)
- [information given] “It has to be succinct and readable, so things like you know typographical errors [are not helpful] good use of English are really, really important.” (C23 - MEDICAL DIRECTOR)


### 3) We believe that encounter data over 6 months old is unlikely to be useful in an urgent and emergency care setting.

We believe this to be **true**. 

The majority of clinicians agreed that up to 6 months of patient encounter data would be most useful. 
- "(…) might have a quick look down and see what's been happening for the previous 6 months" (C29 - GP OOH)
- "1-3 months seems reasonable to me" (C34 - MEDICAL LEAD)
- [timeframes] “Ideally 6 months, you would have a quick scan, certainly if it was a complex condition then you'd have a quick scan through about 6 months.” (C5 - SERVICE MANAGER)
- [PEH timeframe] "An emergency care setting, you're looking at one week or maybe 2 weeks.” (C21 - GP OOH)
- "I suppose you know if somebody is presenting with a fairly recent condition, then I suppose seeing the last few weeks would be helpful." (C26 - MEDICAL DIRECTOR)

Having said that, several clinicians noted that the required encounter data time frame varies depending on the presenting issue.
- “Difficult to answer as depends [on] what the problem is” (C25 - PATHWAYS)
- “Depends on the condition they have (...) so I don't think you could set a time limit” (C28 - GP OOH)
- "It's very difficult because if you're speaking to a patient who's talking about a chronic condition, then we might need a little bit more past medical history than somebody who's talking about an injury they sustained in the last 6 hours." (C6 - CAS MANAGER)

Survey results so far reinforce this with 82% of participants suggesting a time frame of 1 – 6 months would be useful in a UEC setting.

### 4) We believe patient encounter information can be used to improve training by giving visibility of the patients end to end journey to those involved in each episode.

We believe this is to be **true**, as confirmed during interviews with clinicians. 

- “If records were linked better. We also have a better way of feeding back when things weren't right.” (C32 - ED CONSULTANT)
- “From a development point of view, staff can turn and go, 'Okay, it wasn't sepsis, but it was this. I know that for next time, I'll do this.” (C4 - DIGITAL LEAD)
- “It's a learning curve for the clinician, it is safety for the patient, and it is continuity of care as well.” (C21 - GP OOH)

The data on complaints wasn’t readily available, so we weren’t able to understand differences between regions with different levels of information-sharing maturity. This is something that could be explored in alpha.

### 5) We believe that providing encounter information may lead to higher levels of confirmation bias in diagnosis and treatment.

We believe this to be **partially true**. 

The risk of confirmation bias in diagnosis has been recognised by the clinicians.
- [Risks] "Uhm, there's also the risk that if you put too much detail on you can almost confound your conversation with the patient in terms of you know you. You feel like you're being sent down a preordained route, whereas you need to make your own decision at the time." (C36 - GP OOH)
- "And then you can see patterns within their emergency presentations. You say on a one off if someone comes into you with the world's worst headache, you're going to think this patient needs a scan. But if they've had the world's worst headache every week and they've been admitted to hospital every week or brought to the ED every week, then you, rightly or wrongly, that will shape your decision about how serious that is." (C29 - GP OOH)

However, most clinicians said they would prefer for patient encounter history information to be available, even if it introduces some level of confirmation bias. 
- "I think it's more important to see it then not see it, but to be aware of cognitive bias would be the mitigation for it." (C29 - GP OOH)
- "Momentum bias is true but the risk of not knowing patient history is significantly higher" (C3 - CLINICAL DIRECTOR)

The challenge of introducing more bias into the system should also be considered whilst exploring any auto-routing options.
- “You have to be careful with rules as it can overrule the clinical judgement.” (C25 - PATHWAYS)

### 6) We believe that the risk of incorrect classification of symptoms has potential for higher clinical risk (for example: Patient phones with chest pain, call handler incorrectly records flank pain, patient waits longer for a response).

We believe this to be **false**.

We have learned that when 111 calls are referred to a clinician, the information is checked. If anything within the Pathways report is incorrect the clinician can amend the Pathways triage and then continue with the Pathways triage from there. This may lead to a different disposition.
- “If anything has changed [...] they can then pick up that triage from that point and start from there, and they can upgrade the disposition or downgrade where they see fit." (C10 - PATHWAYS)
We have also found that clinicians find the Pathways report low risk with many reporting high numbers of ‘urgent’ call backs. Many of these are often downgraded as a result of speaking with a clinician:
- “111 overuses the urgent tag (…) We've looked at the urgent categories in 111 [calls] and something like 80-90% get downgraded. So, it's a system that isn't working, is not fit for purpose.” (C23 - MEDICAL DIRECTOR)
- [Downgrading Pathways] "That information up to on our call stack and then we know that's come through the validation and there's a time constraint around that. So we pick those off and we get a downgrade of about 80-90%." (C30 – UC CLINICAL LEAD)

We have also learned that human error can, very occasionally, be a factor when inputting data into a system. This is often followed by the clinician having to spend further time correcting or chasing data.

- [errors in the system] “...because sometimes things get wrong. Somebody's haemoglobin is 63, the call handler misses the six and just enters the three, then I'm sitting here and thinking, 'What am I dealing with?' Because I know it's wrong, it's incompatible with […] life, but I still had to make that call to the lab to verify what the result was.” (C22 - GP OOH)
We heard of many scenarios where there is a manual transfer of data between systems or from paper to systems. In these cases, human error is not to be discounted.
- [OOHs to ED referrals] "ED hasn't quite got its act together yet, so in theory that should go into bookable slot. I wish, but actually what happens is they rely on a receptionist looking at one screen and then transcribing it across to another screen. This is an IT thing we're working on" (C30 – UC CLINICAL LEAD)
- “I don't know if its faxed or emailed, I think it's called case reports” (C28 - GP OOH)
- "It's completely different risk in the two organisations I've ever worked with as a consultant. And the risk is much higher in the paper-based system, undoubtedly, for lots of reasons.” (C3 - CLINICAL DIRECTOR)

### 7) We believe that we can use encounter data to route users to the correct clinical skillset without triggering repeat caller service.

We haven’t been able to validate whether this is true or false, due to the fragmented nature of encounter history in the UEC.

We believe that gathering more data from across UEC in order to inform future routing and alerting requirements is a key goal of alpha.

There have already been examples of specific rules being introduced locally. For example, when at the time of clinical assessment, a parent answered that they have had 2 contacts about the same issue they would be referred to a paediatrics department. We plan to learn more about local experiments and their results in alpha.   
Our research suggests that there are unnecessary touchpoints during patients’ journeys within UEC, pointing towards smart routing as a possible solution.  
- "I think from my personal perspective there's too much churn in the system. We've got too many [UEC] contacts it's useless." (C20 - MEDICAL DIRECTOR)
- "It would be useful to see if somebody's been seen recently. I think it would be also useful for us just to see how patients often just bob around from service to service (…)." (C26 - MEDICAL DIRECTOR)
Please also refer to hypothesis 10 for further context.

### 8) We know that current RCS thresholds are insufficient. We believe we can define better thresholds based on number of times called and patient history.

We believe this to be **partially true**.

Currently, RSC does not distinguish between any types of callers. Our research has so far identified four types of RCS caller:
- The patient is getting worse 
- The patient has an underlying motive (e.g., drug seeking behaviour) 
- The patient’s needs are not being met 
- The patient has been told to ring for a routine appointment (e.g., dressing changes)

However, more data analysis and research are needed to define better thresholds.
- [RCS] "it flags it as a frequent caller. But sometimes that's not really a good representation" (C26 - MEDICAL DIRECTOR)
- [RCS] "if your threshold starts going higher, you run the risk of those deteriorating sick patients not triggering the that we lost further down the queue." (C36 - GP OOH)
- “...frequent callers are different to repeat callers” (C14 - HEALTH ADVISOR)

### 9) We believe that there is a risk to removing current RCS "false flags" without more thought. (for example, what happens if a patient phones for a wound dressing, but their wound gets worse after re-dressing?).

We believe this is **true**.

Even though our research suggests there are number of limitations to RCS, it is currently the only tool that supports spotting worsening conditions. In the discovery we haven’t received enough feedback from clinicians to be able to recommend changes to the current RCS set up.

“False flags’’ within RCS haven’t been named as key challenges by clinicians. The data on those also wasn’t readily available, so we weren’t able to understand how often ‘’false flags’’ occur. This is something that will be explored in alpha. 

Furthermore, some clinicians have pointed out the importance of RCS for clinical assessment. 
- [RCS] "Can actually be clinically important, if I'm the third person I know something is not right" (C40 – CLINICAL DIRECTOR)
- [RCS] “...it's highlighting to anybody that opens that patient record that actually this patient may need further input because they are repeat callers.” (C15 - CAS CLINICIAN)
- [RCS] "If you have flags that aren't used appropriately, people switch off to them" (C26 - MEDICAL DIRECTOR)

### 10) We believe that capturing more history about the patient can be used for smarter auto-referrals for both the patient and their wider demographic/medical groups.

We believe this is **true**.

We have identified a need for smarter referrals, as clinicians and people in UEC management roles report the challenges around the number of referrals marked as ‘urgent’. 
- "Ugh-111 overuses the urgent." "What are the problems in information management in urgent care is these tags are overused so they become worthless." (C23 - MEDICAL DIRECTOR)
- [downgrading Pathways] "That information up to on our call stack and then we know that's come through the validation and there's a time constraint around that. So, we pick those off and we get a downgrade of about 80-90%." (C30 – UC CLINICAL LEAD)
- “About 80% of those walk-ups should be somewhere else and we've proven that.” (C4 - DIGITAL LEAD)
- “Some small-scale informal audit that I've done previously, looking at cases that meant that repeat caller definition, very few, if any of them, needed a GP one-hour.” (C1 - CLINICAL DIRECTOR)

Providing better care to patients with mental health issues could be an important use case:
- “It is a headache, and it just means that will have to re triage all over again and for instance with mental health patients. It's tricky to gauge their level of risk because often those with serious mental illness, will hyperbolise, or some of them will completely downgrade their risk altogether, and so it's really difficult if you don't know them.” (C31 - GP OOH) 

Because encounter history information is currently fragmented in the UEC, it hasn’t been possible to show how this data could be used for smarter auto-referrals. This should remain an objective to explore in alpha.
- [about mental health] “we've got links out to mental health, but that's all via telephone. We ring them and then we just transfer the case notes via email, same if we do a referral to same-day emergency assessment in the hospitals, we give them a call and then we send, our systems aren't linked up, they don't talk to each other” (C5 - SERVICE MANAGER)

### 11) We don't understand whether data sharing is currently pull or push based and what this means for alerting.

We don’t believe this is now relevant.

Alerting happens in 111 via the RCS to prompt the call handler to consider increasing the priority of the disposition. The RCS flag is only triggered in 111. There is no consistency across the country whether that flag will be visible or not in the CAS and GP OOH settings. 
- “What's relevant there is that sometimes there are red flags which miss the GPs, miss encounters with clinicians, so understanding that repeat contact element, with the various services across the wider emergency care system is really important.” (C13 - COO)

We haven’t seen enough evidence of RCS being available at the ED level. 

Generally, the data shared between different systems, providers and regions seems to be pull-based when considering the user interface. This means that the user would have to go and actively check a tab or patient record for information, rather than this information being readily presented, for example as a pop-up window. The two exceptions to it were:
1. RCS flag 
2. Safeguarding flag

- [111 clinician] "in Adastra, there's a bit of the end which says I have considered, or I have safeguarded patient which is like a tick box that sums up and that would then flag up that patient has been safeguarded." (C17 - CAS CLINICIAN)

We have seen limited evidence of alerting information being available for ED clinicians:
- “So, ED’s basically see demographic information. Whether we've got any safeguarding concerns. Also, I think they won't see your whole transcript, but they'll see some information from the condition.” (C34 - MEDICAL LEAD)

### 12) We believe that capturing more patient data will impact time spent with the patient in different parts of the service. For example, more time recording information in triage and referral, less time spent in treatment.

We believe this to be **partially true**.

Clinicians have told us that this additional information could speed up decision-making during patient consultations however, the time taken to read the additional information may negate time saved:
- “So, without that you might not be able to quickly do that. You could ask the patient like we used to and hope that's correct, but it's much quicker just to be able to view it quickly. You can scan it before you pick the phone up.” (C33 - MEDICAL DIRECTOR)  
- “It would probably just speed up what we do.” (C35 - ED CONSULTANT)
- "It might speed up decision making slightly, but you then got to consider the point of while they're going to access the information before they actually see the patient and make a decision, and so it. It's kind of swings and roundabouts." (C35 - ED CONSULTANT)
- “The challenges we face is that consultation times are going up all the time.” (C23 - MEDICAL DIRECTOR)
We have learned that a significant amount of time is wasted chasing important patient information between clinicians or systems. Having this information readily available will reduce this time.
- "Sometimes it can take the same length of time before [10 mins] to try and piece things together and go through the notes and try and build a picture before I pick the phone up and start the conversation." (C36 - GP OOH)
- [not having access to RIO] “so I would say it would almost quadruple my triage time and my risk evaluation would need me to link in with secondary care on the phone which takes a lot of time than if I had access to a multifaceted digital system. (C31 - GP OOH)

Additional consideration should be made around data overload. Clinicians have told us they need to have the data presented to them in a way where the pertinent information is structured and concise:  
- [PEH] "we don't want to burden people with the unnecessary information” (C32 - ED CONSULTANT)
- "Structured data is what we need” (C4 - DIGITAL LEAD)
- "In a high-pressure clinic, you have to scan notes quickly, looking for words and phrases” (C29 - GP OOH)
- "Too much information is a bad as too little"(C20 - MEDICAL DIRECTOR)

### 13) We believe that capturing encounter data will help to identify patients 'playing the system.'

We believe this to be **true**.

However, we haven’t seen evidence of patients ‘playing the system’ being a significant issue nationwide. Having said that, we have learned that it might be a problem for clinicians working in socially deprived areas and holiday destinations and linked to drug-seeking behaviours. 
- [ex-prison patient asking for drugs] "(…) half-heartedly accept a phone conversation about this, but we really needed something on record, so we wait for an email to come through of what they had, and it was not rare to find that, actually, they've never been prescribed that." (C40 - Clinical Director)
- “Often if there is somebody with drug-seeking behaviour they'll have a lot of encounters with us, because they'll try with the GP surgery, try with us, go back and forth, and you can see maybe somebody gave them only 2 tablets rather than a full script to see them through the weekend and then go back through to their GP surgery.” (C19 - CAS CLINICIAN)

### 14) We believe that there is a risk that more encounter information may result in patients being identified as 'playing the system' when they are actually worsening.

We believe this is **false**.

The majority of clinicians said that having more information is beneficial for patients’ care. 
- “The more information we can see, the better because it helps us'' (C15 - CAS CLINICIAN)
- “I'm very much an advocate for the more information you have, actually, the better you can make a clinical decision” (C15 - CAS CLINICIAN)
- “I had two patients on my on call on Monday who, their care was undoubtedly harmed by not having some of the information available that would have made a difference” (C3 - CLINICAL DIRECTOR)
- "It'll give more context and more kind of depth or most to where it may enable you to make a safe decision. That's the bottom line, isn't it?" (C36 - GP OOH)

Many clinicians have said that, whilst knowing that a patient has presented multiple times over a short period of time, might potentially change their clinical assessment, it won’t be used to the patient’s detriment. It gives clinicians awareness of the patient’s situation and helps them build a richer picture of their needs.  
- [about Patient Encounter History] “It's always useful to look at it. If they've not been seen for years, you can assume that they’re usually fit and well, and it's quite unusual for them to present in out of hours.” (C28 - GP OOH)
- [encounter history would] ''it would be good; it adds to being able to identify those frequent users that we need to put more care plans in place'' (LAS)
- "I could judge something about their behaviour if they've gone to various different sites across [PLACE NAME] and they just went once to every single site and then they came to me. And what are they worried about? Why are they doing this?" (C29 - GP OOH)
However, we have seen one case of the RCS flag being the cause of the calls being downgraded. 
- "(…) the clinical navigator, so they're the guys in charge of me on the shift. They have to run through the list of 200 patients in the morning and look at the riskiest. You haven't been called so they will look at that very quickly and say repeat caller, repeat caller, repeat caller. Let's leave those in the green list, which means get to them in six to 8 hours." (C31 - GP OOH)

### 16) We believe that having encounter information in UEC will allow clinicians to establish trust with patients and build rapport.

We believe this to be **true**, as it has been a recurring theme during clinician interviews.
- “Patients like to walk in and think we know them already.” (C37 - NURSE (OOH & MIU))
- "Patients are generally pleased you know something about them." (C3 - CLINICAL DIRECTOR)
- [patient frustration] “You go in cold, really, you're having to almost start the process again, which sometimes can be really frustrating for the patient, because when they've called 111, or they've gone through online, they've had to answer various questions, fewer questions online than if they were speaking to somebody at a 111 call centre.” (C5 - SERVICE MANAGER)

### 17) We believe patients will feel more assured they are in the right part of the service (and have reduced feelings of being a 'burden') if a clinician is able to recount their encounter history.


Similar to the hypothesis 16, we believe this to be **true**. 
- “I think it's reassuring they reconfirmed my information.” (P4)
- “It's good, you have the reassurance that you are not wasting peoples' time.” (P8)

This has also been confirmed by clinician interviews: 
- "Having the context and bit more story of what's gone on the GP practice can give you extra reassurance to the patient." (C29 - GP OOH)
- [reassurance] “(…) talking to why they called up and all of that information we would have already received. So, we'll you know, comfort the person by saying we already know this. (...) because they get very agitated.” (C37 - NURSE (OOH & MIU)

### 18) We believe patients will be less frustrated if they don't have to repeat themselves.

We believe this to be **true**, as it has been a recurring theme during patient interviews.

Several patients have said that they don’t like repeating the reasons for using the services. 
- “Having to tell the whole story, I hate that” (P6)
- “Each time I phone I have to repeat it” (P2)
- “Doctors always ask, 'tell me what's going on?" I don't know if they know or if they want to hear from me.” (P10)
- [about repeating information] “I didn't mind with the 111. It was more having to go through it all at the hospital.” (P12)
- “I don't understand why we need to [be] repeating ourselves over and over again” (P11) 
Having said that, most have said that they don’t mind reiterating their encounter history, especially if it leads to better care or being seen quicker. 
- [repeating information] “I didn't really mind.” (P8)
- [repeating information] “I'd rather repeat than presume that she knows why I'm there for if it wasn't the same person.” (P13)
- “I asked if 111 had contacted UTC about my issue, they said no. I had to explain again, maybe a bit of frustration, but I don't mind explaining myself again as long as I'm treated in a quick time.” (P3)

{{ pagination({
  "previousUrl": "/nhs111-resources/peh/discovery-report-UEClandscape#UEC-landscape",
  "previousPage": "UEC Landscape",
  "nextUrl": "/nhs111-resources/peh/discovery-report-alpha#Alpha",
  "nextPage": "Recommendations for Alpha"
}) }}