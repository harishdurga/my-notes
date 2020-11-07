# Java Introduction

### Primitive Types
There are 8 primitive data types in Java. int, boolean, float, short, long, char, byte, double. A primitive data type is the most basic data type.

### Wrapper Classes
Java wraps primitive types will these classes there by providing additional funcationality. For each of these 8 primitive types one wrapper class is there.
Ex:
```java
int intMinNumber = Integer.MIN_VALUE;
int intMaxNumber = Integer.MAX_VALUE;
```

### Overflow And Underflow
When we try to store a value that is greater than the maxium value that can be stored in a variable it will overflow.
Ex:
```java
System.out.println("Overflow "+(intMaxNumber+1));
//Output: -2147483648
```
When we try to store a value that is lesses than the minimum value that can be stored in a variable of type it will underflow.
Ex:
```java
int intMinNumber = Integer.MIN_VALUE;
int intMaxNumber = Integer.MAX_VALUE;
System.out.println("Underflow "+(intMinNumber-1));
//Output: 2147483647
```

#### We can use underscores in large integers for better readibility. Ex:`int test = 214_7_48_3647;`

### Casting
With casting we can covert on data type into another data type.
Ex:
```java
int myNumber = 25;
byte myNewNumber = (byte) myNumber;
```
