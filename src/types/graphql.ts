export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
};

export enum PostOrderable {
  Title = 'title',
  Text = 'text',
  Tags = 'tags',
  DatePublished = 'datePublished'
}

export type CategoryFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<StringTermFilter>;
  has?: Maybe<Array<Maybe<CategoryHasFilter>>>;
  and?: Maybe<Array<Maybe<CategoryFilter>>>;
  or?: Maybe<Array<Maybe<CategoryFilter>>>;
  not?: Maybe<CategoryFilter>;
};

export type CommentRef = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  commentsOn?: Maybe<PostRef>;
  author?: Maybe<UserRef>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type CommentOrder = {
  asc?: Maybe<CommentOrderable>;
  desc?: Maybe<CommentOrderable>;
  then?: Maybe<CommentOrder>;
};

export type UserOrder = {
  asc?: Maybe<UserOrderable>;
  desc?: Maybe<UserOrderable>;
  then?: Maybe<UserOrder>;
};

export type UserPatch = {
  displayName?: Maybe<Scalars['String']>;
  avatarImg?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
  comments?: Maybe<Array<CommentRef>>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  postsAggregate?: Maybe<PostAggregateResult>;
};


export type CategoryPostsArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CategoryPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};

export type AddCategoryInput = {
  name: Scalars['String'];
  posts?: Maybe<Array<PostRef>>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  text: Scalars['String'];
  commentsOn: Post;
  author: User;
};


export type CommentCommentsOnArgs = {
  filter?: Maybe<PostFilter>;
};


export type CommentAuthorArgs = {
  filter?: Maybe<UserFilter>;
};

export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  order?: Maybe<CategoryOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum CommentOrderable {
  Text = 'text'
}

export type AddPostInput = {
  title: Scalars['String'];
  text: Scalars['String'];
  tags?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  author: UserRef;
  category: CategoryRef;
  comments?: Maybe<Array<CommentRef>>;
  upvotes?: Maybe<Array<Maybe<UserRef>>>;
  downvotes?: Maybe<Array<Maybe<UserRef>>>;
};

export type UserFilter = {
  username?: Maybe<StringHashFilter>;
  has?: Maybe<Array<Maybe<UserHasFilter>>>;
  and?: Maybe<Array<Maybe<UserFilter>>>;
  or?: Maybe<Array<Maybe<UserFilter>>>;
  not?: Maybe<UserFilter>;
};

export type UserRef = {
  username?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  avatarImg?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
  comments?: Maybe<Array<CommentRef>>;
};

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CategoryPatch = {
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
};

export type User = {
  __typename?: 'User';
  username: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  avatarImg?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  comments?: Maybe<Array<Comment>>;
  postsAggregate?: Maybe<PostAggregateResult>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
};


export type UserPostsArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};


export type UserCommentsAggregateArgs = {
  filter?: Maybe<CommentFilter>;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export enum CommentHasFilter {
  Text = 'text',
  CommentsOn = 'commentsOn',
  Author = 'author'
}

export enum UserHasFilter {
  Username = 'username',
  DisplayName = 'displayName',
  AvatarImg = 'avatarImg',
  Posts = 'posts',
  Comments = 'comments'
}

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  queryUser?: Maybe<Array<Maybe<User>>>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getPost?: Maybe<Post>;
  queryPost?: Maybe<Array<Maybe<Post>>>;
  aggregatePost?: Maybe<PostAggregateResult>;
  getComment?: Maybe<Comment>;
  queryComment?: Maybe<Array<Maybe<Comment>>>;
  aggregateComment?: Maybe<CommentAggregateResult>;
  getCategory?: Maybe<Category>;
  queryCategory?: Maybe<Array<Maybe<Category>>>;
  aggregateCategory?: Maybe<CategoryAggregateResult>;
};


export type QueryGetUserArgs = {
  username: Scalars['String'];
};


