export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: any;
  Int64: any;
};

export type AddCategoryInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<PermissionRef>>>;
  posts?: InputMaybe<Array<InputMaybe<PostRef>>>;
};

export type AddCategoryPayload = {
  __typename?: 'AddCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCategoryPayloadCategoryArgs = {
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CategoryOrder>;
};

export type AddCommentInput = {
  author: UserRef;
  commentsOn: PostRef;
  text: Scalars['String'];
};

export type AddCommentPayload = {
  __typename?: 'AddCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCommentPayloadCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CommentOrder>;
};

export type AddPermissionInput = {
  forCategory?: InputMaybe<CategoryRef>;
  role: Role;
  user: UserRef;
};

export type AddPermissionPayload = {
  __typename?: 'AddPermissionPayload';
  numUids?: Maybe<Scalars['Int']>;
  permission?: Maybe<Array<Maybe<Permission>>>;
};


export type AddPermissionPayloadPermissionArgs = {
  filter?: InputMaybe<PermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type AddPostInput = {
  author: UserRef;
  category: CategoryRef;
  comments: Array<CommentRef>;
  datePublished?: InputMaybe<Scalars['DateTime']>;
  downvotes: Array<UserRef>;
  tags?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
  upvotes: Array<UserRef>;
};

export type AddPostPayload = {
  __typename?: 'AddPostPayload';
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type AddPostPayloadPostArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};

export type AddUserInput = {
  avatarImg?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  downvoted?: InputMaybe<Array<PostRef>>;
  posts?: InputMaybe<Array<PostRef>>;
  roles?: InputMaybe<Array<InputMaybe<PermissionRef>>>;
  upvoted?: InputMaybe<Array<PostRef>>;
  username: Scalars['String'];
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type AddUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  isPublic?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Permission>>>;
  permissionsAggregate?: Maybe<PermissionAggregateResult>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsAggregate?: Maybe<PostAggregateResult>;
};


export type CategoryPermissionsArgs = {
  filter?: InputMaybe<PermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CategoryPermissionsAggregateArgs = {
  filter?: InputMaybe<PermissionFilter>;
};


export type CategoryPostsArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};


export type CategoryPostsAggregateArgs = {
  filter?: InputMaybe<PostFilter>;
};

export type CategoryAggregateResult = {
  __typename?: 'CategoryAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  and?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CategoryHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<StringTermFilter>;
  not?: InputMaybe<CategoryFilter>;
  or?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
};

export enum CategoryHasFilter {
  IsPublic = 'isPublic',
  Name = 'name',
  Permissions = 'permissions',
  Posts = 'posts'
}

export type CategoryOrder = {
  asc?: InputMaybe<CategoryOrderable>;
  desc?: InputMaybe<CategoryOrderable>;
  then?: InputMaybe<CategoryOrder>;
};

export enum CategoryOrderable {
  Name = 'name'
}

export type CategoryPatch = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<PermissionRef>>>;
  posts?: InputMaybe<Array<InputMaybe<PostRef>>>;
};

export type CategoryRef = {
  id?: InputMaybe<Scalars['ID']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<PermissionRef>>>;
  posts?: InputMaybe<Array<InputMaybe<PostRef>>>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  commentsOn: Post;
  id: Scalars['ID'];
  text: Scalars['String'];
};


export type CommentAuthorArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type CommentCommentsOnArgs = {
  filter?: InputMaybe<PostFilter>;
};

export type CommentAggregateResult = {
  __typename?: 'CommentAggregateResult';
  count?: Maybe<Scalars['Int']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
};

export type CommentFilter = {
  and?: InputMaybe<Array<InputMaybe<CommentFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CommentHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<CommentFilter>;
  or?: InputMaybe<Array<InputMaybe<CommentFilter>>>;
};

export enum CommentHasFilter {
  Author = 'author',
  CommentsOn = 'commentsOn',
  Text = 'text'
}

export type CommentOrder = {
  asc?: InputMaybe<CommentOrderable>;
  desc?: InputMaybe<CommentOrderable>;
  then?: InputMaybe<CommentOrder>;
};

