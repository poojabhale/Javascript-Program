var _response = {
    error : [],
    status : [],
    input : [],
    result : []
}
var empty=()=>
{
    _response.error.pop();
    _response.status.pop();
    _response.status.pop();
    _response.input.pop();
    _response.input.pop();
    _response.result.pop();

}
module.exports = {
    squarenumber : function(a){
        empty();
        if(a>='a'&& a<='z'||a>='A'&& a<='Z')
        {
            _response.error.push("001:first element should be number");
            _response.status.push('not ok');
        }
        else
        {
         _response.error.push('none');
         _response.status.push('ok');
         var res=a*a;
         _response.result.push(res);
     }
         
         _response.input.push(a);
         return _response;
     },

    multnumber : function(a,b){
        empty();
        if(a>='a'&& a<='z'||a>='A'&& a<='Z')
        {
            _response.error.push("001:first element should be number");
            _response.status.push('not ok');
        }
        if(b>='a'&& b<='z'||b>='A'&& b<='Z')
        {
            _response.error.push("002:second element should be number");
            _response.status.push('not ok');
        }
       
       else
       {
        _response.error.push('none');
        _response.status.push('ok');
        var res=a*b;
        _response.result.push(res);
    }
        
    _response.input.push(a,b);
        return _response;
    },

    powernumber : function(a,b){
        empty();
        if(a>='a'&& a<='z'||a>='A'&& a<='Z')
        {
            _response.error.push("001:first element should be number");
            _response.status.push('not ok');
        }
        if(b>='a'&& b<='z'||b>='A'&& b<='Z')
        {
            _response.error.push("002:second element should be number");
            _response.status.push('not ok');
        }
       
       else
       {
        _response.error.push('none');
        _response.status.push('ok');
        var res=a**b;
        _response.result.push(res);
    }
        
    _response.input.push(a,b);
        return _response;

    },
    cubenumber : function(a){
        empty();
        
        if(a>='a'&& a<='z'||a>='A'&& a<='Z')
    {
        _response.error.push("001: element should be number");
        _response.status.push('not ok');
        _response.input.push(a);
    }
    else
    {
     _response.error.push('none');
     _response.status.push('ok');
     _response.input.push(a);
     var res=a*a*a;
     _response.result.push(res);
 }

     return _response;
 

    },
};