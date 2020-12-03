import React from "react"
import { useParams } from "react-router-dom"
import {
  Container,
  Header,
  Loader,
  Image,
  Label,
  Comment,
} from "semantic-ui-react"
import { useGetPostQuery } from "./types/operations"
import { DateTime } from "luxon"
import { avatar } from "./avatar"

interface PostParams {
  id: string
}

export function Post() {
  const { id } = useParams<PostParams>()

  const { data, loading, error } = useGetPostQuery({
    variables: { id: id },
  })
  if (loading) return <Loader active />
  if (error) {
    return (
      <Container text className="mt-24">
        <Header as="h1">Ouch! That page didn't load</Header>
        <p>Here's why : {error.message}</p>
      </Container>
    )
  }
  if (!data?.getPost) {
    return (
      <Container text className="mt-24">
        <Header as="h1">This is not a post</Header>
        <p>You've navigated to a post that doesn't exist.</p>
        <p>That most likely means that the id {id} isn't the id of post.</p>
      </Container>
    )
  }

  let dateStr = "at some unknown time"
  if (data.getPost.datePublished) {
    dateStr =
      DateTime.fromISO(data.getPost.datePublished).toRelative() ?? dateStr
  }

  const paras = data.getPost.text.split("\n").map((str) => (
    <p key={str}>
      {str}
      <br />
    </p>
  ))

  const comments = (
    <div className="mt-3">
      {data.getPost.comments.map((comment) => {
        return (
          <Comment.Group key={comment.id}>
            <Comment>
              <Comment.Avatar
                src={avatar(comment.author.avatarImg)}
                size="mini"
              />
              <Comment.Content>
                <Comment.Author as="a">
                  {comment.author.displayName}
                </Comment.Author>
                <Comment.Text>{comment.text}</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        )
      })}
    </div>
  )

  return (
    <div className="layout-margin">
      <div>
        <Header as="h1">{data.getPost.title} </Header>
        <span className="ui red empty mini circular label"></span>
        {" " + data.getPost?.category.name + "  "}
        {data.getPost?.tags
          ?.trim()
          .split(/\s+/)
          .map((tag) => {
            if (tag !== "") {
              return (
                <Label as="a" basic color="grey" key={tag}>
                  {tag}
                </Label>
              )
            }
          })}
      </div>
      <Header as="h4" image>
        <Image
          src={avatar(data.getPost?.author.avatarImg)}
          rounded
          size="mini"
        />
        <Header.Content>
          {data.getPost?.author.displayName}
          <Header.Subheader>{dateStr}</Header.Subheader>
        </Header.Content>
      </Header>
      {paras}
      {comments}
    </div>
  )
}
