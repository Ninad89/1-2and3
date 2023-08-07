## 1, 2, and 3

This utility joins array elements with `, ` and last element with `and`

Suppose if you want to join all elements of string array, but not just with the `,` . 

This utility is here to just solve that tiny problem.

### Let's see how to use.
```
import join from '1-2and3'

join(['1', '2', '3', '4']) // 1, 2, 3 and 4
join(['1', '2']) // 1 and 2
join(['1']) // 1
join([]) //
join(['1', '2', '3', '4'], ', ', '&') // 1, 2, 3 & 4
```
> Element separator can be customized by passing second parameter to function.

> Last element separator also can be customized by passing third argument to function


### License
MIT