# Standard deviation

Deviation just means how far from the normal

[More info](https://www.mathsisfun.com/data/standard-deviation.html)

## Formula

$$ σ= \sqrt {\left(\sum x_i - μ \right)^2 \over N} $$

μ : Stands for mean  

## Algorithm

- Save place in memory for n, x, a, m, s, b, r
- Request total numbers for array --> (n)
- Request array elements until reach (n) --> (x)
- Sum x[i] + a --> (a)
- Calculate mean = a/n --> (m)
- Calculate sum of (x[i]-m)^2 --> (s)
- Divide (s) on (n) --> (b)
- Get square root of (b) --> (r)
- Print r
