# README

##Authors

* Chloe Collier
* Marly Lara
* Tim Hsieh


##Notes for GitHub Collaboration:

Create a new feature branch:
```
git checkout -b <your branch name>
```

Make your changes and stage changes:
```
git add .
```

Commit:
```
git commit -m "<your commit message>"
```

Push up changes and submit pull request in GitHub:
```
git push origin <your branch name>
```

Inside of GitHub repo, click on pull request. Send the link of the pull request to the group slack channel, and ask for 👀. If there are no merge conflicts, then click merge button. If there **are** conflicts, please keep reading.

To resolve the conflicts, from your feature branch, fetch and merge origin master:
```
git fetch origin master
git merge origin master
```
OR
```
git pull origin master
```

Fix conflicts in Atom, then push up changes:
```
git add .
git commit -m <merge commit message>
git push origin <your branch name>
```
Finally, go to GitHub and click on green merge button.