export enum CommentOrderable {
  Text = 'text'
}

export type CommentPatch = {
  author?: InputMaybe<UserRef>;
  commentsOn?: InputMaybe<PostRef>;
  text?: InputMaybe<Scalars['String']>;
};

export type CommentRef = {
  author?: InputMaybe<UserRef>;
  commentsOn?: InputMaybe<PostRef>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']>>;
  graphql?: InputMaybe<Scalars['String']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  ge?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  le?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCategoryPayloadCategoryArgs = {
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CategoryOrder>;
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCommentPayloadCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CommentOrder>;
};

export type DeletePermissionPayload = {
  __typename?: 'DeletePermissionPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  permission?: Maybe<Array<Maybe<Permission>>>;
};


export type DeletePermissionPayloadPermissionArgs = {
  filter?: InputMaybe<PermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type DeletePostPayloadPostArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']>;
  ge?: InputMaybe<Scalars['Int64']>;
  gt?: InputMaybe<Scalars['Int64']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']>>>;
  le?: InputMaybe<Scalars['Int64']>;
  lt?: InputMaybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory?: Maybe<AddCategoryPayload>;
  addComment?: Maybe<AddCommentPayload>;
  addPermission?: Maybe<AddPermissionPayload>;
  addPost?: Maybe<AddPostPayload>;
  addUser?: Maybe<AddUserPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deletePermission?: Maybe<DeletePermissionPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updatePermission?: Maybe<UpdatePermissionPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationAddCategoryArgs = {
  input: Array<AddCategoryInput>;
};


export type MutationAddCommentArgs = {
  input: Array<AddCommentInput>;
};


export type MutationAddPermissionArgs = {
  input: Array<AddPermissionInput>;
};


export type MutationAddPostArgs = {
  input: Array<AddPostInput>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteCategoryArgs = {
  filter: CategoryFilter;
};


export type MutationDeleteCommentArgs = {
  filter: CommentFilter;
};


export type MutationDeletePermissionArgs = {
  filter: PermissionFilter;
};


export type MutationDeletePostArgs = {
  filter: PostFilter;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdatePermissionArgs = {
  input: UpdatePermissionInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Permission = {
  __typename?: 'Permission';
  forCategory?: Maybe<Category>;
  role: Role;
  user: User;
};


export type PermissionForCategoryArgs = {
  filter?: InputMaybe<CategoryFilter>;
};


export type PermissionUserArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type PermissionAggregateResult = {
  __typename?: 'PermissionAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type PermissionFilter = {
  and?: InputMaybe<Array<InputMaybe<PermissionFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PermissionHasFilter>>>;
  not?: InputMaybe<PermissionFilter>;
  or?: InputMaybe<Array<InputMaybe<PermissionFilter>>>;
  role?: InputMaybe<Role_Hash>;
};

export enum PermissionHasFilter {
  ForCategory = 'forCategory',
  Role = 'role',
  User = 'user'
}

export type PermissionPatch = {
  forCategory?: InputMaybe<CategoryRef>;
  role?: InputMaybe<Role>;
  user?: InputMaybe<UserRef>;
};

export type PermissionRef = {
  forCategory?: InputMaybe<CategoryRef>;
  role?: InputMaybe<Role>;
  user?: InputMaybe<UserRef>;
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  category: Category;
  comments: Array<Comment>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  datePublished?: Maybe<Scalars['DateTime']>;
  downvotes: Array<User>;
  downvotesAggregate?: Maybe<UserAggregateResult>;
  id: Scalars['ID'];
  tags?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
  upvotes: Array<User>;
  upvotesAggregate?: Maybe<UserAggregateResult>;
};


export type PostAuthorArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type PostCategoryArgs = {
  filter?: InputMaybe<CategoryFilter>;
};


export type PostCommentsArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CommentOrder>;
};


export type PostCommentsAggregateArgs = {
  filter?: InputMaybe<CommentFilter>;
};


export type PostDownvotesArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};


export type PostDownvotesAggregateArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type PostUpvotesArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};


export type PostUpvotesAggregateArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type PostAggregateResult = {
  __typename?: 'PostAggregateResult';
  count?: Maybe<Scalars['Int']>;
  datePublishedMax?: Maybe<Scalars['DateTime']>;
  datePublishedMin?: Maybe<Scalars['DateTime']>;
  tagsMax?: Maybe<Scalars['String']>;
  tagsMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
  titleMax?: Maybe<Scalars['String']>;
  titleMin?: Maybe<Scalars['String']>;
};

export type PostFilter = {
  and?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PostHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<PostFilter>;
  or?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  tags?: InputMaybe<StringTermFilter>;
  text?: InputMaybe<StringFullTextFilter>;
  title?: InputMaybe<StringTermFilter>;
};

export enum PostHasFilter {
  Author = 'author',
  Category = 'category',
  Comments = 'comments',
  DatePublished = 'datePublished',
  Downvotes = 'downvotes',
  Tags = 'tags',
  Text = 'text',
  Title = 'title',
  Upvotes = 'upvotes'
}

export type PostOrder = {
  asc?: InputMaybe<PostOrderable>;
  desc?: InputMaybe<PostOrderable>;
  then?: InputMaybe<PostOrder>;
};

export enum PostOrderable {
  DatePublished = 'datePublished',
  Tags = 'tags',
  Text = 'text',
  Title = 'title'
}

export type PostPatch = {
  author?: InputMaybe<UserRef>;
  category?: InputMaybe<CategoryRef>;
  comments?: InputMaybe<Array<CommentRef>>;
  datePublished?: InputMaybe<Scalars['DateTime']>;
  downvotes?: InputMaybe<Array<UserRef>>;
  tags?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  upvotes?: InputMaybe<Array<UserRef>>;
};

export type PostRef = {
  author?: InputMaybe<UserRef>;
  category?: InputMaybe<CategoryRef>;
  comments?: InputMaybe<Array<CommentRef>>;
  datePublished?: InputMaybe<Scalars['DateTime']>;
  downvotes?: InputMaybe<Array<UserRef>>;
  id?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  upvotes?: InputMaybe<Array<UserRef>>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCategory?: Maybe<CategoryAggregateResult>;
  aggregateComment?: Maybe<CommentAggregateResult>;
  aggregatePermission?: Maybe<PermissionAggregateResult>;
  aggregatePost?: Maybe<PostAggregateResult>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getCategory?: Maybe<Category>;
  getComment?: Maybe<Comment>;
  getPost?: Maybe<Post>;
  getUser?: Maybe<User>;
  queryCategory?: Maybe<Array<Maybe<Category>>>;
  queryComment?: Maybe<Array<Maybe<Comment>>>;
  queryPermission?: Maybe<Array<Maybe<Permission>>>;
  queryPost?: Maybe<Array<Maybe<Post>>>;
  queryUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryAggregateCategoryArgs = {
  filter?: InputMaybe<CategoryFilter>;
};


export type QueryAggregateCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
};


export type QueryAggregatePermissionArgs = {
  filter?: InputMaybe<PermissionFilter>;
};


export type QueryAggregatePostArgs = {
  filter?: InputMaybe<PostFilter>;
};


export type QueryAggregateUserArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  username: Scalars['String'];
};


export type QueryQueryCategoryArgs = {
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CategoryOrder>;
};


export type QueryQueryCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CommentOrder>;
};


