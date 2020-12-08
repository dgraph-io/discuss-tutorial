import React, { useState } from "react"
import {
  Image,
  Modal,
  Form,
  Button,
  Dropdown,
  Loader,
  TextArea,
} from "semantic-ui-react"
import { Link } from "react-router-dom"
import {
  useAddPostMutation,
  AllPostsQuery,
  useCategoriesQuery,
  AllPostsDocument,
} from "./types/operations"

export function AppHeader() {
  const [createPost, setCreatePost] = useState(false)
  const [title, setTitle] = useState("")
  const [category, setCategory]: any = useState("")
  const [text, setText]: any = useState("")
  const [tags, setTags]: any = useState("")

  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategoriesQuery()

  const addPostButton = () => {
    if (categoriesLoading) {
      return <Loader active />
    } else if (categoriesError) {
      return <div>`Error! ${categoriesError.message}`</div>
    } else {
      return (
        <Button className="dgraph-btn mr-1" onClick={() => setCreatePost(true)}>
          Create Post
        </Button>
      )
    }
  }

  const categoriesOptions = categoriesData?.queryCategory?.map((category) => {
    return { key: category?.id, text: category?.name, value: category?.id }
  })

  const [addPost] = useAddPostMutation({
    update(cache, { data }) {
      const existing = cache.readQuery<AllPostsQuery>({
        query: AllPostsDocument,
      })

      cache.writeQuery({
        query: AllPostsDocument,
        data: {
          queryPost: [
            ...(data?.addPost?.post ?? []),
            ...(existing?.queryPost ?? []),
          ],
        },
      })
    },
  })

  const submitPost = () => {
    setCreatePost(false)
    const post = {
      text: text,
      title: title,
      tags: tags,
      category: { id: category },
      author: { username: "TestUser" },
      datePublished: new Date().toISOString(),
      comments: [],
    }
    addPost({ variables: { post: post } })
  }

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
                options={categoriesOptions}
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
  )

  return (
    <>
      {showCreatePost}
      <div className="ui clearing segment header-seg">
        <h3 className="ui right floated header header-seg-right">
          <span>{addPostButton()}</span>
        </h3>
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
  )
}
