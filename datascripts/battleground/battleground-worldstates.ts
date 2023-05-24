import { std } from "wow/wotlk"
import { BATTLEGROUND_AREA, BATTLEGROUND_MAP } from "./battleground-map"

// ============================================================================
//
// - Battleground Worldstates -
//
//   This file creates three worldstates for the demo battleground:
//   - A Horde score counter
//   - An Alliance score counter
//   - A Timer
//
//   Then, it combines these worldstates into a single worldstate overlay
//   string that will be shown in the battleground map/area.
//
// ============================================================================

const HORDE_SCORE_COUNTER = std.WorldStates
  .create('tswow-tests','horde-slime-counter')
  .Tags.addUnique('tswow-tests','horde-slime-counter')
const ALLY_SCORE_COUNTER = std.WorldStates
  .create('tswow-tests','alliance-slime-counter')
  .Tags.addUnique('tswow-tests','alliance-slime-counter')
const TIMER = std.WorldStates
  .create('tswow-tests','slime-timer')
  .Tags.addUnique('tswow-tests','slime-timer')

std.WorldStateUIs
    .create()
    .String.set({enGB:
          `Alliance Slime: ${ALLY_SCORE_COUNTER.ui_text()}`
        + `\n\n`
        + `Horde Slime:    ${HORDE_SCORE_COUNTER.ui_text()}`
        + `\n\n`
        + `Time Remaining: ${TIMER.ui_text()} minutes.`
    })
    .Location.set(BATTLEGROUND_MAP.ID, BATTLEGROUND_AREA.ID)
    .Variable.set(0)
    .Type.DEFAULT.set()