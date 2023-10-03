The 4 core values of Agile

- People over tools and processes
- working software rather than prioritizing documentation
- customer collaboration over contract negotiation
- responding to changes over following a plan

Agile teams are interdisciplinary, including engineers, software testing professionals, product managers, and more.

Agile software delivery methodology focuses on delivering software in small increments or iterations called **sprints**.

##### What is the Difference Between Requirements and Scope?
- **`Requirements`** define the product behavior. They indicate what users want from the product.
- **`Scope`** indicates the activities that need to be done in order to achieve the requirements.


 #### Three criteria to divide tests into different types:
 - The amount of knowledge they have of the system
 - The type of requirement they verify
 - The scope of the functionality they cover

#### System Knowledge:
Automated tests can be divided into three categories according to how much internal knowledge they have of the system they test.
- **Black box:** The internals of the system are treated as unknown by the test writer, as they would be to a user. These tests won't change if the internals of the system change.
 - Also called _functional testing_.
 - _Boundary value analysis:_ This technique tests the software’s behavior at the boundaries of its input domain. For example, if a function accepts an integer between 1 and 100, boundary value analysis would test the function with inputs of 1, 2, 100, and 101.
 - _Equivalence partitioning:_ This technique divides the input domain into equivalence classes and tests the software with representative inputs from each class. For example, if a function accepts integers between 1 and 100, equivalence partitioning would test the function with inputs of 0, 1, 50, 100, and 101.  
- **White Box:** The internals of the system are fully known to the test writer, most likely a developer. Used to uncover hidden errors black box tests cannot find. These are prone to system internal change.
- **Gray Box:** a mixture of black box and white box tests. The internals of the system are partially known to the test writer, as they would be to a specialist or privileged user. usually more time-consuming to write and run as well.
