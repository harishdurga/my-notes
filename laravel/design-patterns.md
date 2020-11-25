### Design Patterns Types:
- Creational Patterns
- Structural Patterns
- Behavioural Patterns

#### Creational Patterns:
Class instantiation, Hiding the creation logic Example: Factory, Builder, Prototype and Singleton

#### Structural Patterns:
Composition between objects, Usage of interfaces and abstract classes Ex: Adapter, Bridge, Decorator, Facade and Proxy

#### Behavioural Pattern:
Communication between objects, Usages of mostly interfaces Ex: Command, Iterator, Observer, State and Strategy

### Design Patterns In Laravel:
- Factory Pattern
- Builder(Manager) Pattern
- Strategy Pattern
- Provider Pattern
- Repository Pattern
- Iterator Pattern
- Singleton Pattern
- Presenter Pattern

#### Factory Pattern:
Laravel is already using the factory pattern whenever we are returning a view
ex: `return view('home',['message'=>'hello'])`
```php
interface PizzaFactoryContract(){
	public function make(array $topping=[]):Pizza
}

class PizzaFactory implements PizzaFactoryContract(){
	public function make(array $topping=[]):Pizza{
	return new Pizza($topping)
}
}
```
