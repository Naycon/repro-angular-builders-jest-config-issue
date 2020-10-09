# @angular-builders/jest issue repro repo

This project is presenting a repro case for an [issue in @angular-builders/jest](https://github.com/just-jeb/angular-builders/issues/820)
where the default moduleNameMapper config makes it impossible to apply jest transforms.

## The basics

This is a barebone app that imports a jpg image in app.component.ts. It is shown in a img tag in app.component.html.

## What's wrong?

If you look in jest.config.js, you'll see there's a transform being applied (fileTransform.js contains the transform) to a bunch of assets,
among them jpg imports. This _should_ lead to e.g. snapshots getting the transformed result of importing a jpg file. However, what ends up
happening is that the moduleNameMapper config included per default in @angular-builders/jest steps in. Instead of transforming the jpg import
using the transform function, the import is being mapped statically to a string buried deep down in @angular-builders/jest's source code.

## Snapshot example

I've setup a simple snapshot test in this repo. The snapshot for app.component.spec.ts should output `photo` as the src result of the img tag.
Instead, the result becomes `file-mock`. To run the test, simply run `npm run test`. It would of course pass right now, as the snapshot matches
what's output by jest and I have not edited it manually.

## Why is this important?

Our use case is to e.g. make sure we render the correct credit card image when showing a users billing info in our app. With the default behaviour,
all our snapshots will output `file-mock` instead of the name of the asset used, making it impossible to use snapshots to verify the logic that
is choosing pictures.

Another point is that it is rather hard to figure out why your transform is not applied to some assets while it is to others. The only clue
is the output string at it took quite some time to hunt down where it came from.
