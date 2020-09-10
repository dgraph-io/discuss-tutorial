import React, { useState } from "react";
import {
  Image,
  Modal,
  Form,
  Button,
  Dropdown,
  Loader,
  TextArea,
} from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {
  useGetUserQuery,
  useUpdateUserMutation,
  useAddPostMutation,
  AllPostsDocument,
  AllPostsQuery,
  namedOperations,
  useQueryPermissionQuery,
} from "./types/operations";
import { avatar } from "./avatar";
import { useCategories } from "./categories";

export function AppHeader() {
  const [updateSettings, setUpdateSettings] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory]: any = useState("");
  const [text, setText]: any = useState("");

  const [name, setName] = useState("");
  const [avatarImg, setAvatarImg] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [adminStatus, setAdminStatus] = useState(false);
  const [tokenValue, setTokenValue] = useState("");
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getIdTokenClaims,
  } = useAuth0();

  const { data, loading, error } = useGetUserQuery({
    variables: { username: isAuthenticated ? user.email : "" },
  });
  const {
    data: perm,
    loading: permLoading,
  } = useQueryPermissionQuery();
  const [updateUserMutation] = useUpdateUserMutation({
    refetchQueries: [
      namedOperations.Query.getUser,
      namedOperations.Query.getPost,
      namedOperations.Query.allPosts,
    ],
  });
  const {
    allWriteableCategories,
    loading: catLoading,
    error: catError,
  } = useCategories(user?.email ?? "");
  const [tags, setTags]: any = useState("");

  const [addPost] = useAddPostMutation({
    update(cache, { data }) {
      const existing = cache.readQuery<AllPostsQuery>({
        query: AllPostsDocument,
      });

      cache.writeQuery({
        query: AllPostsDocument,
        data: {
          queryPost: [
            ...(data?.addPost?.post ?? []),
            ...(existing?.queryPost ?? []),
          ],
        },
      });
    },
  });

  const avatarsOptions = [];

  for (let i = 1; i < 9; i++) {
    avatarsOptions.push({
      key: `/${i}.svg`,
      text: `Avatar ${i}`,
      value: `/${i}.svg`,
      image: { avatar: true, src: `/${i}.svg` },
    });
  }

  if (loading || catLoading || permLoading) return <Loader active />;
  if (error) return <div>`Error! ${error.message}`</div>;
  if (catError) return <div>`Error! ${catError.message}`</div>;

  const currentSettings = () => {
    const permData = perm?.queryPermission;
    permData?.forEach(async (perm) => {
      if (perm?.user.username === user.email) {
        setAdminStatus(true);
        const token = isAuthenticated ? await getIdTokenClaims() : "";
        const tokenVal = token ? token.__raw : "";
        setTokenValue(tokenVal);
        return;
      }
    });

    setName(data?.getUser?.displayName ? data.getUser.displayName : "");
    setAvatarImg(
      data?.getUser?.avatarImg ? data.getUser.avatarImg : "/" + avatar + ".svg"
    );
    setCurrentUser(user.email);
  };

  const submitSettings = () => {
    setUpdateSettings(false);
    updateUserMutation({
      variables: {
        username: currentUser,
        user: { displayName: name, avatarImg: avatarImg },
      },
    });
  };

  const canAddPosts = isAuthenticated && allWriteableCategories.length > 0;

  const writableCategoriesOptions = allWriteableCategories.map((category) => {
    return { key: category?.id, text: category?.name, value: category?.id };
  });

  const submitPost = () => {
    setCreatePost(false);
    const post = {
      text: text,
      title: title,
      tags: tags,
      likes: 0,
      category: { id: category },
      author: { username: user.email },
      datePublished: new Date().toISOString(),
      comments: [],
    };
    addPost({ variables: { post: post } });
  };

  const showCreatePost = (
    <Modal
      onClose={() => setCreatePost(false)}
      onOpen={() => setCreatePost(true)}
      open={createPost}
    >
      <Modal.Header>Create Post</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input
                placeholder="Type title..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <Dropdown
                placeholder="You must select a category to continue..."
                fluid
                search
                selection
                options={writableCategoriesOptions}
                onChange={(e, data) => setCategory(data.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Tags (optional)</label>
              <input
                placeholder="Enter space separated tags..."
                onChange={(e) => setTags(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Your Message</label>
              <TextArea
                rows="3"
                placholder="Enter your message..."
                onChange={(e, data) => setText(data.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setCreatePost(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={submitPost}
          positive
        />
      </Modal.Actions>
    </Modal>
  );

  const showSettings = (
    <Modal
      onClose={() => setUpdateSettings(false)}
      onOpen={() => setUpdateSettings(true)}
      open={updateSettings}
    >
      <Modal.Header>Update Settings</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Display Name</label>
              <input
                placeholder="Update display name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Avatar</label>
              <Dropdown
                placeholder="You must select a cool avatar..."
                fluid
                selection
                options={avatarsOptions}
                defaultValue={avatarImg}
                onChange={(e, data) => setAvatarImg(data.value + "")}
              />
            </Form.Field>
            {adminStatus && tokenValue && (
              <Form.Field>
                <label>Token</label>
                <TextArea readOnly value={tokenValue} />
              </Form.Field>
            )}
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setUpdateSettings(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={submitSettings}
          positive
        />
      </Modal.Actions>
    </Modal>
  );

  const userItem = isAuthenticated ? (
    <span>
      {canAddPosts && (
        <span>
          <Button
            className="dgraph-btn mr-1"
            onClick={() => setCreatePost(true)}
          >
            Create Post
          </Button>
        </span>
      )}
      <Dropdown
        item
        trigger={
          <Image
            src={avatar(data?.getUser?.avatarImg)}
            avatar
            className="cursor-pointer"
          />
        }
      >
        <Dropdown.Menu>
          <Dropdown.Item>
            <div
              onClick={() => {
                currentSettings();
                setUpdateSettings(true);
              }}
            >
              Settings
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div onClick={() => logout()}>Logout</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </span>
  ) : (
    <span>
      <Button className="dgraph-btn" onClick={() => loginWithRedirect()}>
        Log In
      </Button>
    </span>
  );

  return (
    <>
      {showSettings}
      {showCreatePost}
      <div className="ui clearing segment header-seg">
        <h3 className="ui right floated header header-seg-right">{userItem}</h3>
        <h3 className="ui left floated header header-seg-left">
          <Link to="/">
            <div className="flex">
              <span>
                <Image size="tiny" src="/diggy.png" className="mr-5" />{" "}
              </span>
              <div>
                <p className="header-text">Dgraph</p>
                <p className="t-size">DISCUSS</p>
              </div>
            </div>
          </Link>
        </h3>
      </div>
    </>
  );
}
