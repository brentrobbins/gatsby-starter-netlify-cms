import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlogTest = ({blog}) => {
  console.log({blog})
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
        edges {
          node {
            frontmatter {
              title

            }
          }
        }
      }
    }
    `
  )
  console.log({allMarkdownRemark})
  const test = allMarkdownRemark.edges.filter(f => blog.includes(f.node.frontmatter.title))
  console.log(test)
  return (
    <div>
      <h1>test</h1>
      {allMarkdownRemark.edges.filter(f => blog.includes(f.node.frontmatter.title)).map(test => (
       <div key={test.node.frontmatter.title}> {test.node.frontmatter.title} </div>
      ))}
    </div>
  )
}

export default BlogTest