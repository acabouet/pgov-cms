### Lightweight Control Implementations

From: [PGOV Lightweight Authorization Process Control Implementation Summary](https://docs.google.com/spreadsheets/d/1uiWp6bSRQcnkb24rKETR9SG0vleW2FWe3muvDZH9cBA/edit?gid=280162261#gid=280162261)

#### AC-02		Account Management

1. PGOV has defined three types of accounts with a number of sub-roles  
   1. Drupal Content Management  
      1. Agency: Reporter, Coordinator, Manager, Executive Reviewer  
      2. OMB: Management, Examiner  
   2. Drupal Application Team: Administrator, Account Manager, Developer  
   3. Cloud.gov Infrastructure Team: Pipeline developer, Cloud Build Manager  
2. The Information System Owner (ISO) appoints an Account Manager  
3. Group and role membership criteria is documented in Governance document  
4. Authorized users and their roles  
   1. Are maintained in a machine readable format  
   2. Include privileges/capabilities: (\* \== MVP)  
      1. Drupal  
         1. \*Create new Agency report template  
         2. View only report content  
         3. \*View/add/edit report content  
         4. View/set report status  
         5. Spin up report Preview site (replace existing)  
         6. \*Spin up Agency Preview site (replace existing)  
         7. View/comment on report Preview site  
         8. View/comment on Agency report site  
5. ISO approval is required to create a new account  
6. Account privileges in a ticket according to configuration management processes  
7. Account login, actions, logout is logged (monitored)  
8. The Account Manager is notified within 1 business day when system usage or need-to-know changes for an individual  
9. The Account Manager authorizes system access according to need-to-know  
10. No HVAs in PGOV  
11. No shared or group accounts  
12. Account Management is aligned with personnel termination and transfer

#### AC-03		Access Enforcement

* Drupal permissions ensure approved authorizations for the Drupal roles  
* GSA MFA is required for Cloud access (tbd: brokered by login.gov)

#### AC-06(05)	Least Privilege | Privileged Accounts

* All accounts are privileged and granted need-to-know privileges

#### AC-06(09)	Least Privilege | Log Use of Privileged Functions

* All system usage is logged

#### AU-02		Event Logging

1. Logging is in place for:  
   1. **All b**ackend (Drupal) system events (list…)  
   2. Frontend page hits, queries  
2. Event logging is coordinated with audit information collection to minimize overlap  
3. Types of event logging (list…)  
4. The events logged meet or exceed industry and private sector standards  
5. Event types logged are reviewed at least yearly

#### AU-06(01)	Audit Record Review, Analysis, and Reporting | Automated Process Integration

* Automatic logging collection and monitoring is inherited from cloud.gov

#### CA-07		Continuous Monitoring

1. System-level metrics monitored include  
   1. Backend privileged user logins  
   2. Frontend page response time  
2. …  
3. …

#### "CA-08\*	\-if Internet accessible/HVA"	Penetration Testing

* OWASP ZAP is used for penetration testing of development instances  
* The ISO, ISSO, and ISSM coordinates with the OCISO Pen Testing team’s penetration testing services. See CIO-IT Security-Privacy-18-90.

#### "CA-08(02)\*	\-if HVA"	Penetration Testing | Red Team Exercises

* N/A \- No HVAs, no Red Team Exercises

#### CM-02(02)	Baseline Configuration | Automation Support for Accuracy and Currency

* Maintain the currency, completeness, accuracy, and availability of the baseline configuration of the system using \[*automated mechanisms as identified in the SSPP/CM Plan*\].

#### CM-03(01)	Configuration Change Control | Automated Documentation, Notification, and Prohibition of Changes

* All changes are  
  * Documented fully through the project ticketing system (Jira)   
  * Implemented in source code controlled (Github) repositories

#### CM-06(01)	Configuration Settings | Automated Management, Application, and Verification

* All configuration changes are  
  * Managed through Jira and Github  
  * Applied through github actions pipelines (Infrastructure as Code)  
  * Verified through automated testing included in the pipelines 

#### CM-07(05)	Least Functionality | Authorized Software \- Allow-By-Exception

1. Only packages approved by the Governance Board can be deployed within the environment.  
2. PGOV implements a deny-all permit-by-exception policy and ensures that only approved packages can be deployed within the environment. All software library versions are “pinned” and these definitions are included as lock files within the repository. Changes to this software access list go through the standard change control procedure including Governance Board approval.  
3. Review and update the list of authorized software programs annually.

#### CM-08(02)	System Component Inventory | Automated Maintenance

* A current, complete, accurate, and readily available inventory of PGOV components can be viewed through the Cloud.gov dashboard or through the Cloud.gov CloudFoundry CLI.  
* PGOV is hosted on the Cloud.gov Platform as a Service where underlying infrastructure components are not exposed directly to the PGOV team. Interaction with Cloud.gov infrastructure and configurations are restricted to actions allowed through the CloudFoundry Client and the Cloud.gov Dashboard only.  
* The source code for all PGOV infrastructure components and their baseline configurations are stored in the PGOV GitHub repository at the following location: [https://github.com/CivicActions/pgov-cms/](https://github.com/CivicActions/pgov-cms/) .  
* The strategy of fixing versions of all dependencies for each build to ensure the accuracy, currency, and repeatability of deployments is utilized.  
* There are three locations within the repo where application and build-time dependencies are defined:  
  * CI/CD infrastructure is defined in a Github actions config.yml file with individual docker container baseline configurations for separate build steps.  
  * Drupal baseline configuration is hardcoded into the composer.json and composer.lock file.  
  * Website theme build-time baseline configurations are hardcoded into a package.lock file.  
* Deployable Container Images built by the CI/CD process are tagged with unique IDs to identify which set of baseline configurations is represented by each image.

#### CP-07(01)	Alternate Processing Site | Separation From Primary Site

* PGOV relies on Cloud.gov to ensure that instance data are cloned across multiple regions, ensuring exact replication of functionality across stored instance data.

#### IA-02		Identification and Authentication (Organizational Users)

* All users are Organizational users with at least Tier 1 Public Trust clearance

#### IA-02(01)	Identification and Authentication (Organizational Users) | Multifactor Authentication to Privileged Accounts

* All privileged users must use MFA to login  
* Users must be Organizational users authenticating via Login.gov

#### IA-02(02)	Identification and Authentication (Organizational Users) | Multifactor Authentication to Non-Privileged Accounts

* There are no non-privileged login accounts

#### PL-02		System Security and Privacy Plans

* ibid

#### PL-08		Security and Privacy Architectures

* CMS restricts access to data within Drupal based on User Role. Using the principle of least privilege, the WebOps Lead restricts which data is accessible to which team member by assigning component system accounts to individual GSA emails. Availability of the Egress, CMS, WWW, and WAF components are ensured by setting instance counts of all applications to be greater than one.

#### RA-05	Vulnerability Monitoring and Scanning

* OCISO provides monthly Invicti Scans. Upon receiving security scan results, the ISSO reviews and tracks all vulnerabilities within POA\&Ms. Critical and High findings are tracked as Jira tickets and remediations are scheduled for completion within a fifteen (15) day window. Moderate findings are tracked as Jira tickets and remediations are scheduled for completion within a ninety (90) day window.  
* Pre-deployment on-demand vulnerability scans are generated by the Snyk tool. These scans check application code, application dependencies, and system libraries for potential vulnerabilities which may affect the system. Reported vulnerabilities are assessed by the WebOps Team and Governance Board for severity and remediation plan.  
* Pre-deployment on-demand CIS Docker Benchmark scans are generated using the latest docker-bench-security container image available from Docker Hub. This audit checks non-host container and application configurations for potential vulnerabilities which may affect the system. Reported vulnerabilities are assessed by the WebOps Team and Governance Board for severity and remediation plan.  
* Daily vulnerability scanning of pre-built application images is performed by the credentialed, agent-based Snyk tool within Docker Hub. These scans check application dependencies and system libraries for any newly discovered vulnerabilities which may affect the system. Reported vulnerabilities are assessed by the WebOps Team and Governance Board for severity and remediation plan.

#### RA-08\*		Privacy Impact Assessments

* PGOV includes no PII

#### SA-11(01)	Developer Testing and Evaluation | Static Code Analysis

* *Describe pre-commit hooks here*

#### SA-22	Unsupported System Components

* PGOV is built using OSS components including Alpine Linux, Drupal, Nginx, and NextJS. During the standard development lifecycle, the latest stable version of these components along with any necessary software dependencies are included. The WebOps Team tests and deploys minor version updates on an ongoing basis, and evaluates and schedules major version updates as they become available. All OSS components used in PGOV are actively maintained.  
* PGOV uses GitHub’s Dependabot and Snyk code scanning to alert the WebOps Team to outdated dependencies in the project’s code.

#### SC-07	Boundary Protection

#### SC-08(01)	Transmission Confidentiality and Integrity | Cryptographic Protection

* All data in transit is encrypted with TLS 1.2 or TLS 1.3

#### SC-28(01)	Protection of Information At Rest | Cryptographic Protection

* PGOV contains no additional sensitive data not covered by Cloud.gov’s built-in encryption at rest.

#### SI-02	Flaw Remediation

* The security update process follows standard change management procedures.  
* Specific process for discovering, tracking and remediating flaws are defined for each system:  
  * PHP  
  * Drupal  
  * NextJS  
  * Container OS (Alpine?)

#### SI-04	System Monitoring

* SIEM dashboard

SI-04(02)	System Monitoring | Automated Tools and Mechanisms for Real-Time Analysis  
SI-04(04)	System Monitoring | Inbound and Outbound Communications Traffic  
SI-04(05)	System Monitoring | System-Generated Alerts

#### SI-07	Software, Firmware, and Information Integrity

SI-10	Information Input Validation