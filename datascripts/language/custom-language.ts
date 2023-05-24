import { std } from "wow/wotlk"
import { TEST_CLASS } from "../class/custom-class"

// ============================================================================
//
// - Custom Language -
//
//   This file creates a simple custom language that is taught to
//   test classes of all races on creation.
//
// ============================================================================

std.Languages
    .create('tswow-tests','test-language')
    .Name.enGB.set('Test Language')
    // Teach this to all races that are Test Classes
    .AutoLearn.add([TEST_CLASS.Mask])
    .Words.add([
          'test','testing','ooops','crash','debug'
        , 'HELP', 'did you try restarting your computer?'
        , 'uh oh', '@everyone'
    ])