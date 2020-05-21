/**
 * @flow
 * @relayHash 6a1498375f3fed564996658408eda278
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MakeQueryVariables = {|
  year: string
|};
export type MakeQueryResponse = {|
  +store: {|
    +makes: $ReadOnlyArray<{|
      +key: string,
      +value: string,
    |}>
  |}
|};
export type MakeQuery = {|
  variables: MakeQueryVariables,
  response: MakeQueryResponse,
|};
*/


/*
query MakeQuery(
  $year: String!
) {
  store {
    makes(year: $year) {
      key
      value
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "year",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
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
        "name": "makes",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "year",
            "variableName": "year",
            "type": "String!"
          }
        ],
        "concreteType": "item",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "key",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "value",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MakeQuery",
  "id": null,
  "text": "query MakeQuery(\n  $year: String!\n) {\n  store {\n    makes(year: $year) {\n      key\n      value\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MakeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "MakeQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c14873d8dcfe5e403a0118dd7bd25e09';
module.exports = node;
