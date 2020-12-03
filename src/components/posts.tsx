import React from "react"
import {
  Header,
  Label,
  Loader,
  Image,
  Table,
  Container,
} from "semantic-ui-react"
import { useAllPostsQuery } from "./types/operations"
import { Link } from "react-router-dom"
import { avatar } from "./avatar"

export function PostFeed() {
  const { data, loading, error } = useAllPostsQuery()
  if (loading) return <Loader active />
  if (error) {
    return (
      <Container text className="mt-24">
        <Header as="h1">Ouch! That page didn't load</Header>
        <p>Here's why : {error.message}</p>
      </Container>
    )
  }

  const items = data?.queryPost?.map((post) => {
    const likes = Math.floor(Math.random() * 10)
    const replies = post?.commentsAggregate?.count
    const tagsArray = post?.tags?.trim().split(/\s+/) || []

    return (
      <Table.Row key={post?.id}>
        <Table.Cell>
          <Link
            to={{
              pathname: "/post/" + post?.id,
            }}
          >
            <Header as="h4" image>
              <Image src={avatar(post?.author.avatarImg)} rounded size="mini" />
              <Header.Content>
                {post?.title}
                <Header.Subheader>{post?.author.displayName}</Header.Subheader>
              </Header.Content>
            </Header>
          </Link>
        </Table.Cell>
        <Table.Cell>
          <span className="ui red empty mini circular label"></span>{" "}
          {" " + post?.category.name}
        </Table.Cell>
        <Table.Cell>
          {tagsArray.map((tag) => {
            if (tag !== "") {
              return (
                <Label as="a" basic color="grey" key={tag}>
                  {tag}
                </Label>
              )
            }
            return " "
          })}
        </Table.Cell>
        <Table.Cell>
          <p>
            <i className="heart outline icon"></i> {likes} Like
            {likes === 1 ? "" : "s"}
          </p>
          <p>
            {" "}
            <i className="comment outline icon"></i> {replies}{" "}
            {replies === 1 ? "Reply" : "Replies"}
          </p>
        </Table.Cell>
      </Table.Row>
    )
  })

  return (
    <>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Posts</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Tags</Table.HeaderCell>
            <Table.HeaderCell>Responses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{items}</Table.Body>
      </Table>
    </>
  )
}
