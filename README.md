# logger

## Зачем надо логгировать
Вы запустили серверное приложение у которого нету GUI для отображения своего состояния, а знать очень хочется. Самое простое и очевидное решение, выводить какие то сообщения куда то — stdout/stderr, файлики, syslog, что-то более извращенное. Это и есть логирование (спасибо кэп).

Перечислю основные задачи, которые могут решаться при помощи логгирования:

1. Анализ поведения и производительности. Здесь надо заметить, что для анализа производительности, лучше использовать проббирование (н-р twitter zipkin получает данные через пробы в коде). К поведению относится все, что сейчас происходит. 
2. Анализ и диагностика проблем. Тут очевидно — в приложении критическая ситуация 1/0 (причем не важно когда она произошла, приложение вот вот издохнет), что делать? Правильно — залоггировать это. О об этом подробнее чуть ниже. 
3. Всякие левые сценарии использования.


## Уровни логов
Очевидно, что не всякое сообщение имеет одинаковую важность. Обычно большинству приложении достаточно 5 уровней логгов — я использую название уровней к которым привык:
1. `ERROR` — приложение в критическом положении, требуется внимание человека для продолжения. Появляется довольно редко, но метко. Я использую его для очень низкоуровневых вещей или для необработанных исключений
2. `WARN` — произошло что-то необычное, выбивающееся из обычного сценария, но приложение умное и восстановило свою работу само. Я использую этот уровень в обрабочиках ошибок.
3. `INFO` — что сейчас происходит
4. `DEBUG` — что сейчас происходит, более подробно
5. `TRACE` — пишем как в твиттер, все что не попадя.
