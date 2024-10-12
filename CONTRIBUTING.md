# Welcome to OperationCaribbeanSummer/WikiAgora contributing guide

I'm really glad you're reading this, because we need volunteer developers to help this project come to WikiAgora.

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on:

- [OperationCaribbeanSummer.com/contributors](https://OperationCaribbeanSummer.com/contributors)
- [CONTRIBUTORS.md](/CONTRIBUTORS.md)
- [humans.txt](./public/humans.txt) and [web](https://OperationCaribbeanSummer.com/humans.txt)
  :sparkles:

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

If you haven't already, come find us in our github discussions ([discussions](https://github.com/OperationCaribbeanSummer/.github/discussions) on GitHub). We want you working on things you're excited about.

Here are some important resources:

- [Our roadmap](http://OperationCaribbeanSummer.com/wish-list)
- Mailing list: Join our [contact us](http://OperationCaribbeanSummer.com/contact)
- Bugs? [our web Lighthouse](http://OperationCaribbeanSummer.com/bug) is where to report them. How [report a bug](./SECURITY.md)

---

## Fast intro

These steps will guide you through contributing to this project:

- Create an issue to discuss about the changes you want to do before starting to code.
- Fork the repo
- Clone it and install dependencies
  ```
  git clone https://github.com/OperationCaribbeanSummer/Jose-Marti-analizer-WikiAgora
  npm install
  ```
- Make changes
- Create tests
- Send a Pull Request with a clear list of what you've done. Make sure all of your commits are atomic (one feature per commit).

---

## New contributor guide

To get an overview of the project, read the [README](./README.md) file. Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Getting started

Navigate our codebase with confidence. [codespaces overview](https://docs.github.com/en/codespaces/overview)

Check to see what [types of contributions](/contributing/types-of-contributions.md) we accept before making changes. Some of them don't even require writing a single line of code :sparkles:.

### Issues

#### Create a new issue

If you have an idea or enhancement: [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/OperationCaribbeanSummer/Jose-Marti-analizer-WikiAgora/issues/new/choose).

#### Solve an issue

Scan through our [existing issues](https://github.com/OperationCaribbeanSummer/Jose-Marti-analizer-WikiAgora/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See "[Label reference](https://docs.github.com/en/contributing/collaborating-on-github-docs/label-reference)" for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

#### Make changes in a codespace

For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

#### Make changes locally

1. Fork the repository.

- Using GitHub Desktop:

  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

2. Install or update to **Node.js**, at the version specified in `.node-version`. Install or update **MongoDB**.

3. Install dependencies, setup enviromental variables and start with your changes!

### Commit your update

Commit the changes once you are happy with them. Don't forget to use the "[Self review checklist](https://docs.github.com/en/contributing/collaborating-on-github-docs/self-review-checklist)" to speed up the review process :zap:.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.

- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
  Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

## First contribution

Edit and add your name in [CONTRIBUTORS.md](./CONTRIBUTORS.md), pull it with the comment `first contribution` and **wellcome to the team!** :confetti_ball:

### Your PR is merged!

Congratulations :tada::tada: The OperationCaribbeanSummer team thanks you :sparkles:.

Once your PR is merged, your contributions will be publicly visible.

Now that you are part of the OperationCaribbeanSummer community.

## Submitting changes

Please send a [GitHub Pull Request to OperationCaribbeanSummer](https://github.com/OperationCaribbeanSummer/Jose-Marti-analizer-WikiAgora/pull/new/main) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include RSpec examples. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit). Read more at [How to Write a Git Commit Message](https://cbea.ms/git-commit/).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    >
    > A paragraph describing what changed and its impact."

## Coding conventions

This is open source software. Consider the people who will read your code, and make it look nice for them.

Install slint and prettier, by atent about:

- `.editorconfig`
- `.eslintignore`
- `.eslintrc`
- `.prettierignore`
- `.prettierrc`

## Naming Convention and standards

github branches = `main` (default)

ISO 8601: [Date and time format](https://en.wikipedia.org/wiki/ISO_8601)

ISO 3166-1 alpha-2: [Two letter country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

ISO 639-1: [Two letter language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

`snake_cased` for JSON Naming Convention based on the Facebook and Twitter APIs

`kebab-case` for path segments

`camelCase` for naming const, let,...

[OpenAPI specification](http://swagger.io/specification)

[Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines)

### JSON response

`res.json()` standad:

```json
{
  "code": 200,
  "status": "success",
  "API_version": "v1",
  "url": "https://OperationCaribbeanSummer.com/api/v1/.....", //API URL
  "data": {
    // response data
  }
}
```

Thanks,
Javier Ramos Nistal
