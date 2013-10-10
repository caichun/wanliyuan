 //getElementById　的简写
var $_$= function (name) {
	return document.getElementById(name);
};
/*  
**    ====================================
**    类名：CLASS_LIANDONG_YAO  
**    功能：多级连动菜单  
**    作者：YAODAYIZI     
**/  
 
 function CLASS_LIANDONG_YAO(array)
  {
   //数组，联动的数据源
   this.array=array; 
   this.indexName='';
   this.obj='';
   //设置子SELECT
 // 参数：当前onchange的SELECT ID，要设置的SELECT ID
   this.subSelectChange=function(selectName1,selectName2)
   {
    var obj1=$_$(selectName1);
    var obj2=$_$(selectName2);
    var objName=this.toString();
    var me=this;
  
    obj1.onchange=function()
    {
     
     me.optionChange(this.options[this.selectedIndex].value,obj2.id)
    }
   }
   //设置第一个SELECT
 // 参数：indexName指选中项,selectName指select的ID
   this.firstSelectChange=function(indexName,selectName)  
   {
   this.obj=$_$(selectName);
   this.indexName=indexName;
   this.optionChange(this.indexName,this.obj.id)
   }
  
  // indexName指选中项,selectName指select的ID
   this.optionChange=function (indexName,selectName)
   {
    var obj1=$_$(selectName);
    var me=this;
    obj1.length=0;
    obj1.options[0]=new Option("-请选择-",'');
    for(var i=0;i<this.array.length;i++)
    { 
    
     if(this.array[i][1]==indexName)
     {
      obj1.options[obj1.length]=new Option(this.array[i][2],this.array[i][0]);
     }
    }
   }
   
  }