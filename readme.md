# Первоначальная установка
- npm i

# Запуск
- node main [ссылка] [имя файла] [параметр]

# Параметры
- - Низкое качество
- lowest (Звук и видео)
- lowestaudio (Звук)
- lowestvideo (Видео)

- - Высокое качество
- highest (Видео и Звук)
- highestaudio (Звук)
- highestvideo (Видео)

# Замечания
- Большая часть или многие видео в высоком качестве качаются без звуковой дорожки

# Примерный способ загрузки видео с ютуба
- node main https://www.youtube.com/watch?v=dQw4w9WgXcQ rickroll highestvideo

# Стандартные параметры
- Параметры которые будут устанавливаться, если вы не вставляли какие то параметры в вызов main.js будут взяты из ytd-settings.ini
- По умолчанию
- - file
- - highestvideo
- - saved/
