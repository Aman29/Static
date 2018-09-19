#!/bin/bash
set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)


git init
git config user.name "Aman29"
git config user.email "29aman92@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/Aman29/Static/Challenge3.git"
git fetch upstream
git reset upstream/gh-pages

echo "29aman92@gmail.com" > CNAME

touch .

cp -r dist/* ./

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
