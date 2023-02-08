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
<<<<<<< Updated upstream
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
=======
  DateTime: any;
>>>>>>> Stashed changes
  Int64: any;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
};

<<<<<<< Updated upstream
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
=======















export type AddCategoryInput = {
  isPublic?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<PermissionRef>>>;
  posts?: Maybe<Array<Maybe<PostRef>>>;
};

export type AddCategoryPayload = {
  __typename?: 'AddCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CategoryOrder>;
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
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};

export type AddPermissionInput = {
  forCategory?: Maybe<CategoryRef>;
  role: Role;
  user: UserRef;
};

export type AddPermissionPayload = {
  __typename?: 'AddPermissionPayload';
  numUids?: Maybe<Scalars['Int']>;
  permission?: Maybe<Array<Maybe<Permission>>>;
};


export type AddPermissionPayloadPermissionArgs = {
  filter?: Maybe<PermissionFilter>;
>>>>>>> Stashed changes
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

<<<<<<< Updated upstream

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
=======
export type AddPostInput = {
  author: UserRef;
  category: CategoryRef;
  comments: Array<CommentRef>;
  datePublished?: Maybe<Scalars['DateTime']>;
  likes?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type AddPostPayload = {
  __typename?: 'AddPostPayload';
>>>>>>> Stashed changes
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


<<<<<<< Updated upstream
export type DeleteCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  order?: Maybe<CategoryOrder>;
=======
export type AddPostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
>>>>>>> Stashed changes
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};

<<<<<<< Updated upstream
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
=======
export type AddUserInput = {
  avatarImg?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<PostRef>>>;
  roles?: Maybe<Array<Maybe<PermissionRef>>>;
  username: Scalars['String'];
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
>>>>>>> Stashed changes
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


<<<<<<< Updated upstream
export type DeleteCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
=======
export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
>>>>>>> Stashed changes
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<UserOrder>;
};

<<<<<<< Updated upstream
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
=======
export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  rule?: Maybe<Scalars['String']>;
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
  filter?: Maybe<PermissionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CategoryPermissionsAggregateArgs = {
  filter?: Maybe<PermissionFilter>;
};


export type CategoryPostsArgs = {
  filter?: Maybe<PostFilter>;
>>>>>>> Stashed changes
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};


<<<<<<< Updated upstream
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
=======
export type CategoryPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};

export type CategoryAggregateResult = {
  __typename?: 'CategoryAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  and?: Maybe<Array<Maybe<CategoryFilter>>>;
  has?: Maybe<Array<Maybe<CategoryHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<StringTermFilter>;
  not?: Maybe<CategoryFilter>;
  or?: Maybe<Array<Maybe<CategoryFilter>>>;
};

export enum CategoryHasFilter {
  IsPublic = 'isPublic',
  Name = 'name',
  Permissions = 'permissions',
  Posts = 'posts'
}
>>>>>>> Stashed changes

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

<<<<<<< Updated upstream
export enum CommentHasFilter {
  Text = 'text',
  CommentsOn = 'commentsOn',
  Author = 'author'
}
=======
export enum CategoryOrderable {
  Name = 'name'
}

export type CategoryPatch = {
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<PermissionRef>>>;
  posts?: Maybe<Array<Maybe<PostRef>>>;
};

export type CategoryRef = {
  id?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<PermissionRef>>>;
  posts?: Maybe<Array<Maybe<PostRef>>>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  commentsOn: Post;
  id: Scalars['ID'];
  text: Scalars['String'];
};
>>>>>>> Stashed changes

export enum UserHasFilter {
  Username = 'username',
  DisplayName = 'displayName',
  AvatarImg = 'avatarImg',
  Posts = 'posts',
  Comments = 'comments'
}

<<<<<<< Updated upstream
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
=======
export type CommentAuthorArgs = {
  filter?: Maybe<UserFilter>;
};


export type CommentCommentsOnArgs = {
  filter?: Maybe<PostFilter>;
};

export type CommentAggregateResult = {
  __typename?: 'CommentAggregateResult';
  count?: Maybe<Scalars['Int']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
};

export type CommentFilter = {
  and?: Maybe<Array<Maybe<CommentFilter>>>;
  has?: Maybe<Array<Maybe<CommentHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<CommentFilter>;
  or?: Maybe<Array<Maybe<CommentFilter>>>;
>>>>>>> Stashed changes
};

export enum CommentHasFilter {
  Author = 'author',
  CommentsOn = 'commentsOn',
  Text = 'text'
}

<<<<<<< Updated upstream
export type QueryGetPostArgs = {
  id: Scalars['ID'];
=======
export type CommentOrder = {
  asc?: Maybe<CommentOrderable>;
  desc?: Maybe<CommentOrderable>;
  then?: Maybe<CommentOrder>;
>>>>>>> Stashed changes
};

export enum CommentOrderable {
  Text = 'text'
}

<<<<<<< Updated upstream
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
=======
export type CommentPatch = {
  author?: Maybe<UserRef>;
  commentsOn?: Maybe<PostRef>;
  text?: Maybe<Scalars['String']>;
};

export type CommentRef = {
  author?: Maybe<UserRef>;
  commentsOn?: Maybe<PostRef>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type CustomHttp = {
  body?: Maybe<Scalars['String']>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  graphql?: Maybe<Scalars['String']>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: Maybe<Mode>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
  url: Scalars['String'];
};


export type DateTimeFilter = {
  between?: Maybe<DateTimeRange>;
  eq?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
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
  filter?: Maybe<CategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CategoryOrder>;
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
>>>>>>> Stashed changes
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

<<<<<<< Updated upstream
export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  post?: Maybe<Array<Maybe<Post>>>;
=======
export type DeleteCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};

export type DeletePermissionPayload = {
  __typename?: 'DeletePermissionPayload';
  msg?: Maybe<Scalars['String']>;
>>>>>>> Stashed changes
  numUids?: Maybe<Scalars['Int']>;
  permission?: Maybe<Array<Maybe<Permission>>>;
};


<<<<<<< Updated upstream
export type UpdatePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
=======
export type DeletePermissionPayloadPermissionArgs = {
  filter?: Maybe<PermissionFilter>;
>>>>>>> Stashed changes
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

<<<<<<< Updated upstream
export type AddCommentInput = {
  text: Scalars['String'];
  commentsOn: PostRef;
  author: UserRef;
=======
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
>>>>>>> Stashed changes
};

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

<<<<<<< Updated upstream
export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
=======
export type DeletePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
>>>>>>> Stashed changes
};

export type PostOrder = {
  asc?: Maybe<PostOrderable>;
  desc?: Maybe<PostOrderable>;
  then?: Maybe<PostOrder>;
};

<<<<<<< Updated upstream
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
=======
export type DeleteUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<UserOrder>;
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
  between?: Maybe<FloatRange>;
  eq?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
>>>>>>> Stashed changes
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
};

<<<<<<< Updated upstream
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
=======
export type GenerateQueryParams = {
  aggregate?: Maybe<Scalars['Boolean']>;
  get?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}


export type Int64Filter = {
  between?: Maybe<Int64Range>;
  eq?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  in?: Maybe<Array<Maybe<Scalars['Int64']>>>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
>>>>>>> Stashed changes
};

export type IntFilter = {
  between?: Maybe<IntRange>;
  eq?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
};

<<<<<<< Updated upstream
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
=======
export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: Maybe<MultiPolygonRef>;
  polygon?: Maybe<PolygonRef>;
>>>>>>> Stashed changes
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

<<<<<<< Updated upstream
export type AddCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
=======
export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
>>>>>>> Stashed changes
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type MutationAddCommentArgs = {
  input: Array<AddCommentInput>;
};

<<<<<<< Updated upstream
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
=======

export type MutationAddPermissionArgs = {
  input: Array<AddPermissionInput>;
};


export type MutationAddPostArgs = {
  input: Array<AddPostInput>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
  upsert?: Maybe<Scalars['Boolean']>;
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
  filter?: Maybe<CategoryFilter>;
};


export type PermissionUserArgs = {
  filter?: Maybe<UserFilter>;
};

export type PermissionAggregateResult = {
  __typename?: 'PermissionAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type PermissionFilter = {
  and?: Maybe<Array<Maybe<PermissionFilter>>>;
  has?: Maybe<Array<Maybe<PermissionHasFilter>>>;
  not?: Maybe<PermissionFilter>;
  or?: Maybe<Array<Maybe<PermissionFilter>>>;
  role?: Maybe<Role_Hash>;
>>>>>>> Stashed changes
};

export enum PermissionHasFilter {
  ForCategory = 'forCategory',
  Role = 'role',
  User = 'user'
}

<<<<<<< Updated upstream
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
=======
export type PermissionPatch = {
  forCategory?: Maybe<CategoryRef>;
  role?: Maybe<Role>;
  user?: Maybe<UserRef>;
};

export type PermissionRef = {
  forCategory?: Maybe<CategoryRef>;
  role?: Maybe<Role>;
  user?: Maybe<UserRef>;
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
>>>>>>> Stashed changes
};

export type PointListRef = {
  points: Array<PointRef>;
};

<<<<<<< Updated upstream
export type PostCommentsAggregateArgs = {
  filter?: Maybe<CommentFilter>;
=======
export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
>>>>>>> Stashed changes
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

<<<<<<< Updated upstream
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
=======
export type Post = {
  __typename?: 'Post';
  author: User;
  category: Category;
  comments: Array<Comment>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  datePublished?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  likes?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
};


export type PostAuthorArgs = {
  filter?: Maybe<UserFilter>;
};


export type PostCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
};


export type PostCommentsArgs = {
  filter?: Maybe<CommentFilter>;
>>>>>>> Stashed changes
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};

<<<<<<< Updated upstream
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
=======

export type PostCommentsAggregateArgs = {
  filter?: Maybe<CommentFilter>;
};

export type PostAggregateResult = {
  __typename?: 'PostAggregateResult';
  count?: Maybe<Scalars['Int']>;
  datePublishedMax?: Maybe<Scalars['DateTime']>;
  datePublishedMin?: Maybe<Scalars['DateTime']>;
  likesAvg?: Maybe<Scalars['Float']>;
  likesMax?: Maybe<Scalars['Int']>;
  likesMin?: Maybe<Scalars['Int']>;
  likesSum?: Maybe<Scalars['Int']>;
  tagsMax?: Maybe<Scalars['String']>;
  tagsMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
  titleMax?: Maybe<Scalars['String']>;
  titleMin?: Maybe<Scalars['String']>;
};

export type PostFilter = {
  and?: Maybe<Array<Maybe<PostFilter>>>;
  has?: Maybe<Array<Maybe<PostHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<PostFilter>;
  or?: Maybe<Array<Maybe<PostFilter>>>;
  tags?: Maybe<StringTermFilter>;
  text?: Maybe<StringFullTextFilter>;
  title?: Maybe<StringTermFilter>;
};

export enum PostHasFilter {
  Author = 'author',
  Category = 'category',
  Comments = 'comments',
  DatePublished = 'datePublished',
  Likes = 'likes',
  Tags = 'tags',
  Text = 'text',
  Title = 'title'
}

export type PostOrder = {
  asc?: Maybe<PostOrderable>;
  desc?: Maybe<PostOrderable>;
  then?: Maybe<PostOrder>;
};

export enum PostOrderable {
  DatePublished = 'datePublished',
  Likes = 'likes',
  Tags = 'tags',
  Text = 'text',
  Title = 'title'
}

export type PostPatch = {
  author?: Maybe<UserRef>;
  category?: Maybe<CategoryRef>;
  comments?: Maybe<Array<CommentRef>>;
  datePublished?: Maybe<Scalars['DateTime']>;
  likes?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostRef = {
  author?: Maybe<UserRef>;
  category?: Maybe<CategoryRef>;
  comments?: Maybe<Array<CommentRef>>;
  datePublished?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  likes?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
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
>>>>>>> Stashed changes
};

export enum CategoryOrderable {
  Name = 'name'
}

<<<<<<< Updated upstream
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
=======
export type QueryAggregateCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
};


export type QueryAggregateCommentArgs = {
  filter?: Maybe<CommentFilter>;
>>>>>>> Stashed changes
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

<<<<<<< Updated upstream
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
=======
export type QueryAggregatePermissionArgs = {
  filter?: Maybe<PermissionFilter>;
};


export type QueryAggregatePostArgs = {
  filter?: Maybe<PostFilter>;
};


export type QueryAggregateUserArgs = {
  filter?: Maybe<UserFilter>;
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
  filter?: Maybe<CategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CategoryOrder>;
};


export type QueryQueryCommentArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};


export type QueryQueryPermissionArgs = {
  filter?: Maybe<PermissionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryQueryPostArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};


export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<UserOrder>;
};

export enum Role {
  Administrator = 'ADMINISTRATOR',
  Reader = 'READER',
  Writer = 'WRITER'
}

export type Role_Hash = {
  eq?: Maybe<Role>;
  in?: Maybe<Array<Maybe<Role>>>;
};

export type StringExactFilter = {
  between?: Maybe<StringRange>;
  eq?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
>>>>>>> Stashed changes
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

<<<<<<< Updated upstream
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
=======
export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  filter: CategoryFilter;
  remove?: Maybe<CategoryPatch>;
  set?: Maybe<CategoryPatch>;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CategoryOrder>;
};

export type UpdateCommentInput = {
  filter: CommentFilter;
  remove?: Maybe<CommentPatch>;
  set?: Maybe<CommentPatch>;
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};

export type UpdatePermissionInput = {
  filter: PermissionFilter;
  remove?: Maybe<PermissionPatch>;
  set?: Maybe<PermissionPatch>;
};

export type UpdatePermissionPayload = {
  __typename?: 'UpdatePermissionPayload';
  numUids?: Maybe<Scalars['Int']>;
  permission?: Maybe<Array<Maybe<Permission>>>;
>>>>>>> Stashed changes
};


export type MutationDeleteCategoryArgs = {
  filter: CategoryFilter;
};

<<<<<<< Updated upstream
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
=======
export type UpdatePostInput = {
  filter: PostFilter;
  remove?: Maybe<PostPatch>;
  set?: Maybe<PostPatch>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type UpdatePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  remove?: Maybe<UserPatch>;
  set?: Maybe<UserPatch>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
>>>>>>> Stashed changes
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


<<<<<<< Updated upstream
export type AddPostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
=======
export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<UserOrder>;
};

export type User = {
  __typename?: 'User';
  avatarImg?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsAggregate?: Maybe<PostAggregateResult>;
  roles?: Maybe<Array<Maybe<Permission>>>;
  rolesAggregate?: Maybe<PermissionAggregateResult>;
  username: Scalars['String'];
};


export type UserPostsArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};


