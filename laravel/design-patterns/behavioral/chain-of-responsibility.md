```php
<?php
class Employee{
    protected $superior;
    protected $level;
    public function setNext(Employee $superior){
        $this->superior = $superior;
    }
    public function approve(int $requestLevel){
        if($this->canApprove($requestLevel)){
            echo sprintf('Approved level %s request using %s' . PHP_EOL, $requestLevel, get_called_class());
        }elseif($this->superior){
            echo sprintf('Couldn\'t Approve level %s request using %s' . PHP_EOL, $requestLevel, get_called_class());
            $this->superior->approve($requestLevel);
        }else{
            throw new Exception('None of the employees can approve this request');
        }
    }
    public function canApprove(int $requestLevel):bool{
        return $this->level > $requestLevel;
    }
}

class Developer extends Employee{
    protected $level;
    public function __construct(int $level)
    {
        $this->level = $level;
    }
}

class TeamLeader extends Employee{
    protected $level;
    public function __construct(int $level)
    {
        $this->level = $level;
    }
}

class Manager extends Employee{
    protected $level;
    public function __construct(int $level)
    {
        $this->level = $level;
    }
}

class VP extends Employee{
    protected $level;
    public function __construct(int $level)
    {
        $this->level = $level;
    }
}

$developer = new Developer(1);
$teamLeader = new TeamLeader(2);
$manager = new Manager(3);
$vp = new VP(4);
$developer->setNext($teamLeader);
$teamLeader->setNext($manager);
$manager->setNext($vp);

//Developer got a request with level 5
$developer->approve(3);

```
