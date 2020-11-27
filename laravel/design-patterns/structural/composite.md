```php
interface Car{
    public function __construct(string $model);
    public function setPrice(float $price);
    public function setMaker(string $maker);
    public function getPrice():float;
    public function getMaker():string;
    public function getModel():string;
}

class Sedan implements Car{
    private string $model = '';
    private float $price = 0;
    private string $maker = '';
    public function __construct(string $model){
        $this->model = $model;
    }
    public function setPrice(float $price){
        $this->price = $price;
    }
    public function setMaker(string $maker){
        $this->maker = $maker;
    }
    public function getPrice():float{
        return $this->price;
    }
    public function getMaker():string{
        return $this->maker;
    }
    public function getModel():string{
        return $this->model;
    }
}

class Coupe implements Car{
    private string $model = '';
    private float $price = 0;
    private string $maker = '';
    public function __construct(string $model){
        $this->model = $model;
    }
    public function setPrice(float $price){
        $this->price = $price;
    }
    public function setMaker(string $maker){
        $this->maker = $maker;
    }
    public function getPrice():float{
        return $this->price;
    }
    public function getMaker():string{
        return $this->maker;
    }
    public function getModel():string{
        return $this->model;
    }
}

class Hatchback implements Car{
    private string $model = '';
    private float $price = 0;
    private string $maker = '';
    public function __construct(string $model){
        $this->model = $model;
    }
    public function setPrice(float $price){
        $this->price = $price;
    }
    public function setMaker(string $maker){
        $this->maker = $maker;
    }
    public function getPrice():float{
        return $this->price;
    }
    public function getMaker():string{
        return $this->maker;
    }
    public function getModel():string{
        return $this->model;
    }
}

class ShowRoom{
    private array $cars = [];
    private array $soldCars = [];
    public function addCar(Car $car){
        $this->cars[] = $car;
    }
    public function sellCar(Car $car){
        $this->soldCars[] = $car;
    }
    public function netSales():float{
        $netSales = 0;
        foreach ($this->soldCars as $key => $car) {
            $netSales += $car->getPrice();
        }
        return $netSales;
    }
}

$showRoom = new ShowRoom();
$car = new Sedan('');
```
