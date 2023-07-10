import { gql } from '@apollo/client';

export const QUERY_ME = gql`
   {
        me {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }
`;

// export const QUERY_BOOKS = gql`
//     query books {
//         books {
//             _id
//             authors
//             description
//             bookId
//             image
//             link
//             title
//         }
//     }
// `;