export type QueryQueryPermissionArgs = {
  filter?: InputMaybe<PermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQueryPostArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};


export type QueryQueryUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export enum Role {
  Administrator = 'ADMINISTRATOR',
  Reader = 'READER',
  Writer = 'WRITER'
}

export type Role_Hash = {
  eq?: InputMaybe<Role>;
  in?: InputMaybe<Array<InputMaybe<Role>>>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  aggregateComment?: Maybe<CommentAggregateResult>;
  getComment?: Maybe<Comment>;
  queryComment?: Maybe<Array<Maybe<Comment>>>;
};


export type SubscriptionAggregateCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
};


export type SubscriptionGetCommentArgs = {
  id: Scalars['ID'];
};


export type SubscriptionQueryCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CommentOrder>;
};

export type UpdateCategoryInput = {
  filter: CategoryFilter;
  remove?: InputMaybe<CategoryPatch>;
  set?: InputMaybe<CategoryPatch>;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCategoryPayloadCategoryArgs = {
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CategoryOrder>;
};

export type UpdateCommentInput = {
  filter: CommentFilter;
  remove?: InputMaybe<CommentPatch>;
  set?: InputMaybe<CommentPatch>;
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CommentOrder>;
};

export type UpdatePermissionInput = {
  filter: PermissionFilter;
  remove?: InputMaybe<PermissionPatch>;
  set?: InputMaybe<PermissionPatch>;
};

export type UpdatePermissionPayload = {
  __typename?: 'UpdatePermissionPayload';
  numUids?: Maybe<Scalars['Int']>;
  permission?: Maybe<Array<Maybe<Permission>>>;
};


export type UpdatePermissionPayloadPermissionArgs = {
  filter?: InputMaybe<PermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UpdatePostInput = {
  filter: PostFilter;
  remove?: InputMaybe<PostPatch>;
  set?: InputMaybe<PostPatch>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type UpdatePostPayloadPostArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  remove?: InputMaybe<UserPatch>;
  set?: InputMaybe<UserPatch>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export type User = {
  __typename?: 'User';
  avatarImg?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  downvoted?: Maybe<Array<Post>>;
  downvotedAggregate?: Maybe<PostAggregateResult>;
  posts?: Maybe<Array<Post>>;
  postsAggregate?: Maybe<PostAggregateResult>;
  roles?: Maybe<Array<Maybe<Permission>>>;
  rolesAggregate?: Maybe<PermissionAggregateResult>;
  upvoted?: Maybe<Array<Post>>;
  upvotedAggregate?: Maybe<PostAggregateResult>;
  username: Scalars['String'];
};


export type UserDownvotedArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};


export type UserDownvotedAggregateArgs = {
  filter?: InputMaybe<PostFilter>;
};


export type UserPostsArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};


export type UserPostsAggregateArgs = {
  filter?: InputMaybe<PostFilter>;
};


export type UserRolesArgs = {
  filter?: InputMaybe<PermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserRolesAggregateArgs = {
  filter?: InputMaybe<PermissionFilter>;
};


export type UserUpvotedArgs = {
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PostOrder>;
};


export type UserUpvotedAggregateArgs = {
  filter?: InputMaybe<PostFilter>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  avatarImgMax?: Maybe<Scalars['String']>;
  avatarImgMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  displayNameMax?: Maybe<Scalars['String']>;
  displayNameMin?: Maybe<Scalars['String']>;
  usernameMax?: Maybe<Scalars['String']>;
  usernameMin?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  has?: InputMaybe<Array<InputMaybe<UserHasFilter>>>;
  not?: InputMaybe<UserFilter>;
  or?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  username?: InputMaybe<StringHashFilter>;
};

export enum UserHasFilter {
  AvatarImg = 'avatarImg',
  DisplayName = 'displayName',
  Downvoted = 'downvoted',
  Posts = 'posts',
  Roles = 'roles',
  Upvoted = 'upvoted',
  Username = 'username'
}

export type UserOrder = {
  asc?: InputMaybe<UserOrderable>;
  desc?: InputMaybe<UserOrderable>;
  then?: InputMaybe<UserOrder>;
};

export enum UserOrderable {
  AvatarImg = 'avatarImg',
  DisplayName = 'displayName',
  Username = 'username'
}

export type UserPatch = {
  avatarImg?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  downvoted?: InputMaybe<Array<PostRef>>;
  posts?: InputMaybe<Array<PostRef>>;
  roles?: InputMaybe<Array<InputMaybe<PermissionRef>>>;
  upvoted?: InputMaybe<Array<PostRef>>;
};

export type UserRef = {
  avatarImg?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  downvoted?: InputMaybe<Array<PostRef>>;
  posts?: InputMaybe<Array<PostRef>>;
  roles?: InputMaybe<Array<InputMaybe<PermissionRef>>>;
  upvoted?: InputMaybe<Array<PostRef>>;
  username?: InputMaybe<Scalars['String']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};
