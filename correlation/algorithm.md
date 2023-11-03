# Correlation

When two sets of data are strongly linked together.

[More info](https://www.mathsisfun.com/data/correlation.html)

## Formula

$$ r = \frac{\sum{(X_i - \bar{X})(Y_i - \bar{Y})}}{\sqrt{\sum{(X_i - \bar{X})^2}\sum{(Y_i - \bar{Y})^2}}} $$
$$ \bar{X} = {\sum{X_i} \over N} $$
$$ \bar{Y} = {\sum{Y_i} \over N} $$

## Algorithm

- Save memory for n, x, y, meanX, meanY, sumX, sumY
- Request total number of array -> (n)
- Request element of array (x) until reach (n)
- Request element of array (y) until reach (n)
- Sum-up x until reach (n) -> sumX
- Sum-up y until reach (n) -> sumY
- Calculate sumX / n -> meanX
- Calculate sumY / n -> meanY
- Calculate (x[i] - meanX) * (y[i] - meanY)-> numerator
- Sum-up (x[i] - meanX)^2 -> denominator1
- Sum-up (y[i] - meanY)^2 -> denominator2
- Calculate numerator / sqrt(denominator1 * denominator2) -> r
- Print r
