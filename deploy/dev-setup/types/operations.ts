import * as Types from '../../../src/types/graphql';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type InitCategoriesMutationVariables = Types.Exact<{
  categories: Array<Types.AddCategoryInput>;
}>;


export type InitCategoriesMutation = (
  { __typename?: 'Mutation' }
  & { addCategory?: Types.Maybe<(
    { __typename?: 'AddCategoryPayload' }
    & { category?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Category' }
      & Pick<Types.Category, 'id' | 'name'>
    )>>> }
  )> }
);

export type InitPostsMutationVariables = Types.Exact<{
  posts: Array<Types.AddPostInput>;
}>;


export type InitPostsMutation = (
  { __typename?: 'Mutation' }
  & { addPost?: Types.Maybe<(
    { __typename?: 'AddPostPayload' }
    & { post?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & Pick<Types.Post, 'id'>
    )>>> }
  )> }
);

export type InitDiggyMutationVariables = Types.Exact<{
  diggy: Types.AddUserInput;
}>;


export type InitDiggyMutation = (
  { __typename?: 'Mutation' }
  & { addUser?: Types.Maybe<(
    { __typename?: 'AddUserPayload' }
    & { user?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'User' }
      & Pick<Types.User, 'username'>
    )>>> }
  )> }
);


export const InitCategoriesDocument = gql`
    mutation InitCategories($categories: [AddCategoryInput!]!) {
  addCategory(input: $categories) {
    category {
      id
      name
    }
  }
}
    `;
export type InitCategoriesMutationFn = ApolloReactCommon.MutationFunction<InitCategoriesMutation, InitCategoriesMutationVariables>;

/**
 * __useInitCategoriesMutation__
 *
 * To run a mutation, you first call `useInitCategoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitCategoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initCategoriesMutation, { data, loading, error }] = useInitCategoriesMutation({
 *   variables: {
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useInitCategoriesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InitCategoriesMutation, InitCategoriesMutationVariables>) {
        return ApolloReactHooks.useMutation<InitCategoriesMutation, InitCategoriesMutationVariables>(InitCategoriesDocument, baseOptions);
      }
export type InitCategoriesMutationHookResult = ReturnType<typeof useInitCategoriesMutation>;
export type InitCategoriesMutationResult = ApolloReactCommon.MutationResult<InitCategoriesMutation>;
export type InitCategoriesMutationOptions = ApolloReactCommon.BaseMutationOptions<InitCategoriesMutation, InitCategoriesMutationVariables>;
export const InitPostsDocument = gql`
    mutation InitPosts($posts: [AddPostInput!]!) {
  addPost(input: $posts) {
    post {
      id
    }
  }
}
    `;
export type InitPostsMutationFn = ApolloReactCommon.MutationFunction<InitPostsMutation, InitPostsMutationVariables>;

/**
 * __useInitPostsMutation__
 *
 * To run a mutation, you first call `useInitPostsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitPostsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initPostsMutation, { data, loading, error }] = useInitPostsMutation({
 *   variables: {
 *      posts: // value for 'posts'
 *   },
 * });
 */
export function useInitPostsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InitPostsMutation, InitPostsMutationVariables>) {
        return ApolloReactHooks.useMutation<InitPostsMutation, InitPostsMutationVariables>(InitPostsDocument, baseOptions);
      }
export type InitPostsMutationHookResult = ReturnType<typeof useInitPostsMutation>;
export type InitPostsMutationResult = ApolloReactCommon.MutationResult<InitPostsMutation>;
export type InitPostsMutationOptions = ApolloReactCommon.BaseMutationOptions<InitPostsMutation, InitPostsMutationVariables>;
export const InitDiggyDocument = gql`
    mutation InitDiggy($diggy: AddUserInput!) {
  addUser(input: [$diggy]) {
    user {
      username
    }
  }
}
    `;
export type InitDiggyMutationFn = ApolloReactCommon.MutationFunction<InitDiggyMutation, InitDiggyMutationVariables>;

/**
 * __useInitDiggyMutation__
 *
 * To run a mutation, you first call `useInitDiggyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitDiggyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initDiggyMutation, { data, loading, error }] = useInitDiggyMutation({
 *   variables: {
 *      diggy: // value for 'diggy'
 *   },
 * });
 */
export function useInitDiggyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InitDiggyMutation, InitDiggyMutationVariables>) {
        return ApolloReactHooks.useMutation<InitDiggyMutation, InitDiggyMutationVariables>(InitDiggyDocument, baseOptions);
      }
export type InitDiggyMutationHookResult = ReturnType<typeof useInitDiggyMutation>;
export type InitDiggyMutationResult = ApolloReactCommon.MutationResult<InitDiggyMutation>;
export type InitDiggyMutationOptions = ApolloReactCommon.BaseMutationOptions<InitDiggyMutation, InitDiggyMutationVariables>;
export const namedOperations = {
  Mutation: {
    InitCategories: 'InitCategories',
    InitPosts: 'InitPosts',
    InitDiggy: 'InitDiggy'
  }
}