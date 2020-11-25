```php
<?php
interface PaymentGatewayInterface{
    public function __construct($key,$secret);
    public function process($orderID);
    public function confirm($orderID);
}

class NewPaymentGateway implements PaymentGatewayInterface
{
    private $key;
    private $secret;
    public function __construct($key,$secret)
    {
        $this->key = $key;
        $this->secret = $secret;
    }
    public function process($orderID){
        print_r("Processing Order: ".$orderID);
        return true;
    }
    public function confirm($orderID){
        print_r("Confirming Order: ".$orderID);
        return true;
    }
}

class OldPaymentGateway implements PaymentGatewayInterface
{
    private $key;
    private $secret;
    public function __construct($key,$secret)
    {
        $this->key = $key;
        $this->secret = $secret;
    }
    public function process($orderID){
        print_r("Processing Order: ".$orderID."\n");
        return true;
    }
    public function confirm($orderID){
        print_r("Confirming Order: ".$orderID."\n");
        return true;
    }
}


class PaymentGatewayFactory{
    public static function make($key,$secret){
        return new OldPaymentGateway($key,$secret);
    } 
}

$orderID = 'ABCD1234';
$paymentGateway = PaymentGatewayFactory::make('tigress123','teyeyAyygd788shhs');
$paymentGateway->process($orderID);
$paymentGateway->confirm($orderID);
```
