import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

// const ListPageQuery = graphql`
//   query ListQuery {
//     makes {
//       ...ListPage_makes
//     }
//   }
// `;

class ListPage extends React.Component {

  render() {
    console.log('.........................data dep', this.props.optionsArray);
    const {
      optionsArray,
    } = this.props;
    return (
      <div>
        <ul>
          {optionsArray.map((option, index) =>
              <li key={index}>
                {option.value}
              </li>
            )}
        </ul>
      </div>
    )
  }
}
export default ListPage
// export default createFragmentContainer(
//   ListPage,
//   graphql`
//     fragment ListPage_makes on ListPage {
//        key
//        value
//     }
//   `
// );

// export default createFragmentContainer(ListPage, {
//   makes: graphql`
//     fragment ListPage_makes on Make @relay(pattern: true) {
//       key
//       value
//     }
//   `,
// });

// export default createFragmentContainer(ListPage, {
//   store: graphql`
//     fragment ListPage_store on Store {
//       makes(year: $year) {
//         key
//         value
//       }
//     }
//   `,
// });