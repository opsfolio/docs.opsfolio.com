---
title: Frequently Asked Questions (FAQs)
description: Answers to all Frequently asked questions by our users.
tableOfContents: false
---

<style>

summary.faq {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  font-weight: bold;
}

summary.faq::after {
  content: ' ';
  width: 18px;
  height: 10px;
  background: url('https://uploads.sitepoint.com/wp-content/uploads/2023/10/1697699669arrow.svg') no-repeat;
  background-size: cover;
  transition: 0.2s;
}

.details {
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 2rem;
}

details[open] > summary.faq::after {
  transform: rotate(180deg);
}

summary.faq::-webkit-details-marker {
  display: none;
}


</style>

<details class="details" open>

<summary class="faq">
<h4 style="display: inline;">Why should I use Surveilr?</h4>
</summary>

<p>Surveilr is the better option for gathering compliance proof through machine
attestation, which is why you should use it. Code, test results, emails,
issues/tickets, and wikis are examples of machine attestation artifacts that
Surveilr's agent can use to conclusively demonstrate adherence to security,
privacy, safety, and regulatory compliance policies—as opposed to human
attestation, which depends on trust and manual processes. Through the use of
this method, people can verify information more quickly and accurately by
avoiding the need to complete forms, respond to emails, or take up time in
meetings. Compared to conventional human-based approaches, Surveilr's machine
attestation technology offers a dependable and automated means of verifying
policy compliance, hence improving security and regulatory adherence.</p>

</details>

<details class="details">

<summary class="faq"><h4 style="display: inline;">How do I install Surveilr?</h4></summary>

<p>We have provided a detailed guide on how to install `surveilr` on your machine
(Linux, Windows, and MacOS ), find it [here](/surveilr/installation).</p>

</details>

<details class="details">

<summary class="faq"><h4 style="display: inline;">How do I use Surveilr?</h4></summary>

<p>We have provided a comprehensive guide on how surveilr can be used to gather
machine-attested compliance evidences from different Work Product Artifacts
(WPAs) across a wide variety of disciplines. Here's an example of how
[software engineers](/surveilr/disciplines/software-engineer) make use of
surveilr.</p>

</details>

<details class="details">

<summary class="faq"><h4 style="display: inline;">Will my data such as emails be tracked by Opsfolio?</h4></summary>

<p>No, Opsfolio does not track personal information, including emails, at any point
in time. All data processed by Surveilr is stored in a Resource Surveillance
State Database [(RSSD)](/surveilr/reference/concepts/resource-surveillance#rssd)
that is stored locally on the client's machine, and not connected to any of our
cloud databases.</p>

</details>

<details class="details">

<summary class="faq"><h4 style="display: inline;">If my data is tracked by the company, how can I trust that my data is safe?</h4></summary>

<p>We do not track your data, so you can be rest assured your data is safe.</p>

</details>
