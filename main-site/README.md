ivr-site
==========

Repo for the ivr.solutions site.

## Local Build

1. Run `npm install`
2. Run `npm start` (after the first run, this is the only step needed)


## Third Party Libraries

3rd part libraries should be concatenated into the site bundle by adding them via package.json and specifying what files to include in the `assets/3rd-party-libs.json` file. 


## Deploy

Changes to master are automatically deployed to  [stage.ivr.solutions/](https://stage.ivr.solutions/). Periodically, the IVR team will inspect staging and promote it to [ivr.solutions](https://people.restvo.com).
