> [!IMPORTANT]
> PLEASE DO NOT PUBLISH SECURITY FINDINGS PUBLICLY.

# Security issue reporting & disclosure process

As with any software, `WikiAgora` is likely to have bugs. Please report any security vulnerabilities responsibly!

If you feel you have found a security vulnerabilities concern with any WikiAgora-owned repository, please refrain from opening a GitHub issue and instead mail it to one of the maintainers listed in the README.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, contact Javier Ramos at <co2mm.esperanto@gmail.com> with copy to <security@OperationCaribbeanSummer.com>. Javier Ramos [can also be reached in other ways](https://JaviRamosLab.com/contact).

Kindly provide the following information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:

- Affected version(s) or Git revision
- A clear and detailed description of the issue, including if possible a code snippet to demonstrate or reproduce the vulnerability
- Type of issue (e.g. data injection, HTTP Parameter Pollution, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- A patch for the issue if you have one
- Screenshot of the problem (UX/UI)
- Impact of the issue, including how an attacker might exploit the issue

or report it via our [Security Submission Form](https://OperationCaribbeanSummer.org/security/report).

We will try to communicate in a timely manner and address your concerns.

If the problem is confirmed, we will release a patch as soon as possible depending on complexity.

## Reporting recomendations

When reporting a potential security problem, please bear this in mind:

- Make sure to provide as many details as possible about the vulnerability.
- Please do not disclose publicly any security issues until we fix them and publish security releases.

## CVE handling

To ensure a comprehensive and detailed declaration of the issue, we generally
prefer requesting CVE IDs ourselves, which usually happens after our analysis
confirms the vulnerability.

In case you have already obtained a CVE ID, do not forget to reference it in
your report.

## Credits

Let us know if and how you wish to be credited for the finding.

Your name, e-mail, company, etc. will be included as specified in the CVE
report, as well as in the Git commit message patching the issue.

# Security Policy

## Supported Versions

The following releases of the library are currently being supported with
security updates.

- Stable (Git _production_ branch)
- Development (Git _main_ branch)

Versions currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 0.4.x   | :white_check_mark: |
| < 0.4.4 | :x:                |

Older releases are no longer supported.
