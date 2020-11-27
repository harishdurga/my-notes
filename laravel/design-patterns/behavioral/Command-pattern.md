```php
<?php
/**
 * Receiver object
 */
class Telivision{
    public function turnOn(){
        print_r("Turning on the Telivison!\n");
    }
    public function turnOff(){
        print_r("Turning off the Telivison\n");
    }
    public function changeChannel(int $channel){
        print_r("Changing channel to $channel\n");
    }
}

interface Command{
    public function __construct(Telivision $telivision);
    public function execute();
}

class TurnOn implements Command{
    protected $telivision;
    public function __construct(Telivision $telivision)
    {
        $this->telivision = $telivision;
    }
    public function execute()
    {
        $this->telivision->turnOn();
    }
}

class TurnOff implements Command
{
    protected $telivision;
    public function __construct(Telivision $telivision)
    {
        $this->telivision = $telivision;
    }
    public function execute()
    {
        $this->telivision->turnOff();
    }
}

class ChangeChannel implements Command
{
    protected $telivision;
    protected $channel;
    public function __construct(Telivision $telivision)
    {
        $this->telivision = $telivision;
    }
    public function setChannel(int $channel){
        $this->channel = $channel;
    }
    public function execute()
    {
        $this->telivision->changeChannel($this->channel);
    }
}

class RemoteControl
{
    public function submit(Command $command)
    {
        $command->execute();
    }
}

$telivision = new Telivision();
$remoteControl = new RemoteControl();
//Turning on the television
$turnOn = new TurnOn($telivision);
$remoteControl->submit($turnOn);

//Changing the channel
$changeChannel = new ChangeChannel($telivision);
$changeChannel->setChannel(2);
$remoteControl->submit($changeChannel);

//Turning off the channel
$turnOff = new TurnOff($telivision);
$remoteControl->submit($turnOff);

```
