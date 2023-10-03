The 4 core values of Agile

- People over tools and processes
- working software rather than prioritizing documentation
- customer collaboration over contract negotiation
- responding to changes over following a plan

Agile teams are interdisciplinary, including engineers, software testing professionals, product managers, and more.

Agile software delivery methodology focuses on delivering software in small increments or iterations called **sprints**.

##### What is the Difference Between Requirements and Scope?
- **`Requirements`** define the product behavior. They indicate what users want from the product.
- **`Scope`** indicates the activities that need to be done to achieve the requirements.


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
  - Also called _structural testing_.
  - _Statement coverage:_ This technique tests whether each statement in the software’s code has been executed at least once during testing.
  - _Branch coverage:_ This technique tests whether each branch in the software’s code has been executed at least once during testing. 
- **Gray Box:** a mixture of black box and white box tests. The internals of the system are partially known to the test writer, as they would be to a specialist or privileged user. usually more time-consuming to write and run as well.
  - _Regression testing:_ This technique tests whether changes to the software have introduced new bugs or caused existing bugs to reappear. It requires some knowledge of the software’s code and architecture but not as much as white-box testing.
  -_ Scenario-based testing:_ This technique tests the software’s behavior in specific scenarios or use cases. It requires some knowledge of the software’s code and architecture but not as much as white-box testing.

#### Requirement types
- **Functional Tests:** These tests cover the functionality of the system under test added during the sprint, with functional tests from prior sprints ensuring that there are no regressions in functionality in later sprints. These kinds of tests are usually black-box tests, as these tests should be written and run according to the functionality that a typical user has access to.
- **Non-functional tests:** These tests cover all the aspects of the system that are not covered by functional requirements but affect the user experience and functioning of the system. These tests cover aspects such as performance, usability, and security aspects. These kinds of tests are usually white-box tests, as they usually need to be formulated according to implementation details.

> Tests that verify the correctness of the system are known as functional tests, while tests that verify the usability and performance of the system are known as non-functional tests. Common non-functional tests are performance tests, load tests, and security tests.

>[INFO] Need to continue from testing pyramid. 


