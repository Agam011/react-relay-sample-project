/**
 * @flow
 * @relayHash 715faf9899dd7dc8152d141d9bdca87e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SampleFeaturedCategory_store$ref = any;
export type ListPage_FeaturedCategory_QueryVariables = {||};
export type ListPage_FeaturedCategory_QueryResponse = {|
  +store: {|
    +$fragmentRefs: SampleFeaturedCategory_store$ref
  |}
|};
export type ListPage_FeaturedCategory_Query = {|
  variables: ListPage_FeaturedCategory_QueryVariables,
  response: ListPage_FeaturedCategory_QueryResponse,
|};
*/


/*
query ListPage_FeaturedCategory_Query {
  store {
    ...SampleFeaturedCategory_store
  }
}

fragment SampleFeaturedCategory_store on Store {
  featuredCategory {
    categoryList {
      catId
      category
      featured
      largeImage
      smallImage
      subCategoryList {
        subcategoryId
        subcategory
        subpopular
        largeImage
        smallImage
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
  "kind": "Request",
  "operationKind": "query",
  "name": "ListPage_FeaturedCategory_Query",
  "id": null,
  "text": "query ListPage_FeaturedCategory_Query {\n  store {\n    ...SampleFeaturedCategory_store\n  }\n}\n\nfragment SampleFeaturedCategory_store on Store {\n  featuredCategory {\n    categoryList {\n      catId\n      category\n      featured\n      largeImage\n      smallImage\n      subCategoryList {\n        subcategoryId\n        subcategory\n        subpopular\n        largeImage\n        smallImage\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ListPage_FeaturedCategory_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SampleFeaturedCategory_store",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListPage_FeaturedCategory_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
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
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3dee49d417cb1d2ea847938450930c6d';
module.exports = node;
