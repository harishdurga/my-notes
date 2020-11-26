Prototype pattern is all about cloning an existing object instead of creating a new one by going through all the instantiation logic.

```php
<?php
class ServerInstance
{
    private string $id;
    private int $storage;
    private int $memory;
    private int $noOfCores;
    public function setId(string $id){
        $this->id = $id;
    }
    public function setStorage(int $storage){
        $this->storage = $storage;
    }
    public function setMemory(int $memory){
        $this->memory = $memory;
    }
    public function setNoOfCores(int $noOfCores)
    {
        $this->noOfCores = $noOfCores;
    }
    public function getId():string
    {
        return $this->id;
    }
    public function getStorage():int
    {
        return $this->storage;
    }
    public function getMemory():int
    {
        return $this->memory;
    }
    public function getNoOfCores():int
    {
        return $this->noOfCores;
    }
}
$serverInstance = new ServerInstance();
$serverInstance->setId('123456789');
$serverInstance->setStorage(1024);
$serverInstance->setMemory(8);
$serverInstance->setNoOfCores(4);

//As it is a replica we want all the features to be same as the server instance except the id
$replicaInstance = clone $serverInstance;
$replicaInstance->setId('7788996655');
```
