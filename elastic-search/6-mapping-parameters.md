# Mapping Parameters

## format parameter for Date Fields
Ex:
```json
{
  "mappings":{
    "properties":{
      "created_at":{
        "type":"date",
        "format":"epoch_second or dd/MM/yyyy"
      }
    }
  }
}
```
## properties parameter

<pre>
  {
  "mappings":{
    <span style="color:red;"><b>"properties"</b></span>:{
      "created_at":{
        "type":"date",
        "format":"epoch_second or dd/MM/yyyy"
      }
    }
  }
}
</pre>
