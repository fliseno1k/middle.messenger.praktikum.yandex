## Netlify [demo](https://stellular-valkyrie-23f4da.netlify.app/index/)



## Описание

Модуль 1: Веб-чат. Приложение носит исключительно образовательный характер - написанно для более глубокого погружения во frontend технологии и принципы работы современных веб-приложений. На данный момент находится в стадии разработки и представляет из себя набор html-шаблонов базовых страниц.

## UI макеты

Прототипирование страниц и основных элементов будущего приложения выполнено с помощью Figma. Доступ к макетам можно получить по [ссылке](https://www.figma.com/file/hACW8nVbblm43fCsaYttme/Yandex-Middle-Frontend-Developer-course.-1-st-module?node-id=12%3A899).

## Установка и основные команды

Основные npm-команды для работы с проектом:

- `npm install` — установка зависимостей проекта,
- `npm dev` — запуск dev-сервера,
- `npm run build` — сборка проекта
- `npm r

## Структура проекта

Краткое описание файловой структуры проекта:

|___server.js - express сервер для раздачи статики<br />
|___src - ресурсы проекта<br />
  |___components - библиотека переиспользуемых компонентов<br />
  | |___pages - компоненты, привязанные к конкретной странице<br />
  | |___shared - компоненты, переиспользуемые на разных страницах<br />
  |___pages - шаблоны страниц<br />
  |___styles - все css/scss файлы проекта<br />