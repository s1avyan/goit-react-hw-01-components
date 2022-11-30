Используй этот шаблон React-проекта как стартовую точку своего приложения.

Создан репозиторий goit-react-hw-01-components. Компоненты всех заданий
рендерятся на одной странице, внутри общего контейнера - корневого компонента
<App>. При сдаче домашней работы есть ссылка на репозиторий с исходным кодом
проекта. В шапке репозитория есть ссылка на живую страницу на GitHub pages. При
посещении рабочей страницы (GitHub pages) задания, в консоли нет ошибок и
предупреждений. Для каждого компонента есть отдельная папка с файлом
React-компонента и файлом стилей. Для всех компонентов описаны propTypes. Все
что компонент ожидает в виде пропсов, передается ему при вызове. Имена
компонентов понятные, описательные. JS-код чистый и понятный, используется
Prettier. Стилизация выполнена CSS-модулями или Styled Components, поэтому
классы в результирующем DOM будут отличаться от примеров. 1 - Профиль социальной
сети Необходимо создать компонент Profile, с помощью которого мы могли бы
отображать информацию о пользователе социальной сети. Данные о пользователе
лежат в файле user.json.

component preview Описание компонента Profile Компонент должен принимать
несколько пропсов с информацией о пользователе:

username — имя пользователя tag — тег в социальной сети без @ location — город и
страна avatar — ссылка на изображение stats — объект с информацией об активности
Компонент должен создавать DOM элемент следующей структуры.

<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>

Пример использования import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

2- Секция статистики Создать компонет Statistics, который бы отображал
статистику по переданным пропам. Например, загрузки в облако по типу файлов,
посещение веб-страницы пользователями разных стран, финансовые траты и т. п.
Данные о статистике лежат в файле data.json.

component preview Описание компонента Statistics Компонент должен принимать два
пропа title и stats, в которых указывается заголовок и объект статистики.

title - не обязателен, и если он не передан, не должна рендериться разметка
заголовка <h2>. stats - массив объектов содержащих информацию о элементе
статистики. Может иметь произвольное кол-во элементов. Цвет фона элемента
статистики в оформлении можно пропустить, либо создать функцию для генерации
случайного цвета. Компонент должен создавать DOM элемент следующей структуры.

<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>

Пример использования import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />

3 - Список друзей Необходимо создать компонент FriendList, с помощью которого мы
могли бы отображать информацию о друзьях пользователя. Информация о друзьях
хранится в файле friends.json.

component preview Описание компонента FriendList Компонент должен принимать один
пропс friends - массив объектов друзей.

Компонент должен создавать DOM следующей структуры.

<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul>

Описание компонента FriendListItem Компонент должен принимать несколько пропов:

avatar - ссылка на аватар name - имя друга isOnline - буль сигнализирующий о
состоянии друга, в сети или нет. В зависимости от пропа isOnline, должен
меняться цвет фона span.status. Это можно сделать через разный CSS-класс или
Styled Components.

Компонент должен создавать DOM следующей структуры.

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>

Пример использования import friends from 'path/to/friends.json';

<FriendList friends={friends} />;

4 - История транзакций Необходимо создать компонент истории транзакций в личном
кабинете интернет банка.

component preview Данные для списка доступны в формате JSON в файле
transactions.json. Это массив объектов, где каждый объект описывает одну
транзакцию со следующими свойствами:

id — уникальный идентификатор транзакции type — тип транзакции amount - сумма
транзакции currency - тип валюты Описание компонента TransactionHistory
Необходимо создать компонент TransactionHistory принимающий один проп items -
массив объектов транзакций из transactions.json. Компонент создает разметку
таблицы. Каждая транзакция это строка таблицы. В примере приведена разметка двух
транзакций.

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

Пример использования import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;

**Read in other languages: [Русский](README.md), [Polska](README.pl.md),
[English](README.en.md), [Spanish](README.es.md).**

# React homework template

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Клонируй этот репозиторий.
3. Измени имя папки с `react-homework-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи базовые зависимости проекта командой `npm install`.
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и
деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда обновляется
ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого
необходимо в файле `package.json` отредактировать поле `homepage`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

### Маршрутизация

Если приложение использует библиотеку `react-router-dom` для маршрутизации,
необходимо дополнительно настроить компонент `<BrowserRouter>`, передав в пропе
`basename` точное название твоего репозитория. Слеши в начале и конце строки
обязательны.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит линтинг и сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.
