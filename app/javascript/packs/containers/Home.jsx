import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import * as postsActions from '../actions/postsActions'
import Nav from './Nav'
import Post from '../components/Post'
import Posts from '../components/Posts'
import endpoints from '../config/endpoints'
import styles from '../styles/Home.scss'

class Home extends Component {
  componentWillMount() {
    this.props.unsetPost()
    this.props.fetchPosts(endpoints.posts)
  }

  render() {
    const { post, posts, setPost } = this.props
    return (
      <div className="d-flex" styleName="container">
        <Nav />
        <Posts post={post} posts={posts} setPost={setPost} />
        <Post post={post} />
      </div>
    )
  }
}

Home.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  setPost: PropTypes.func.isRequired,
  unsetPost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    post: state.post,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...postActions,
    ...postsActions
  }, dispatch)
}

Home = CSSModules(Home, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Home)