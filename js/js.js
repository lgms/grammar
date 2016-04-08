Zepto(function($){
	$('.close').on('click',function(){
		$(this).parents('.tips').hide();
	});
	
	$('.shareBtn').on('click',function(){
		$('.share_overmask').addClass('show');
	});
	$('.share_overmask').on('click',function(){
		$(this).removeClass('show');
	});
	$('.checkList').on('click',' dl dd',function(){
		if($(this).attr('name')=='radio'){
			$(this).addClass('cur').siblings('dd').removeClass('cur');
		}else if($(this).hasClass('cur') && $(this).attr('name')!='radio'){
			$(this).removeClass('cur');
		}else{
			$(this).addClass('cur');
		}
	});

	var lie_config = [1, 0.3, 0, -1];
  var pp_config = [
      {//1
      		index:'一',
          text:'你觉得特斯拉是什么?',
          type:1,
          data:[
              {index:'1_1', score:0.9, withConflict:[],text:'卫星'},
              {index:'1_2', score:1.1, withConflict:[],text:'怪兽'},
              {index:'1_3', score:1.2, withConflict:[],text:'一种沙拉'},
              {index:'1_4', score:1.5, withConflict:[],text:'汽车'}
          ]
      },{//2
      		index:'二',
          text:'你的性别?',
          type:1,
          data:[
              //如果题4选择白富美，触发谎言一次
              {index:'2_1', score:1, withConflict:["4_1"],text:'男'},
              //如果题4选择高富帅，触发谎言一次
              {index:'2_2', score:1, withConflict:["4_2"],text:'女'}
          ]
      },{//3
      		index:'三',
          text:'假如手机掉进茅坑里，你会？',
          type:1,
          data:[
              {index:'3_1', score:1.3, withConflict:[],text:'啊！～好脏，不要了'},
              {index:'3_2', score:0.7, withConflict:[],text:'捡起来，擦干净，看看能不能用'},
              {index:'3_3', score:1, withConflict:[],text:'视屎而定'},
              {index:'3_4', score:1.2, withConflict:[],text:'愣住？呼救？叫保安？'}
          ]
      },{//4
      		index:'四',
          text:'你觉得自己是？',
          type:1,
          data:[
              {index:'4_1', score:1, withConflict:[],text:'白富美'},
              {index:'4_2', score:1, withConflict:[],text:'高富帅'},
              //如果题9选择买得起茶叶蛋，吃得起切糕，触发谎言一次
              //如果题11选择传说中的房爷/房姐，触发谎言一次
              {index:'4_3', score:1, withConflict:["9_5","11_4"],text:'屌丝'},
              {index:'4_4', score:1, withConflict:[],text:'都不是'}
          ]
      },{//5
      		index:'五',
          text:'你的职业？',
          type:1,
          data:[
              //如果题7选择老板，触发谎言一次
              {index:'5_1', score:1, withConflict:["7_1"],text:'工薪族'},
              //如果题6选择铁饭碗，触发谎言一次 
              //如果题7选择打杂的，触发谎言一次
              {index:'5_2', score:0.9, withConflict:["7_1","7_3"],text:'私营老板'},
              //如果题6选择铁饭碗或者知名公司或者屌丝公司，触发谎言一次
              {index:'5_3', score:1.1, withConflict:["6_1","6_2","6_3"],text:'网店掌柜'},
              {index:'5_4', score:0.8, withConflict:[],text:'其他'}
          ]
      },{//6
      		index:'六',
          text:'就职公司类型？',
          type:1,
          data:[
              {index:'6_1', score:1, withConflict:[],text:'铁饭碗'},
              {index:'6_2', score:1.1, withConflict:[],text:'知名公司'},
              {index:'6_3', score:1, withConflict:[],text:'屌丝公司'},
              {index:'6_4', score:0.7, withConflict:[],text:'个体/自由职业'}
          ]
      },{//7
      		index:'七',
          text:'你的职位？',
          type:1,
          data:[
              {index:'7_1', score:0.9, withConflict:[],text:'老板'},
              {index:'7_2', score:1.1, withConflict:[],text:'小头头'},
              {index:'7_3', score:1, withConflict:[],text:'打杂的'}
          ]
      },{//8
      		index:'八',
          text:'当前单位工作年限？',
          type:1,
          data:[
              {index:'8_1', score:0.5, withConflict:[],text:'刚来不久'},
              {index:'8_2', score:1, withConflict:[],text:'一两年'},
              {index:'8_3', score:1.3, withConflict:[],text:'沙场老兵'}
          ]
      },{//9
      		index:'九',
          text:'月收入约等于',
          type:1,
          data:[
              {index:'9_1', score:6000, withConflict:[],text:'砖头一块'},
              {index:'9_2', score:18000, withConflict:[],text:'国产手机'},
              {index:'9_3', score:30000, withConflict:[],text:'土豪金一台'},
              {index:'9_4', score:70000, withConflict:[],text:'土豪金二台'},
              {index:'9_5', score:30000, withConflict:[],text:'买得起茶叶蛋，吃得起切糕'}
          ]
      },{//10
      		index:'十',
          text:'工资发放形式？',
          type:1,
          data:[
              {index:'10_1', score:1, withConflict:[],text:'银行卡'},
              {index:'10_2', score:0.7, withConflict:[],text:'现金'}
          ]
      },{//11
      		index:'十一',
          text:'住宅情况？',
          type:1,
          data:[
              //如果题13选择买房贷款，触发谎言一次
              {index:'11_1', score:0.8, withConflict:["13_4"],text:'无房'},
              {index:'11_2', score:1, withConflict:[],text:'温馨小窝'},
              {index:'11_3', score:1.2, withConflict:[],text:'房屋些许'},
              {index:'11_4', score:1.5, withConflict:[],text:'传说中的房爷/房姐'}
          ]
      },{//12
      		index:'十二',
          text:'是否有信用卡？',
          type:1,
          data:[
              {index:'12_1', score:0.8, withConflict:[],text:'没有'},
              {index:'12_2', score:1.1, withConflict:[],text:'1张'},
              {index:'12_3', score:1, withConflict:[],text:'2张'},
              {index:'12_4', score:0.8, withConflict:[],text:'3张'},
              {index:'12_5', score:0.5, withConflict:[],text:'4张及以上'}
          ]
      },{//13
      		index:'十三',
          text:'是否有外债？',
          type:2,
          data:[
              {index:'13_1', score:1.3, withConflict:[],text:'无'},
              {index:'13_2', score:1.1, withConflict:[],text:'欠朋友一些钱'},
              {index:'13_3', score:1, withConflict:[],text:'些许情债'},
              {index:'13_4', score:1, withConflict:[],text:'买房贷款'},
              {index:'13_5', score:0.6, withConflict:[],text:'其他贷款'}
          ]
      }
  ];
        
  var result_arr = [];
  var curr = 0;
  var myscore = 0;
  //开始测试按钮
  $('.btn_1').on('click',function(){
		$(this).parents('.block_1').hide().siblings('.block_2').show();
		setNext();
	});

	$('.nextBtn').on('click',function(){
		if($(".proCon dd.cur").length == 0){
      return false;
    }
    $(".proCon dd.cur").each(function(index) {
      result_arr.push($(this).attr('data-id'));
    });
    if(curr == pp_config.length){
			// $('.adAnswer,.problem').hide();
			// $('.over').show();
			getResult();
			$(this).parents('.block_2').hide().siblings('.block_3').show();
			return false;
		}
		setNext();
	});
  
  //设置下一题的题目
  function setNext(){
      var item = pp_config[curr];
      $('.lineTitle').html((curr+1)+'/'+pp_config.length);
      $('.lineCur').css('width',(curr+1)/pp_config.length*100+'%');
      var ss = '<h3>单选</h3>';
      var type = "radio";
      if(item.type == 2){
      		ss = '<h3 class="red">多选</h3>';
      		type = "checkBox";
      }
      ss += '<dl><dt>'+(curr+1)+'. '+item.text+'</dt>';
      for(var i=0,len=item.data.length;i<len;i++){
					ss += '<dd name="'+type+'" data-id="'+item.data[i].index+'"><a href="#">'+item.data[i].text+'</a></dd>';
      }
      ss += '</dl>';
      curr++;
      $('.proCon').html(ss);
  }

  //获取结果
  function getScore(){
      var score = 1;
      var allCon = 0;
      $.each(result_arr, function(index, itemv) {
          var item = itemv.split('_');
          var itemTitle = pp_config[item[0]-1].text;
          var itemInfo = pp_config[item[0]-1].data[item[1]-1];
          var cArr = itemInfo.withConflict;
          score *= itemInfo.score;
          var conflict = 0;
          window.console.log(cArr);
          $.each(cArr, function(index, cv) {
              if($.inArray(cv, result_arr) >= 0){
                  conflict++;
                  allCon++;
                  window.console.log(itemv+'与'+cv+'冲突，触发谎言');
              }
          });
          window.console.log('score:'+score);
          window.console.log(item[0]+':'+item[1]+',title:'+itemTitle+',conflict:'+conflict);
      });
      switch(allCon){
          case 0:
              break;
          case 1:
              score *= lie_config[1];
              break;
          case 2:
              score *= lie_config[2];
              break;
          default:
              score *= lie_config[3];
              break;
      }
      window.console.log('score:'+score);
      return score;
      //location.href = 'over.html?score='+score;
  }

  function getResult(){
  	var score = getScore();
		//alert(score);
	// 小于0；XXX，小手乱选了吧？信用其实很值钱的哦
	// 0；XXX，小脸通红，说谎不打草稿，信用其实很值钱的哦
	// 1～5000；XXX的信用值一台iPad mini
	// 5000～9000；XXX的信用值一台土豪金
	// 9000～14000；XXX的信用值两台 iPhone 6
	// 1.4W~2W；XXX的信用可以去香港豪华游一次
	// 2W～3W；XXX的信用值一只LV包包
	// 3W～5W；XXX的信用值一书包土豪金
	// 5W～7W；XXX的信用值一箱子土豪金
	// 7W～9W；XXX的信用值一辆大卡车
	// 9W～11W；XXX的信用值一克拉钻戒
	// 11W～15W；XXX的信用值一辆进口车
	// 15W～20W；XXX的信用值上海内环厕所一间
	// 20W～30W；XXX的信用值一辆宝马MINI
	// 30W以上；XXX的信用值一辆奔驰
	    var ss = '<P>'+'您';
	    if(score < 0){
	        ss += '，小手乱选了吧？信用其实很值钱的哦!</P>';
	    }else if(score == 0){
	        ss += '，小脸通红，说谎不打草稿，信用其实很值钱的哦!</P>';
	    }else if(score > 0 && score < 5000){
		    	ss += '的信用值</P><P><span>一台iPad mini</span></P>';
	    }else if(score >= 5000 && score < 9000){
	    		ss += '的信用值</P><P><span>一台土豪金</span></P>';
	    }else if(score >= 9000 && score < 14000){
	    		ss += '的信用值</P><P><span>两台 iPhone 6</span></P>';
	    }else if(score >= 14000 && score < 20000){
	    		ss += '的信用可以</P><P><span>香港豪华游一次</span></P>';
	    }else if(score >= 20000 && score < 30000){
	    		ss += '的信用值</P><P><span>一只LV包包</span></P>';
	    }else if(score >= 30000 && score < 50000){
	    		ss += '的信用值</P><P><span>一书包土豪金</span></P>';
	    }else if(score >= 50000 && score < 70000){
	    		ss += '的信用值</P><P><span>一箱子土豪金</span></P>';
	    }else if(score >= 70000 && score < 90000){
	    		ss += '的信用值</P><P><span>一辆大卡车</span></P>';
	    }else if(score >= 90000 && score < 110000){
	    		ss += '的信用值</P><P><span>一克拉钻戒</span></P>';
	    }else if(score >= 110000 && score < 150000){
	    		ss += '的信用值</P><P><span>一辆进口车</span></P>';
	    }else if(score >= 150000 && score < 200000){
	    		ss += '的信用值</P><P><span>上海内环厕所一间</span></P>';
	    }else if(score >= 200000 && score < 300000){
	    		ss += '的信用值</P><P><span>一辆宝马MINI</span></P>';
	    }else if(score >= 300000 ){
	    		ss += '的信用值</P><P><span>一辆奔驰</span></P>';
	    }
	    window.console.log('xxx'+ss);
			$('.result_vv').html(ss);
	}
})