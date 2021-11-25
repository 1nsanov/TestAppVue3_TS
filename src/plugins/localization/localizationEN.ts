import Ilocalization from "./interface.localization"
export default class localizationEN implements Ilocalization {
  header = { home: 'Home', posts: 'Posts', about: 'About' }
  listPost = 'List posts'
  createPost = 'Create post'
  sort = 'Sort'
  sortByTitle = 'By name'
  sortByBody = 'By description'
  post = {
    delete: 'Delete',
    titlePost: 'Name',
    bodyPost: 'Description'
  }
  placeholderSearch = 'Seatch posts'
}


