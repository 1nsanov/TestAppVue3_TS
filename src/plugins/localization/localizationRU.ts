import Ilocalization from "./interface.localization"
export default class localizationRU implements Ilocalization {
  header = { home: 'Главная', posts: 'Посты', about: 'О нас' }
  listPost = 'Список постов'
  createPost = 'Создать пост'
  sort = 'Сортировка'
  sortByTitle = 'По названию'
  sortByBody = 'По описанию'
  post = {
    delete: 'Удалить',
    titlePost: 'Название',
    bodyPost: 'Описание',
  }
  placeholderSearch = 'Поиск постов'
}