export type UserPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};


export type UserRolesArgs = {
  filter?: Maybe<PermissionFilter>;
>>>>>>> Stashed changes
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

<<<<<<< Updated upstream
export type AddUserInput = {
  username: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  avatarImg?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
  comments?: Maybe<Array<CommentRef>>;
=======

export type UserRolesAggregateArgs = {
  filter?: Maybe<PermissionFilter>;
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
  and?: Maybe<Array<Maybe<UserFilter>>>;
  has?: Maybe<Array<Maybe<UserHasFilter>>>;
  not?: Maybe<UserFilter>;
  or?: Maybe<Array<Maybe<UserFilter>>>;
  username?: Maybe<StringHashFilter>;
};

export enum UserHasFilter {
  AvatarImg = 'avatarImg',
  DisplayName = 'displayName',
  Posts = 'posts',
  Roles = 'roles',
  Username = 'username'
}

export type UserOrder = {
  asc?: Maybe<UserOrderable>;
  desc?: Maybe<UserOrderable>;
  then?: Maybe<UserOrder>;
>>>>>>> Stashed changes
};

export enum UserOrderable {
  AvatarImg = 'avatarImg',
  DisplayName = 'displayName',
  Username = 'username'
}

<<<<<<< Updated upstream
export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
=======
export type UserPatch = {
  avatarImg?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<PostRef>>>;
  roles?: Maybe<Array<Maybe<PermissionRef>>>;
};

export type UserRef = {
  avatarImg?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<PostRef>>>;
  roles?: Maybe<Array<Maybe<PermissionRef>>>;
  username?: Maybe<Scalars['String']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
>>>>>>> Stashed changes
};
