import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Book -
//
//   This file illustrates a simple book with 3 pages.
//
// ============================================================================

const BOOK_DISPLAY_ID = 21032

const TEST_BOOK = std.Items
    .create('tswow-tests','test-book')
   .Name.enGB.set('Test Book')
   .PageMaterial.set('PARCHMENT')
   .DisplayInfo.set(BOOK_DISPLAY_ID)
   .PageText.setSimpleLoc('tswow-tests','test-book-display',[
       {
           enGB:'Page 1'
       },
       {
           enGB:'Page 2'
       },
       {
           enGB:'Page 3'
       },
   ])

TEST_ITEM_VENDOR.Vendor.add(TEST_BOOK.ID)