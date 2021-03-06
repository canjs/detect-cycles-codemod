# Contributing to detect-cycles-codemod

Check out the [contribution guide on CanJS.com](https://canjs.com/doc/guides/contribute.html) for information on:

- [Code of Conduct](https://canjs.com/doc/guides/contribute.html#CodeofConduct)
- [Getting Help](https://canjs.com/doc/guides/contribute.html#GettingHelp)
- [Project Organization](https://canjs.com/doc/guides/contributing/project-organization.html)
- [Reporting Bugs](https://canjs.com/doc/guides/contributing/bug-report.html)
- [Suggesting Features](https://canjs.com/doc/guides/contributing/feature-suggestion.html)
- [Finding Ways to Contribute](https://canjs.com/doc/guides/contributing/finding-ways-to-contribute.html)

The rest of this guide has information that’s specific to this repository.

## Developing Locally

This section will walk you through setting up the [repository](https://github.com/canjs/detect-cycles-codemod) on your computer.

### Signing up for GitHub

If you don’t already have a GitHub account, you’ll need to [create a new one](https://help.github.com/articles/signing-up-for-a-new-github-account/).

### Forking & cloning the repository

A “fork” is a copy of a repository in your personal GitHub account. “Cloning” is the process of getting the repository’s source code on your computer.

GitHub has a guide for [forking a repo](https://help.github.com/articles/fork-a-repo/). To fork detect-cyclic-packages, you can start by going to its [fork page](https://github.com/canjs/detect-cyclic-packages/fork).

Next, you’ll want to clone the repo. [GitHub’s cloning guide](https://help.github.com/articles/cloning-a-repository/) explains how to do this on Linux, Mac, or Windows.

GitHub’s guide will [instruct you](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork) to clone it with a command like:

```shell
git clone https://github.com/YOUR-USERNAME/detect-cycles-codemod
```

Make sure you replace `YOUR-USERNAME` with your GitHub username.

### Installing the dependencies

After you’ve forked & cloned the repository, you’ll need to install the project’s dependencies.

First, make sure you’ve [installed Node.js and npm](https://docs.npmjs.com/getting-started/installing-node).

If you just cloned the repo from the command line, you’ll want to switch to the folder with your clone:

```shell
cd detect-cycles-codemod
```

This package has no dependencies, so `npm install` is not necessary.
