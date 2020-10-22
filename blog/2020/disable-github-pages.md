---
title: Disable GitHub Pages for legacy projects
date: 2020-09-30
publishdate: 2020-09-30
draft: false
description: A short manual on how to disable GitHub Pages for legacy branches
tags:
  - GitHub
  - HowTo
  - GitHub Pages
  - Git
---

If you had a active GitHub Page in the past (I used it because I wanted to try out Jekyll) and switched to something else, you may encounter the issue, that you can not disable the GitHub Page in the settings, because switching to "no branch" as described in the documentation does not work.
This is pretty easy to solve, and I show you how in this article.
<!-- more -->
<figure>
    <img src="/src/img/shelf.jpg" alt="Shelf full of books" title="Shelf full of books">
</figure>

The GitHub documentation is pretty forward:

* Navigate to the main page of the repository.
* Under your repository name, click Settings.
* Under "GitHub Pages", use the Source drop-down menu and select None.

But if you have issues selecting "None" like me, maybe you have a legacy branch `gh-pages` or you only have a `master` branch on a repopsitory named `<username>.github.io`. The proposal from GitHub is to delete the gh-branch or even to delete the repository. Which is really insane. In the end, you can just either rename your branch or your repository. GitHub will then allow you to either switch the branch or stop trying to autodeploy your code.

## Rename your branch
Basically it is just using a bunch of git commands you most likely are already familiar with.

Moving the existing branch to a new branch and deleting it on remote:
```shell
git branch -m gh-pages <new-name>
git push origin --delete gh-pages
```
`-m/--move => Move/rename a branch and the corresponding reflog`

Then you just push the new branch and reset the upstream:
```shell
git push origin -u <new-name>
```
`-u <upstream>/--set-upstream-to=<upstream> => Set up <branchname>'s tracking information so <upstream> is considered <branchname>'s upstream branch. If no <branchname> is specified, then it defaults to the current branch.`

That should be basically it.

## Rename your repository
This is the flow I had to follow, because even a `.nojekyll` file in the root of my repo didn't help to prevent GitHub from publishing the page.

Again, the documentation from GitHub is pretty straightforward:
* Navigate to the main page of the repository.
* Under your repository name, click Settings.
* Under the Repository Name heading, type the new name of your repository. 

Choose something of your liking, which doesn't follow any automatic naming triggerse of GitHub. I did just choose `dev-blog`.
This is basically it on the page. All data (Wiki, Issues etc.pp.) is automatically switched to the new name.

Only thing to do on your local machine is to change the remote (if you do not want to just clone everything again):

```shell
git remote set-url origin https://github.com/<username>/<new-name>.git
```

Now you can go back to the repopsitory settings on GitHub and follow the instruction for unpublishing your GitHub pages. It allows you now to set branchname to None and thus disabling GitHub Pages in your repository.

Hope this helped you a bit. For me it was a struggle to find this information and did cost me half a day with fiddling around until I found the correct triggers.
