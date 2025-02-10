## PGOV MVP ATO

* [PGOV ATO Risks](https://docs.google.com/document/d/1qirCn4MCu3PqM4UDQyz1NkMAefZoPYufIkQAbrmYQPA/edit?tab=t.0)   
* [PGOV Security Work to do](https://docs.google.com/document/d/18zuBscEQThnAVG50Ea-13VFEg2hxB2Ln7U-V6uNnk00/edit?tab=t.0) 

### One day goals / deliverables

* Appendices  
  * PTA  
  * FIPS  
  * IAM  
* Inheritance:  
  * FedRAMP AWS  
  * FedRAMP GovCloud  
* Migrate Github to GSA

### One month goals

* Access control, MFA via Login.gov  
* Pre-commit LINT, SAST checks

### Six month goals

* Provide basis for security assessment  
  * Consider [Threat Modeling](https://www.threatmodelingmanifesto.org/)  
  * Consider [Lightweight Cloud Security Principles](https://www.ncsc.gov.uk/collection/cloud/the-cloud-security-principles)  
* Sites scanned  
  * [PGOV Security Work to do  \> Scanning](https://docs.google.com/document/d/18zuBscEQThnAVG50Ea-13VFEg2hxB2Ln7U-V6uNnk00/edit?tab=t.0)   
* Generate Preview site from Drupal (for users with that privilege)

### Tasks

* API Developer  
  * Code review against OWASP API Top Ten  
* Site Developer  
  * Has MFA access to github/pgov-cms  
  * Checked with OWASP Top Ten  
  * Has permission to push to github/pgov-cms  
  * Pushes to Dev branch  
* Dev repo github actions  
  * Builds a new static FE site  
  * Provides a unique link to it (named after Jira ticket?)  
  * Optionally offers to run (groups of) tests
