import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount
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

export const QUERY_BOOKS = gql`
    query books {
        books {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
`;