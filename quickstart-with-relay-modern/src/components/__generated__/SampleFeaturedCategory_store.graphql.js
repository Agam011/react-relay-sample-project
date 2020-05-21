/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SampleFeaturedCategory_store$ref: FragmentReference;
export type SampleFeaturedCategory_store = {|
  +featuredCategory: {|
    +categoryList: $ReadOnlyArray<{|
      +catId: number,
      +category: string,
      +featured: boolean,
      +largeImage: string,
      +smallImage: string,
      +subCategoryList: $ReadOnlyArray<{|
        +subcategoryId: number,
        +subcategory: string,
        +subpopular: boolean,
        +largeImage: string,
        +smallImage: string,
      |}>,
    |}>
  |},
  +$refType: SampleFeaturedCategory_store$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "largeImage",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "smallImage",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "SampleFeaturedCategory_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "featuredCategory",
      "storageKey": null,
      "args": null,
      "concreteType": "FeaturedCategoryList",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "categoryList",
          "storageKey": null,
          "args": null,
          "concreteType": "FeaturedCategoryResponse",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "catId",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "category",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "featured",
              "args": null,
              "storageKey": null
            },
            v0,
            v1,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "subCategoryList",
              "storageKey": null,
              "args": null,
              "concreteType": "Subcategory",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "subcategoryId",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "subcategory",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "subpopular",
                  "args": null,
                  "storageKey": null
                },
                v0,
                v1
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '6fbb644a1d1f1739387fd971ed4bec12';
module.exports = node;
