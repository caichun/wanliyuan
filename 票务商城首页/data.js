 var array=new Array();//数据格式 ID，父级ID，名称
  array[0]=new Array("美食","根目录","美食"); 
  array[1]=new Array("购物","根目录","购物");
  array[2]=new Array("诺心甜品","美食","诺心甜品");
  array[3]=new Array("Mcake","美食","Mcake");
  array[4]=new Array("长宁店","诺心甜品","长宁店");
  array[5]=new Array("徐汇店","诺心甜品","徐汇店"); 
  array[6]=new Array("闵行店","Mcake","闵行店");
  array[7]=new Array("宝山店","Mcake","宝山店");
  array[8]=new Array("2013-9-5","长宁店","2013-9-5");
  array[9]=new Array("2013-9-3","徐汇店","2013-9-3");
  array[10]=new Array("2013-9-4","闵行店","2013-9-4");
  array[11]=new Array("2013-9-2","宝山店","2013-9-2");
  array[12]=new Array("第一场","2013-9-5","第一场");
  array[13]=new Array("第三场","2013-9-3","第三场");
  array[14]=new Array("书店","购物","书店");
  array[15]=new Array("花店","购物","花店");
  array[16]=new Array("闸北店","花店","闸北店");
  array[17]=new Array("静安店","花店","静安店");
  array[18]=new Array("2013-9-9","闸北店","2013-9-9");
  array[19]=new Array("2013-9-8","静安店","2013-9-8");
  array[20]=new Array("第七场","2013-9-8","第七场");
  array[21]=new Array("第十场","2013-9-9","第十场");
  //--------------------------------------------
  //这是调用代码
  //设置数据源
  var liandong2=new CLASS_LIANDONG_YAO(array);
  //设置第一个选择框
  liandong2.firstSelectChange("根目录","x1");
  //设置子选择框
  liandong2.subSelectChange("x1","x2")
  liandong2.subSelectChange("x2","x3")
  liandong2.subSelectChange("x3","x4")
  liandong2.subSelectChange("x4","x5")