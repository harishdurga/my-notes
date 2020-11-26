Structural patterns are focused towrds how an entity can use another entity. In other words "How to build a software component".

In `Adapter pattern` we use an adapter class to make two incompatible classes compatible.

```php
<?php
interface Language{
    public function greet():string;
}

class English implements Language{
    public function greet():string
    {
        return 'Hello'."\n";
    }
}
interface IndianLanguage{
    public function welcome():string;
}

class Hindi implements IndianLanguage{
    public function welcome(): string
    {
        return 'Namastae'."\n";
    }
}

//Now a forienger wants to greet a local. For this we need to create an Adapter or a Translator
class HindiTranslator implements Language{
    protected $language;
    public function __construct(IndianLanguage $language)
    {
        $this->language  = $language;
    }
    public function greet():string{
        return $this->language->welcome();
    }
}

$indianLanguage = new Hindi();
$hindiTranslator = new HindiTranslator($indianLanguage);
print_r($hindiTranslator->greet());

```
