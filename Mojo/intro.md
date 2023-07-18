So in mojo we declare variables in two ways. `let` and `var`.
#### Let
is used to create immutable variables. So below won't work.
```python
fn myFunc():
  let a:Int = 2
  a = 3
```
