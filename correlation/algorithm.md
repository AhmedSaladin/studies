# Correlation

When two sets of data are strongly linked together.

[More info](https://www.mathsisfun.com/data/correlation.html)

## Formula

$$ r_{xy} = {\left ( n \sum x_iy_i - \sum x_i \sum y_i \right) \over \sqrt{n \sum x_i^2 - (\sum x_i)^2} \sqrt{n \sum y_i^2 - (\sum y_i)^2} } $$

## Algorithm

- Save memory for n, x, y, sumX, sumY
- Request total number of array -> (n)
- Request element of array (x) until reach (n)
- Request element of array (y) until reach (n)
- Sum-up x[i] until reach (n) -> sumX
- Sum-up y[i] until reach (n) -> sumY
- Calculate n \* sumX \* sumY - sumX \* sumY -> a
- Calculate n \* pow(sumX, 2) - pow(sumX, 2) -> b
- Calculate sqrt(b) -> b
- Calculate n \* pow(sumY, 2) - pow(sumY, 2) -> c
- Calculate sqrt(c) -> c
- Calculate a / b \* c -> r
- Print r
