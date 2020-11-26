An abstract factory pattern is a creational pattern where we will create a factory of factories. 

```php
<?php
interface Vehicle
{
    public function getDescription(): string;
}

class Car implements Vehicle
{
    public function getDescription(): string
    {
        return "This is a car";
    }
}

class Train implements Vehicle
{
    public function getDescription(): string
    {
        return "This is a train";
    }
}

class Ship implements Vehicle
{
    public function getDescription(): string
    {
        return 'This is a ship';
    }
}

class AirPlane implements Vehicle
{
    public function getDescription(): string
    {
        return 'This is an Air Plane';
    }
}

interface Driver
{
    public function getDescription(): string;
}

class CarDriver implements Driver
{
    public function getDescription(): string
    {
        return 'This is a car driver';
    }
}

class LocoPilot implements Driver
{
    public function getDescription(): string
    {
        return 'This is a Loco pilot';
    }
}

class Captain implements Driver
{
    public function getDescription(): string
    {
        return 'This is a Ship Captain';
    }
}

class Pilot implements Driver
{
    public function getDescription(): string
    {
        return 'This is a pilot';
    }
}

interface TripPlannerFactory
{
    public function getVehicle(): Vehicle;
    public function getDriver(): Driver;
}

class RoadTripPlannerFactory implements TripPlannerFactory
{
    public function getVehicle(): Vehicle
    {
        return new Car();
    }
    public function getDriver(): Driver
    {
        return new CarDriver();
    }
}

class RailTripPlannerFactory implements TripPlannerFactory
{
    public function getVehicle(): Vehicle
    {
        return new Train();
    }
    public function getDriver(): Driver
    {
        return new LocoPilot();
    }
}

class SeaTripPlannerFactory implements TripPlannerFactory
{
    public function getVehicle(): Vehicle
    {
        return new Ship();
    }
    public function getDriver(): Driver
    {
        return new Captain();
    }
}

class AirTripPlannerFactory implements TripPlannerFactory
{
    public function getVehicle(): Vehicle
    {
        return new AirPlane();
    }
    public function getDriver(): Driver
    {
        return new Pilot();
    }
}

//Let's say we want to go on a road trip
$roadTripPlannerFactory = new RoadTripPlannerFactory();
$vehicle = $roadTripPlannerFactory->getVehicle();
$driver = $roadTripPlannerFactory->getDriver();

```
