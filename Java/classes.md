### Constructor
- A constructor like any other method can be overloaded.
#### Calling Construtor From Another Constructor
```java
public Bank(){
        this("00000000",0,"","","");
        System.out.println("Empty constructor called")
    }

public Bank(String accountNumber, double balance, String customerName, String email, String phoneNumber){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.customerName = customerName;
    this.email = email;
    this.phoneNumber = phoneNumber;
}
```
One thing to note here is that when calling one constrcutor from another the first line should be the call to the constructor and no other code statement is allowed.


##### Static Variables are not instance specific but shared among the instances
