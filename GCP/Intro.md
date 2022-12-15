# GCP
## Traits Of A Cloud

```mermaid
graph LR
    A(Traits Of A Cloud Provider) --> B(On-demand and self-service computing resources for customers)
    A --> C(Access to resources over the internet from any where)
    A -->D(Resources get allocated out from a pool)
    A -->E(Elasticty of the resources - Scale up or down)
    A -->F(Pay for only used resources or reserve as they go)
```

### Data Center Hierarchy
```mermaid
graph TD
    A(GCP)
    subgraph Locations
    A --> B(North America)
    A --> C(South America)
    A --> D(Europe)
    A --> E(Asia)
    A --> Australia
    end
    subgraph Regions
    D --> I(Europe-west2)
    end
    subgraph Zones
    I --> F(Europe-west2a)
    I --> G(Europe-west2b)
    I --> H(Europe-west2c)
    end
```
Any application can be deployed across multiple zones for app redundacy. Some of the services can also be deployed across different regions so that app can be 
accessible even when the one of the region is down.
<blockquote>
    GCP has around 103 zones and 34 regions. We can find the upto date info on locations at <a href="cloud.google.com/about/locations">cloud.google.com/about/locations</a> 
</blockquote>

### Dates
ES supports three formats
1. date without time
2. date with time
3. milliseconds since the epoch(long)

By default UTC timezone is assumed and date must be formatted according to ISO 8601 spec

