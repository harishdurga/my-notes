`Builder Pattern` is a creational pattern which is used when there are several flavours of an object available or when the object instantiation involves multiple steps.

```php
<?php
class Car{
    private string $carType;
    private string $tyresType = 'allseason';
    private bool $airConditioning  = false;
    private bool $extraAirBags = false;
    private string $paintColor = 'white';
    private bool $audioSystem = false;
    private bool $navigationSystem = false;
    public function __construct(CarBuilder $builder)
    {
        $this->carType = $builder->carType;
        $this->tyresType = $builder->tyresType;
        $this->airConditioning = $builder->airConditioning;
        $this->extraAirBags = $builder->extraAirBags;
        $this->paintColor = $builder->paintColor;
        $this->audioSystem = $builder->audioSystem;
        $this->navigationSystem = $builder->navigationSystem;
    }
}

class CarBuilder{
    public string $carType;
    public string $tyresType = 'allseason';
    public bool $airConditioning  = false;
    public bool $extraAirBags = false;
    public string $paintColor = 'white';
    public bool $audioSystem = false;
    public bool $navigationSystem = false;
    public function __construct(string $carType){
        $this->carType = $carType;
    } 
    public function addTyresOfType(string $tyresType): CarBuilder
    {
        $this->tyresType = $tyresType;
        return $this;
    }
    public function addAirConditioning(): CarBuilder
    {
        $this->airConditioning = true;
        return $this;
    }
    public function addExtraAitBags(): CarBuilder
    {
        $this->extraAirBags = true;
        return $this;
    }
    public function addPaintColor(string $paintColor): CarBuilder
    {
        $this->paintColor = $paintColor;
        return $this;
    }
    public function addAudioSystem(): CarBuilder
    {
        $this->audioSystem = true;
        return $this;
    }
    public function addNavigationSystem(): CarBuilder
    {
        $this->navigationSystem = true;
        return $this;
    }

    public function build():Car
    {
        return new Car($this);
    }

}

$car = (new CarBuilder('sedan'))
            ->addAirConditioning()
            ->addAudioSystem()
            ->addNavigationSystem()
            ->addExtraAitBags()
            ->build();

```
Without builder pattern the instantiation of the Car object leads to Telescoping constructor anti-pattern.
Ex:
```php
$car = new Car('sedan',true,true,true,true,'black');
```
As we can see the constructor becomes messy with lot of parameters to pass.
