---
layout: post
title: So You Want to Learn Git
date: 2019-05-28 08:00:00 +0100
category: learn
---
<!--
To add:
* Git credentials cache: https://help.github.com/en/articles/caching-your-github-password-in-git
	-->

## What? Why? How?

**What:** Git is an open-source, widely used [Version Control System (VCS)][vcs-def]. Much like any VCS, Git has its two primary uses which are _(a)_ to allow teams to work on the same codebase at the same time and _(b)_ to save in permanent memory the codebase at different points in its development. Check out [this link][vcs-git] for more info on what Git is exactly.

**Why:** But why learn Git in particular? There are other options of VCS that you could use: like [Mercurial][vcs-mercurial] or [Sub-Version](https://subversion.apache.org/), but Git is by far the most popular. Some claim Mercurial is more accessible and extendable (say if you wanted to tweak a feature to better suit your style), but the main principals are the same as in Git. Nonetheless, because Git is the most popular that means there will be much more help available online and many open-source projects will be using it, so I heavily recommend starting with Git. Check [this page][vcs-compare] out for a bit more info on how the existing VCS differ.

**How:** There are hundreds of tutorials for Git out on the internet, so I won't reinvent the wheel or just copy-paste those here - especially when lots of people have already done a fantastic job. Instead, you can use this page as a quick directory for some good links to tutorials and as a guide for figuring out where to start and how to develop your skills a bit further.


## Learn the basics

_What's the difference between Git and GitHub?_ A quick thing I'd like to clear up is the subtle difference between Git and GitHub because I've noticed that there can be some confusion in how they differ. **Git** is the **software** that you install on your computer and that lets you work with other people who are using the same software on their own machines. Git is free and open-source and is what runs the _pushing_, _pulling_, _branching_, etc. **GitHub** is an online service that hosts _projects that **use** Git_. It is a popular host for open-source projects (since it lets you host these for free), and it even adds lots of helpful features for managing teams of developers and product development.

_Ok, so how do I start?_ The first thing you'll want to do is install Git on your computer:
* **Windows**: Install _Git for Windows_ on your machine [here](https://gitforwindows.org/)
* **MacS**: Download and run the most recent installer from [this list](https://sourceforge.net/projects/git-osx-installer/files/)
* **Linux:** Use one of [these commands](https://git-scm.com/download/linux) in your terminal.

_Then what?_ After you've installed Git, you can work your way through the course material of [Software Carpentry's Git introduction][sc-git-novice]. This will introduce all the basic features of Git such as _committing_ changes, _pushing/pulling_ and resolving _merge conflicts_.

I recommend looking on Atlassian's Git tutorial for [an explanation of _branches_][atlassian-branches] as well (Atlassian owns a competitor product to GitHub called Bitbucket).

_This is so much to keep track of..._ It definitely is. If you forget how to do something, you can always simply check on the internet or keep a cheetsheat at hand for the most common commands. I like Atlassian's which you can find [here][atlassian-cheatsheet].

_Am I done?_ Once you've gone through these you'll be have seen the majority of what you need to be comfortable with Git! Then it's simply a matter of practice!


## Practice

There are a few ways you can get your head around using Git. The most straightforward is to simply jump in the deep-end and start a little, fun, no-stakes project where you use Git, and query the internet for solutions to the questions you encounter along the way. This lets you learn features as you need them and lets you practice the all-important skill of searching the internet for answers to your software-related questions.

Another great tool, which is a great way to experiment with some Git commands, is GitHub's [_Learn Git Branching_][github-branching] interactive tutorial. Or if you want a sandbox version where you can do what you want, try the [_Visualizing Git_][github-vis] tool.


## Going further

### A few more commands

Git allows you to be very flexible in how you manage your repository and commit history. There are lots of little commands that could help you achieve whatever contrived objective you may have, but in the day-to-day you'll need a limited set. I find the following ones useful now and then and they can be handy to keep in your toolbox:
* `git stash`: Stashing is a bit like the copy-past of Git. [See here][git-stash] for an explanation.
* `git reset` and `git revert`: Resetting and reverting have similar uses in that they can undo commits, but each have specific contexts in which they should be applied. [See here][git-reset] for a comparison between the two.
* `git rebase`: Rebasing, similar to merging, is another (more advanced) way to integrate commits into a repository's history. See [this blog post for a brief introduction][git-tower-rebase], then read [Git website's article on rebasing][git-rebase] for a much more in-depth discussion. The `rebase` command also has an _interactive mode_ which is very helpful in cleaning up your commit history: [see here][git-rebase-interact] for an explanation.


### Collaborating

One of the beauties of Git of course is how it allows many developers to work on a single project. The two elements you'll need to do this are **Pull Requests** and **Forking**.

* **Pull Requests** are a key tool _and_ process in team software development. They are a formal notification that a feature or bug-fix is ready for integration into the _master_ branch. Atlassian gives [a nice explanation][atlassian-pull-request].

* To **Fork** a repository is to create your own copy of someone else's repository. This lets you make changes to a project where you might not already have editing rights. Later on, if you'd like, these changes can be turned into a pull-request for the original project. See [GitHub's introduction on Forking][github-forking] to get started.


### Best Practice

There is no _one way_ to use Git, but there are a few things that you should always do. These are explained [here][git-tower-best]. You'll notice that all the suggestions focus on how to write clear and explicit commit messages. This is important so that when other developers look over your code, they can understand not only _how_ your code changed, but _why_. Watch [this lecture][ruby-git-history] for a good explanation of why it is important to have a clear Git history.

Beyond having a clear development process there are no set rules for how you should use Git. That said, one important part is to have a consistent **workflow**. A workflow is an agreed-upon manner of using Git across a team. Atlassian gives [a good explanation and compares a few types][atlassian-workflow].


## So there you go!

Hopefully you'll find this collection links useful! Git is an amazing tool that can take some time to get used to, but I assure you it is worthwhile. My last piece of advice is to take everything step-by-step and do not hesitate to ask the internet. Good luck!


[vcs-def]: https://www.toolsqa.com/git/version-control-system/
[vcs-git]: https://www.toolsqa.com/git/what-is-git/
[vcs-compare]: https://www.pythonforengineers.com/svn-vs-git-vs-mercurial/
[vcs-mercurial]: https://www.mercurial-scm.org/about
[sc-git-novice]: http://swcarpentry.github.io/git-novice/
[atlassian-branches]:https://www.atlassian.com/git/tutorials/using-branches
[atlassian-cheatsheet]: https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet
[github-branching]: https://learngitbranching.js.org/
[github-vis]: http://git-school.github.io/visualizing-git/
[git-stash]: https://git-scm.com/book/en/v1/Git-Tools-Stashing
[git-reset]: https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting
[git-tower-rebase]: https://www.git-tower.com/blog/understanding-rebase-merge-in-git/
[git-rebase]: https://git-scm.com/book/en/v2/Git-Branching-Rebasing
[git-rebase-interact]: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History
[atlassian-pull-request]:https://www.atlassian.com/git/tutorials/making-a-pull-request
[github-forking]: https://guides.github.com/activities/forking/
[git-tower-best]: https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/best-practices
[ruby-git-history]: https://brightonruby.com/2018/a-branch-in-time-tekin-suleyman/
[atlassian-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows
