# Calculator

1. Ссылка на задание: 

2. Для запуска приложения локально:

```
npm install
npm run build:dev
npm run serve
```

3. Структура папок:

Index.js лежит в корне src;
В src 2 папки: со стилями и вспомогательными функциями.

4. Функционал: 
    Из математических функций реализованы: деление, умножение, вычитание, сложение, процент, смена знака;

    Деление, умножение, вычитание, сложение можно использовать последовательно, не нажимая на знак равенства;

    Смена знака используется для первого введенного числа либо полученного результата;

    Процент вычисляется при использовании в выражениях (например: 5 + 5% = 5.25; 5 * 5% = 0.25), не применяется к первому введенному числу, вызывается при клике на знак равно;

Также реализованы:
    * поддержка ввода с клавиатуры
    * смена цветовой темы
    *подсветка/затемнение клавиш, на которые нажимает пользователь


5. Демо: https://viktorykings-calculator.netlify.app/