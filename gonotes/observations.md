### Read a string Input:
```go
var x string
fmt.Scanf("%s", &x)
```
### Converting String To Float
```go
var xf float64
xf, _ = strconv.ParseFloat(x, 64)
```
### Math package for calculating the modulus
```go
math.Mod(xf, 5)
```