export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateUserArgs = {
  filter?: Maybe<UserFilter>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryQueryPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregatePostArgs = {
  filter?: Maybe<PostFilter>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryQueryCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateCommentArgs = {
  filter?: Maybe<CommentFilter>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryQueryCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  order?: Maybe<CategoryOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  post?: Maybe<Array<Maybe<Post>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdatePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddCommentInput = {
  text: Scalars['String'];
  commentsOn: PostRef;
  author: UserRef;
};

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PostOrder = {
  asc?: Maybe<PostOrderable>;
  desc?: Maybe<PostOrderable>;
  then?: Maybe<PostOrder>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type CommentAggregateResult = {
  __typename?: 'CommentAggregateResult';
  count?: Maybe<Scalars['Int']>;
  textMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PostRef = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserRef>;
  category?: Maybe<CategoryRef>;
  comments?: Maybe<Array<CommentRef>>;
  upvotes?: Maybe<Array<Maybe<UserRef>>>;
  downvotes?: Maybe<Array<Maybe<UserRef>>>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  post?: Maybe<Array<Maybe<Post>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeletePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']>;
  usernameMin?: Maybe<Scalars['String']>;
  usernameMax?: Maybe<Scalars['String']>;
  displayNameMin?: Maybe<Scalars['String']>;
  displayNameMax?: Maybe<Scalars['String']>;
  avatarImgMin?: Maybe<Scalars['String']>;
  avatarImgMax?: Maybe<Scalars['String']>;
};

export type CategoryOrder = {
  asc?: Maybe<CategoryOrderable>;
  desc?: Maybe<CategoryOrderable>;
  then?: Maybe<CategoryOrder>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};

export type AddCommentPayload = {
  __typename?: 'AddCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export enum PostHasFilter {
  Title = 'title',
  Text = 'text',
  Tags = 'tags',
  DatePublished = 'datePublished',
  Author = 'author',
  Category = 'category',
  Comments = 'comments',
  Upvotes = 'upvotes',
  Downvotes = 'downvotes'
}

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type PostPatch = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserRef>;
  category?: Maybe<CategoryRef>;
  comments?: Maybe<Array<CommentRef>>;
  upvotes?: Maybe<Array<Maybe<UserRef>>>;
  downvotes?: Maybe<Array<Maybe<UserRef>>>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export enum UserOrderable {
  Username = 'username',
  DisplayName = 'displayName',
  AvatarImg = 'avatarImg'
}

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type PostAggregateResult = {
  __typename?: 'PostAggregateResult';
  count?: Maybe<Scalars['Int']>;
  titleMin?: Maybe<Scalars['String']>;
  titleMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
  tagsMin?: Maybe<Scalars['String']>;
  tagsMax?: Maybe<Scalars['String']>;
  datePublishedMin?: Maybe<Scalars['DateTime']>;
  datePublishedMax?: Maybe<Scalars['DateTime']>;
};

export enum CategoryHasFilter {
  Name = 'name',
  Posts = 'posts'
}

export type CommentPatch = {
  text?: Maybe<Scalars['String']>;
  commentsOn?: Maybe<PostRef>;
  author?: Maybe<UserRef>;
};


export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  text: Scalars['String'];
  tags?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  author: User;
  category: Category;
  comments?: Maybe<Array<Comment>>;
  upvotes?: Maybe<Array<Maybe<User>>>;
  downvotes?: Maybe<Array<Maybe<User>>>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  upvotesAggregate?: Maybe<UserAggregateResult>;
  downvotesAggregate?: Maybe<UserAggregateResult>;
};


export type PostAuthorArgs = {
  filter?: Maybe<UserFilter>;
};


export type PostCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
};


export type PostCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PostUpvotesArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PostDownvotesArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PostCommentsAggregateArgs = {
  filter?: Maybe<CommentFilter>;
};


export type PostUpvotesAggregateArgs = {
  filter?: Maybe<UserFilter>;
};


export type PostDownvotesAggregateArgs = {
  filter?: Maybe<UserFilter>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  order?: Maybe<CategoryOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CategoryAggregateResult = {
  __typename?: 'CategoryAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum CategoryOrderable {
  Name = 'name'
}

export type CategoryRef = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
};

export type UpdateCategoryInput = {
  filter: CategoryFilter;
  set?: Maybe<CategoryPatch>;
  remove?: Maybe<CategoryPatch>;
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  in?: Maybe<Array<Maybe<Scalars['Int64']>>>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  set?: Maybe<UserPatch>;
  remove?: Maybe<UserPatch>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type AddCategoryPayload = {
  __typename?: 'AddCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  order?: Maybe<CategoryOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CommentFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<Array<Maybe<CommentHasFilter>>>;
  and?: Maybe<Array<Maybe<CommentFilter>>>;
  or?: Maybe<Array<Maybe<CommentFilter>>>;
  not?: Maybe<CommentFilter>;
};

export type PostFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<StringTermFilter>;
  text?: Maybe<StringFullTextFilter>;
  tags?: Maybe<StringTermFilter>;
  has?: Maybe<Array<Maybe<PostHasFilter>>>;
  and?: Maybe<Array<Maybe<PostFilter>>>;
  or?: Maybe<Array<Maybe<PostFilter>>>;
  not?: Maybe<PostFilter>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type UpdateCommentInput = {
  filter: CommentFilter;
  set?: Maybe<CommentPatch>;
  remove?: Maybe<CommentPatch>;
};

export type UpdatePostInput = {
  filter: PostFilter;
  set?: Maybe<PostPatch>;
  remove?: Maybe<PostPatch>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<AddUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  addPost?: Maybe<AddPostPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  addComment?: Maybe<AddCommentPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  addCategory?: Maybe<AddCategoryPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
  upsert?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationAddPostArgs = {
  input: Array<AddPostInput>;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationDeletePostArgs = {
  filter: PostFilter;
};


export type MutationAddCommentArgs = {
  input: Array<AddCommentInput>;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationDeleteCommentArgs = {
  filter: CommentFilter;
};


export type MutationAddCategoryArgs = {
  input: Array<AddCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  filter: CategoryFilter;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AddPostPayload = {
  __typename?: 'AddPostPayload';
  post?: Maybe<Array<Maybe<Post>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddPostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddUserInput = {
  username: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  avatarImg?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
  comments?: Maybe<Array<CommentRef>>;
};


export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};
