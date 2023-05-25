# TSWoW Tests

## PUBLISHED FOR TESTING: NOT CURRENTLY SUITABLE FOR BEGINNERS

This is the official demo/test module for [TSWoW](https://github.com/tswow/tswow)

## Installation

Make sure you have these pull requests:
- https://github.com/tswow/tswow/pull/793
- https://github.com/tswow/tswow/pull/794

Run the following command inside the `modules` subdirectory in your TSWoW installation.

```
git clone https://github.com/tswow/tswow-tests.git --recurse-submodules
```

The module is then build like a normal module. To fix map stuff, you currently need to build data with the build-blp flag: `build data build-blp`.

## Usage

This module serves as a test and a demo for both basic and advanced TSWoW features. The modules content is largely built around a custom map called "Test Island".

- To see examples in-game, create a new character of the "Test Class" and explore the Test Island area. There are teleporter NPCs to take you around and look at the different features.

- You can browse the [datascripts](datascripts) directory as a general entrypoint to features as almost all are implemented around some kind of demo npc, relevant pointers are included to the [livescripts](livescripts), [lua](lua) and [addon](addon) directories.

- Some basic server scripts are implemented as [InlineScripts](https://tswow.github.io/tswow-wiki/documentation/datascripts/#inlinescripts) directly in the datascripts to make them easier to read, while demos that require multiple events or functions are placed in the `livescripts` directory.