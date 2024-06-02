# Первоначальная установка
- npm i

# Запуск
- node main [ссылка] [имя файла] [параметр]

# Параметры
- lowest (Низкое, только видео)
- highest (Высокое, только видео)
- lowestaudio (Низкое, только звук)
- highestaudio (Высокое, только звук)
- lowestvideo (Низкое, видео и звук)
- highestvideo (Высокое, видео и звук)

# Примерный способ загрузки видео с ютуба
- node main https://www.youtube.com/watch?v=dQw4w9WgXcQ rickroll highestvideo

# Стандартные параметры
- Параметры которые будут устанавливаться, если вы не вставляли какие то параметры в вызов main.js будут взяты из ytd-settings.ini
- По умолчанию
- - file
- - highestvideo
- - saved/