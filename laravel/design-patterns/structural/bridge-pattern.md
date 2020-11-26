`Bridge pattern` focuses on preferring composition over abstraction. Pushing implementation details from one object to another object hierarchy.

```php
<?php
interface Battery{
    public function getVoltage():float;
}

class ButtonBattery implements Battery{
    //Wrist Watch
    public function getVoltage(): float
    {
        return 3;
    }
}

class AlkalineBattery implements Battery{
    //Remote Control
    public function getVoltage(): float
    {
        return 1.5;
    }
}

class LithiumIonBattery implements Battery{
    //Mobile phone
    public function getVoltage(): float
    {
        return 3.6;
    }
}

interface Device{
    public function __construct(Battery $battery);
    public function powerOn():string;
}

class WristWatch implements Device{
    private $battery;
    public function __construct(Battery $battery){
        $this->battery = $battery;
    }
    public function powerOn(): string
    {
        return 'Wrist Watch powered on with a battery that offers '.$this->battery->getVoltage().' V volatage';
    }
}

class RemoteControl implements Device{
    private $battery;
    public function __construct(Battery $battery){
        $this->battery = $battery;
    }
    public function powerOn(): string
    {
        return 'Remote Control powered on with a battery that offers '.$this->battery->getVoltage().' V volatage';
    }
}

class MobilePhone implements Device{
    private $battery;
    public function __construct(Battery $battery){
        $this->battery = $battery;
    }
    public function powerOn(): string
    {
        return 'Mobile Phone powered on with a battery that offers '.$this->battery->getVoltage().' V volatage';
    }
}

$wristWatch = new WristWatch(new ButtonBattery());
print_r($wristWatch->powerOn());



```
