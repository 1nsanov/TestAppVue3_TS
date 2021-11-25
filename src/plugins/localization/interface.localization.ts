interface Ilocalization {
  header: { home: string, posts: string, about: string },
  listPost: string
  createPost: string
  sort: string
  sortByTitle: string
  sortByBody: string
  post: {
    delete: string
    titlePost: string
    bodyPost: string
  }
  placeholderSearch: string
}
export default Ilocalization