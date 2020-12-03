import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type PostDataFragment = (
  { __typename?: 'Post' }
  & Pick<Types.Post, 'id' | 'title' | 'text' | 'tags' | 'datePublished'>
  & { category: (
    { __typename?: 'Category' }
    & Pick<Types.Category, 'id' | 'name'>
  ), author: (
    { __typename?: 'User' }
    & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
  ), comments: Array<(
    { __typename?: 'Comment' }
    & Pick<Types.Comment, 'id' | 'text'>
    & { commentsOn: (
      { __typename?: 'Post' }
      & { comments: Array<(
        { __typename?: 'Comment' }
        & Pick<Types.Comment, 'id' | 'text'>
        & { author: (
          { __typename?: 'User' }
          & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
        ) }
      )> }
    ), author: (
      { __typename?: 'User' }
      & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
    ) }
  )> }
);

export type AllPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { queryPost?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'id' | 'title' | 'text' | 'tags' | 'datePublished'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Types.Category, 'id' | 'name'>
    ), author: (
      { __typename?: 'User' }
      & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
    ), commentsAggregate?: Types.Maybe<(
      { __typename?: 'CommentAggregateResult' }
      & Pick<Types.CommentAggregateResult, 'count'>
    )> }
  )>>> }
);

export type GetPostQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { getPost?: Types.Maybe<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'id' | 'title' | 'text' | 'tags' | 'datePublished'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Types.Category, 'id' | 'name'>
    ), author: (
      { __typename?: 'User' }
      & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
    ), comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Types.Comment, 'id' | 'text'>
      & { commentsOn: (
        { __typename?: 'Post' }
        & { comments: Array<(
          { __typename?: 'Comment' }
          & Pick<Types.Comment, 'id' | 'text'>
          & { author: (
            { __typename?: 'User' }
            & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
          ) }
        )> }
      ), author: (
        { __typename?: 'User' }
        & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
      ) }
    )> }
  )> }
);

export const PostDataFragmentDoc = gql`
    fragment postData on Post {
  id
  title
  text
  tags
  datePublished
  category {
    id
    name
  }
  author {
    username
    displayName
    avatarImg
  }
  comments {
    id
    text
    commentsOn {
      comments {
        id
        text
        author {
          username
          displayName
          avatarImg
        }
      }
    }
    author {
      username
      displayName
      avatarImg
    }
  }
}
    `;
export const AllPostsDocument = gql`
    query allPosts {
  queryPost(order: {desc: datePublished}) {
    id
    title
    text
    tags
    datePublished
    category {
      id
      name
    }
    author {
      username
      displayName
      avatarImg
    }
    commentsAggregate {
      count
    }
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const GetPostDocument = gql`
    query getPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    text
    tags
    datePublished
    category {
      id
      name
    }
    author {
      username
      displayName
      avatarImg
    }
    comments {
      id
      text
      commentsOn {
        comments {
          id
          text
          author {
            username
            displayName
            avatarImg
          }
        }
      }
      author {
        username
        displayName
        avatarImg
      }
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const namedOperations = {
  Query: {
    allPosts: 'allPosts',
    getPost: 'getPost'
  },
  Fragment: {
    postData: 'postData'
  }
}