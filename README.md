# **Макет магазина**

## Минимальные требования
### Обычные пользователи
* Должны видеть список всех товаров, я представляю это как блоки, в которых отображены картинка, название, короткое описание, цена.
* Должны иметь возможность просмотреть товар. Он должен как минимум иметь все вышеперечисленное.
* Должны иметь возможность купить товар, после чего у них спрашивалось бы имя, номер телефона и город проживания.

### Зарегистрированных пользователей `нет`

### Администраторы
* Должны иметь возможность создавать товары, назначать им цену, название, описание и изображение.
* Должны иметь возможность редактировать и удалять товары в случае чего, при этом в случае редактирование цены или удаления товара на активные заказы это никак не должно влиять.
* Должны видеть заявки на заказ в виде списка/таблицы, где указывались бы ссылки на товар, которые пользователи хотят приобрести.

---

В случае выполнения этой части можно подобавлять атрибутов товарам, возможность зарегистрироваться, иметь личный кабинет, историю покупок.
Админам тоже можно назначить модераторские возможности

---

## Комментарии

> **mrexox 24.03.2018:**
> В качестве скрипта миграции используется perl-овый скрипт (мигрирует только в одном направлении) могу дописать потом

---

## Компоненты

Состоит всё приложение из сервера *(src/server)* и клиента *(src/client)*.
Сервер - обычное нодовское приложение.
Клиент - приложение реакта.

Чтобы собрать все зависимости желательно установить *yarn*. 
> sudo apt-get install yarn **# ubuntu/debian/elementary**
> sudo yum -y install yarn **# centos/fedora**

Далее для установки зависимостей в корне папки.
> yarn install

Для запуска приложения.
> yarn start

Для запуска только сервера.
> yarn server

Для запуска только фронта (имеет смысл лишь в плане работы со стилями).
> yarn react

---
Всё по серверу хрантся в папке *src/server*.
Для работы с базой (SQL-код, подключение) предназначены скрипты в src/sever/db.
Всё остальное тематически по файлам.

Всё по фронту хранится в папке *src/client*
На официальном сайте [Redux](regux.js.org) описано, как строить приложения на связке react-redux.
