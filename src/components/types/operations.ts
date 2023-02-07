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
  ), commentsAggregate?: Types.Maybe<(
    { __typename?: 'CommentAggregateResult' }
    & Pick<Types.CommentAggregateResult, 'count'>
  )> }
);

export type AllPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { queryPost?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Post' }
    & PostDataFragment
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
    ), comments?: Types.Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Types.Comment, 'id' | 'text'>
      & { commentsOn: (
        { __typename?: 'Post' }
        & { comments?: Types.Maybe<Array<(
          { __typename?: 'Comment' }
          & Pick<Types.Comment, 'id' | 'text'>
          & { author: (
            { __typename?: 'User' }
            & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
          ) }
        )>> }
      ), author: (
        { __typename?: 'User' }
        & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
      ) }
    )>> }
  )> }
);

export type CategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { queryCategory?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Category' }
    & Pick<Types.Category, 'id' | 'name'>
  )>>> }
);

export type AddPostMutationVariables = Types.Exact<{
  post: Types.AddPostInput;
}>;


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & { addPost?: Types.Maybe<(
    { __typename?: 'AddPostPayload' }
    & { post?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & PostDataFragment
    )>>> }
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
  commentsAggregate {
    count
  }
}
    `;
export const AllPostsDocument = gql`
    query allPosts {
  queryPost(order: {desc: datePublished}) {
    ...postData
  }
}
    ${PostDataFragmentDoc}`;

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
export const CategoriesDocument = gql`
    query categories {
  queryCategory {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const AddPostDocument = gql`
    mutation addPost($post: AddPostInput!) {
  addPost(input: [$post]) {
    post {
      ...postData
    }
  }
}
    ${PostDataFragmentDoc}`;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, baseOptions);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const namedOperations = {
  Query: {
    allPosts: 'allPosts',
    getPost: 'getPost',
    categories: 'categories'
  },
  Mutation: {
    addPost: 'addPost'
  },
  Fragment: {
    postData: 'postData'
  }
}