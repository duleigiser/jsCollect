
# insert

    db.person.insert({"name":"jack"});

# find()

    db.person.find({"name":"jack"})

## find 高级版
	
### $gt;$lt;$gte;$lte;$ne;
	 
    db.person.find({"age":{$lt:22}})
    
### $or;$in;$nin;
>
    db.user.find({$or:[{"name":"jack"},{"name":"joe"}]})
    db.user.find({"address.province":{$in:["anhui","jiangsu"]}})

# update() 

  第一个参数查找条件，第二个为更新的值
  
    db.person.update({},{});
    
## 高级版 $inc;$set;
###   $inc 
      对于value增加;没有对应的key会创建
      db.user.update({ "name": "jack" }, { $inc: { "age": 30 } });
## upsert 
    对于第一个参数没有查到的时候；在第三个参数设为true时候新加一条
## 批量更新
    
    如果匹配多条时候 默认只更新第一条；第4个参数为true时候批量更新

# remove

	db.person.remove();

# 聚合

## count

    db.user.count()
    db.user.count({"age":20})

## distinct 

    db.user.distinct("age");

## group

- key 分组key
- initial 每组都分享这个"初始化函数"
- $reduce 第一个参数 当前文档对象，第二个是上一次funciton操作的累积对象，第一次为initial的value；
   
		db.person.group({
			"key":{"age":true},
			"initial":{"person":[]},
				"$reduce":function(cur,out){
				out.person.push(cur.name)
			}
		})
